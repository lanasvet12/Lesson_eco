import React from 'react';

const QuizAnswer = ({}) => {
  return (
    <div class="content__inner">
      <span class="content__title title_quiz">Переробка сміття</span>
      <p class="content__text_quiz">1/2</p>
      <div class="content__box">
        <div class="content__items">
          <div>
            <article class="card-eco">
              <h2 class="card-eco__title_quiz">
                Як називається тканина, у виробництві якої використовується переробленний пластик?
              </h2>
            </article>
          </div>
        </div>
      </div>

      <div class="content__box">
        <div class="content__items">
          <div>
            <article class="card-eco">
              <h2 class="card-eco__title_quiz">Шовк</h2>
            </article>
          </div>
        </div>
      </div>
      <div class="content__box">
        <div class="content__items">
          <div>
            <article class="card-eco">
              <h2 class="card-eco__title_quiz">Бавовна</h2>
            </article>
          </div>
        </div>
      </div>
      <div class="content__box">
        <div class="content__items">
          <div>
            <article class="card-eco">
              <h2 class="card-eco__title_quiz">Полієстер</h2>
            </article>
          </div>
        </div>
      </div>
      <div class="content__box">
        <div class="content__items">
          <div>
            <article class="card-eco">
              <h2 class="card-eco__title_quiz">Інакше</h2>
            </article>
          </div>
        </div>
      </div>
      <div class="content__box">
        <button onClick={(e) => this.onclick(e)}>Наступна</button>
      </div>
    </div>
  );
};

export default QuizAnswer;
