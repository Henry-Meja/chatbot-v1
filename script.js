
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
