import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CardSkeleton = () => {
  return (
    <>
      <div>
        <Grid container wrap="nowrap" className="grid">
          {Array.from(new Array(4)).map((item, index) => (
            <Box key={index} sx={{ width: 264, marginRight: 0.5, my: 1 }}>
              <Skeleton variant="rectangular" width={264} height={250} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        </Grid>
      </div>
      <div className="gridDiv">
        <Grid container wrap="nowrap" className="grid">
          {Array.from(new Array(4)).map((item, index) => (
            <Box key={index} sx={{ width: 264, marginRight: 0.5, my: 1 }}>
              <Skeleton variant="rectangular" width={264} height={250} />

              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CardSkeleton;
