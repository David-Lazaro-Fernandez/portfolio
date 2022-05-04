import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const Emailform = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_npgh7nd",
        "template_smv2akw",
        Emailform.current,
        "DLFL-G3wwNsOe-G-Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Emailform.current.reset();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
  const form = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };
  const davidImg = {
    width: "100%",
    borderRadius: "5px",
    height: "375px",
    objectFit: "cover",
  };
  const buttonStyle = {
    backgroundColor: "#1b1b1b",
    color: "white",
    "&: hover": { color: "#1b1b1b" },
  };
  const wrapper = {
    marginBottom: "40px",
  };
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
        sx={wrapper}
      >
        <Grid item xl={6} lg={6} md={6}>
          <Box component="form" ref={Emailform} sx={form}>
            <TextField
              variant="outlined"
              label="Name"
              name="from_name"
              sx={input}
            />
            <TextField
              variant="outlined"
              label="Email Adress"
              name="to_email"
              sx={input}
            />
            <TextField
              variant="outlined"
              label="Subject"
              name="subject"
              sx={input}
            />
            <TextField
              variant="outlined"
              multiline
              rows={5}
              label="Say Hello!"
              name="message"
              sx={input}
            />
          </Box>
          <Button sx={buttonStyle} onClick={sendEmail}>
            Send Email
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Your Email Has Been Succesfully Sended To Me 🐱💚"
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <img src="/David 2.png" style={davidImg} />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
