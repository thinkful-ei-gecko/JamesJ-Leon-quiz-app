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
    e.preventDefault();
    let questionIndex = database.store[database.currentQuestionNumber] - 1;
    $('main').empty();
    $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <ul>
      <li>Score: ${database.score}</li>
      <li>Question: ${database.currentQuestionNumber} out of ${database.store.length} </li>
    </ul>
    <form id="quizQuestions">
      <h2>${questionIndex['question']}</h2>
      <label for="key1">${database.store[database.currentQuestionNumber]}</label>
      <input type="radio" name="key" id="key1" required="required" value="${database.store[database.currentQuestionNumber]['answer'][0]}" />
      <label for="key2">${database.store[database.currentQuestionNumber]['answer'][1]}</label>
      <input type="radio" name="key" id="key2" required="required" value="${database.store[database.currentQuestionNumber]['answer'][1]}" />
      <label for="key3">${database.store[database.currentQuestionNumber]['answer'][2]}</label>
      <input type="radio" name="key" id ="key3" required="required" value="${database.store[database.currentQuestionNumber]['answer'][2]}" />
      <label for="key4">${database.store[database.currentQuestionNumber]['answer'][3]} </label>
      <input type="radio" name="key" id ="key4" required="required" value="${database.store[database.currentQuestionNumber]['answer'][3]}" />
      <button type="submit">Submit Answer</button>
    </form>
    `);
  });
}

// $('input:checked').val()

function submitAnswer() {
  $('main').on('submit','#quizQuestions', e => {
    let choice = $( 'input:checked' ).val();
    let correct = '';
    let message = '';
    console.log(choice);
    e.preventDefault();
    $('#quizQuestions').remove();
    if (choice === database.store[database.currentQuestionNumber]['correctAnswer']) {
      correct = 'You are correct!';
      message = 'Good work! Move on to the next question.';
    } else {
      correct = 'You are incorrect...';
      message = `Correct answer was: ${database.store[database.currentQuestionNumber]['correctAnswer']}`;
    }
    
    
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