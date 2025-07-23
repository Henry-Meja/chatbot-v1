
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const bot = {
  step: 0,
  state: 'start',
  path: [],

  getNextPrompt(input) {
    switch (this.state) {
      case 'start':
        this.state = 'activity';
        return "What would you like to do? (Riddle / Math / Joke / Exit)";
      case 'activity':
        input = input.toLowerCase();
        if (input.includes("riddle")) {
          this.state = 'riddle';
          return "What has keys but can’t open locks?";
        } else if (input.includes("math")) {
          this.state = 'math';
          return "🧠 Puzzle: What is 12 + 37 × 2 ?";
        } else if (input.includes("joke")) {
          this.state = 'joke';
          return "😂 Why don't scientists trust atoms?";
        } else if (input.includes("exit")) {
          this.state = 'end';
          return "👋 Goodbye! Refresh to start again.";
        } else {
          return "Please choose: Riddle / Math / Joke / Exit";
        }
      case 'riddle':
        if (input.toLowerCase().includes("piano")) {
          this.state = 'activity';
          return "🎉 Correct! Want another activity? (Riddle / Math / Joke / Exit)";
        } else {
          this.state = 'activity';
          return "Oops! It's a piano 🎹. Try another activity? (Riddle / Math / Joke / Exit)";
        }
      case 'math':
        if (parseInt(input) === 86) {
          this.state = 'activity';
          return "✅ That's correct! Choose another activity: Riddle / Math / Joke / Exit";
        } else {
          this.state = 'activity';
          return "❌ Nope! Answer is 86. Want to try something else? (Riddle / Math / Joke / Exit)";
        }
      case 'joke':
        this.state = 'activity';
        return "Because they make up everything! 🤣 Choose another: Riddle / Math / Joke / Exit";
      case 'end':
        return "Session ended.";
      default:
        return "I didn't get that. Try again.";
    }
  }
};

function addMessage(msg, sender = 'bot') {
  const p = document.createElement('p');
  p.textContent = (sender === 'user' ? '🧑‍💻 ' : '🤖 ') + msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (input) {
    addMessage(input, 'user');
    const reply = bot.getNextPrompt(input);
    setTimeout(() => addMessage(reply, 'bot'), 600);
    userInput.value = '';
  }
});

// Initial welcome message after DOM loads
window.onload = () => {
  setTimeout(() => {
    addMessage("What would you like to do? (Riddle / Math / Joke / Exit)", 'bot');
    bot.state = 'activity';
  }, 1500);
};
