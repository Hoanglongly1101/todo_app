/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Password } from "@mui/icons-material";
import Navigation from "./component/Navi/Navigation";
import Home from "./component/Navi/Home"
import About from './component/Navi/About'
import Error from './component/Navi/Error'
// import db from './db.json'

function App() {
  return (
    <header className="App-header">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/:somestring" component={Error}/>
        </Switch>
      </Router>
      </header>
  );
}
export default App;
