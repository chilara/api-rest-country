import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";

const Button = () => {
  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "btnDarkMode" : "btn"}>
      <Link to={`/`} className="linkBtn">
        <button className={darkMode ? "btnBackDarkMode" : "btnBack"}>
          <BsArrowLeft /> Back
        </button>
      </Link>
    </div>
  );
};

export default Button;
