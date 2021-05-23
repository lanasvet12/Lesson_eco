import React from 'react';
import { QuizAnswer } from '../components';

import Background from '../images/content/quiz-bg.svg';
import style from './Quiz.module.css';

function Quiz({ quiz, questions }) {
  // console.log(quiz);
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
          <QuizAnswer quiz={quiz} questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
