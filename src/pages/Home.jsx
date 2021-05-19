import React from 'react';
import { QuizBlock } from '../components';
import quiz1 from '../images/icons/quiz-1.svg';

function Home({ items }) {
  return (
    <main class="main">
      <section class="content">
        <div class="container">
          <div class="content__inner">
            <span class="content__title title">Привіт, Анно</span>
            <p class="content__text">Доступні тести</p>

            <div class="content__box">
              {/* <div class="content__menu">
                <ul class="content__list">
                  <li class="content__item">
                    <a class="content__icon" href="#"></a>
                  </li>

                  <li class="content__item">
                    <a class="content__icon" href="#">
                      <svg class="content__svg"></svg>
                    </a>
                  </li>
                </ul>
              </div> */}

              <div class="content__items">
                {items.map((obj) => (
                  <QuizBlock key={obj.id} name={obj.name} bg={obj.bg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
