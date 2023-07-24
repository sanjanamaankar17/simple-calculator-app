 
const App = (() => {
 
    const display = document.querySelector('#display');
    let operator = null;
    let operand1 = null;
    let operand2 = null;
 
    const updateDisplay = (value) => {
        display.textContent = value;
     };
 
    const handleNumberClick = (e) => {
        let number = e.target.textContent;
        if (operator === null) {
            operand1 = operand1 === null ? number
                : operand1 + number;
            updateDisplay(operand1);
        } else {
            operand2 = operand2 === null ? number
                : operand2 + number;
            updateDisplay(operand2)
        }
    };
 
    const handleOperatorClick = (e) => {
        operator = e.target.textContent;
    };
 
    const handleEqualClick = () => { 
        if (operand1 !== null && operator !== null && operand2 != null) {
            let num1 = parseFloat(operand1);
            let num2 = parseFloat(operand2);
            let ans = null;
 
            switch (operator) {
                case '+':
                    ans = calculator.add(num1,num2);
                    break;
                case '-':
                    ans = calculator.sub(num1,num2);
                    break;
                case '*':
                    ans = calculator.pro(num1,num2);
                    break;
                case '/':
                    ans = calculator.div(num1,num2);
                    break;
            }
 
            updateDisplay(ans);
 
            operand1 = ans.toString();
            operand2 = null;
            operator = null;   
        }
    };
 
    const handleClearClick = () => { 
        operand1 = null;
        operand2 = null;
        operator = null;
        updateDisplay('0');
    };
 
    return {
        handleNumberClick,
        handleOperatorClick,
        handleEqualClick,
        handleClearClick,
    };
})();
 
 
 
document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', App.handleNumberClick);
});
 
const operators = document.querySelectorAll('.operator');
 
operators.forEach(operator => {
    operator.addEventListener('click',App.handleOperatorClick);
});
 
 
document.querySelector('#equals')
    .addEventListener('click', App.handleEqualClick);
 
const clear = document.querySelector('#clear');
clear.addEventListener('click',App.handleClearClick);

/* how to install react.js 
1. install node js - long term support (lts version)
2. terminal - node version
3. in terminal --> node -v ; npx ;  npx -v ; npx create-react-app ; or npx create-react-app my-app(or file name or folder name) ; npm start ;
4. ES7 + react extension in VScode.
5. create a folder for my-project and enter the following command in it.
6. Open my-app folder in terminal and enter the npm install react-dom, react-router-dom, axios --> command in terminal 
7. after step 6, open package.json and open the dependencies and other packages.
 */