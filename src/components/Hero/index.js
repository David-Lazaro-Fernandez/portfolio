import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Hero = () => {
  //Styles
  const wrapper = {
    display: "flex",
    flexDirection: "row",
    marginBottom:'50px'
  };
  const leftBox = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems: "flex-start",
    position: "relative",
  };
  const rightBox = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "relative",
  };
  const title = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    fontSize: "48px",
  };
  const cat = {
    position: "absolute",
    width: "60px",
    top: "30px",
    right: "200px",
  };
  const body = {
    fontFamily:"'Inter', sans-serif",
    color:'#838383',
    marginTop:'30px',
  }
  const firstSparkle = {
      position:'absolute',
      top:'-20px',
      left:'360px',
      width:'65px'
  }
  const secondSparkle = {
    position:'absolute',
    top:'250px',
    left:'145px',
    width:'40px',
    transform:'rotate(130deg)'
  }
  return (
    <>
      <Box sx={wrapper}>
        <Box sx={leftBox}>
          <Typography variant="h4" sx={title}>
            Hi y'all
          </Typography>
          <Typography variant="h4" sx={title}>
            Dave's Here
          </Typography>
          <img src="/Fluent Emojis/cat.png" style={cat} />
          <Typography variant="body" sx={body}>
            I'm a Mexican Computer Science Student at Universidad Autonoma de
            Nuevo Leon, Front End Developer and lover of creating communities,
            hackathons and develop minimalistic apps that solve real world
            problems.
          </Typography>
        </Box>
        <Box sx={rightBox}>
          <img src="/David 1.png" width="300px" />
          <img src="/Fluent Emojis/sparkles.png"  style={firstSparkle}/>
          <img src="/Fluent Emojis/sparkles.png" style={secondSparkle}/>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
