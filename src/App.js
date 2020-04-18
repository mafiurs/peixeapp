import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";

function App() {
 return (
  <Layout>
   <Switch>
    <Route exact path="/" component={LandingPage} />
   </Switch>
  </Layout>
 );
}

export default App;
