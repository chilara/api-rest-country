import { CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CountrySkeleton from "./CountrySkeleton";

const CountryDetails = () => {
  const { singleCountry, loading } = useSelector(
    (state) => state.SingleCountryReducer
  );

  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "countryDetailsDarkMode" : "countryDetails"}>
      {loading && <CountrySkeleton />}
      {!loading &&
        singleCountry?.map((count, index) => (
          <div
            key={index}
            className={
              darkMode ? "singleCountryInfoDarkMode" : "singleCountryInfo"
            }
          >
            <div className={darkMode ? "imageCardDarkMode" : "imageCard"}>
              <CardMedia
                component="img"
                height="350"
                image={count.flag}
                alt="green iguana"
              />
            </div>
            <div className={darkMode ? "countryInfoDarkMode" : "countryInfo"}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={darkMode ? "typoDarkMode" : "typo"}
              >
                <strong>{count.name}</strong>
              </Typography>
              <div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={darkMode ? "typographyDarkMode" : "typography"}
                >
                  <div>
                    <p>
                      <strong>Native Name:</strong> {count.nativeName}
                    </p>
                    <p>
                      <strong>Population:</strong>{" "}
                      {Number(count.population).toLocaleString()}
                    </p>
                    <p>
                      <strong>Region:</strong> {count.region}
                    </p>
                    <p>
                      <strong>Sub Region:</strong> {count.subregion}
                    </p>

                    <p>
                      <strong>Capital:</strong> {count.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Top Level Domain:</strong> {count.topLevelDomain}
                    </p>
                    <p>
                      <strong>Currencies:</strong>{" "}
                      {count.currencies.map((x) => x.name)}
                    </p>
                    <p>
                      <strong>Languages:</strong>{" "}
                      {count.languages.map((y) => y.name).join(", ")}
                    </p>
                  </div>
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={darkMode ? "typographyDarkMode1" : "typography1"}
                >
                  <p>
                    <strong>Border Countries:</strong>
                  </p>
                  {count.borders.map((z) => (
                    <div className={darkMode ? "borderDarkMode" : "border"}>
                      <button
                        className={
                          darkMode ? "btnCountryDarkMode" : "btnCountry"
                        }
                      >
                        {z}
                      </button>
                    </div>
                  ))}
                </Typography>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryDetails;
