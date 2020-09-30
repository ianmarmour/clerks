import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import Config from "./components/Config/Config";
import Log from "./components/Log/Log";
import Navigation from "./components/Navigation/Navigation";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/config">
              <Config />
            </Route>
            <Route path="/log">
              <Log />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
