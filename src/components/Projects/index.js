import React from "react";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import { projects } from "./proyectos";

const Projects = () => {
  return (
    <>
      <Grid
        container
        spacing={6}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        {projects.map((project) => {
          return (
            <>
              <Grid item xl={6} lg={6} md={6}>
                <ProjectCard
                  title={project.title}
                  about={project.about}
                  image={project.image}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
