import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Footer = () => {
  //Styles
  const wrapper = {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const logo = {
    marginRight: "150px",
  };

  const iconStyle = {
    marginRight: "50px",
    color: "#C4C4C4",
    fontSize: "28px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#1B1B1B",
      cursor: "pointer",
    },
  };
  const David = {
      margin:'0px 100px 0px 40px',
      color:'#C4C4C4',
      fontFamily:"'Inter', sans-serif",
      fontSize:'15px',
      fontWeight:'300',
  }
  const icons = [
    {
      svg: <TwitterIcon sx={iconStyle} />,
      href: "https://twitter.com/DavidLazaroFern",
    },
    {
      svg: <GitHubIcon sx={iconStyle} />,
      href: "https://github.com/David-Lazaro-Fernandez",
    },
    {
      svg: <LinkedInIcon sx={iconStyle} />,
      href: "https://www.linkedin.com/in/davidlfr/",
    },
  ];
  return (
    <>
      <Box sx={wrapper}>
        <img src="/DA VE.png" width="50px" style={logo} />
        
        <Typography variant="body" sx={David} >&lt;/&gt; with 💖 by @Davidthelord 2022</Typography>

        {icons.map((icon) => {
          return <Link href={icon.href}> {icon.svg}</Link>;
        })}
      </Box>
    </>
  );
};

export default Footer;