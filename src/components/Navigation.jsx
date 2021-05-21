import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../images/logo.svg';

function Navigation() {
  return (
    <header id="header-section" class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__box">
            <Link class="logo" to="/Home">
              <img class="logo__img" src={logo} alt="image logo" />
            </Link>

            <button className="menu__popup"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
