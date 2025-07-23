/*
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

let currentState = "start";

const chatFlow = {
  start: {
    message: "Choose a topic:\n1. Riddle\n2. Math\n3. Joke\n4. Science\n5. Exit",
    options: {
      "1": "riddle1",
      "2": "math1",
      "3": "joke1",
      "4": "science1",
      "5": "exit"
    }
  },

  riddle1: {
    message: "🔍 What has keys but can't open locks?",
    answer: "piano",
    success: "🎉 Correct! Want another?\n1. Yes\n2. Menu",
    next: {
      "1": "riddle2",
      "2": "start"
    }
  },
  riddle2: {
    message: "🧩 What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "m",
    success: "🧠 You're right! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  math1: {
    message: "🧠 What's 12 + 37 × 2 ?",
    answer: "86",
    success: "✅ You're sharp! Try another?\n1. Yes\n2. Menu",
    next: {
      "1": "math2",
      "2": "start"
    }
  },
  math2: {
    message: "➕ What is the square root of 144?",
    answer: "12",
    success: "✔️ Smart! Go on?\n1. More Math\n2. Menu",
    next: {
      "1": "math3",
      "2": "start"
    }
  },
  math3: {
    message: "➗ What is 99 divided by 3?",
    answer: "33",
    success: "Nice job! Back to start?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  joke1: {
    message: "😂 Why don’t scientists trust atoms?",
    answer: "they make up everything",
    success: "🤣 Good one! Next?\n1. Yes\n2. Menu",
    next: {
      "1": "joke2",
      "2": "start"
    }
  },
  joke2: {
    message: "😆 Why did the math book look sad?",
    answer: "too many problems",
    success: "Haha! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  science1: {
    message: "🌡️ What gas do plants absorb from the air?",
    answer: "carbon dioxide",
    success: "✅ Yes! Again?\n1. Yes\n2. Menu",
    next: {
      "1": "science2",
      "2": "start"
    }
  },
  science2: {
    message: "☀️ What star is at the center of our solar system?",
    answer: "sun",
    success: "🌞 Correct! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  exit: {
    message: "👋 Thanks for chatting with Henry Wakasiaka Chatbot. Come again!",
    options: {}
  }
};

function appendMessage(msg, sender = "bot") {
  const p = document.createElement("p");
  p.className = sender === "bot" ? "bot-msg" : "user-msg";
  p.textContent = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;

  appendMessage(input, "user");
  userInput.value = "";

  const state = chatFlow[currentState];

  if (state.answer) {
    if (input.includes(state.answer)) {
      appendMessage(state.success);
      currentState = Object.keys(state.next)[0]; // wait for choice
    } else {
      appendMessage("❌ Try again.");
    }
  } else if (state.options) {
    const nextState = state.options[input];
    if (nextState) {
      currentState = nextState;
      appendMessage(chatFlow[currentState].message);
    } else {
      appendMessage("❗Invalid option. Try again.");
    }
  } else if (state.next) {
    const next = state.next[input];
    if (next) {
      currentState = next;
      appendMessage(chatFlow[currentState].message);
    } else {
      appendMessage("❗Invalid option.");
    }
  }
}
*/
// updated scripts

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

let currentState = "start";

const chatFlow = {
  start: {
    message: "Choose a topic:\n1. Riddle\n2. Math\n3. Joke\n4. Science\n5. Exit",
    options: {
      "1": "riddle1",
      "2": "math1",
      "3": "joke1",
      "4": "science1",
      "5": "exit"
    }
  },

  riddle1: {
    message: "🔍 What has keys but can't open locks?",
    answer: "piano",
    success: "🎉 Correct! Want another?\n1. Yes\n2. Menu",
    next: {
      "1": "riddle2",
      "2": "start"
    }
  },
  riddle2: {
    message: "🧩 What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "m",
    success: "🧠 You're right! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  math1: {
    message: "🧠 What's 12 + 37 × 2 ?",
    answer: "86",
    success: "✅ You're sharp! Try another?\n1. Yes\n2. Menu",
    next: {
      "1": "math2",
      "2": "start"
    }
  },
  math2: {
    message: "➕ What is the square root of 144?",
    answer: "12",
    success: "✔️ Smart! Go on?\n1. More Math\n2. Menu",
    next: {
      "1": "math3",
      "2": "start"
    }
  },
  math3: {
    message: "➗ What is 99 divided by 3?",
    answer: "33",
    success: "Nice job! Back to start?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  joke1: {
    message: "😂 Why don’t scientists trust atoms?",
    answer: "they make up everything",
    success: "🤣 Good one! Next?\n1. Yes\n2. Menu",
    next: {
      "1": "joke2",
      "2": "start"
    }
  },
  joke2: {
    message: "😆 Why did the math book look sad?",
    answer: "too many problems",
    success: "Haha! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  science1: {
    message: "🌡️ What gas do plants absorb from the air?",
    answer: "carbon dioxide",
    success: "✅ Yes! Again?\n1. Yes\n2. Menu",
    next: {
      "1": "science2",
      "2": "start"
    }
  },
  science2: {
    message: "☀️ What star is at the center of our solar system?",
    answer: "sun",
    success: "🌞 Correct! Back to menu?\n1. Yes\n2. Exit",
    next: {
      "1": "start",
      "2": "exit"
    }
  },

  exit: {
    message: "👋 Thanks for chatting with Henry Wakasiaka Chatbot. Come again!",
    options: {}
  }
};

function appendMessage(msg, sender = "bot") {
  const p = document.createElement("p");
  p.className = sender === "bot" ? "bot-msg" : "user-msg";
  p.textContent = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;

  appendMessage(input, "user");
  userInput.value = "";

  const state = chatFlow[currentState];

  if (state.answer) {
    if (input.includes(state.answer)) {
      appendMessage(state.success);
      currentState = Object.keys(state.next)[0]; // wait for choice
    } else {
      appendMessage("❌ Try again.");
    }
  } else if (state.options) {
    const nextState = state.options[input];
    if (nextState) {
      currentState = nextState;
      appendMessage(chatFlow[currentState].message);
    } else {
      appendMessage("❗Invalid option. Try again.");
    }
  } else if (state.next) {
    const next = state.next[input];
    if (next) {
      currentState = next;
      appendMessage(chatFlow[currentState].message);
    } else {
      appendMessage("❗Invalid option.");
    }
  }
}
