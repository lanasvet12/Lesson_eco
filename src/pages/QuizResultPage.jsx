import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import happySmail from '../images/happyIcon.svg';
import sadSmail from '../images/sadIcon.svg';
const QuizResultPage = ({}) => {
  const { trueQuest, numberStep } = useParams();

  let resultTitle = 'Молодець!';
  let svgPlanet = happySmail;
  let button = '';
  let activClass = '';

  //if more than a half this true happy
  function choiceOfAnswer() {
    if (trueQuest < numberStep / 2) {
      resultTitle = 'Ти можеш краще!';
      svgPlanet = sadSmail;
      activClass = 'active';
    }
  }
  choiceOfAnswer();
  return (
    <div class="result__inner">
      <span className={classNames('result__title', activClass)}>{resultTitle}</span>

      <img class="result__planet" src={svgPlanet} alt="smail" />
      <div class="result__points">
        <span>Твій результат</span>:
        <div className="result__box">
          <span className={classNames('result__count', activClass)}>{trueQuest}</span>/
          <span className={classNames('result__count result__count--izzy', activClass)}>
            {numberStep}
          </span>
        </div>
      </div>
      <Link to="/home">
        <a className={classNames('result__button', activClass)} href="#">
          Повернутися до тестів
        </a>
      </Link>
    </div>
  );
};

export default QuizResultPage;
