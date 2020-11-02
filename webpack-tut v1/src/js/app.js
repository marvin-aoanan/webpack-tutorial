var message = false;

triggerButton.addEventListener('click', toggleMessage);
updateMessage();

function toggleMessage() {
    message = !message;
    updateMessage();
    updateTriggerButton();
}

function updateTriggerButton() {
    if (message) {
        triggerButton.textContent = 'Hide the message';
    } else {
        triggerButton.textContent = 'Show the message';
    }
}

function updateMessage() {
    if (message) {
        showMessage.style.display = 'block';
    } else {
        showMessage.style.display = 'none';
    }
}