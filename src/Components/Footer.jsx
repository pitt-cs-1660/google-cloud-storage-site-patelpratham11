import { Typography, makeStyles, Box, Grid } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
  },
  footText:{
    marginLeft: 20, 
    marginRight: 20
  }
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <Box>
      <Grid container justifyContent='space-between'>
        <Grid item className={styles.footText}>
          <Typography variant="subtitle2" className={styles.footer}>
            Made with ❤️
          </Typography>
        </Grid>
        <Grid item className={styles.footText}>
          <Typography variant="subtitle2" className={styles.footer}>
            Copyright Pratham Patel 2023
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
