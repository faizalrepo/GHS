// Set the timer's initial time in seconds
let countdownTime = 7200; // 7200 seconds (2 hours)

// Function to update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');

    if (countdownTime > 0) {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        // Display the remaining time in the timer element
        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        countdownTime--; // Decrement the remaining time
    } else {
        // When the timer reaches 0, you can perform actions here
        timerElement.textContent = '00:00:00'; // Display "00:00:00" when the timer is done
        clearInterval(timerInterval); // Stop the timer
    }
}

// Initial call to update the timer
updateTimer();

// Update the timer every second (1000 milliseconds)
const timerInterval = setInterval(updateTimer, 1000);
