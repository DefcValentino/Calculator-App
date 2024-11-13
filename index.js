
const display = document.getElementById ('display');

//// function to display the number
function appendNumber(number) {
    display.value += number ;

}

//// function to display operator
function appendOperator(operator){
    display.value += operator; 
};


//// function to clear Display
function clearDisplay() {
    display.value = '';
}

//// function to calculate
function calculate() {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
}