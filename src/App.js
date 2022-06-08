import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Shirts from "./components/pages/Shirts";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Shirt">
        <Shirts />
      </Route>
    </React.Fragment>
  );
}

export default App;
