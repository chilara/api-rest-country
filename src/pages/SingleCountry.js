import React, { useEffect } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import Button from "./Button";
import "../style/singleCountry.css";
import CountryDetails from "./CountryDetails";
import { useDispatch } from "react-redux";
import { getSingleCountries } from "../redux/countries/action";

const SingleCountry = () => {
  const { country } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCountries(country));
  }, [dispatch, country]);

  return (
    <div>
      <Header />
      <div className="singleCountry">
        <Button />

        <CountryDetails />
      </div>
    </div>
  );
};

export default SingleCountry;
