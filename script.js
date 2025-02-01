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

function checkPassword() {
  var password = document.getElementById('passwordInput').value;
  var message = document.getElementById('message');
  var loginPage = document.getElementById('loginPage');
  var mainContent = document.getElementById('mainContent');

  if (password === "enter") {
    // Hide login page and show main content
    loginPage.style.display = "none";
    mainContent.style.display = "block";
  } else {
    message.textContent = "Incorrect password. Try again.";
    message.style.color = "red";
  }
}
