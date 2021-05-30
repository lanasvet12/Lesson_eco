import React, { useEffect, useState, useRef } from 'react';
import { StatisticsItem} from '../components';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Background from '../images/content/quiz-resultbg.jpg';
import style from './StatisticsPage.module.css';
import './custom.css';



var all_quests = 10;
var anser1 = 8;
var anser2 = 5;
var anser3 = 4;
var anser4 = 2;
var anser5 = 7;
var anser6 = 10;
var percentage1=anser1*100/all_quests;
var percentage2=anser2*100/all_quests;
var percentage3=anser3*100/all_quests;
var percentage4=anser4*100/all_quests;
var percentage5=anser5*100/all_quests;
var percentage6=anser6*100/all_quests;

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
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser1}</span>/<span>10</span>
          </div>   
          <div style={{ width: 80, height: 80 }}>                 
            <CircularProgressbarWithChildren value={percentage1}>
                <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser2}</span>/<span>10</span>
          </div>   
          <div style={{ width: 70, height: 70 }}>                 
            <CircularProgressbarWithChildren value={percentage2}>
            <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>       
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser3}</span>/<span>10</span>
          </div>   
          <div style={{ width: 70, height: 70 }}>                 
            <CircularProgressbarWithChildren value={percentage3}>
            <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser4}</span>/<span>10</span>
          </div>   
          <div style={{ width: 70, height: 70 }}>                 
            <CircularProgressbarWithChildren value={percentage4}>
            <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser5}</span>/<span>10</span>
          </div>   
          <div style={{ width: 70, height: 70 }}>                 
            <CircularProgressbarWithChildren value={percentage5}>
            <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>
      <article class="StatisticsItem_item__duWJh">
        <div class="StatisticsItem_progress__1BW0u">
          <span>{anser6}</span>/<span>10</span>
          </div>   
          <div style={{ width: 70, height: 70 }}>                 
            <CircularProgressbarWithChildren value={percentage6}>
            <img src="/img/sad.png" />
            </CircularProgressbarWithChildren>;    
          </div>        
            <span class="StatisticsItem_title__yI2_S">Переробка сміття</span>               
      </article>
       
      </div>
    </div>
  );
}

export default StatisticsPage;

