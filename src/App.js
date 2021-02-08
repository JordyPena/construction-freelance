import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Kit from "./components/Kit";
import KitSummary from "./components/KitSummary";
import Kits from "./kit-data/Kit-data";
import Roofs from "./kit-data/Roof-data";
import Constructed from "./kit-data/Constructed-data";
import ConstructedRoof from "./kit-data/ConstructedRoof-data";
import Specials from "./kit-data/Special-data";
import About from "./components/About";
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
        path="/about"
        render={(props) => {
          return <About />;
        }}
      />
      {/* Kit Pricing components */}
      <Route
        exact
        path="/kit-pricing"
        render={(props) => {
          return <Kit kits={Kits} roofs={Roofs} match={props.match} />;
        }}
      />
      {/*Constructed Pricing Components  */}
      <Route
        exact
        path="/constructed-pricing"
        render={(props) => {
          return (
            <Kit
              kits={Constructed}
              roofs={ConstructedRoof}
              match={props.match}
            />
          );
        }}
      />
      {/* Monthly specials Components */}
      <Route
        exact
        path="/special-pricing"
        render={(props) => {
          return <Kit kits={Specials} match={props.match} />;
        }}
      />

      {/* dynamic path names are designated with : */}
      <Route
        path="/kit-summary/:id"
        render={({ match }) => {
          const item = Kits.find((kit) => {
            return kit.id === parseInt(match.params.id);
          });
          return <KitSummary item={item} />;
        }}
      />

      <Route
        path="/roof-summary/:id"
        render={({ match }) => {
          const item = Roofs.find((roof) => {
            return roof.id === parseInt(match.params.id);
          });
          return <KitSummary item={item} />;
        }}
      />

      <Route
        path="/constructed-summary/:id"
        render={({ match }) => {
          const item = Constructed.find((kit) => {
            return kit.id === parseInt(match.params.id);
          });
          return <KitSummary item={item} />;
        }}
      />

      <Route
        path="/constructedRoof-summary/:id"
        render={({ match }) => {
          const item = ConstructedRoof.find((roof) => {
            return roof.id === parseInt(match.params.id);
          });
          return <KitSummary item={item} />;
        }}
      />

      <Route
        path="/special-summary/:id"
        render={({ match }) => {
          const item = Specials.find((special) => {
            return special.id === parseInt(match.params.id);
          });
          return <KitSummary item={item} />;
        }}
      />
    </>
  );
}

export default App;
