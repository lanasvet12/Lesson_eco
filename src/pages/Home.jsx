import React from 'react';
<<<<<<< HEAD
import { QuizBlock } from '../components';
=======
import { QuizBlock} from '../components';
>>>>>>> d0beb3df34ae4bf863c8aa0f4e8cad9ca40b1a58

function Home({ quiz }) {
  return (
    <div className="container">
      <div className="content__inner">
        <span className="content__title title">Привіт, Анно</span>
        <p className="content__text">Доступні тести</p>

        <div className="content__box">
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
