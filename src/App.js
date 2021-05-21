import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components';
import { Login, Home, Quiz } from './pages';
import './scss/app.scss';

function App() {
  const [quiz, setQuiz] = React.useState([]);
  // const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setQuiz(json.quiz);
      });
  }, []);

  return (
    <div class="wrapper">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route exact path="/home" render={() => <Home items={quiz} />} />
            <Route exact path="/quiz" exact component={() => <Quiz items={quiz} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
