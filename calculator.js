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
    document.getElementById('display').value = '';
}

function add() {
    setLastOperator('+'); // Définit l'opérateur en tant qu'addition
}

function subtract() {
    setLastOperator('-'); // Définit l'opérateur en tant que soustraction
}

function multiply() {
    setLastOperator('*'); // Définit l'opérateur en tant que multiplication
}

function divide() {
    setLastOperator('/'); // Définit l'opérateur en tant que division
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2) || lastOperator === null) {
        alert('Veuillez entrer des nombres valides et sélectionner un opérateur');
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
                alert('Impossible de diviser par zéro');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Opérateur invalide');
            return;
    }

    document.getElementById('display').value = result;
}
