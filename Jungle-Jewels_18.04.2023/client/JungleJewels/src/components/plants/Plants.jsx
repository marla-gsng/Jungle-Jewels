import axios from "axios";
import { useEffect, useState } from "react";
import "./Plants.css";
import OnePlant from "./OnePlant.jsx";
import { Link } from "react-router-dom";
import AddPlant from "./AddPlant.jsx";

const Plants = () => {
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlants = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/plants");
      setPlants(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <h1>Plants</h1>
        <div key={plants} className="main-container">
          {plants.map((plant, index) => {
            return (
              <>
                <OnePlant {...plant} />
              </>
            );
          })}
        </div>
      </div>
      <Link to="/plants/addplant">
        <button>Add Plant</button>
      </Link>
    </>
  );
};

export default Plants;
