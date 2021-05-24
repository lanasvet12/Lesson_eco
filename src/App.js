import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, render } from 'react-router-dom';

import { Header } from './components';
import { Login, Home, Quiz } from './pages';
import './scss/app.scss';

function App(props) {
  console.log(props);
  // const [quiz, setQuiz] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setQuiz(json.quiz);
  //     });
  // }, []);

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Login />} />

            <Route exact path="/home" render={() => <Home quiz={props.appState.quiz} />} />
            <Route
              exact
              path="/quiz/:id"
              render={() => (
                <Quiz quiz={props.appState.quiz} questions={props.appState.questions} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
