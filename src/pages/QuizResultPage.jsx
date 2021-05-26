import React from 'react';
import { QuizResultItem } from '../components';
import Background from '../images/content/quiz-resultbg.jpg';
import style from './QuizResultPage.module.css';

function QuizResultPage({}) {
  return (
    <div
      className={style.inner}
      style={{
        background: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <span className={style.title}>Твій прогрес</span>
      <div className={style.items}>
        <QuizResultItem className="c100 p25 green" />
        <QuizResultItem className="c100 p100 green" />
        <QuizResultItem className="c100 p60 green" />
        <QuizResultItem className="c100 p30 green" />
        <QuizResultItem className="c100 p10 green" />
        <QuizResultItem className="c100 p70 green" />
      </div>
    </div>
  );
}

export default QuizResultPage;
