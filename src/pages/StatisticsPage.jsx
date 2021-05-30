import React from 'react';
import { StatisticsItem } from '../components';
import Background from '../images/content/quiz-resultbg.jpg';
import style from './StatisticsPage.module.css';

function StatisticsPage({}) {
  return (
    <div
      className={style.inner}
      style={{
        background: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <span className={style.title}>Твій прогрес</span>
      <div className={style.items}>
        <StatisticsItem className="c100 p25 green" />
        <StatisticsItem className="c100 p100 green" />
        <StatisticsItem className="c100 p60 green" />
        <StatisticsItem className="c100 p30 green" />
        <StatisticsItem className="c100 p10 green" />
        <StatisticsItem className="c100 p70 green" />
      </div>
    </div>
  );
}

export default StatisticsPage;
