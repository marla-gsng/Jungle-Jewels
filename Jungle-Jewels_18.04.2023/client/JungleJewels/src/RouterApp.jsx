import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar.jsx";
import Home from "./Home.jsx";
import Plants from "./components/plants/Plants.jsx";

const RouterApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </>
  );
};

export default RouterApp;
