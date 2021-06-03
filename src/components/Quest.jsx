import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonQuestAnsw } from '../components';
import style from './Quest.module.css';
import image from '../images/content/quest1.jpg';
import classNames from 'classnames';

const Quest = ({
  img_quest,
  question_title,
  answers,
  onClick,
  description,
  currentStep,
  numberStep,
}) => {
  const [activeBtn, setActiveBtn] = React.useState('');
  const imageHide = activeBtn === 'active' ? 'disabled' : '';

  let trueQuest = 0;
  function trueLink() {
    if (currentStep == numberStep - 1) {
      return (
        <Link to={`/quest-result/${trueQuest}/${numberStep}`}>
          <div className={classNames('quest__link', activeBtn)} onClick={onClick}>
            Наступне питання
          </div>
        </Link>
      );

      // console.log(currentStep, numberStep);
    } else {
      return (
        <div className={classNames('quest__link', activeBtn)} onClick={onClick}>
          Наступне питання
        </div>
      );
    }
  }

  return (
    <div>
      <div className={style.quest}>
        <img className={classNames('quest-images', imageHide)} src={img_quest} alt="quest" />

        <p className={classNames('quest-answer', activeBtn)}>{description}</p>
        <p className={classNames('quest-text', imageHide)}>{question_title}</p>
      </div>
      <div className={style.items}>
        {/* created answers this quest for id quiz */}
        {answers &&
          answers.map((obj, index) => (
            <ButtonQuestAnsw
              key={`${obj}_${index}`}
              id={index}
              answer={obj.answer}
              correct={obj.correct}
              setActiveBtn={setActiveBtn}
              classCorrect={obj.correct === true ? 'respect' : ''}
              disabledClass={activeBtn === 'active' ? 'disabled' : ''}
              numberStep={numberStep}
              currentStep={currentStep}
            />
          ))}
      </div>
      <div> {trueLink()}</div>
    </div>
  );
};

export default Quest;
