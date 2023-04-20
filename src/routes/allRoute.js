import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "../component/Container";
import SingleCountry from "../pages/SingleCountry";

const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/:country/details" element={<SingleCountry />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
