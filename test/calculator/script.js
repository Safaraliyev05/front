const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

// Add event listeners for number and operator buttons
buttons.forEach(button => {
    if (button.dataset.value) {
        button.addEventListener("click", () => {
            display.value += button.dataset.value;
        });
    }
});

// Clear button
clear.addEventListener("click", () => {
    display.value = "";
});

// Equals button
equals.addEventListener("click", () => {
    try {
        display.value = eval(display.value); // Evaluate expression
    } catch {
        display.value = "Error";
    }
});
