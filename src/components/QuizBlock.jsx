import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../pages';
import { activeQuiz } from '../state/state';

const QuizBlock = ({ quiz_title, quiz_class, img, color, id }) => {
  //background-color elements quiz
  const TodoComponent = {
    backgroundColor: color,
  };

  return (
    //id - is index element quiz choise card quest
    <Link to={`/quiz/${id}`}>
      <article className="card-eco" style={TodoComponent}>
        <div className="card-eco__box">
          <h2 className="card-eco__title">{quiz_title}</h2>
          <span>клас {quiz_class}</span>
        </div>
        <img className="card-eco__img" src={img} alt="images quiz" />
      </article>
    </Link>
  );
};

export default QuizBlock;
