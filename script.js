 // script.js

// Get DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Initial choices
const mainChoices = ["Maths", "Riddles", "Jokes", "Sciences", "Facts", "Geography", "Space"];

// Sub-options
const options = {
  Maths: ["What is 7 x 8?", "Solve: 15 + (6 × 2) - 4", "Find the square root of 144"],
  Riddles: ["What has keys but can't open locks?", "I speak without a mouth... What am I?", "What can travel around the world while staying in a corner?"],
  Jokes: ["Why don't scientists trust atoms? Because they make up everything!", "Why was the math book sad? Too many problems.", "Why do bicycles fall over? Because they are two-tired!"],
  Sciences: ["Water boils at what temperature in Celsius?", "Name the gas plants use in photosynthesis.", "What organ pumps blood in the body?"],
  Facts: ["Octopuses have three hearts.", "Bananas are berries but strawberries aren't.", "Honey never spoils."],
  Geography: ["Capital of Kenya?", "Longest river in the world?", "Which continent is Madagascar in?"],
  Space: ["Which planet is called the Red Planet?", "What is a light-year?", "Name our galaxy."]
};

let levelOneCompleted = false;

// Append bot message
function botReply(message) {
  const p = document.createElement("p");
  p.textContent = "🤖 " + message;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Append user message
function userReply(message) {
  const p = document.createElement("p");
  p.textContent = "🙋 " + message;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show main options
function showMainChoices() {
  let message = "Choose a topic: " + mainChoices.join(", ");
  botReply(message);
  if (levelOneCompleted) botReply("Or type 'Exit' to leave the chat.");
}

// Handle user input
function handleInput(input) {
  const userChoice = input.trim().toLowerCase();

  if (levelOneCompleted && userChoice === "exit") {
    botReply("Thanks for chatting. Goodbye! 👋");
    setTimeout(() => window.close(), 2000);
    return;
  }

  // Check for main option match
  const matched = mainChoices.find(opt => opt.toLowerCase() === userChoice);

  if (matched) {
    const subs = options[matched];

    // Ask all sub-questions in sequence
    subs.forEach((question, index) => {
      setTimeout(() => {
        botReply(`${matched} Q${index + 1}: ${question}`);
      }, index * 1500);
    });

    // Mark level complete only after all sub-questions
    setTimeout(() => {
      levelOneCompleted = true;
      botReply("✅ Level 1 complete!");
      showMainChoices();
    }, subs.length * 1500 + 1000);
  } else {
    botReply("❌ Not recognized. Type any main topic to switch, or select a valid option.");
    showMainChoices();
  }
}

// Event listeners
sendBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input) {
    userReply(input);
    handleInput(input);
    userInput.value = "";
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Start chat
botReply("Welcome to Henry Wakasiaka's ChatBot! 🎉");
botReply("I'm here to challenge you with fun and facts. Type a topic to begin.");
showMainChoices();
