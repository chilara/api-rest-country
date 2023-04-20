import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CountrySkeleton = () => {
  return (
    <div>
      <Grid container wrap="nowrap" className="gridSkeleton">
        {Array.from(new Array(2)).map((item, index) => (
          <Box key={index} sx={{ width: 630, marginRight: 0.5, my: 1 }}>
            <Skeleton variant="rectangular" width={630} height={300} />

            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default CountrySkeleton;
