import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components';
import { Login, Home, Quiz } from './pages';
import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/quiz" exact component={() => <Quiz />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
