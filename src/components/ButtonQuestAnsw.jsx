import React, { setState, Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './Quest.module.css';

const ButtonQuestAnsw = ({ answer, id, correct, setActiveBtn, classCorrect, disabledClass }) => {
  const [activeClass, setClass] = React.useState('');

  //поиск ид елемента труе
  const findTrueAnswer = correct === true ? id : '';

  function trueItem() {
    return correct === true
      ? (setClass('correct'), setActiveBtn('active'))
      : (setClass('selected'), setActiveBtn('active'));
  }

  // console.log(answerId);
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
