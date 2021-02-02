import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Kit from './components/Kit';
import KitSummary1 from "./components/KitSummary1";
import KitSummary2 from "./components/KitSummary2";
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
      <Route
        exact
        path="/kit-pricing"
        render={(props) => {
          return <Kit />;
        }}
      />
      <Route
        path="/kit-summary1"
        render={(props) => {
          return <KitSummary1 />;
        }}
      />
       <Route
        path="/kit-summary2"
        render={(props) => {
          return <KitSummary2 />;
        }}
      />
    </>
  );
}

export default App;
