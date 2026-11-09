import React from "react";
import "../style/Home.css";
import Card from "../components/Cards";
import welcome from "../assets/wlcm.jpeg";
import main from "../assets/main.jpeg";
import desserts from "../assets/desserts.jpeg";
import Smoothies from "../assets/smoothies.jpeg";

const Home = () => {
  const cardData = [
    {
      title: "Main Dishes",
      description: "where  Hunger is defeated",
      image: main,
      link: "MainDishes",
    },
    {
      title: "Desserts",
      description: "Where sweetness is overflowing ",
      image: desserts,
      link: "Desserts",
    },
    {
      title: "Smoothies",
      description: "Where freshness is promised",
      image: Smoothies,
      link: "/Smoothies",
    },
  ];
  const search = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="home">
      <div className="imageContainer">
        <img src={welcome} alt="welcome" className="food" />
        <h3 className="titlee">Welcome to Recipes Home!</h3>
        <p className="desc">Tasty food are one click away!</p>
      </div>

      <div className="categories-cards">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
            link={data.link}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
