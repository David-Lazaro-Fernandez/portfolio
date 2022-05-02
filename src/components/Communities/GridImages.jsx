import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GridImages = () => {
  //style
  const wrapper = {
    display: "grid",
    gap: 3,
    gridTemplateColumns: "repeat(2, 1fr)",
  };
  const back = {
    backgroundColor: "green",
  };
  const elements = [1, 2, 3, 4];
  return (
    <>
      <Box sx={wrapper}>
        {elements.map((element) => {
          return (
            <>
              <div style={back}>{element}</div>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default GridImages;
