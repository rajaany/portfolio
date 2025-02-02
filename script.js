function clock() {
  var currentDate = document.getElementById('currentDate');
  var currentTime = document.getElementById('currentTime');
  
  // Display current date in the format "Day, Month Date"
  currentDate.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Display current time
  setInterval(function() {
    currentTime.textContent = new Date().toLocaleTimeString();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const loginPage = document.getElementById("loginPage");
  const message = document.getElementById("message");
  const mainContent = document.getElementById("mainContent");

  // Show password input when pressing "Enter" on the button
  startButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      startButton.style.display = "none"; // Hide button
      passwordInput.style.display = "block"; // Show password input
      passwordInput.focus(); // Focus on input field
    }
  });

  // Check password when pressing "Enter" in the input
  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (passwordInput.value === "enter") {
        loginPage.style.display = "none"; // Hide login page
        mainContent.style.display = "block"; // Show main content
      } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "red";
        passwordInput.value = ""; // Clear input
      }
    }
  });
});

