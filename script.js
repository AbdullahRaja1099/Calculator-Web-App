document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
    let result = "";
  
    // Function to update the calculator screen
    function updateScreen() {
      screen.value = currentInput;
    }
  
    // Add click event listeners to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonValue = button.getAttribute("data-num");
  
        if (buttonValue === "=") {
          try {
            result = eval(currentInput);
            currentInput = result.toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else if (buttonValue === "clear") {
          currentInput = "";
          result = "";
        } else if (buttonValue === "clear-num") {
          currentInput = currentInput.slice(0, -1);
        } else {
          currentInput += buttonValue;
        }
  
        updateScreen();
      });
    });
  });
  