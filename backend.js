buttons.addEventListener("click", (event) => {
  event.preventDefault(); 

  const buttonValue = event.target.textContent;
});

  let input = "";

  buttons.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;

    if (buttonValue === "AC") {
      clearInput();
    } else if (buttonValue === "C") {
      deleteLastChar();
    } else if (buttonValue === "=") {
      calculate();
    } else if (buttonValue === "%") {
      appendOperator("%");
    } else if (buttonValue === ".") {
      appendDecimal();
    } else if (isNumber(buttonValue)) {
      appendNumber(buttonValue);
    } else {
      appendOperator(buttonValue);
    }
  });

  function appendNumber(number) {
    input += number;
    display.value = input;
  }

  function appendOperator(operator) {
    input += operator;
    display.value = input;
  }

  function appendDecimal() {
    if (input.indexOf(".") === -1) {
      input += ".";
      display.value = input;
    }
  }

  function clearInput() {
    input = "";
    display.value = "";
  }

  function deleteLastChar() {
    input = input.slice(0, -1);
    display.value = input;
  }

  function calculate() {
    try {
      const result = eval(input);
      input = result.toString();
      display.value = input;
    } catch (error) {
      alert("Invalid Input!");
    }
  }

  function isNumber(value) {
    return /^\d+$/.test(value);
  }
