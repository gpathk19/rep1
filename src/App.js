import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ScratchCard from "./ScratchCard";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/scratch">
        <ScratchCard scratchValue={getScratchValue()} />
      </Route>
    </Switch>
  </Router>
);

const getScratchValue = () => "Congratulations! You've won Rs.200";

export default App;
