import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Kit from './components/Kit';
import KitSummary1 from "./components/KitSummary1";
import KitSummary2 from "./components/KitSummary2";
import KitSummary3 from "./components/KitSummary3";
import KitSummary4 from "./components/KitSummary4";
import KitSummary5 from "./components/KitSummary5";
import KitSummary6 from "./components/KitSummary6";
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
       <Route
        path="/kit-summary3"
        render={(props) => {
          return <KitSummary3 />;
        }}
      />
       <Route
        path="/kit-summary4"
        render={(props) => {
          return <KitSummary4 />;
        }}
      />
       <Route
        path="/kit-summary5"
        render={(props) => {
          return <KitSummary5 />;
        }}
      />
       <Route
        path="/kit-summary6"
        render={(props) => {
          return <KitSummary6 />;
        }}
      />
    </>
  );
}

export default App;
