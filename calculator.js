var activeField = null; // Variable pour suivre le champ actif
var lastOperator = null; // Variable pour suivre le dernier opérateur cliqué

function setActiveField(field) {
    activeField = field; // Définit le champ actif
}

function appendToDisplay(value) {
    if (activeField) {
        document.getElementById(activeField).value += value; // Ajoute la valeur au champ actif
    }
}

function setLastOperator(operator) {
    lastOperator = operator; // Définit le dernier opérateur cliqué
}

function clearDisplay() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2) || lastOperator === null) {
        alert('Please enter valid numbers and select an operator');
        return;
    }

    var result;
    switch (lastOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator');
            return;
    }

    document.getElementById('display').value = result;
}
