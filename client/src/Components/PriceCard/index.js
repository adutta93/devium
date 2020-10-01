import React from "react";
import "./index.css";

const PriceCard = ({ plan, price, utilityOne, utilityTwo, utilityThree }) => {
  return (
    <div className="card">
      <h3>{plan}</h3>
      <h2>{price}</h2>
      <h4>₹{price}</h4>
      <hr />
      <p>{utilityOne}</p>
      <p>{utilityTwo}</p>
      <p>{utilityThree}</p>
      <a href="/" className="link-btn">
        Buy now
      </a>
    </div>
  );
};

export default PriceCard;
