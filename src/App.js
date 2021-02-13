import React from "react";
import Homepage from "./Homepage/Homepage";
import Search from "./Search/Search";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
