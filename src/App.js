import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
  return (
          <HashRouter basename="/">
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/experience" component={Experience} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </HashRouter>
  );
}

export default App;
