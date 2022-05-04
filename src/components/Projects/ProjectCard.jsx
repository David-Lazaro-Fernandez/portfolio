import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box  from "@mui/material/Box";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ProjectCard = (props) => {
  const { title, about, image, link } = props;
  //styles
  const contentWrapper = {
    p: 2,
  };
  const titleStyle = {
    fontSize: "20px",
    fontFamily: "'Inter',sans-serif",
    fontWeight: "bold",
    color: "#1B1B1B",
  };
  const aboutStyle = {
    fontSize: "16px",
    fontFamily: "'Inter',sans-serif",
    fontWeight: "light",
    color: "#1B1B1B",
  };
  const icon = {
    color: "white",
  };
  const buttonWrapper = {
    position:'absolute',
    top:'420px'
  };
  const buttonStyle = {
    backgroundColor: "#1B1B1B",
    fontSize: "12px",
    fontFamily: "'Inter',sans-serif",
    fontWeight: "light",
    color: "white",
    "&:hover": {
      color: "black",
      "& svg": {
        color: "black",
      },
    },
  };
  const imgStyle ={
      objectFit:'cover',
      maxHeight:'250px',
      objectPosition:'top', 
      width:'100%'
  }
  const card={
      height: '500px',
      position:'relative',
  }
  return (
    <>
      <Paper elevation={2} sx={card}>
        <img src={image} style={imgStyle} alt={`${title} project image`} />
        <Box sx={contentWrapper}>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={aboutStyle}>{about}</Typography>
          <Box sx={buttonWrapper}>
            <Button sx={buttonStyle} href={link} startIcon={<RemoveRedEyeIcon sx={icon} />}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default ProjectCard;
