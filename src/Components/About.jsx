import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "fit-content",
    minHeight: "100%",
    // zIndex: 100,
    background: "#4D818F",
    margin: 10,
    padding: 10,
  },
  container: {
    height: "100%",
    zIndex: 100, 
    
  },
  gridContainer: {
    height: "100%",
    zIndex: 100,
    alignItems:"center",
    justifyContent:"center"
  },
  name: {
    color: "#DCCCBB",
    marginTop: 5,
    fontFamily: "monospace",
  },
  image:{
    margin: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    maxWidth: "50vh",
    display: "block",
    border: "3px solid black", 
    // borderRadius: "10%",
  },
  description:{
    marginTop: 10,
    textAlign: "left"
  }
}));

export default function About() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="About">
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Grid container className={styles.gridContainer}>
            <Grid item>
              <Typography variant="h2" className={styles.name}>
                About
              </Typography>
            </Grid>
            <Grid item>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" className={styles.description}>
                    My name is Pratham Patel, I am a senior at the University
                    of Pittsburgh and an incoming C1 at Protiviti. I studied CS with a minor in Chemistry, which allows me to grow in many diverse ways. I've been an intern at PNC, learning new skills and technologies that are currently used in the industry right now. And I've been an undergraduate researcher and published co-author where I created scripts to analyze large amounts of data related to Alzheimer's Disease. Outside of creating things and tinkering with new technologies, I love photography and editing. The hero picture for this site's landing page is one of my personal favorites!
                  </Typography>
                </CardContent>
                <CardMedia>
                <StaticImage className={styles.image} src='http://drive.google.com/uc?export=view&id=18j8VeSJWoNdUsN1j9BsVICB7hMZrZciG'/>
                </CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
}
