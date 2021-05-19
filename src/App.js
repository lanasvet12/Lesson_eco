import React from 'react';
// import Link from 'react-router-dom';
// import logo from '../images/content/logo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components';
import { Login, Home } from './pages';
import './scss/app.scss';

function App() {
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setQuiz(json.quiz);
      });
  }, []);
  return (
    <div className="App">
      <div class="wrapper">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route exact path="/home" render={() => <Home items={quiz} />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
