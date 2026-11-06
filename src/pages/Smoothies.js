import React from "react";
import "../style/Smoothies.css";
import Card from "../components/Cards";
import banana from "../assets/banana.jpeg";
import strawberry from "../assets/strawberry.jpeg";
import berries from "../assets/berry.jpg";
import tropical from "../assets/tropical.jpeg";

const Smoothies = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const cardData = [
    {
      title: "Banana Vanilla",
      description: "Just banana and vanilla doing magic",
      image: banana,
    },
    {
      title: "Strawberry",
      description: "Sweet , creamy , and strawberry ",
      image: strawberry,
    },
    {
      title: " Berries",
      description: "Refreshing ,juicy with flavor",
      image: berries,
    },
    {
      title: "Tropical",
      description: "A mix of the Sun and fruits in a drink",
      image: tropical,
    },
  ];
  return (
    <div className="SmoWlcm">
      <h2> Refreshing and addicting ? .. Yes!</h2>
      <p> Refreshing and eye pleasing </p>
    </div>
  );
};

export default Smoothies;
