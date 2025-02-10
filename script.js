function clock() {
  var currentDate = document.getElementById('currentDate');
  var currentTime = document.getElementById('currentTime');
  
  // Display current date in the format "Saturday, February 1"
  currentDate.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  // Function to update time every minute
  function updateTime() {
    currentTime.textContent = new Date().toLocaleTimeString([], { timeStyle: 'short' });
  }

  updateTime(); // Update time immediately
  setInterval(updateTime, 60000); // Update every 60 seconds (1 minute)
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Hide the instructions text when Enter is pressed
    const instructionsText = document.getElementById('ProfileName');
    instructionsText.style.display = 'none';
    
    // Show the password input field after hiding the instructions
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.style.display = 'block';  // Show password input
    passwordInput.focus();  // Focus on the password input
  }
});

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
