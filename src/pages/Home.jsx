import React from 'react';
import { QuizBlock } from '../components';

function Home({ items }) {
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setQuiz(json.quiz);
      });
  }, []);
  return (
    <main class="main">
      <section class="content">
        <div class="container">
          <div class="content__inner">
            <span class="content__title title">Привіт, Анно</span>
            <p class="content__text">Доступні тести</p>

            <div class="content__box">
              <div class="content__items">
                {quiz.map((obj) => (
                  <QuizBlock
                    key={obj.id}
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
