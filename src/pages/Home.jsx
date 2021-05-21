import React from 'react';
import { QuizBlock } from '../components';

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
                  <QuizBlock
                    id={obj.id}
                    quiz_title={obj.quiz_title}
                    quiz_class={obj.quiz_class}
                    img={obj.img}
                    color={obj.color}
                  />
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
