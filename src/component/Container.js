import React from "react";
import Header from "./Header";
import Search from "./Search";
import Input from "./Input";
import Country from "./Country";
import { useSelector } from "react-redux";

const Container = () => {
  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div className={darkMode ? "AppDarkMode" : "App"}>
      <Header />
      <div className="regionCountry">
        <Search />
        <Input />
      </div>
      <Country />
    </div>
  );
};

export default Container;
