import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD

// import reportWebVitals from './reportWebVitals';
=======
import state from './state/state';
import activeQuiz from './state/state';

>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
import './scss/app.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <App />
=======
      <App appState={state} activeQuiz={activeQuiz} />
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
<<<<<<< HEAD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
=======
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58
