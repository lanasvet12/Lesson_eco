import React from 'react';
import { BrowserRouter as Router, Route, Switch, render } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz } from './pages';
import './scss/app.scss';

function App(props) {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Login />} />

            <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
            <Route exact path="/quiz/:id" render={() => <Quiz quiz={props.appState.quiz} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
