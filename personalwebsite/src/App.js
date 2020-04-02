import React from 'react';
import { Route, Switch } from "react-router-dom"
import Welcome from "./components/welcomePage"
import Home from "./components/home"
import Project from "./components/Projects"
import Blogs from "./components/blog"
import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route excat path="/projects" component={Project} />
      <Route excat path="/blogs" component={Blogs} />
    </Switch>
    </>
  );
}

export default App;
