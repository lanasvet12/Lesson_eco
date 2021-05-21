import React from 'react';
import { QuizAnswer } from '../components';

function Quiz(props) {
  console.log(props.location);

  return (
    <main class="main">
      <section class="content quiz">
        <div class="container">
          <QuizAnswer />
        </div>
      </section>
    </main>
  );
}

export default Quiz;
