import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Splash from './screens/Splash';
import Home from "./screens/Home";
import About from "./screens/About";
import Produits from "./screens/Produits";
import Valeurs from "./screens/Valeurs";
import Contact from "./screens/Contact";
import Parteners from "./screens/Parteners";
import Sinistre from "./screens/Sinistre";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/produits-et-services" exact>
            <Produits />
          </Route>

          <Route path="/valeurs-et-engagements" exact>
            <Valeurs />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/parteners" exact>
            <Parteners />
          </Route>

          <Route path="/sinistre" exact>
            <Sinistre />
          </Route>
        
        </Switch>
    </Router>
  );
}

export default App;
