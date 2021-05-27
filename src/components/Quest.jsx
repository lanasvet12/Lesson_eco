import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonQuestAnsw } from '../components';
import style from './Quest.module.css';
import image from '../images/content/quest1.jpg';
import classNames from 'classnames';

const Quest = ({ img_quest, question_title, answers, onClick }) => {
  return (
    <div>
      <div className={style.quest}>
        <img className={style.image} src={img_quest} alt="quest" />

        <p className={style.text}>{question_title}</p>
      </div>
      <div className={style.items}>
        {answers &&
          answers.map((obj, index) => (
            <ButtonQuestAnsw key={`${obj}_${index}`} answer={obj.answer} />
          ))}
      </div>
      <div className={style.link} onClick={onClick}>
        Наступне питання
      </div>
    </div>
  );
};

export default Quest;
