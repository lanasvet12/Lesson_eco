import React from 'react';
import { Link } from 'react-router-dom';
// import { Quiz } from '../pages';

const QuizBlock = ({ quiz_title, quiz_class, img, color, id }) => {
  const TodoComponent = {
    backgroundColor: color,
  };

  return (
    <div>
      <Link to={{ pathname: '/quiz', id: id }}>
        <article class="card-eco" style={TodoComponent}>
          <div className="card-eco__box">
            <h2 className="card-eco__title">{quiz_title}</h2>
            <span>клас {quiz_class}</span>
          </div>
          <img className="card-eco__img" src={img} alt="images quiz" />
        </article>
      </Link>
    </div>
  );
};

export default QuizBlock;
