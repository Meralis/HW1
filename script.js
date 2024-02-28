const operatorPrompt = 'Please choose an arithmetic operation: "add", "sub", "mult" or "div"';
const firstNumberPrompt = 'Please enter first number';
const secondNumberPrompt = 'Please enter second number';
const errorMessage = 'Sorry, you input wrong data';

const selectedOperation = prompt(operatorPrompt);
if (!selectedOperation ||
    selectedOperation !== 'add' &&
    selectedOperation !== 'sub' &&
    selectedOperation !== 'mult' &&
    selectedOperation !== 'div') {
    alert(errorMessage);
} else {
    const firstOperand = +prompt(firstNumberPrompt);
    const secondOperand = +prompt(secondNumberPrompt);
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        alert(errorMessage);
    } else {
        let result;
        let operator;
        switch (selectedOperation) {
            case "add":
                result = firstOperand + secondOperand;
                operator = '+';
                break;
            case "sub":
                result = firstOperand - secondOperand;
                operator = '-';
                break;
            case "mult":
                result = firstOperand * secondOperand;
                operator = '*';
                break;
            case "div":
                if (secondOperand === 0) {
                    alert('Division by zero is not allowed');
                    break;
                } else {
                    result = firstOperand / secondOperand;
                    operator = '/';
                }
                break;
            default:
                alert(errorMessage);
        }
        if (result !== undefined) {
            alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
        }
    }
}




