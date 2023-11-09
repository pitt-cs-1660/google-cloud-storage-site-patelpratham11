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
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  section: {
    height: "100%",
    background: "#4D818F",
    margin: 10,
    padding: 10,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    // minHeight: "100vh",
    // height: "fit-content",
    height: "100%",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#DCCCBB",
    marginTop: 5,
    fontFamily: "monospace",
  },
  experienceCard: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2%",
    "&:hover": {
      boxShadow: "2px 3px 20px 10px black"
    },
  },
  chip: {
    marginRight: 10,
    color: "#F39A9D",
  },
  description:{
    textAlign: "left",
  }
}));

const experiences = [
  {
    name: "Protiviti",
    description:
      "I worked as a part of the Emerging Technologies Group, where I assisted in various different ways across the organization. I learned more about different AI models and experienced both using them and understanding the backend code. I looked specifically into NLP and Generative AI models. I also worked with the IoT Team to help support projects around the Raspberry Pi Pico and some embedded systems work.",
    tags: ["ETG", "Consulting", "AI", "IoT"],
  },
  {
    name: "PNC",
    description:
      "I was a part of the Enterprise Data Risk Management (EDRM) Strategies Team where for 10-weeks, I collaborated, presented, identified, reported, and managed risks that were surrounding the data. I assisted new programs set out by PNC regarding data use, data risks, and data quality including a new pilot program to more effectively collect AI/ML related data across the organization. We heavily leveraged database-related technologies such as Excel, Hadoop, and some SQL.",
    tags: ["Data", "Risk", "MS Excel"],
  },
  {
    name: "Mathys Lab",
    description:
      "I have worked under Dr. Hansruedi Mathys at the University of Pittsburgh's Neurobiology department as one of the lead tech students. I developed many scripts in order to analyze datasets upwards of 50gb. We worked with Single Cell RNA Sequencing data from the ROSMAP cohort from Rush University in order to understand the cellular and molecular reasons behind Alzheimer's Disease and variances within phenotypic expressions. I have co-authored 1 paper in the Mathys Lab. ",
    tags: ["R", "Python"],
  },
  {
    name: "Code Ninjas",
    description:
      "I had the opportunity to teach young children how to create video games in JavaScript. We used Code Ninja's Game Development Platform (GDP). I primarily worked with children between the ages of 5 and 13 with a focus on the older children who were creating more complex video games. I collaborated with the other Senseis and made sure that all of the children were being helped but also learning. As this was during COVID, we had to introduce a hybrid environment children and was able to help them hands-on.",
    tags: ["JS", "Teaching"],
  },
];

export default function Experience() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="Experience">
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Grid container className={styles.gridContainer} direction="row">
            <Grid item>
              <Typography variant="h2" className={styles.name}>
                Experience
              </Typography>
            </Grid>

            {experiences.map((experience) => {
              return (
                <Card className={styles.experienceCard} variant="outlined">
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h4" style={{ color: "#F39A9D", fontFamily: "monospace" }}>
                        {experience.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {experience.tags.map((tag) => {
                        return <Chip label={tag} className={styles.chip} />;
                      })}
                    </Grid>

                    <Typography variant="subtitle1" className={styles.description}>
                      {experience.description}
                    </Typography>
                  </Grid>
                </Card>
              );
            })}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
}
