document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const loginPage = document.getElementById("loginPage");
  const message = document.getElementById("message");
  const profileName = document.getElementById("ProfileName");

  // Initially, make sure ProfileName is visible
  profileName.style.display = "block";

  // Listen for Enter key on the whole document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // If ProfileName is visible, hide it and show the password input
      if (profileName.style.display !== "none") {
        profileName.style.display = "none";
        startButton.style.display = "none"; // Optional: Hide Start button after pressing Enter
        passwordInput.style.display = "block"; 
        passwordInput.focus();
      } 
      // Otherwise, check the password
      else if (passwordInput.style.display === "block") {
        if (passwordInput.value === "enter") {
          loginPage.style.display = "none"; // Hide login page after successful login
          // Unhide main content if password is correct
          // mainContent.style.display = "block"; // Unhide the main content as per your needs
        } else {
          message.textContent = "Incorrect password. Try again.";
          message.style.color = "red";
          passwordInput.value = ""; // Clear input
        }
      }
    }
  });
});

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
