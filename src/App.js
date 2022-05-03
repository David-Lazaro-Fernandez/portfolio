import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Communities from "./components/Communities";
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  //style
  const bottomBorder = { width: "100%", borderBottom: "solid 1px #DFDFDF" };
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: 5, paddingBottom: "100px" }}>
        <Grid
          container
          spacing={6}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item sx={bottomBorder}>
            <Hero />
          </Grid>
          <Grid item sx={bottomBorder}>
            <AboutMe />
          </Grid>
          <Grid item sx={bottomBorder}>
            <MySkills />
          </Grid>
          <Grid item sx={bottomBorder}>
            <Projects />
          </Grid>
          <Grid item sx={bottomBorder}>
            <Communities />
          </Grid>
          <Grid item sx={bottomBorder}>
            <Contact />
          </Grid>
          <Grid item >
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
