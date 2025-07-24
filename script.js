 // DOM references
const chatBox = document.getElementById("chat-message");
const topicButtons = document.getElementById("topic-buttons");
const nextBtn = document.getElementById("next-btn");
const redoBtn = document.getElementById("redo-btn");
const exitBtn = document.getElementById("exit-btn");

// Main topics and questions
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

// Update bot message
function updateChat(message) {
  chatBox.innerHTML = "🤖 " + message;
}

// Display topic buttons
function showMainChoices() {
  topicButtons.innerHTML = ""; // Clear old buttons
  mainChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => startTopic(choice);
    topicButtons.appendChild(btn);
  });

  updateChat("Choose a topic from the buttons below:");
}

// Start a topic
function startTopic(topic) {
  currentTopic = topic;
  subIndex = 0;
  showQuestion();
}

// Show current question in topic
function showQuestion() {
  const list = options[currentTopic];
  if (subIndex < list.length) {
    updateChat(`${currentTopic} Q${subIndex + 1}: ${list[subIndex]}`);
  } else {
    updateChat(`✅ You've completed all ${currentTopic} questions. Choose a new topic or redo.`);
    currentTopic = null;
    subIndex = 0;
  }
}

// Controls
nextBtn.addEventListener("click", () => {
  if (currentTopic) {
    subIndex++;
    showQuestion();
  } else {
    updateChat("❗ Pick a topic first from below.");
  }
});

redoBtn.addEventListener("click", () => {
  if (currentTopic) {
    subIndex = 0;
    showQuestion();
  } else {
    updateChat("❗ No topic selected. Choose one below.");
  }
});

exitBtn.addEventListener("click", () => {
  updateChat("Thanks for chatting. Goodbye! 👋");
  topicButtons.innerHTML = "";
  currentTopic = null;
  subIndex = 0;
});

// Initialize
updateChat("Welcome to Henry Wakasiaka's ChatBot! 🎉");
showMainChoices();