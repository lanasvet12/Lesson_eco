import React from 'react';
import quiz1 from '../images/icons/quiz-1.svg';

const QuizBlock = ({ name, bg }) => {
  const TodoComponent = {
    backgroundColor: bg,
  };
  console.log(TodoComponent);
  return (
    <div>
      <article class="card-eco" style={TodoComponent}>
        <h2 className="card-eco__title">{name}</h2>
        <img className="card-eco__img" src={quiz1} alt="images quiz" />
      </article>
    </div>
  );
};

export default QuizBlock;
