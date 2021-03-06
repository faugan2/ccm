import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Splash from './screens/Splash';
import Home from "./screens/Home";
import About from "./screens/About";
import Produits from "./screens/Produits";
import Valeurs from "./screens/Valeurs";
import Contact from "./screens/Contact";
import Parteners from "./screens/Parteners";
import Sinistre from "./screens/Sinistre";
import OffresEmploi from "./screens/OffresEmploi";
import Candidature from "./screens/Candidature";
import Autocredit from "./screens/Autocredit";
import AutocreditList from "./screens/AutoCreditList"
import AlerteAssurance from "./screens/AlerteAssurance";
import AlerteAssuranceListe from "./screens/AlerteAssuranceListe";
import RCHabitation from "./screens/RCHabitation";
import RCHabitationListe from "./screens/RCHabitationListe";
import Admin from './screens/Admin';

function App() {
  return (
    <Router>
		<ScrollToTop>
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

          <Route path="/offres-emploi" exact>
            <OffresEmploi />
          </Route>

          <Route path="/candidature" exact>
            <Candidature />
          </Route>

          <Route path="/autocredit" exact>
            <Autocredit />
          </Route>

          <Route path="/autocredit-list" exact>
            <AutocreditList />
          </Route>

          <Route path="/alerte-assurance" exact>
            <AlerteAssurance />
          </Route>

          <Route path="/alerte-assurance-list" exact>
            <AlerteAssuranceListe />
          </Route>

          <Route path="/rc-habitation" exact>
            <RCHabitation />
          </Route>

          <Route path="/rc-habitation-list" exact>
            <RCHabitationListe />
          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route>

          
          
        
        </Switch>
		</ScrollToTop>
    </Router>
  );
}

export default App;
