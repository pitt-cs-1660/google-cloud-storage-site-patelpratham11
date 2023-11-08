import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  IconButton,
  Chip,
  CardContent,
  Box,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { Link } from "gatsby";
import { shadows } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100%",
    background: "#4D818F",
    margin: 10,
    boxShadow: 12,
    padding: 10,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    height: "100%",
    // zIndex: 100,
    justifyContent: "center",
  },
  name: {
    color: "#DCCCBB",
    marginTop: 5,
    fontFamily: "monospace",
    textAlign: "center"
  },
  projectGrid: {
    textAlign: "center",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  projectCard: {
    marginTop: 15,
    "&:hover": {
        boxShadow: "2px 3px 20px 10px black"
      },
  },
  projectExtra: {
    marginTop: 25,
  },
  chip: {
    marginRight: 10,
    color: "#F39A9D",
  },
  description:{
    marginTop: 10,
    textAlign: "left"
  }
}));

const projects = [
  {
    name: "Raspberry Pi Pico",
    tags: ["RPI Pico", "MicroPython"],
    description: "I supported updating the firmware on an already-existing codebase for the Raspberry Pi Pico. We programmed a board to light up in various different patterns that would flash based on input provided via an external sensor. We utilized MicroPython via VS Code, where we would execute code directly from the Pico. I worked on this project as an Intern at Protiviti, summer 2023.",
    link: ""
  },
  {
    name: "KQL",
    tags: ["KQL", "MS Azure", "Dashboard"],
    description: "Refined and created queries that would filter data from a live source and organize the data into a visual format. I supported this initiative under Protiviti, where I learned more about KQL and explored Microsoft Azure Data Explorer. This was my first experience with KQL but I was able to work off of my existing SQL knowledge.",
    link: "",
  },
  {
    name: "Beefin'",
    tags: ["React.js", "Java Spring Boot"],
    description: "This was a semester-long project for a class at Pitt. I served as one of the frontend engineers who was responsible for connecting the backend to the frontend and creating an aesthetic UI for our application. The application was a workout tracker with a social component that allowed users to add friends, join groups, and compete with each other.",
    link: "https://github.com/Steven-Jarmell/Beefin",
  },
  {
    name: "Habits Track",
    tags: ["Python"],
    description: "Habits Track is a simple Python project that's loosely based off of Habitica. The idea is to gamify daily activities, which allows me to 'earn' money that I can spend for rewards such as going out for dinner, watching a movie, or something along those lines. Habits Track is a tool that I use consistently and have been developing for over a year now.",
    link: "https://github.com/patelpratham11/habitsTrack",
  },
  {
    name: "Website",
    tags: ["React.js", "Gatsby", "Material UI"],
    description: "This is my third version of a personal website. Within each iteration, I try to learn new skills, techniques, and technologies. For this iteration, the goal was to create a well-designed and responsive UI that'll showcase my understanding of React and Material UI.",
    link: "https://github.com/patelpratham11/portfolio",
  },
  {
    name: "BookBot",
    tags: ["SMTP", "Python"],
    description: "BookBot was a simple application I created to learn more about SMTP and connecting to a mail server via script. The script takes whatever files from a certain directory, emails them to an email of your choice, and then purges the directory. I personally use it to send bulk items to my Kindle.",
    link: "https://github.com/patelpratham11/BookBot",
  },
];

export default function Projects() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="Projects">
      {/* <Paper sx={{background: "#4D6A6D"}} > */}
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Box>
          <Typography variant="h2" className={styles.name}>
                  Projects
            </Typography>
            <Grid
              container
              className={styles.gridContainer}
              spacing = {2}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              
                {projects.map((project) => {
                  return (
                    <Grid item className={styles.projectGrid} md={6}>
                    <Card
                      className={styles.projectCard}
                      variant="outlined"
                      rounded
                    >
                      <CardContent>
                        <Typography variant="h4" style={{ color: "#F39A9D", fontFamily: "monospace" }}>
                          {project.name}
                        </Typography>
                        <Typography variant="subtitle1" className={styles.description}>
                          {project.description}
                        </Typography>
                        <Grid container justifyContent="space-between">

                          <Grid item className={styles.projectExtra}>
                            <Link href={project.link}>
                              <IconButton>
                                <GitHub />
                              </IconButton>
                            </Link>
                          </Grid>
                            <Grid
                              item
                              className={styles.projectExtra}
                              direction="row"
                            >
                              {project.tags.map((tag) => {
                                return (
                                  <Chip label={tag} className={styles.chip} />
                                );
                              })}
                            </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    </Grid>
                  );
                })}
              
            </Grid>
          </Box>
        </Slide>
      </Container>
      {/* </Paper> */}
    </Box>
  );
}
