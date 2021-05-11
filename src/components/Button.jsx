import React from 'react';
import classNames from 'classnames'; //с помощью этого можно в классе передавать класс с атрибутом

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
      <span></span>
    </button>
  );
};

export default Button;
