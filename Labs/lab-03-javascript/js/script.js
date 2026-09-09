let availableSeats = 17;

function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

function checkSeats() {
    let message = document.getElementById("seatMessage");

    if (availableSeats > 0) {
        message.textContent =
            "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent =
            "Sorry, no seats are available.";
    }
}

function showGreeting() {
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetingMessage");

    output.textContent = "Welcome, " + name + "!";
}