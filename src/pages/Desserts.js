import React, { useState } from "react";

import Card from "../components/Cards";
import rolls from "../assets/roll.jpg";
import eclair from "../assets/Eclair.jpg";
import custard from "../assets/custard.jpeg";
import cheese from "../assets/cheesecake.jpg";

const Desserts = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const cardData = [
    {
      title: "Cinammon Rolls",
      description: "Soft , fluffy  with cinnamon and sugar on top",
      image: rolls,
    },
    {
      title: "Eclaire",
      description: "Light and creamy , topped with chocolate ",
      image: eclair,
    },
    {
      title: " Chocolate Custard Cake",
      description: "Soft chocolate cake , with smooth chocolate custard",
      image: custard,
    },
    {
      title: "Cheesecake",
      description: "Rich , creamy with buttery biscuit crust",
      image: cheese,
    },
  ];
  return (

  );
};

export default Desserts;;
