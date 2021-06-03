import React from 'react';
import { QuizBlock } from '../components';

//quiz = state.quiz
function Home({ quiz }) {
  return (
    <div className="container">
      <div className="content__inner">
        <span className="content__title title">Привіт, Анно</span>
        <p className="content__text">Доступні тести</p>

        <div className="content__box">
          {/* created component quizs */}
          <div className="content__items">
            {quiz &&
              quiz.map((obj, index) => (
                <QuizBlock
                  key={`${obj.id}_${index}`}
                  id={obj.id}
                  quiz_title={obj.quiz_title}
                  quiz_class={obj.quiz_class}
                  img={obj.img}
                  color={obj.color}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
