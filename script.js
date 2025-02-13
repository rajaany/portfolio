document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const loginPage = document.getElementById("loginPage");
  const message = document.getElementById("message");
  const profileName = document.getElementById("ProfileName");
  const mainContent = document.getElementById("mainContent");
  const confirmationPopup = document.getElementById("confirmationPopup");
  const confirmOk = document.getElementById("confirmOk");
  const confirmClose = document.getElementById("confirmClose");

  // Ensure ProfileName is visible
  if (profileName) {
    profileName.style.display = "block";
  } else {
    console.error("ProfileName element not found!");
  }

  // Show confirmation pop-up when startButton is clicked
  startButton.addEventListener("click", function () {
    confirmationPopup.style.display = "flex";
  });

  // Handle "OK" button click: Hide pop-up and show password input
  confirmOk.addEventListener("click", function () {
    confirmationPopup.style.display = "none"; // Hide pop-up
    startButton.style.display = "none"; // Hide start button
    passwordInput.style.display = "block"; // Show password input
    passwordInput.classList.add("show-box"); // Add class to show border
    passwordInput.focus(); // Focus on input field
  });

  // Handle "X" button click: Close the pop-up
  confirmClose.addEventListener("click", function () {
    confirmationPopup.style.display = "none"; // Hide pop-up
  });

  // Listen for Enter key on the password input field
  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
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
