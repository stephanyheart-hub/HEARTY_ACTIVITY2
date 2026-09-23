const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
    } else {
        alert("Login successful!");
    }
});

const greenBtn = document.getElementById("greenBtn");
const yellowBtn = document.getElementById("yellowBtn");

greenBtn.addEventListener("click", function() {
    document.querySelector(".purple-section p").textContent =
        "Welcome!";
});

yellowBtn.addEventListener("click", function() {
    document.querySelector(".purple-section p").textContent =
        "You clicked Next!";
});