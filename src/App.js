import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
  return (
          <Router>
            <Menu />    
            <Switch>
              <Route exact path="profile" component={Home} />
              <Route path="/profile/about" component={About} />
              <Route path="/profile/skills" component={Skills} />
              <Route path="/profile/experience" component={Experience} />
              <Route path="/profile/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
  );
}

export default App;
