 document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  const options = ["Weather", "News", "Science", "Exit"];
  
  function displayBotMessage(message) {
    const msg = document.createElement("p");
    msg.textContent = "🤖 " + message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function displayUserMessage(message) {
    const msg = document.createElement("p");
    msg.textContent = "🧑 " + message;
    chatBox.appendChild(msg);
  }

  function showOptions() {
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option-buttons");
    options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => handleOption(option);
      optionContainer.appendChild(btn);
    });
    chatBox.appendChild(optionContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function handleOption(option) {
    displayUserMessage(option);
    if (option === "Exit") {
      displayBotMessage("Goodbye! 👋");
      return;
    }

    // Dummy responses
    const responses = {
      "Weather": "Today's weather is sunny ☀️.",
      "News": "Breaking News: Education Bill passed.",
      "Science": "Science fact: Water boils at 100°C."
    };

    const reply = responses[option] || "I didn't get that.";
    displayBotMessage(reply);
    displayBotMessage("Would you like to choose another option?");
    showOptions(); // loop again
  }

  sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (!message) return;

    displayUserMessage(message);
    userInput.value = "";

    displayBotMessage("I can’t process that. Please choose an option:");
    showOptions();
  });

  // Initial greeting
  displayBotMessage("Welcome to Henry Wakasiaka's ChatBot! Please choose a topic:");
  showOptions();
});