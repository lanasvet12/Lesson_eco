import React from 'react';
import { Link } from 'react-router-dom';
import style from './Quest.module.css';
import image from '../images/content/quest1.jpg';

const Quest = ({}) => {
  return (
    <div className={style.box}>
      <div className={style.quest}>
        <img className={style.image} src={image} alt="quest" />
        <p className={style.text}></p>
      </div>
      <div className={style.items}>
        <div className={style.item}>
          <span className={style.desc}>Шовк</span>
        </div>
        <div className={style.item}>
          <span className={style.desc}>Шовк</span>
        </div>
        <div className={style.item}>
          <span className={style.desc}>Шовк</span>
        </div>
        <div className={style.item}>
          <span className={style.desc}>Шовк</span>
        </div>
      </div>
    </div>
  );
};

export default Quest;
