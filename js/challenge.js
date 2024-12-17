// Variables to manage the timer and state
let counter = document.getElementById('counter');
let count = 0;
let timer = setInterval(incrementCounter, 1000);
let isPaused = false;

// Buttons
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');

// Likes and comments
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

// Timer Functions
function incrementCounter() {
  counter.innerText = ++count;
}

function decrementCounter() {
  counter.innerText = --count;
}

// Like Button Functionality
const likes = {};

function likeNumber() {
  const number = count;
  if (likes[number]) {
    likes[number]++;
    document.getElementById(`like-${number}`).innerText = `${number} has ${likes[number]} likes`;
  } else {
    likes[number] = 1;
    const li = document.createElement('li');
    li.id = `like-${number}`;
    li.innerText = `${number} has ${likes[number]} like`;
    likesList.appendChild(li);
  }
}

// Pause and Resume Functionality
function togglePause() {
  if (isPaused) {
    // Resume the counter
    timer = setInterval(incrementCounter, 1000);
    pauseButton.innerText = 'pause';
    isPaused = false;
    toggleButtons(true);
  } else {
    // Pause the counter
    clearInterval(timer);
    pauseButton.innerText = 'resume';
    isPaused = true;
    toggleButtons(false);
  }
}

function toggleButtons(state) {
  plusButton.disabled = !state;
  minusButton.disabled = !state;
  heartButton.disabled = !state;
  submitButton.disabled = !state;
}

// Comment Submission
function addComment(event) {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText) {
    const p = document.createElement('p');
    p.innerText = commentText;
    commentList.appendChild(p);
    commentInput.value = '';
  }
}

// Event Listeners
minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
heartButton.addEventListener('click', likeNumber);
pauseButton.addEventListener('click', togglePause);
commentForm.addEventListener('submit', addComment);
