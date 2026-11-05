import React from "react";
import "../style/Card.css";
import { Link } from "react-router-dom";
const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="view">
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default Card;
