import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Splash from './screens/Splash';
import Home from "./screens/Home";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/client" exact>
            <Splash />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>
        
        </Switch>
    </Router>
  );
}

export default App;
