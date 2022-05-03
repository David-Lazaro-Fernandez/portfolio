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
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  };
  const imageStyle2 = {
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  };
  const gridBox = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "auto",
    gridTemplateAreas: `"Photo1 Photo1 Photo4 Photo4"
            "Photo1 Photo1 Photo4 Photo4"
            "Photo2 Photo-3 Photo4 Photo4"
            "Photo2 Photo-3 Photo4 Photo4"`,
    gap: 1,
  };
  return (
    <>
      <Box sx={gridBox}>
        <Box sx={{ gridArea: "Photo1" }}>
          <img src="/image 18.png" style={imageStyle2} />
          <img src="/image (9).png" style={imageStyle2} />
        </Box>
        <Box sx={{ gridArea: "Photo2" }}>
          <img src="/image 14.png" style={imageStyle} />
        </Box>
        <Box sx={{ gridArea: "Photo-3" }}>
          <img src="/image 10.png" style={imageStyle} />
        </Box>
        <Box sx={{ gridArea: "Photo4" }}>
          <img src="/Group 18.png" style={imageStyle} />
        </Box>
      </Box>
    </>
  );
};
export default GridImages;
