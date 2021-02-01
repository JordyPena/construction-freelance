import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Kit from './components/Kit';
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
    </>
  );
}

export default App;
