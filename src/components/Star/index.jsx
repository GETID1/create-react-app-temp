// import React from "react";
import { FaStar } from "react-icons/fa";
import Constants from "@/constants";

const Star = ({ isActive, size, onClick }) => {
  return (
    <FaStar
      color={isActive ? Constants.actColor : Constants.defColor}
      size={size}
      style={{
        cursor: "pointer"
      }}
      onClick={() => {
        onClick?.();
      }}
    />
  );
};

export default Star;
