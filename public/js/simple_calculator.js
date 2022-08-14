alert("Hello, it’s the first release of a calculator that only has a summation feature");

function simpleCalc() {
    let firstNum = prompt("please enter first number");
    let secondNum = prompt("please enter second number");
    // check if user doesn't enter any number
    if (!firstNum || !secondNum) {
        alert("please enter valid number");
        location.reload();
    }
    // check if user enter invalid number
    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("please enter valid number");
        location.reload();
    }
    let result = Number(firstNum) + Number(secondNum);
    return document.write(`<div>${firstNum} + ${secondNum} = ${result} </div>`);
} // end of simpleCalc

simpleCalc();