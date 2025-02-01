function checkPassword() {
    const password = prompt("Enter the password:");
    if (password === "enter") {
        document.getElementById("content").style.display = "block"; // Show content
        clock(); // Start the clock function
    } else {
        alert("Incorrect password. Try again.");
        checkPassword(); // Ask again
    }
}

function clock() {
    // Format date as "Saturday, February 1"
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('t-0').textContent = new Date().toLocaleDateString('en-US', options); 

    function updateClock() {
        document.getElementById('t-2').textContent = new Date().toLocaleTimeString();
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Run the password check when the page loads
window.onload = checkPassword;
