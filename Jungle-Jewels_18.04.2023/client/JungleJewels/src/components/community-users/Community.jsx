import { useState, useEffect } from "react";
import axios from "axios";
import "./community.css";

const Community = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response.data);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="community-div">
      <h1>Community Forum</h1>
      <h3>Our Members</h3>
      <div className="main-container">
        {users.map((user, index) => {
          return (
            <>
              <div key={index} className="user-container">
                <form>
                  <div key={user._id} className="user-div">
                    <p>My name is: {user.name}</p>
                    <p>I go by as: {user.username}</p>
                    {/* <p>{user.email}</p> */}
                  </div>
                </form>
              </div>
              <div className="input-field">
                <h3>Feel free to share:</h3>

                <input
                  className="text-box"
                  type="textbox"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button>Send Message</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

{
  /* <label>
                    Name:
                    <input type="text" name="name" defaultValue={user.name} />
                  </label>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      defaultValue={user.username}
                    />
                  </label>
                  <label>
                    Email:
                    <input type="text" name="email" defaultValue={user.email} />
                  </label>
                  <input type="submit" value="Register" /> */
}

export default Community;
