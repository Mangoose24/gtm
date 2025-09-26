import React from "react";
import img from "../assets/gtm_logo2.png";

function Logo() {
  return (
    <div className="flex justify-start">
      <img className="h-12 w-auto" src={img} alt="Grid Theory Logo" />
    </div>
  );
}

export default Logo;
