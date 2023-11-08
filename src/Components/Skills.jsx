import React, { useState, useEffect } from "react";

import {
  makeStyles,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  Box,
  Chip,
  CardContent,
} from "@material-ui/core";

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
    textAlign: "center",
  },
  skillGrid: {
    textAlign: "center",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  skillCard: {
    marginTop: 15,
    "&:hover": {
      boxShadow: "2px 3px 20px 10px black",
    },
    margin: 20
  },
  skillExtra: {
    marginTop: 25,
  },
  chip: {
    marginRight: 10,
    color: "#F39A9D",
    marginTop: 10,
  },
  description: {
    marginTop: 10,
    textAlign: "left",
  },
  skillGrid: {
    textAlign: "center",
    position: "relative",
    height: "100%",
    
  },
  frontCard: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  backCard: {
    // color: "transparent",
    
  },
}));

const languages = [
    "Java", "Python", "JavaScript", "Rust", "R", "SQL", "KQL", "MicroPython"
]

const libraries = [
    "React.js", "Gatsby.js", "Flask", "SQLAlchemy", "Pandas", "Tauri", "Material UI"
]

const concepts = [
    "OOP", "Agile", "Team-Based Development", "Responsive Design", "SMTP", "Soldering"
]

const softSkills = [
    "Communication", "Leadership", "Team Work", "Adaptability", "Consulting", "Curiosity"
]

const softwares = [
    "Git", "Adobe Tools", "Microsoft Suite", "OBS", "MS Azure", "GitLab", "Azure Dev Ops"
]

const hobbies = [
    "Photography", "Photo Editing", "Video Editing"
]

export default function Skills() {
  const styles = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="Skills">
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Box>
            <Typography variant="h2" className={styles.name}>
              Skills
            </Typography>
            <Grid
              container
              //   spacing={{ xs: 2, md: 3 }}
              //   columns={{ xs: 4, sm: 8, md: 12 }}
            //   rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            //   columnSpacing={{ xs: 4, sm: 6, md: 9 }}
              justifyContent="space-between"
            >
              <Grid sm={6} className={styles.skillGrid}>
                <Typography variant="h3">Technical</Typography>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}> Languages</Typography>
                    {languages.map((language) =>{
                        return(
                            <Chip label={language} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}>Frameworks</Typography>
                    {libraries.map((library) =>{
                        return(
                            <Chip label={library} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}>Concepts</Typography>
                    {concepts.map((concept) =>{
                        return(
                            <Chip label={concept} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
              </Grid>
              <Grid sm={6} className={styles.skillGrid}>
                <Typography variant="h3">Non-Technical</Typography>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}>Soft-Skills</Typography>
                    {softSkills.map((skill) =>{
                        return(
                            <Chip label={skill} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}>Softwares</Typography>
                    {softwares.map((software) =>{
                        return(
                            <Chip label={software} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
                <Card className={styles.skillCard}>
                  <CardContent>
                    <Typography variant="h4"style={{ color: "#F39A9D", fontFamily: "monospace" }}>Misc.</Typography>
                    {hobbies.map((hobby) =>{
                        return(
                            <Chip label={hobby} className={styles.chip} />
                        );
                    })}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
}
