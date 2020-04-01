import React from 'react';
import { Route, Switch } from "react-router-dom"
import Welcome from "./components/welcomePage"
import Home from "./components/home"
import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
    </Switch>
    </>
  );
}

export default App;
