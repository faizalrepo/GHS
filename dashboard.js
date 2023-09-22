// dashboard.js (Dashboard Page)

document.addEventListener("DOMContentLoaded", function () {
    const teamList = document.getElementById("team-list");

    // Get the array of team names from localStorage
    const teamNames = JSON.parse(localStorage.getItem("teamNames")) || [];

    // Display each registered team name in the list
    teamNames.forEach(function (teamName) {
        const listItem = document.createElement("li");
        listItem.textContent = `Team: ${teamName}`;
        teamList.appendChild(listItem);
    });
});
