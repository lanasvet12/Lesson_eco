import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../images/logo.png';

function Navigation() {
  return (
    <header id="header-section" className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__box">
            <Link className="logo" to="/Home">
              <img className="logo__img" src={logo} alt="logo" />
            </Link>

            <button className="menu__popup"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
