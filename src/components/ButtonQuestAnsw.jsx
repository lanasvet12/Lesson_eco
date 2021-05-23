import React from 'react';
import { Link } from 'react-router-dom';

import style from './Quest.module.css';

const ButtonQuestAnsw = ({ answer }) => {
  console.log(answer);
  return (
    <div className={style.item}>
      <span className={style.desc}>{answer}</span>
    </div>
  );
};

export default ButtonQuestAnsw;
