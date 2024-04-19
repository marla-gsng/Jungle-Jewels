import axios from "axios";
import { useEffect, useState } from "react";
import "./Plants.css";

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
        <div className="main-container">
          {plants.map((plant, index) => {
            return (
              <>
                <div key={index} className="plant-card">
                  <h2>{plant.name}</h2>
                  <img
                    src={`http://localhost:3000/${plant.image}`}
                    alt={plant.name}
                  />
                  <p>{plant.description}</p>
                  <p>Care: {plant.care}</p>

                  <p>Difficulty Level: {plant.difficultyLevel}</p>
                  <p>Rarity: {plant.rarity}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Plants;
