export { default as Login } from './Login';
import React from 'react';
import { QuizBlock } from '../components';
import img_card from './ques_img_1.png'



function Quiz({ items }) {
  return (
    <main class="main quiz_bg">
     <section class="content quiz">
        <div class="container">
          <div class="content__inner">
          <p class="titlemob_quiz"><span class="content__title title_quiz">Переробка сміття</span></p>
	      <p class="content__text_quiz">1<span>/2</span></p>            
            <div class="content__box_quiz">
                <div class="content__items">
                  <div>
                    <article class="card-eco_quiz">
                    <div>
                    <img src={img_card} class="img_quize" alt={"img_card"}/> 
                                        
                    </div>
                    <div>
                    <h3 class="card-eco__title_quiz">Як називається тканина, у виробництві 
                    якої використовується переробленний пластик?</h3>
                    </div>
                    </article>
                  </div>
                </div>
              </div>
            
                        
              <div class="content__box_quest">
                <div class="content__items">
                  <div>
                    <article class="card-eco_quest">
                    <h3 class="card-eco__title_qest">Шовк</h3>                      
                    </article>
                  </div>
                </div>
              </div>
              <div class="content__box_quest">
                <div class="content__items">
                  <div>
                    <article class="card-eco_quest">
                    <h3 class="card-eco__title_qest">Бавовна</h3>                      
                    </article>
                  </div>
                </div>
              </div>
              <div class="content__box_quest">
                <div class="content__items">
                  <div>
                    <article class="card-eco_quest">
                    <h3 class="card-eco__title_qest">Полієстер</h3>                      
                    </article>
                  </div>
                </div>
              </div>
              <div class="content__box_quest">
                <div class="content__items">
                  <div>
                    <article class="card-eco_quest">
                    <h3 class="card-eco__title_qest">Інакше</h3>                      
                    </article>
                  </div>
                </div>
              </div>
              <div class="content__box_qest bottom">
                <div class="content__items">
                  <div>
                    <article class="card-eco_button">
                    <h3 class="card-eco__title_button">Наступне питання</h3>                     
                    </article>
                  </div>
                </div>
              </div>  
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default Quiz;