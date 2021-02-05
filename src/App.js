import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Kit from './components/Kit';
import KitSummary from "./components/KitSummary";

import Constructed from "./components/Constructed";

function App() {
  return (
    <>
      <Header />

      <Menu />

      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />

      <Route
        exact
        path="/contact"
        render={(props) => {
          return <Contact />;
        }}
      />
      {/* Kit Pricing components */}
      <Route
        exact
        path="/kit-pricing"
        render={(props) => {
          return <Kit />;
        }}
      />
      {/* dynamic path names are designated with : */}
      <Route
        path="/kit-summary/:kitid"
       component={KitSummary}
      />
      
      {/*Constructed Pricing Components  */}
      <Route
        exact
        path="/constructed-pricing"
        render={(props) => {
          return <Constructed />;
        }}
      />
    </>
  );
}

export default App;
