//Calculator
const mainDis = document.querySelector('.current')
const secDis = document.querySelector('#toout')
const buttons = document.querySelectorAll('.button') 
let conversion = []
let calc
//conversion display
function convertionDis(button){
  //getting button text content
  const value = button.textContent
  if (value === "AC"){
    conversion = [];
    mainDis.textContent = '';
    secDis.textContent = '';
    // secDis.textContent = '';
  } else if (value === "="){
    mainDis.textContent = eval(calc);
  } else if (value === "DEL"){
    conversion.pop();
    calc = conversion.join('');
    mainDis.textContent = calc;
  } else {
    conversion.push(value);
    calc = conversion.join('');
    mainDis.textContent = calc;
  }}
//button trigger
buttons.forEach(button => button.addEventListener('click', () => convertionDis(button)))



//Dark-Lite modes
const mode = document.querySelector('#modeImg');
let val = 1;
//mode switch function
function modeSwitch(){
  if (val == 1){
    this.src = "sources/moon.png";
    document.documentElement.style.setProperty('--bg', 'radial-gradient( #888888, #ffffff)');
    document.documentElement.style.setProperty('--color', '#000000');
    document.documentElement.style.setProperty('--calc-bg', '(220, 220, 250, .5)');
    document.documentElement.style.setProperty('--screen', '#222222');    
    console.log("switched to lite");
    val=2;
    return val;
  } else{
    this.src = "sources/sun.png";
    document.documentElement.style.setProperty('--bg', 'radial-gradient(#101010, #050505)');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--calc-bg', '(2, 2, 2, .75)');
    document.documentElement.style.setProperty('--screen', '#000000');  
    console.log("switched to dark");
    val=1;
    return val;
  }
}

mode.addEventListener('click', modeSwitch);



//getting the input in focus
function setFocus(){
  var input = document.getElementById("fromin");
  input.focus();
};

document.addEventListener("DOMContentLoaded", () => setFocus())



//currency converter
const baseUrl = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency';
let params = new URLSearchParams();
params.set('have', 'USD');
params.set('want', 'INR');
params.set('amount', '10');
let url = `${baseUrl}?${params.toString()}`;

//Setting the currencies
let trigger = document.querySelector('#equals');
const selectfrom = document.getElementById('fromDrop');
selectfrom.addEventListener('change', () => {
  const selectedValue = selectfrom.value;
  console.log('Selected:', selectedValue);
  params.set('have', selectedValue);
});
const selectto = document.getElementById('toDrop');
selectto.addEventListener('change', () => {
  const selectedValue = selectto.value;
  params.set('want', selectedValue);
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f70cf1e80dmsh55b906ab6a562a0p19e55bjsn60595b6de8d3',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};
async function Convert() {
  params.set('amount', mainDis.textContent);
  url = `${baseUrl}?${params.toString()}`;
	const response = await fetch(url, options);
  const result = await response.json();
	console.log(result); 
  secDis.textContent = result.new_amount;
  
  
}
//function call
trigger.addEventListener("click", Convert);