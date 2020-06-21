import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from "react-router-dom"
import Welcome from "./Pages/welcomepage"

function App() {
  return (
    <div className="App">
      <Switch >
          <Route exact path='/' component={Welcome}   />
          <Route    />
          <Route    />
      </Switch>
    </div>
  );
}

export default App;
