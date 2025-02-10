document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const loginPage = document.getElementById("loginPage");
  const message = document.getElementById("message");
  const profileName = document.getElementById("ProfileName");
  const mainContent = document.getElementById("mainContent"); // Add if needed

  // Ensure ProfileName is visible
  if (profileName) {
    profileName.style.display = "block";
  } else {
    console.error("ProfileName element not found!");
  }

  // Listen for Enter key on the whole document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (startButton.style.display !== "none") {
        startButton.style.display = "none"; // Hide the "Press Enter to Start" text
        passwordInput.style.display = "block"; // Show password input
        passwordInput.classList.add("show-box"); // Add class to show the border
        passwordInput.focus(); // Focus on input field
      } 
      // Otherwise, check the password
      else if (passwordInput.style.display === "block") {
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
