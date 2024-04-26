import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar.jsx";
import Home from "./Home.jsx";
import Plants from "./components/plants/Plants.jsx";
import OnePlant from "./components/plants/OnePlant.jsx";
import AddPlant from "./components/plants/AddPlant.jsx";
import Community from "./components/community-users/Community.jsx";

const RouterApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<OnePlant />} />
        <Route path="/plants/addplant" element={<AddPlant />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
};

export default RouterApp;
