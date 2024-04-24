import {Router} from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authRouter = Router();


authRouter.post("/register", async (req, res) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).json("This email address already exists");
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    newUser.save()
    return res.json(`Welcome ${newUser.username}`)
    }
    catch (err) {
        res.json(err);
    }

 });

authRouter.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json("Sorry - email or password is incorrect");

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).json("Sorry - email or password is incorrect");

        const token = jwt.sign({username: user.username, email: user.email}, process.env.JWT_SECRET);
        res.header("auth-token", token).json(token);
        return res.json(`Welcome back ${user.username}`);

    } catch (err) {
        return res.json(err);
    }

});

export default authRouter;