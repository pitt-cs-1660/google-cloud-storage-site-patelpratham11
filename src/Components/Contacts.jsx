import React, { useState, useEffect } from 'react'
import Socials from './Socials';
import {
    makeStyles,
    Typography,
    Container,
    Slide,
    Grid,
    Box,
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
    },
    pitt: {
      textAlign: "center",
    },
    cert: {
      width: "100%"
    },
  }));

export default function Contacts() {
    const styles = useStyles();
    const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id='Contact'>
    <Container className={styles.container}>
      <Slide in={show} direction="right">
        <Box>
          <Typography variant="h2" className={styles.name}>
            Contact Me
          </Typography>
          <Grid container justifyContent='space-between' spacing={2}
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Grid item xs={8}>
                <Typography variant='subtitle1'> I would love for you to get in touch with me! Feel free to contact me via any of the methods. To see more of my work, head over to my GitHub page. To connect with me to chat via LinkedIn or click the link to view my resume!</Typography>
            </Grid>
            <Grid item xs={3}>
                <Socials />
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </Container>
  </Box>
  )
}
