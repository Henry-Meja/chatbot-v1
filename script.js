/*
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let stage = 0;
let mood = '';
let activity = '';

function botSay(msg) {
  const msgEl = document.createElement('div');
  msgEl.className = 'message bot';
  msgEl.textContent = '🤖 ' + msg;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function userSay(msg) {
  const msgEl = document.createElement('div');
  msgEl.className = 'message user';
  msgEl.textContent = msg;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput(inputVal) {
  const msg = inputVal.trim();
  if (!msg) return;
  userSay(msg);

  if (stage === 0) {
    botSay("How are you feeling today? (Happy, Sad, Curious, Bored)");
    stage = 1;
  } else if (stage === 1) {
    mood = msg.toLowerCase();
    if (mood === 'happy') {
      botSay("That's great! Keep smiling 😄");
      stage = 99;
    } else if (mood === 'sad') {
      botSay("I'm here for you. Want to hear a joke or quote?");
      stage = 2;
    } else if (mood === 'curious') {
      botSay("Cool! Choose: Space, Animals, History?");
      stage = 3;
    } else if (mood === 'bored') {
      botSay("Try: Riddle, Math Puzzle, Fun Fact?");
      stage = 4;
    } else {
      botSay("Please type: Happy, Sad, Curious, or Bored");
    }
  } else if (stage === 2) {
    if (msg.toLowerCase().includes("joke")) {
      botSay("Why don’t scientists trust atoms? Because they make up everything!");
    } else {
      botSay("“Keep your face always toward the sunshine—and shadows will fall behind you.”");
    }
    stage = 99;
  } else if (stage === 3) {
    if (msg.toLowerCase().includes("space")) {
      botSay("Did you know? A day on Venus is longer than its year!");
    } else if (msg.toLowerCase().includes("animals")) {
      botSay("Octopuses have three hearts 🐙.");
    } else {
      botSay("Napoleon was once attacked by rabbits. True story!");
    }
    stage = 99;
  } else if (stage === 4) {
    activity = msg.toLowerCase();
    if (activity.includes("riddle")) {
      botSay("What has keys but can’t open locks?");
      stage = 5;
    } else if (activity.includes("math")) {
      botSay("🧠 What is 12 + 37 × 2 ?");
      stage = 6;
    } else {
      botSay("Bananas are berries, but strawberries aren't. 🤯");
      stage = 99;
    }
  } else if (stage === 5) {
    if (msg.toLowerCase().includes("piano")) {
      botSay("🎉 Correct! It's a piano!");
    } else {
      botSay("Oops! It's a piano 🎹.");
    }
    stage = 99;
  } else if (stage === 6) {
    if (parseInt(msg) === 86) {
      botSay("✅ That's correct!");
    } else {
      botSay("Not quite! It's 86.");
    }
    stage = 99;
  } else {
    botSay("Would you like to chat again and choose a different option? Refresh the page!");
  }
  input.value = '';
}

sendBtn.addEventListener('click', () => handleUserInput(input.value));
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput(input.value);
});

// Start
botSay("Hi!");
setTimeout(() => {
  botSay("How are you feeling today? (Happy, Sad, Curious, Bored)");
  stage = 1;
}, 1000);
*/


// This is an upgraded version of the chatbot script with more levels, jokes, and riddles. const chatBox = document.getElementById("chatBox"); const userInput = document.getElementById("userInput");

let nextQuestion = "intro";

const conversations = { intro: { message: "Would you like to play a game, solve a riddle, hear a joke, or learn a fun fact?", options: ["Game", "Riddle", "Joke", "Fun Fact"], next: { Game: "gameOptions", Riddle: "riddle1", Joke: "joke1", "Fun Fact": "fact1" } }, gameOptions: { message: "Pick one: Math quiz, Word scramble, or Trivia?", options: ["Math quiz", "Word scramble", "Trivia"], next: { "Math quiz": "mathQuiz1", "Word scramble": "scramble1", "Trivia": "trivia1" } },

// === MATH QUIZ LEVELS === mathQuiz1: { message: "🧠 What is 12 + 7 * 2?", answer: "26", correct: "✅ Correct! Ready for another quiz?", wrong: "❌ Nope, it's 26. Want another?", options: ["Yes", "No"], next: { Yes: "mathQuiz2", No: "intro" } }, mathQuiz2: { message: "🔢 What's the square root of 144?", answer: "12", correct: "✅ Bang on! More challenges?", wrong: "❌ It's 12. Try another?", options: ["Yes", "No"], next: { Yes: "mathQuiz3", No: "intro" } }, mathQuiz3: { message: "🧠 What is 15 divided by 3 + 2?", answer: "7", correct: "✅ Genius! You're on fire! More?", wrong: "❌ Answer is 7. Try again?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

// === WORD SCRAMBLE LEVELS === scramble1: { message: "🔤 Unscramble this: ‘gtrihn’", answer: "thing", correct: "✅ Yes! It's 'thing'. Want more?", wrong: "❌ Nope, it's 'thing'. Try again?", options: ["Yes", "No"], next: { Yes: "scramble2", No: "intro" } }, scramble2: { message: "🔡 Unscramble: 'cetsamiro'", answer: "matersoci".split('').sort().join(''), // obscure correct: "✅ Great job! Want one last?", wrong: "❌ That was 'matersoci'. Try another?", options: ["Yes", "No"], next: { Yes: "scramble3", No: "intro" } }, scramble3: { message: "🔡 Unscramble: 'elbmarcs'", answer: "scramble", correct: "✅ Exactly! Done with this level?", wrong: "❌ It's 'scramble'. Want to continue?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

// === RIDDLES === riddle1: { message: "🧩 I speak without a mouth and hear without ears. What am I?", answer: "echo", correct: "🎉 Correct! More riddles?", wrong: "❌ It's an echo. Want another?", options: ["Yes", "No"], next: { Yes: "riddle2", No: "intro" } }, riddle2: { message: "🔍 What has hands but can’t clap?", answer: "clock", correct: "✅ Right! Another one?", wrong: "❌ It's a clock. Try another?", options: ["Yes", "No"], next: { Yes: "riddle3", No: "intro" } }, riddle3: { message: "🕵️ What has to be broken before you can use it?", answer: "egg", correct: "🥚 Yup! That’s it. Want more?", wrong: "❌ Answer is an egg. Try more?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

// === JOKES === joke1: { message: "😂 Why did the computer show up late to work? Because it had a hard drive! Another?", options: ["Yes", "No"], next: { Yes: "joke2", No: "intro" } }, joke2: { message: "😆 Why don’t scientists trust atoms? Because they make up everything! More?", options: ["Yes", "No"], next: { Yes: "joke3", No: "intro" } }, joke3: { message: "🤣 What do you call fake spaghetti? An impasta! 😂 Ready for more?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

// === FUN FACTS === fact1: { message: "🧠 Did you know? Octopuses have three hearts! Another fact?", options: ["Yes", "No"], next: { Yes: "fact2", No: "intro" } }, fact2: { message: "💡 Honey never spoils. Archaeologists found edible honey in ancient Egyptian tombs! More?", options: ["Yes", "No"], next: { Yes: "fact3", No: "intro" } }, fact3: { message: "🌍 Bananas are berries, but strawberries are not! Fascinating, right? Continue?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

trivia1: { message: "📚 Which planet is known as the Red Planet?", answer: "mars", correct: "✅ Correct! Play again?", wrong: "❌ It's Mars. Want another?", options: ["Yes", "No"], next: { Yes: "trivia2", No: "intro" } }, trivia2: { message: "🎬 Who painted the Mona Lisa?", answer: "leonardo da vinci", correct: "🎨 Right! One more?", wrong: "❌ It's Leonardo da Vinci. Try another?", options: ["Yes", "No"], next: { Yes: "intro", No: "exit" } },

exit: { message: "👋 Bye! Refresh to restart.", options: [] } };

function addMessage(text, sender = "bot") { const div = document.createElement("div"); div.className = message ${sender}; div.innerText = text; chatBox.appendChild(div); chatBox.scrollTop = chatBox.scrollHeight; }

function handleUserInput() { const input = userInput.value.trim(); if (!input) return;

addMessage(input, "user"); userInput.value = "";

const current = conversations[nextQuestion];

if (current.answer) { if (input.toLowerCase() === current.answer.toLowerCase()) { addMessage(current.correct); } else { addMessage(current.wrong); } showOptions(current.options); nextQuestion = current.next; return; }

const selected = input; if (current.next[selected]) { nextQuestion = current.next[selected]; setTimeout(() => { proceedChat(); }, 500); } else { addMessage("⚠️ Choose from the available options."); showOptions(current.options); } }

function showOptions(options) { if (Array.isArray(options) && options.length > 0) { setTimeout(() => { addMessage("Options: " + options.join(" | ")); }, 300); } }

function proceedChat() { const step = conversations[nextQuestion]; if (step) { addMessage(step.message); showOptions(step.options); } }

window.onload = () => { proceedChat(); };


