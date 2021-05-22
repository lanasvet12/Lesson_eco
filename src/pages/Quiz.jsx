import React from 'react';
import { QuizAnswer } from '../components';

import Background from '../images/content/quiz-bg.svg';
import style from './Quiz.module.css';

function Quiz({ items }) {
  console.log(items);
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
          <QuizAnswer />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
