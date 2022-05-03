import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
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
  const linkStyle = {
    marginRight: "50px",
    textDecoration: "none",
    fontWeight: "400",
    color: "#1B1B1B",
    fontsize: "24px",
    fontFamily: "'Inter', sans-serif",
    transition: "border-bottom 0.1s ease",
    borderBottom: "0px",
    "&:hover": {
      borderBottom: "solid black 3px",
      cursor: "pointer",
    },
  };
  const pages = ["About", "Projects", "Contact"];
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
        {pages.map((page) => {
          return <Link sx={linkStyle}> {page}</Link>;
        })}

        {icons.map((icon) => {
          return <Link href={icon.href}> {icon.svg}</Link>;
        })}
        <Link>
          <DarkModeIcon sx={iconStyle} />
        </Link>
      </Box>
    </>
  );
};

export default Header;
