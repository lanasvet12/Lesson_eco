import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './Quest.module.css';

const ButtonQuestAnsw = ({ answer }) => {
  // console.log(index + '    ' + 'index');
  const [activeClass, setClass] = React.useState('');

  return (
    <div className={classNames('item', activeClass)} onClick={() => setClass('selected')}>
      <span className="desc">{answer}</span>
    </div>
  );
};

export default ButtonQuestAnsw;
