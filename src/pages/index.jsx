import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing'
import About from '../Components/About';
import Projects from '../Components/Projects';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Contacts from '../Components/Contacts';
import Footer from '../Components/Footer';

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background:{
      paper: "#30343F"
    },
  },
  typography: {
    
    fontFamily: "system-ui",
    h5:{
        color: "#F39A9D"
    },
    subtitle2:{
      color: "#51A3A3"
  },
  },
});

export default function index(){
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Navbar />
    <Landing />
    <About />
    <Projects />
    <Experience />
    <Education />
    <Skills />
    <Contacts />
    <Footer />
  </ThemeProvider>
  );
}