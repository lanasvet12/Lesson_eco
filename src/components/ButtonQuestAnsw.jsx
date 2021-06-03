import React, { useState, setState, Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './Quest.module.css';

const ButtonQuestAnsw = ({
  answer,
  id,
  correct,
  setActiveBtn,
  classCorrect,
  disabledClass,
  numberStep,
  currentStep,
}) => {
  const [activeClass, setClass] = React.useState('');

  const [counterState, setCounterState] = useState(0);

  //поиск ид елемента труе
  const findTrueAnswer = correct === true ? id : '';

  function trueItem() {
    return correct === true
      ? (setClass('correct'), setActiveBtn('active'))
      : (setClass('selected'), setActiveBtn('active'));
  }

  return (
    <div
      className={classNames('item', activeClass, classCorrect, disabledClass)}
      onClick={() => {
        trueItem();
      }}>
      <span className="desc">{answer}</span>
    </div>
  );
};

export default ButtonQuestAnsw;
