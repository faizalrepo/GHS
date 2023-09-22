function checkAnswerAndProceed() {
    const inputElement = document.querySelector('input[type="text"]');
    if (inputElement && inputElement.value === "{ghs_Eerie_Estate}") {
        window.location.href = "home1.html"; // Redirect to round2.html
    }
}

const submitButton = document.querySelector('.button-12');
if (submitButton) {
    submitButton.addEventListener('click', checkAnswerAndProceed);
}
