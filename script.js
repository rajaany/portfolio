document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const message = document.getElementById("message");
  const confirmationPopup = document.getElementById("confirmationPopup");
  const confirmOk = document.getElementById("confirmOk");
  const confirmClose = document.getElementById("confirmClose");
  const loginPage = document.getElementById("loginPage"); // Added reference to loginPage
  const mainContent = document.getElementById("mainContent"); // Make sure this is defined

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

  // Handle "X" button click: Close the pop-up and move the password input up
  confirmClose.addEventListener("click", function () {
    confirmationPopup.style.display = "none";  // Hide pop-up
    startButton.style.display = "none";  // Hide start button
    passwordInput.style.display = "block";  // Show password input
    passwordInput.style.transition = "top 0.5s"; // Add transition for smooth movement
    passwordInput.style.top = "20%";  // Move the input up (adjust value as needed)
    passwordInput.focus();  // Focus on input field
  });

  document.addEventListener("keydown", function (event) {
    // Check if password input is visible before handling Enter
    if (event.key === "Enter" && passwordInput.style.display === "block") {
      if (passwordInput.value.trim().toLowerCase() === "enter") { 
        loginPage.style.display = "none"; // Hide login page after successful login

        if (mainContent) {
          mainContent.style.display = "block"; // Show main content
        } else {
          console.warn("mainContent not found, skipping.");
        }
      } else {
        message.textContent = "Incorrect password. Password is 'Enter'.";
        message.style.color = "red";
        message.style.display = "block"; // Make sure the message is visible

        // Add the shake effect
        message.classList.add("shake");

        // Remove the shake class after the animation is done (so it can be applied again next time)
        setTimeout(function () {
          message.classList.remove("shake");
        }, 500); // 500ms is the duration of the animation
        passwordInput.value = ""; // Clear input
      }
    }
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
});
