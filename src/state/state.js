let state = {
  quiz: [
    {
      id: 0,
      img: './img/quiz-1.svg',
      quiz_title: 'Сортування сміття',
      quiz_class: '1-4',
      color: '#86E3CE',
    },
    {
      id: 1,
      img: './img/quiz-2.svg',
      quiz_title: 'Переробка сміття',
      quiz_class: '5-7',
      color: '#FFDD95',
    },
    {
      id: 2,
      img: './img/quiz-3.svg',
      quiz_title: 'Екологія світу',
      quiz_class: '8-10',
      color: '#D0E6A5',
      questions: '',
    },
    {
      id: 3,
      img: './img/quiz-4.svg',
      quiz_title: 'Вплив екології на людину.',
      quiz_class: '11-12',
      color: '#FC887B',
      questions: '',
    },
  ],

  questions: [
    {
      id: 0,
      id_quiz: '0',
      img_quest: '../img/ques_img_1.png',
      question_title:
        'Як називається тканина, у виробництві яко використовується переробленний пластик?',
      answers: [
        { answer: 'шовк' },
        { answer: 'бабовна' },
        { answer: 'поліестер' },
        { answer: 'інакше' },
      ],
    },
    {
      id: 1,
      id_quiz: '0',
      img_quest: '../img/ques_img_1.png',
      question_title: 'виробництві яко використовується переробленний пластик?',
      answers: [{ answer: 'поліестер' }, { answer: 'бабовна' }, { answer: 'інакше' }],
    },
    {
      id: 2,
      id_quiz: '1',
      img_quest: '../img/ques_img_1.png',
      question_title: 'використовується переробленний пластик?',
      answers: [{ answer: 'поліестер' }, { answer: 'інакше' }],
    },
    {
      id: 0,
      id_quiz: '0',
      img_quest: '../img/ques_img_1.png',
      question_title:
        'Як називається тканина, у виробництві яко використовується переробленний пластик?',
      answers: [
        { answer: 'шовк' },
        { answer: 'бабовна' },
        { answer: 'поліестер' },
        { answer: 'інакше' },
      ],
    },
    {
      id: 1,
      id_quiz: '0',
      img_quest: '../img/ques_img_1.png',
      question_title: 'виробництві яко використовується переробленний пластик?',
      answers: [
        { answer: 'шовк' },
        { answer: 'бабовна' },
        { answer: 'поліестер' },
        { answer: 'інакше' },
      ],
    },
    {
      id: 2,
      id_quiz: '1',
      img_quest: '../img/ques_img_1.png',
      question_title: 'використовується переробленний пластик?',
      answers: [
        { answer: 'шовк' },
        { answer: 'бабовна' },
        { answer: 'поліестер' },
        { answer: 'інакше' },
      ],
    },
  ],

  countQuiz: [
    {
      id: 0,
      count: 0,
    },
  ],
};

export default state;
