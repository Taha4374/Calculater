// // buttons.addEventListener("click", (event) => {
// //   event.preventDefault(); 

// //   const buttonValue = event.target.textContent;
// // });

//   let input = "";
  

//   // buttons.addEventListener("click", (event) => {
//   //   const buttonValue = event.target.textContent;

//     // if (buttonValue === "AC") {
//     //   clearInput();
//     // } else if (buttonValue === "C") {
//     //   deleteLastChar();
//     // } else if (buttonValue === "=") {
//     //   calculate();
//     // } else if (buttonValue === "%") {
//     //   appendOperator("%");
//     // } else if (buttonValue === ".") {
//     //   appendDecimal();
//     // } else if (isNumber(buttonValue)) {
//     //   appendNumber(buttonValue);
//     // } else {
//     //   appendOperator(buttonValue);
//     // }
//   // });

//   function appendNumber(number) {
//     input += number;
//     display.value = input;
//   }

//   function appendOperator(operator) {
//     input += operator;
//     display.value = input;
//   }

//   function appendDecimal() {
//     if (input.indexOf(".") === -1) {
//       input += ".";
//       display.value = input;
//     }
//   }

//   function clearInput() {
//     input = "";
//     display.value = "";
//   }

//   function deleteLastChar() {
//     input = input.slice(0, -1);
//     display.value = input;
//   }

//   function calculate() {
//     try {
//       const result = eval(input);
//       input = result.toString();
//       display.value = input;
//     } catch (error) {
//       alert("Invalid Input!");
//     }
//   }

//   function isNumber(value) {
//     return /^\d+$/.test(value);
//   }

let doSum = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 + num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#add-btn").addEventListener('click', doSum);

let doSubtraction = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 - num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#sub-btn").addEventListener('click', doSubtraction);

let doMultiplication = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 * num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#multi-btn").addEventListener('click', doMultiplication);

let doDivision = (event) => {
    event.preventDefault();

    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;

    let result = num1 / num2;

    document.querySelector("#result").innerHTML = result;
};

document.querySelector("#div-btn").addEventListener('click', doDivision);

document.querySelector("#clear-btn").addEventListener('click', () => {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#result").innerHTML = "";
});