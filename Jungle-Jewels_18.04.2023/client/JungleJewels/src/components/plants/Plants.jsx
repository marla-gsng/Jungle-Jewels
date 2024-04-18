import axios from "axios";
import { useEffect, useState } from "react";
import "./Plants.css";

const Plants = () => {
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlants = async () => {
    try {
      const response = await axios.get("http://localhost:3000/plants");
      setPlants(response.data);
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
        <ul>
          {plants.map((plant) => {
            return (
              <>
                <div key={plant._id} className="plant-card">
                  <h2>{plant.name}</h2>
                  <p>{plant.description}</p>
                  <p>Care: {plant.care}</p>
                  <p>Price: €{plant.price}</p>
                  <p>Difficulty Level: {plant.difficultyLevel}</p>
                  <p>Rarity: {plant.rarity}</p>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Plants;
