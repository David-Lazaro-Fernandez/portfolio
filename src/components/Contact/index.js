import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Contact = () => {
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
  const text = {
    color: "#838383",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: "300",
  };
  const textWrapper = {
    margin: "40px 0px 40px 0px",
  };
  const input = {
    width: "90%",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
    color: "#8C8C8C",
    marginBottom: "20px",
  };
  const form = { display: "flex", flexDirection: "column", justifyContent: "flex-start" };
  const davidImg = { width: "100%", borderRadius: "5px", height:'375px', objectFit:'cover' };
  return (
    <>
      <Box sx={titleWrapper}>
        <h1 style={header}>Let's create dope things!</h1>
        <img src="/Fluent Emojis/happy.png" style={titleImage} />
      </Box>
      <Box sx={textWrapper}>
        <Typography variant="body" sx={text}>
          Wether you are a cat lover and want to connect just to share some
          funny cat pictures or you are searching for a Developer, Designer,
          Hackathon Organizer. Feel free to send me a message to any of my
          social networks.
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item xl={6} lg={6} md={6}>
          <Box component="form" sx={form}>
            <TextField variant="outlined" label="Name" sx={input} />
            <TextField variant="outlined" label="Email Adress" sx={input} />
            <TextField variant="outlined" label="Subject" sx={input} />
            <TextField
              variant="outlined"
              multiline
              rows={5}
              label="Say Hello!"
              sx={input}
            />
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <img src="/David 2.png" style={davidImg} />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
