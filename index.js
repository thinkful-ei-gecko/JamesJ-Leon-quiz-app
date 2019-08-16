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

function listener() {
  loadApp();
}

$(listener);

/**
 * Functions that we know we will need:
 * 
 * ***Event Listeners***
 * loadApp - generate quiz page / also restart quiz page
 * startQuiz - generates question page/form after clicking 'begin' button
 * submitAnswer - listens when user submits an answer choice
 * nextQuestion - listens for when a user pressed 'next question'
 *
 * 
 */