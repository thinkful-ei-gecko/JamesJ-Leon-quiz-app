'use strict';

function makeGuess() {
  let questionIndex = database.store[database.currentQuestionNumber - 1];
  $('main').empty();
  $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <ul>
      <li id="scoreCount">Score: ${database.score}</li>
      <li id="questionCount">Question: ${database.currentQuestionNumber} out of ${database.store.length} </li>
    </ul>
    <form id="quizQuestions">
      <h2>${questionIndex['question']}</h2>  
      <input type="radio" name="key" id="key1" required="required" value="${questionIndex['answer'][0]}" />
      <label for="key1">${questionIndex['answer'][0]}</label>
      <input type="radio" name="key" id="key2" required="required" value="${questionIndex['answer'][1]}" />
      <label for="key2">${questionIndex['answer'][1]}</label>
      <input type="radio" name="key" id="key3" required="required" value="${questionIndex['answer'][2]}" />
      <label for="key3">${questionIndex['answer'][2]}</label>
      <input type="radio" name="key" id ="key4" required="required" value="${questionIndex['answer'][3]}" />
      <label for="key4">${questionIndex['answer'][3]} </label>
      <button type="submit">Submit Answer</button>
    </form>
    `);
}
/**
 * Function loads the quiz page
 */
function loadApp() {
  $('main').empty();
  $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <p class="intro">Behold - this is the toughest quiz about Games of Thrones ever devised. Enjoy!</p>
    <form id="startQuiz">
      <button type="submit">Start Quiz</button>
    </form>
  `);
}

function playQuiz() {
  $('#startQuiz').submit(e => {
    e.preventDefault();
    makeGuess();
  });
}

function submitAnswer() {
  $('main').on('submit','#quizQuestions', e => {
    let choice = $( 'input:checked' ).val();
    let questionIndex = database.store[database.currentQuestionNumber - 1];
    let correct = '';
    let message = '';
    let buttonTitle = 'Next Question';
    e.preventDefault();
    $('#quizQuestions').remove();
    if (choice === questionIndex['correctAnswer']) {
      correct = `<div class="cropImage"><img src="https://m0.joe.co.uk/wp-content/uploads/2017/08/28202547/DanyThumbs.gif" alt="correct answer" /></div>`;
      message = 'Good work! Move on to the next question.';
      database.score++;
    } else {
      correct = `<img src='http://giphygifs.s3.amazonaws.com/media/nOqqmqx3Gwucw/giphy.gif' alt='incorrect answer' class="incorrectPic" />`;
      message = `NO! Correct answer was: ${questionIndex['correctAnswer']}`;
    }
    if (database.currentQuestionNumber === database.store.length) {
      buttonTitle = 'See Results';
    }
    $('main').append(`
      <div class="reveal">
        <h2>${correct}</h2>
        <p>${message}</p>
      </div>
      <form id="nextQuestion">
      <button type="submit">${buttonTitle}</button>
      </form>
    `);
    $('#scoreCount').text(`Score: ${database.score}`);
  });
}

/**
 * Function checks to see if we're on the last question
 * If not, progress to next question --> playQuiz();
 * Else, displayScore();
 */
function progressQuiz() { 
  $('main').on('submit','#nextQuestion', e => {
    e.preventDefault();
    if (database.currentQuestionNumber === database.store.length) {
      displayScore();
    }
    else {
      database.currentQuestionNumber++;
      makeGuess();
    }
  });
}

/**
 * Function replaces main with results view
 */
function displayScore() {
  $('main').empty();
  let resultsPic = '';
   let resultsAlt = '';
  if (database.score === 0 || database.score === 1) {
    resultsPic = database.resultGif[0][0];
    resultsAlt = database.resultGif[0][1];
  }
  else if (database.score === 2 || database.score === 3 || database.score === 4) {
    resultsPic = database.resultGif[1][0];
    resultsAlt = database.resultGif[1][1];
  }
  else {
    resultsPic = database.resultGif[2][0];
    resultsAlt = database.resultGif[2][1];
  }
  $('main').append(`
    <h1>Game of Thrones Quiz</h1>
    <h2>Your Score: ${database.score} out of ${database.store.length}</h2>
    <div class="resultsPicShow"><img src="${resultsPic}" alt="${resultsAlt}" /></div>
    <form id="startQuiz">
      <button type="submit">Play Again?</button>
    </form>
  `);
}



function listener() {
  loadApp();
  playQuiz();
  submitAnswer();
  progressQuiz();
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