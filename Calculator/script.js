const screenDisplay = document.querySelector('.current')
const screenRes = document.querySelector('.previous')
const buttons = document.querySelectorAll('button') 

let calculation = []
let accumulativeCalculation

function calculate(button){
    const value = button.textContent
    if (value === "AC"){
        calculation = []
        screenDisplay.textContent = ' '
    } else if (value === "="){
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }


    

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))