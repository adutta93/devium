import React from "react";
import './index.css'
const Button = ({ value, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {value}
    </button>
  );
};

export default Button;
