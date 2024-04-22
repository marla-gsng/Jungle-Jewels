import { useState } from "react";
import Modal from "react-modal";
import "./Plants.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};

const OnePlant = ({
  _id,
  name,
  description,
  care,
  difficultyLevel,
  rarity,
  image,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="plant-card" onClick={openModal}>
        <h2>{name}</h2>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        {/* <p>{description}</p>
        <p>Care: {care}</p>

        <p>Difficulty Level: {difficultyLevel}</p>
        <p>Rarity: {rarity}</p> */}
        <button onClick={openModal}>More Info</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h2>{name}</h2>
          <img src={`http://localhost:3000/${image}`} alt={name} />
          <p>{description}</p>
          <p>Care: {care}</p>
          <p>Difficulty Level: {difficultyLevel}</p>
          <p>Rarity: {rarity}</p>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </>
  );
};

export default OnePlant;
