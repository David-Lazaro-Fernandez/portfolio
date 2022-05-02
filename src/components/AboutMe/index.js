import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutMe = () => {
  //Style
  const body = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: "300",
    color: "#838383",
  };
  const wrapper={
      marginBottom:'50px'
  }
  return (
    <>
      <Grid
        container
        spacing={6}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center"
        sx={wrapper}
      >
        <Grid item xl={6} lg={6} md={6}>
          <Typography sx={body}>
            2 years ago after a last minute Google conference that was hosted on
            my campus I decided to <b>start my journey as a developer</b> and
            get out of my comfort zone.
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <Typography sx={body}>
            I managed to found one of the most important technology communities
            on my campus and one of the projects I am most proud of today,{" "}
            <b>Bisontech</b>.
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <Typography sx={body}>
            During the last years I have spent my time meeting amazing people
            who have raised my expectations high for the{" "}
            <b>
              development of applications, events and products that can help
              other people
            </b>
            .{" "}
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <Typography sx={body}>
            Thanks to this, every day I am learning to be a better leader within
            the communities in which I am currently active like:{" "}
            <b>
              GitHub Campus Experts, Microsoft Learn Student Ambassadors and the
              MLH
            </b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
