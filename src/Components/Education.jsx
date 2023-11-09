import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  Box,
  CardContent,
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
    textAlign: "center",
    marginBottom: 10,
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
  pitt: {
    textAlign: "center",
  },
  cert: {
    width: "100%",
    "&:hover": {
      boxShadow: "2px 3px 20px 10px black"
    }
  },
  card:{
    "&:hover": {
      boxShadow: "2px 3px 20px 10px black"
    },
  },
  pittInfo:{
    textAlign: "left",
    margin: 10
  }
  
}));

const certificates = [
  {
    name: "Python Data Science",
    issuer: "NASBA",
  },
  {
    name: "Management Frameworks",
    issuer: "American Banker's Association",
  },
  {
    name: "AI Foundations: Machine Learning",
    issuer: "LinkedIn Learning",
  },
];

export default function Education() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="Education">
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Box>
            <Typography variant="h2" className={styles.name}>
              Education
            </Typography>
            <Grid container className={styles.gridContainer}>
              <Grid item>
                <Card className={styles.card}>
                  <CardContent className={styles.pitt}>
                    <Typography variant="h5">
                      University of Pittsburgh
                    </Typography>
                    <Typography variant="subtitle1" className={styles.pittInfo}> Major: Computer Science </Typography>
                    <Typography variant="subtitle1" className={styles.pittInfo}> Minor: Chemistry</Typography>
                    <Chip label="GPA: 3.46"></Chip>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography className={styles.name} variant="h2">
              Certificates
            </Typography>
            <Grid
              container
              className={styles.gridContainer}
              spacing={2}
              rowSpacing={2}
              columnSpacing={{ xs: 10, sm: 20, md: 30 }}
            >
              {certificates.map((certificate) => {
                return (
                  <Grid item md={5} key={certificate.name}>
                    <Card className={styles.cert}>
                      <CardContent className={styles.pitt}>
                        <Typography variant="h5">
                          {certificate.name}
                        </Typography>
                        <Typography variant="subtitle3">{certificate.issuer} </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
}
