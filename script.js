 // Get DOM elements
const chatBox = document.getElementById("chat-message");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Main categories
const mainChoices = ["Maths", "Riddles", "Jokes", "Sciences", "Facts", "Geography", "Space"];
const options = {
  Maths: ["What is 7 x 8?", "Solve: 15 + (6 × 2) - 4", "Find the square root of 144"],
  Riddles: ["What has keys but can't open locks?", "I speak without a mouth... What am I?", "What can travel around the world while staying in a corner?"],
  Jokes: ["Why don't scientists trust atoms? Because they make up everything!", "Why was the math book sad? Too many problems.", "Why do bicycles fall over? Because they are two-tired!"],
  Sciences: ["Water boils at what temperature in Celsius?", "Name the gas plants use in photosynthesis.", "What organ pumps blood in the body?"],
  Facts: ["Octopuses have three hearts.", "Bananas are berries but strawberries aren't.", "Honey never spoils."],
  Geography: ["Capital of Kenya?", "Longest river in the world?", "Which continent is Madagascar in?"],
  Space: ["Which planet is called the Red Planet?", "What is a light-year?", "Name our galaxy."]
};

let currentTopic = null;
let subIndex = 0;

// Display message in same <p> element
function updateChat(message) {
  chatBox.innerHTML = message;
}

// Show main topic choices
function showMainChoices() {
  const msg = `Choose a topic: ${mainChoices.join(", ")} <br>Type 'Exit' to quit.`;
  updateChat("🤖 " + msg);
  currentTopic = null;
  subIndex = 0;
}

// Handle user input
function handleInput(input) {
  const choice = input.trim();
  const lower = choice.toLowerCase();

  if (lower === "exit") {
    updateChat("🤖 Thanks for chatting. Goodbye! 👋");
    setTimeout(() => window.close(), 1500);
    return;
  }

  // New topic selected
  const matched = mainChoices.find(opt => opt.toLowerCase() === lower);
  if (matched) {
    currentTopic = matched;
    subIndex = 0;
    showNextSubOption();
  } else if (currentTopic && options[currentTopic][subIndex]) {
    // Move to next sub-question
    subIndex++;
    showNextSubOption();
  } else {
    updateChat("🤖 ❌ Invalid input. Choose a valid topic.");
    showMainChoices();
  }
}

// Show next sub-question
function showNextSubOption() {
  const subOptions = options[currentTopic];
  if (subIndex < subOptions.length) {
    updateChat(`🤖 ${currentTopic} Q${subIndex + 1}: ${subOptions[subIndex]}`);
  } else {
    updateChat(`🤖 ✅ You've completed all ${currentTopic} questions.<br>Pick another topic or type 'Exit'.`);
    currentTopic = null;
    subIndex = 0;
  }
}

// Event Listeners
sendBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input) {
    handleInput(input);
    userInput.value = "";
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Start
updateChat("🤖 Welcome to Henry Wakasiaka's ChatBot! 🎉<br>Type a topic to begin.");