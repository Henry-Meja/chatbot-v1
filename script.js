let hideTimer = null; // Global timer reference

function showInfo(type) {
  const box = document.getElementById("infoBox");

  // Show the info box
  box.classList.remove("hidden");

  // Clear any existing timer
  if (hideTimer) {
    clearTimeout(hideTimer);
  }

  // Set new content based on button clicked
  if (type === "skills") {
    box.innerHTML = `
      <h3>💻 My Skills</h3>
      <ul>
        <li>✔ Fullstack Web Dev (React, Node.js)</li>
        <li>✔ Python, JS, PHP, WordPress</li>
        <li>✔ HTML, CSS, CMS </li>
        <li>✔ Express, mongoDB</li>
      </ul>
    `;
  } else if (type === "goals") {
    box.innerHTML = `
      <h3>🚀 My Goals</h3>
      <ul>
        <li>• Build Systems (Online & Offline)</li>
        <li>• Develop Smart Desktop & Mobile Apps</li>
        <li>• Python for automation and AI</li>
        <li>• Develop Embedded Systems</li>
      </ul>
    `;
  } else if (type === "contact") {
    box.innerHTML = `
      <h3>📬 Let's Connect</h3>
      <p style="color:#25d366; font-size: 1.2em;"> Follow Me on Mimo
        <i class ="fa-solid fa-user-plus"> </i>
      </p>
    `;
  }

  // Start auto-hide after 5 seconds
  hideTimer = setTimeout(() => {
    box.classList.add("hidden");
  }, 5000);
}