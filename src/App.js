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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz, QuizResultPage } from './pages';
import './scss/app.scss';

function App(props) {
  return (
    <div className="wrapper">
    
      <Router>
      <Header />
        <Switch>
        <Route path="/" exact component={() => <Login />} />
        </Switch>
        
        <div className="content">        
          <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
          <Route exact path="/quiz/:id" render={() => <Quiz quiz={props.appState.quiz} />} />
          <Route exact path="/quiz-result" component={() => <QuizResultPage />} />
        </div>
      </Router>
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
    </div>
  );
}

export default App;
