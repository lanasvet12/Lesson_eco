import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz, QuizResultPage } from './pages';
import './scss/app.scss';

function App(props) {
  return (
    <div className="wrapper">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
        </Switch>

        <Header />
        <div className="content">
=======
    
      <Router>
      <Header />
        <Switch>
        <Route path="/" exact component={() => <Login />} />
        </Switch>
        
        <div className="content">        
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
          <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
          <Route exact path="/quiz/:id" render={() => <Quiz quiz={props.appState.quiz} />} />
          <Route exact path="/quiz-result" component={() => <QuizResultPage />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
