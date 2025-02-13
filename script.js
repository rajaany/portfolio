document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const passwordInput = document.getElementById("passwordInput");
  const message = document.getElementById("message");
  const confirmationPopup = document.getElementById("confirmationPopup");
  const confirmOk = document.getElementById("confirmOk");
  const confirmClose = document.getElementById("confirmClose");
  const loginPage = document.getElementById("loginPage");
  const mainContent = document.getElementById("mainContent"); 

  startButton.addEventListener("click", function () {
  // Check if passwordInput is already visible to prevent reopening confirmation popup
  if (passwordInput.style.display !== "block") {
    confirmationPopup.style.display = "flex";  // Show the pop-up
  }
});

// Global keydown event for Enter press
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (confirmationPopup.style.display !== "flex") {
      confirmationPopup.style.display = "flex";  // Show the pop-up
    } else if (passwordInput.style.display === "block") {
      if (passwordInput.value.trim().toLowerCase() === "enter") {
        loginPage.style.display = "none"; 
        if (mainContent) mainContent.style.display = "block"; 
      } else {
        // Show the error message and prevent further popup logic
        message.textContent = "Incorrect password. Password is 'Enter'.";
        message.style.color = "red";
        message.style.display = "block"; // Ensure message is visible
        message.classList.add("shake");
        setTimeout(() => message.classList.remove("shake"), 500);
        passwordInput.value = ""; 
      }
    }
  }
});


  confirmOk.addEventListener("click", function () {
    confirmationPopup.style.display = "none";  
    startButton.style.display = "none";  
    passwordInput.style.display = "block";  
    passwordInput.focus();  
  });

  confirmClose.addEventListener("click", function () {
    confirmationPopup.style.display = "none";  
    startButton.style.display = "none";  
    passwordInput.style.display = "block";  
    passwordInput.style.position = "relative"; // Ensure position is set
    passwordInput.style.transition = "top 0.5s"; 
    passwordInput.style.top = "20px";  
    passwordInput.focus();  
  });

  function clock() {
    const currentDate = document.getElementById('currentDate');
    const currentTime = document.getElementById('currentTime');
  
    if (!currentDate || !currentTime) {
      console.error("Clock elements not found!");
      return;
    }

    currentDate.textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    function updateTime() {
      currentTime.textContent = new Date().toLocaleTimeString([], { timeStyle: 'short' });
    }

    updateTime(); 
    setInterval(updateTime, 60000);
  }

  clock(); // Start the clock
});
