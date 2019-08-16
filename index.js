'use strict';

/**
 * Function loads the quiz page
 */
function loadApp() {
  $('main').empty();
  $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <p>Behold - this is the toughest quiz about Games of Thrones ever devised. Enjoy!</p>
    <form id="startQuiz">
      <button type="submit">Start Quiz</button>
    </form>
  `);
}

function startQuiz() {
  $('#startQuiz').submit( e => {
    let score =0;
    let currentQuestionNumber = 1;
    e.preventDefault();
    $('main').empty();
    $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <ul>
      <li>Score: ${score}</li>
      <li>Question: ${currentQuestionNumber} out of ${database.length} </li>
    </ul>
    <form id="quizQuestions">
      <h2>${database[currentQuestionNumber]['question']}</h2>
      <label for="key1">${database[currentQuestionNumber]['answer'][0]}</label>
      <input type="radio" name="key" id="key1" required="required" />
      <label for="key2">${database[currentQuestionNumber]['answer'][1]}</label>
      <input type="radio" name="key" id="key2" required="required" />
      <label for="key3">${database[currentQuestionNumber]['answer'][2]}</label>
      <input type="radio" name="key" id ="key3" required="required" />
      <label for="key4">${database[currentQuestionNumber]['answer'][3]}</label>
      <input type="radio" name="key" id ="key4" required="required" />
      <button type="submit">Submit Answer</button>
    </form>
    `);
  });
}

// $('input:checked').val()

function submitAnswer() {
  $('main').on('submit','#quizQuestions', e => {
    let choice = $('#quizQuestions.input:checked').val();
    console.log(choice);
    e.preventDefault();
    $('#quizQuestions').remove();
  });
}

function listener() {
  loadApp();
  startQuiz();
  submitAnswer();
}

$(listener);

/**
 * Functions that we know we will need:
 * 
 * ***Event Listeners***
 * loadApp - generate quiz page / also restart quiz page
 * startQuiz - generates question page/form after clicking 'begin' button
 * submitAnswer - listens when user submits an answer choice and provides correct/incorrect
 * nextQuestion - listens for when a user pressed 'next question'
 *
 * 
 */