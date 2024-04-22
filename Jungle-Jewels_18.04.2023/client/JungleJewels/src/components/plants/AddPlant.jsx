import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPlant = () => {
  let navigate = useNavigate();

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [care, setCare] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  //   const { image, setImage } = useState(null);

  const postPlant = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/plants", {
        name,
        description,
        care,
        difficultyLevel,
        rarity,
        // image,
      });
      setMessage("You've added a new plant!");
    } catch (error) {
      setError(error);
    } finally {
      setName(null);
      setDescription(null);
      setCare(null);
      setDifficultyLevel(null);
      setRarity(null);
      // setImage("");
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (message) return <p>{message}</p>;

  return (
    <>
      <h1>Add Plant</h1>
      <form onSubmit={postPlant}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Care"
          value={care}
          onChange={(e) => setCare(e.target.value)}
        />
        <input
          type="number"
          placeholder="Difficulty Level"
          value={difficultyLevel}
          onChange={(e) => setDifficultyLevel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rarity"
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
        />
        {/* <input
    type="text"
    placeholder="Image"
    value={image}
    onChange={(e) => setImage(e.target.value)}
    /> */}

        <button type="submit" onClick={() => navigate("/plants")}>
          Add Plant
        </button>
      </form>
    </>
  );
};

export default AddPlant;
