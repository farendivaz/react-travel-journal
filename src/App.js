import React from "react";
import data from "./Data";
import "./style.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const App = () => {
  const cards = data.map((item) => {
    return (
      <Cards
        // THIS IS A COMMENT
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <>
      <Navbar />
      {cards}
    </>
  );
};
export default App;
