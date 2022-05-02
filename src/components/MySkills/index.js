import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { SKILLS } from "./skils";

const MySkills = () => {
  //Styles
  const item = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: "30px",
  };
  const text = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    color: "#838383",
    fontWeight: "bold",
    marginLeft: "10px",
  };

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
  const body = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "light",
    color: "#838383",
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="flex-start"
        alignContent="center"
      >
        <Box sx={titleWrapper}>
          <h1 style={header}>My Skills</h1>
          <img src="/Fluent Emojis/bullseye.png" style={titleImage} />
        </Box>

        <Box>
          <Typography variant="body" sx={body}>
            During these years I have dedicated much of my free time to creating
            applications to solve real-life problems. Thanks to this I now have
            a very solid knowledge about{" "}
            <b>
              UX/UI design, cloud concepts, computer science & web development
            </b>
            .
          </Typography>
        </Box>
      </Grid>

      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="center"
        alignContent="center"
        sx={{ marginTop: "40px" }}
      >
        {SKILLS.map((skill) => {
          return (
            <>
              <Grid item xl={3} lg={3} md={3} sx={item}>
                <img src={skill.url} alt={skill.name} width="30px" />
                <Typography variant="body" sx={text}>
                  {skill.name}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default MySkills;
