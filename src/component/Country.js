import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import CardSkeleton from "./Skeleton";
import { Link } from "react-router-dom";

export default function MediaCard() {
  const { country, loading } = useSelector((state) => state.countryReducer);

  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div>
      <div className={darkMode ? "countryFlagDarkMode" : "countryFlag"}>
        {loading && <CardSkeleton />}
        {!loading &&
          country?.map((count, i) => (
            <div key={i}>
              <Link to={`/${count.name}/details`} className="linkSingleCountry">
                <Card
                  sx={{ width: 264 }}
                  className={darkMode ? "cardDarkMode" : "card"}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={count.flag}
                      alt="green iguana"
                      className={darkMode ? "imgFlagDarkMode" : "imgFlag"}
                    />
                    <CardContent
                      className={darkMode ? "cardConDarkMode" : "cardCon"}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={darkMode ? "typoDarkMode" : "typo"}
                      >
                        <strong>{count.name}</strong>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={darkMode ? "typoDarkMode" : "typo"}
                      >
                        <p>
                          <strong>Population:</strong>{" "}
                          {Number(count.population).toLocaleString()}
                        </p>
                        <p>
                          <strong>Region:</strong> {count.region}
                        </p>
                        <p>
                          <strong>Capital:</strong> {count.capital}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
