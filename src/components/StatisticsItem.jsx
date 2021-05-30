import React from 'react';

import style from './StatisticsItem.module.css';
function StatisticsItem({ className }) {
  return (
    <article className={style.item}>
      <div className={style.progress}>
        <span>8</span>/<span>10</span>
      </div>
      <div className={style.inner}>
        <div className={className}>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
      <span className={style.title}>Переробка сміття</span>
    </article>
  );
}

export default StatisticsItem;
