const screenDisplay = document.querySelector('.current')
const screenRes = document.querySelector('.previous')
const buttons = document.querySelectorAll('button') 

let calculation = []
let accumulativeCalculation

function calculate(button){
    const value = button.textContent
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = calculation

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))