alert("Hello, it’s more advanced calculator you can +, -, x, and / ");

function advCalculator() {
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
    var operator = prompt('Enter operator ( +, -, x or / ): ');
    var result;

    switch (operator) {
        case '+':
            result = Number(firstNum) + Number(secondNum);
            document.write(`<div>${firstNum} + ${secondNum} = ${result} </div>`);
            break;

        case '-':
            result = Number(firstNum) - Number(secondNum);
            document.write(`<div>${firstNum} - ${secondNum} = ${result} </div>`)
            break;

        case 'x':
            result = Number(firstNum) * Number(secondNum);
            document.write(`<div>${firstNum} x ${secondNum} = ${result} </div>`)
            break;
        case '*':
            result = Number(firstNum) * Number(secondNum);
            document.write(`<div>${firstNum} * ${secondNum} = ${result} </div>`)
            break;

        case '/':
            result = Number(firstNum) / Number(secondNum);
            document.write(`<div>${firstNum} / ${secondNum} = ${result} </div>`)
            break;

        default:
            alert('sorry you entered invalid operator please try again');
            location.reload();
            break;
    }
} // end of advCalculator

advCalculator();