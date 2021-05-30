<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
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
=======
=======
import React, { Fragment } from 'react';
>>>>>>> ad55191048848997a99b5fb5d7de69aa3c684e13
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz, StatisticsPage, QuizResultPage } from './pages';
import './scss/app.scss';

function App(props) {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route exact path="/quiz/:id" render={() => <Quiz quiz={props.appState.quiz} />} />
          <Route exact path="/quiz-result" render={() => <QuizResultPage />} />

          <div className="content">
            <Fragment>
              <Header />
              <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
              <Route exact path="/statistics" component={() => <StatisticsPage />} />
            </Fragment>
          </div>
        </Switch>
      </Router>
<<<<<<< HEAD
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
=======
>>>>>>> ad55191048848997a99b5fb5d7de69aa3c684e13
    </div>
  );
}

export default App;
