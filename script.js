function clock() {
  var currentDate = document.getElementById('currentDate');
  var currentTime = document.getElementById('currentTime');
  
  // Display current date in the format "Day, Month Date"
  currentDate.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
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

  // Listen for Enter key on the whole document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // If start button is visible, hide it and show input field
      if (startButton.style.display !== "none") {
        startButton.style.display = "none"; 
        passwordInput.style.display = "block"; 
        passwordInput.focus();
      } 
      // Otherwise, check the password
      else if (passwordInput.style.display === "block") {
        if (passwordInput.value === "enter") {
          loginPage.style.display = "none"; 
          mainContent.style.display = "block"; 
        } else {
          message.textContent = "Incorrect password. Try again.";
          message.style.color = "red";
          passwordInput.value = ""; // Clear input
        }
      }
    }
  });
});
