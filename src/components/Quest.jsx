import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonQuestAnsw } from '../components';
import style from './Quest.module.css';
import image from '../images/content/quest1.jpg';

const Quest = ({ img_quest, question_title, answers }) => {
  // console.log(question_title);
  return (
    <div className={style.box}>
      <div className={style.quest}>
        <img className={style.image} src={img_quest} alt="quest" />

        <p className={style.text}>{question_title}</p>
      </div>
      <div className={style.items}>
        {answers && answers.map((obj, index) => <ButtonQuestAnsw answer={obj.answer} />)}
      </div>
    </div>
  );
};

export default Quest;
