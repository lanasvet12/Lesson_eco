import React from "react";
import { Link, withRouter } from "react-router-dom";


function Navigation(props) {
  return (
    <header id="header-section" class="header">
<div class="container">
  <div class="header__inner">
    <div class="header__box">
      <a class="logo" to="/">
        {/* <img class="logo__img" src={logo} alt="image logo" /> */}
      </a>

      <nav class="menu">
        <button class="menu__popup" type="button">
          <span></span>
        </button>

        <ul class="menu__list">
          <li class="menu__item menu__item--active">
            <a class="menu__link" href="#">
              Тести
            </a>

            <ul class="menu__list-popup">
              <li class="menu__item-popup">
                <a class="menu__link-popup" href="#">
                  Тести
                </a>
              </li>

              <li class="menu__item-popup">
                <a class="menu__link-popup" href="#">
                  Тести
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <a class="header__link" href="#">
      Увійти
    </a>
  </div>
</div>
</header>
  );
}

export default withRouter(Navigation);

