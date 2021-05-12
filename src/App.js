import React from 'react';
// import Link from 'react-router-dom';
// import logo from '../images/content/logo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Footer, Home } from './components';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
