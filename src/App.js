import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz, StatisticsPage } from './pages';
import './scss/app.scss';

function App(props) {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />

          <div className="content">
            <Route exact path="/quiz/:id" render={() => <Quiz quiz={props.appState.quiz} />} />
            <Route exact path="/statistics" component={() => <StatisticsPage />} />
            <Fragment>
              <Header />
              <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
            </Fragment>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
