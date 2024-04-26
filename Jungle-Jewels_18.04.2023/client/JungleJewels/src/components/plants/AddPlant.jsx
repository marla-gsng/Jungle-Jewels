import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlant.css";

const AddPlant = () => {
  let navigate = useNavigate();

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [care, setCare] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [rarity, setRarity] = useState(null);
  const [image, setImage] = useState(undefined);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  //   const { image, setImage } = useState(null);

  const postPlant = async (e) => {
    e.preventDefault();

    const plantToAdd = new FormData();
    plantToAdd.append("name", name);
    plantToAdd.append("description", description);
    plantToAdd.append("care", care);
    plantToAdd.append("difficultyLevel", difficultyLevel);
    plantToAdd.append("rarity", rarity);
    plantToAdd.append("image", image);
    try {
      const response = await axios.post("http://localhost:3000/plants", {
        plantToAdd,
        // name,
        // description,
        // care,
        // difficultyLevel,
        // rarity,
        // image,
        // * Old form of posting data // destructuring the plantToAdd object
      });
      console.log(response.data);
      setMessage("You've added a new plant!");

      navigate("/plants");
    } catch (error) {
      setError(error);
    } finally {
      navigate("/plants");
      // setName("");
      // setDescription("");
      // setCare("");
      // setDifficultyLevel("");
      // setRarity("");
      // setImage("");
      //* Old form of resetting the form
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (message) return <p>{message}</p>;

  return (
    <>
      <div className="main-form">
        <h1>Add Plant</h1>

        <form className="plant-form" onSubmit={postPlant}>
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

          <label>
            <select
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>

          <input
            type="text"
            placeholder="Rarity"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
          />
          <input
            type="file"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit">Add Plant</button>
        </form>
      </div>
    </>
  );
};

export default AddPlant;
