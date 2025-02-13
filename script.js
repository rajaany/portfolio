document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const message = document.getElementById("message");
  const confirmationPopup = document.getElementById("confirmationPopup");
  const confirmOk = document.getElementById("confirmOk");
  const confirmClose = document.getElementById("confirmClose");

  // Ensure the start button is focused when the page loads
  startButton.focus();  // This focuses the button on page load so Enter will work.

  // Listen for the Enter key press on the startButton
  startButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      confirmationPopup.style.display = "flex";  // Show the pop-up
    }
  });

  // Handle "OK" button click: Hide pop-up and show password input
  confirmOk.addEventListener("click", function () {
    confirmationPopup.style.display = "none";  // Hide pop-up
    startButton.style.display = "none";  // Hide start button
    passwordInput.style.display = "block";  // Show password input
    passwordInput.focus();  // Focus on input field
  });

  // Handle "X" button click: Close the pop-up
  confirmClose.addEventListener("click", function () {
    confirmationPopup.style.display = "none";  // Hide pop-up
  });

  // Listen for Enter key on the document (for password submission)
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && passwordInput.style.display === "block") {
      if (passwordInput.value.trim().toLowerCase() === "enter") {
        message.textContent = "Welcome!";
        message.style.color = "green";  // Add a welcome message
        passwordInput.value = "";  // Clear input
      } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "red";  // Show error message
        passwordInput.value = "";  // Clear input
      }
    }
  });

});

// Clock function
function clock() {
  var currentDate = document.getElementById('currentDate');
  var currentTime = document.getElementById('currentTime');
  
  if (!currentDate || !currentTime) {
    console.error("Clock elements not found!");
    return;
  }

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

// Start the clock
clock();
