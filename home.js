// home.js

document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-button");
    const teamNameInput = document.querySelector(".black-text-box"); // Use querySelector to select the input

    registerButton.addEventListener("click", function () {
        const teamName = teamNameInput.value;
        if (teamName.trim() !== "") {
            // Get the existing team names or initialize an empty array
            const teamNames = JSON.parse(localStorage.getItem("teamNames")) || [];

            // Add the new team name to the array
            teamNames.push(teamName);

            // Save the updated array back to localStorage
            localStorage.setItem("teamNames", JSON.stringify(teamNames));

            alert(`Team "${teamName}" registered successfully!`);
            teamNameInput.value = ''; // Clear the input field
        } else {
            alert("Please enter a team name.");
        }
    });
});
