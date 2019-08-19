'use strict';

const database = {
  currentQuestionNumber: 1,
  score: 0,
  resultGif: [
    ['https://media.giphy.com/media/KEPQfFa3CtzCE/giphy.gif', 'bad results'], 
    ['https://media.giphy.com/media/2wYYlHuEw1UcsJYgAA/giphy.gif', 'okay results'],
    ['http://giphygifs.s3.amazonaws.com/media/IUZtGhVO8hZ6w/giphy.gif', 'good results']
  ],
  store: [
    {
      question: 'Which character got thrown off of the tower in the first book?',
      answer: ['Bran', 'Cersei', 'Jaime', 'Drogon'],
      correctAnswer: 'Bran'
    },
    {
      question: 'What is the house sigil of Stark?',
      answer: ['Peacock', 'Direwolf', 'Unicorn', 'Mustard'],
      correctAnswer: 'Direwolf'
    },
    {
      question: 'Who is not a member of the House Baratheon?',
      answer: ['Renly', 'Stannis', 'Robert', 'Drogon'],
      correctAnswer: 'Drogon'
    },
    {
      question: 'Who did not have a cameo in a pilot or an episode of Game of Thrones?',
      answer: ['Chris Stapleton', 'George R. R. Martin', 'Ed Sheeran', 'Daniel Weiss'],
      correctAnswer: 'Daniel Weiss'
    },
    {
      question: 'What is the name of one of the dragons?',
      answer: ['Princess FluffyBottoms', 'Drogon', 'Bartholomuel', 'Potato Salad'],
      correctAnswer: 'Drogon'
    }
  ]
};