import React from 'react';
import { QuizAnswer } from '../components';

import Background from '../images/content/quiz-bg.svg';
import style from './Quiz.module.css';

import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function Quiz({ quiz, questions }) {
  // const prodId = props.match.params.id;
  const { id } = useParams();


  return (
    <div
      className={style.quiz}
      style={{
        background: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="container">
        <div className={style.wrapper}>
          <QuizAnswer id={id} quiz={quiz} questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
