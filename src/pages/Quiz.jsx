import React from 'react';
import { QuizAnswer } from '../components';

import Background from '../images/content/quiz-bg.svg';
import style from './Quiz.module.css';

import { useParams } from 'react-router-dom';

function Quiz({ quiz }) {
  const { id } = useParams();
  let quests = [];

  quiz.map((obj) => {
    obj.questions.map((quest) => {
      quests.push(quest);
    });
  });

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
          <QuizAnswer quiz={quiz} questions={quests} id={id} />
        </div>
      </div>
    </div>
  );
}
export default Quiz;
