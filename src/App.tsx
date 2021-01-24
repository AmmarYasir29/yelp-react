import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Restaurant from "./components/Restauran";
import Update from "./components/Update";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Restaurant />
          </Route>
          <Route path="/update/:id">
            <Update />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
