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
        screenRes.textContent = ''
    } else if (value === "="){
        screenRes.textContent = accumulativeCalculation
        screenDisplay.textContent = eval(accumulativeCalculation)
    }    else if (value === "DEL"){
        calculation = []
        screenDisplay.textContent = textContent-1
        screenRes.textContent = textContent-1
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }


    

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


const image = document.getElementById('modeImg');
const button = document.getElementById('mode');
let isImage1 = true;

button.addEventListener('click', function() {
  if (isImage1) {
    image.src = 'sources/sun.png';
    isImage1 = false;
  } 
  else {
    image.src = 'sources/moon.png';
    isImage1 = true;
  }
});