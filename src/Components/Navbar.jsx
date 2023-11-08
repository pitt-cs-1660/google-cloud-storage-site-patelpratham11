import React, { useState } from "react";
import {
  Link,
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import { Menu, ChevronRightRounded } from "@material-ui/icons";

const navLinks = [
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Education",
    href: "#Education",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    color: "#DCCCBB",
    "&:hover": {
      color: "#51A3A3",
    },
  },
  avatar: {
    marginRight: "auto",
    color: "black",
    background: "#51A3A3",
  },
}));

export default function Navbar() {
  const styles = useStyles();
  const [drawer, setDrawer] = useState(false);

  return (
    <AppBar position="sticky" color="default">
      <Container>
        <Toolbar disableGutters>
          <Avatar className={styles.avatar}> P </Avatar>
          <Hidden xsDown>
            {navLinks.map((link) => {
              return (
                <Link
                  className={styles.link}
                  href={link.href}
                  variant="button"
                  underline="none"
                >
                  {link.name}
                </Link>
              );
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setDrawer(true)}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        open={drawer}
        anchor="right"
        onOpen={() => setDrawer(true)}
        onClose={() => setDrawer(false)}
      >
        <div>
          <IconButton onClick={() => setDrawer(false)}>
            <ChevronRightRounded />
          </IconButton>
        </div>
        <Divider />
        <List >
          {navLinks.map((link) => {
            return (
              <ListItem>
                <Link
                  className={styles.link}
                  href={link.href}
                  variant="button"
                  underline="none"
                  onClick={() => setDrawer(false)}
                >
                  {link.name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
