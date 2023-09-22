// Function to check the answer and show the hidden box
function checkAnswer() {
    const answerBox = document.getElementById("answerBox");
    const hiddenBox = document.getElementById("hiddenBox");

    // Check if the answer in the input box is "550"
    if (answerBox.value === "550") {
        // If the answer is correct, display the hidden box
        hiddenBox.style.display = "block";
    } else {
        // If the answer is incorrect, you can handle it here or show an error message
        alert("Sorry, the answer is incorrect. Please try again.");
    }
}
