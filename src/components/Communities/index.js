import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GridImages from "./GridImages";

const Communities = () => {
  //Styles
  const header = {
    marginRight: "20px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "40px",
    fontWeight: "bold",
  };
  const titleWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };
  const titleImage = {
    objectFit: "contain",
    width: "60px",
  };

  return (
    <>
      <Box sx={titleWrapper}>
        <h1 style={header}>Communities</h1>
        <img src="/Fluent Emojis/devil.png" style={titleImage} />
      </Box>
      <GridImages />
      <Box sx={{marginTop: "40px",}}>
        <Typography
          variant="body"
          sx={{
            width: "280px",
            color: "#838383",
            fontFamily: "'Inter'",
            fontSize: "16px",
            fontWeight: "400",
            
          }}
        >
          From meeting the one of the founders of GitHub to organizing one of
          the greatest AI GAMING in Latin America and being top 6 in a world
          wide Local Hack Day.
          <br />
          <br />
          Communities have been a part of my everyday life throughout my journey
          as a developer. In them I have been able to find everything, from
          incredible friends, brothers from another mother, life mentors and
          people whom I am very proud to admire.
          <br />
          <br />
          Creating a community is not easy and for real trust me you need to put
          200% of you love and passion to it to create real impact into your
          community, but what you get thanks to it is completly worth it.
          <br />
          <br />
          Likewise, founding a community has been a game changer for my student
          life. Making a positive impact on your campus is one of the coolest
          things you can do during your life as a student. That is why I love
          being part of the following communities
        </Typography>
      </Box>
      <Box sx={{marginTop:'40px'}}>
        <img src="/Frame 16.png" width="100%"/>
      </Box>
    </>
  );
};

export default Communities;
