import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import "./layout.css";

const Layout = ({ children }) => {
 return (
  <Container maxWidth="md" className="grid-cotainer" disableGutters>
   <Header />
   <Container maxWidth="md">
    <Grid container>{children}</Grid>
   </Container>
  </Container>
 );
};

export default Layout;
