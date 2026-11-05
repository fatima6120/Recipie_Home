import React from "react";
import "../style/MainDish.css";
import Card from "../components/Cards";
import falafel from "../assets/falafel.jpeg";
import kibbeh from "../assets/kibbeh.jpeg";
import lhme from "../assets/lhme.jpeg";
import pasta from "../assets/Pasta.jpg";

const MainDishes = () => {
  const cardData = [
    {
      title: "Falafel",
      description: "perfect Falafel , crispy yet tender",
      image: falafel,
    },
    {
      title: "Lahm Bi Ajeen",
      description: "Super Authentic , perfectly seasoned ",
      image: lhme,
    },
    {
      title: "Kibbeh",
      description: "Crispy ,Golden and perfectly spiced meat",
      image: kibbeh,
    },
    {
      title: "Creamy Chicken Pasta",
      description: "Tender chicken , creamy sauce",
      image: pasta,
    },
  ];
  return (
    <div className="MainWlcm">
      <h2> It's All about The Main Dish!</h2>
      <p>A recipe Full of Love</p>
      <div className="categories-cards">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default MainDishes;
