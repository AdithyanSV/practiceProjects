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



//unit converter
const baseUrl = 'https://unitconversion.p.rapidapi.com/';
let url = `${baseUrl}angle/radian/degree/1'`;
//Setting the units
let trigger = document.querySelector('#equals');
const selectunit = document.getElementById('unit');
const selectfrom = document.getElementById('fromDrop');
const selectto = document.getElementById('toDrop');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02ba5699bbmshdac31bc49d84ec3p168e7ejsnc5d6206d0808',
		'X-RapidAPI-Host': 'unitconversion.p.rapidapi.com'
	}
};
async function unitConvert() {
  type = selectunit.value;
  from = selectfrom.value;
  to = selectto.value;
  url = `${baseUrl}${selectunit.value}/${selectfrom.value}/${selectto.value}/${mainDis.textContent}`;
  console.log(`unit-type: ${type}, from: ${from}, to: ${to}`);
  console.log(url);
	const response = await fetch(url, options);
  const result = await response.json();
	console.log(result); 
  secDis.textContent = result.roundedResult;
  
  
}
//function call
trigger.addEventListener("click", unitConvert);


//Unit Options

function updateOptions() {
  var select1 = document.getElementById("fromDrop");
  var select2 = document.getElementById("toDrop");
  var anotherSelector = document.getElementById("unit");
  var selectedSet = anotherSelector.value;
  
  // Clear existing options
  select1.innerHTML = "";
  select2.innerHTML = "";
  
  // Add new options based on the selected set
  if (selectedSet === "angle") {
    //Selector1
    select1.add(new Option("Radian", "radian"));
    select1.add(new Option("Turn", "turn"));
    select1.add(new Option("Degree", "degree"));
    select1.add(new Option("Gradian", "gradian"));
    //Selector2
    select2.add(new Option("Radian", "radian"));
    select2.add(new Option("Turn", "turn"));
    select2.add(new Option("Degree", "degree"));
    select2.add(new Option("Gradian", "gradian"));
    //Setting default values
    select1.value = "radian";
    select2.value = "degree";
    
  } else if (selectedSet === "area") {
    //Selector1
    select1.add(new Option("Square Meter", "square-meter"));
    select1.add(new Option("Square Petameter", "square-petameter"));
    select1.add(new Option("Square Terameter", "square-terameter"));
    select1.add(new Option("Square Gigameter", "square-gigameter"));
    select1.add(new Option("Square Megameter", "square-megameter"));
    select1.add(new Option("Square Kilometer", "square-kilometer"));
    select1.add(new Option("Square Hectometer", "square-hectometer"));
    select1.add(new Option("Square Decameter", "square-decameter"));
    select1.add(new Option("Square Decimeter", "square-decimeter"));
    select1.add(new Option("Square Centimeter", "square-centimeter"));
    select1.add(new Option("Square Millimeter", "square-millimeter"));
    select1.add(new Option("Square Micrometer", "square-micrometer"));
    select1.add(new Option("Square Nanometer", "square-nanometer"));
    select1.add(new Option("Square Picometer", "square-picometer"));
    select1.add(new Option("Square Femtometer", "square-femtometer"));
    select1.add(new Option("Acre", "acre"));
    select1.add(new Option("Centiare", "centiare"));
    select1.add(new Option("Deciare", "deciare"));
    select1.add(new Option("Are", "are"));
    select1.add(new Option("Decare", "decare"));
    select1.add(new Option("Hectare", "hectare"));
    select1.add(new Option("Square Feet", "square-feet"));
    select1.add(new Option("Square Inch", "square-inch"));
    select1.add(new Option("Square Yard", "square-yard"));
    select1.add(new Option("Square Mile", "square-mile"));
    //Selector2
    select2.add(new Option("Square Meter", "square-meter"));
    select2.add(new Option("Square Petameter", "square-petameter"));
    select2.add(new Option("Square Terameter", "square-terameter"));
    select2.add(new Option("Square Gigameter", "square-gigameter"));
    select2.add(new Option("Square Megameter", "square-megameter"));
    select2.add(new Option("Square Kilometer", "square-kilometer"));
    select2.add(new Option("Square Hectometer", "square-hectometer"));
    select2.add(new Option("Square Decameter", "square-decameter"));
    select2.add(new Option("Square Decimeter", "square-decimeter"));
    select2.add(new Option("Square Centimeter", "square-centimeter"));
    select2.add(new Option("Square Millimeter", "square-millimeter"));
    select2.add(new Option("Square Micrometer", "square-micrometer"));
    select2.add(new Option("Square Nanometer", "square-nanometer"));
    select2.add(new Option("Square Picometer", "square-picometer"));
    select2.add(new Option("Square Femtometer", "square-femtometer"));
    select2.add(new Option("Acre", "acre"));
    select2.add(new Option("Centiare", "centiare"));
    select2.add(new Option("Deciare", "deciare"));
    select2.add(new Option("Are", "are"));
    select2.add(new Option("Decare", "decare"));
    select2.add(new Option("Hectare", "hectare"));
    select2.add(new Option("Square Feet", "square-feet"));
    select2.add(new Option("Square Inch", "square-inch"));
    select2.add(new Option("Square Yard", "square-yard"));
    select2.add(new Option("Square Mile", "square-mile"));
    //Setting default values
    select1.value = "square-meter";
    select2.value = "square-kilometer";
    
  } else if (selectedSet === "data") {
    //Selector1
    select1.add(new Option("Bit", "bit"));
    select1.add(new Option("Pebibit", "pebibit"));
    select1.add(new Option("Tebibit", "tebibit"));
    select1.add(new Option("Gibibit", "gibibit"));
    select1.add(new Option("Mebibit", "mebibit"));
    select1.add(new Option("Kibibit", "kibibit"));
    select1.add(new Option("Petabit", "petabit"));
    select1.add(new Option("Terabit", "terabit"));
    select1.add(new Option("Gigabit", "gigabit"));
    select1.add(new Option("Megabit", "megabit"));
    select1.add(new Option("Kilobit", "kilobit"));
    select1.add(new Option("Hectobit", "hectobit"));
    select1.add(new Option("Decabit", "decabit"));
    select1.add(new Option("Decibit", "decibit"));
    select1.add(new Option("Centibit", "centibit"));
    select1.add(new Option("Millibit", "millibit"));
    select1.add(new Option("Microbit", "microbit"));
    select1.add(new Option("Nanobit", "nanobit"));
    select1.add(new Option("Picobit", "picobit"));
    select1.add(new Option("Femtobit", "femtobit"));
    select1.add(new Option("Nibble", "nibble"));
    select1.add(new Option("Byte", "byte"));
    select1.add(new Option("Pebibyte", "pebibyte"));
    select1.add(new Option("Tebibyte", "tebibyte"));
    select1.add(new Option("Gibibyte", "gibibyte"));
    select1.add(new Option("Mebibyte", "mebibyte"));
    select1.add(new Option("Kibibyte", "kibibyte"));
    select1.add(new Option("Petabyte", "petabyte"));
    select1.add(new Option("Terabyte", "terabyte"));
    select1.add(new Option("Gigabyte", "gigabyte"));
    select1.add(new Option("Megabyte", "megabyte"));
    select1.add(new Option("Kilobyte", "kilobyte"));
    select1.add(new Option("Hectobyte", "hectobyte"));
    select1.add(new Option("Decabyte", "decabyte"));
    select1.add(new Option("Decibyte", "decibyte"));
    select1.add(new Option("Centibyte", "centibyte"));
    select1.add(new Option("Millibyte", "millibyte"));
    select1.add(new Option("Microbyte", "microbyte"));
    select1.add(new Option("Nanobyte", "nanobyte"));
    select1.add(new Option("Picobyte", "picobyte"));
    select1.add(new Option("Femtobyte", "femtobyte"));
    select1.add(new Option("Hextet", "hextet"));
    //Selector2
    select2.add(new Option("Bit", "bit"));
    select2.add(new Option("Pebibit", "pebibit"));
    select2.add(new Option("Tebibit", "tebibit"));
    select2.add(new Option("Gibibit", "gibibit"));
    select2.add(new Option("Mebibit", "mebibit"));
    select2.add(new Option("Kibibit", "kibibit"));
    select2.add(new Option("Petabit", "petabit"));
    select2.add(new Option("Terabit", "terabit"));
    select2.add(new Option("Gigabit", "gigabit"));
    select2.add(new Option("Megabit", "megabit"));
    select2.add(new Option("Kilobit", "kilobit"));
    select2.add(new Option("Hectobit", "hectobit"));
    select2.add(new Option("Decabit", "decabit"));
    select2.add(new Option("Decibit", "decibit"));
    select2.add(new Option("Centibit", "centibit"));
    select2.add(new Option("Millibit", "millibit"));
    select2.add(new Option("Microbit", "microbit"));
    select2.add(new Option("Nanobit", "nanobit"));
    select2.add(new Option("Picobit", "picobit"));
    select2.add(new Option("Femtobit", "femtobit"));
    select2.add(new Option("Nibble", "nibble"));
    select2.add(new Option("Byte", "byte"));
    select2.add(new Option("Pebibyte", "pebibyte"));
    select2.add(new Option("Tebibyte", "tebibyte"));
    select2.add(new Option("Gibibyte", "gibibyte"));
    select2.add(new Option("Mebibyte", "mebibyte"));
    select2.add(new Option("Kibibyte", "kibibyte"));
    select2.add(new Option("Petabyte", "petabyte"));
    select2.add(new Option("Terabyte", "terabyte"));
    select2.add(new Option("Gigabyte", "gigabyte"));
    select2.add(new Option("Megabyte", "megabyte"));
    select2.add(new Option("Kilobyte", "kilobyte"));
    select2.add(new Option("Hectobyte", "hectobyte"));
    select2.add(new Option("Decabyte", "decabyte"));
    select2.add(new Option("Decibyte", "decibyte"));
    select2.add(new Option("Centibyte", "centibyte"));
    select2.add(new Option("Millibyte", "millibyte"));
    select2.add(new Option("Microbyte", "microbyte"));
    select2.add(new Option("Nanobyte", "nanobyte"));
    select2.add(new Option("Picobyte", "picobyte"));
    select2.add(new Option("Femtobyte", "femtobyte"));
    select2.add(new Option("Hextet", "hextet"));
    //Setting default values
    select1.value = "bit";
    select2.value = "byte";
    
  } else if (selectedSet === "force") {
    //Selector1
    select1.add(new Option("Newton", "newton"));
    select1.add(new Option("Dyne", "dyne"));
    select1.add(new Option("Kilogram force", "kilogram-force"));
    select1.add(new Option("Kilopond", "kilopond"));
    select1.add(new Option("Pound Force", "pound-force"));
    select1.add(new Option("Poundal", "poundal"));
    //Selector2
    select2.add(new Option("Newton", "newton"));
    select2.add(new Option("Dyne", "dyne"));
    select2.add(new Option("Kilogram force", "kilogram-force"));
    select2.add(new Option("Kilopond", "kilopond"));
    select2.add(new Option("Pound Force", "pound-force"));
    select2.add(new Option("Poundal", "poundal"));
    //Setting default values
    select1.value = "newton";
    select2.value = "kilogram-force";
    
  } else if (selectedSet === "length") {
    //Selector1
    select1.add(new Option("Meter", "meter"));
    select1.add(new Option("Petameter", "petameter"));
    select1.add(new Option("Terameter", "terameter"));
    select1.add(new Option("Gigameter", "gigameter"));
    select1.add(new Option("Megameter", "megameter"));
    select1.add(new Option("Kilometer", "kilometer"));
    select1.add(new Option("Hectometer", "hectometer"));
    select1.add(new Option("Decameter", "decameter"));
    select1.add(new Option("Decimeter", "decimeter"));
    select1.add(new Option("Centimeter", "centimeter"));
    select1.add(new Option("Millimeter", "millimeter"));
    select1.add(new Option("Micrometer", "micrometer"));
    select1.add(new Option("Nanometer", "nanometer"));
    select1.add(new Option("Picometer", "picometer"));
    select1.add(new Option("Femtometer", "femtometer"));
    select1.add(new Option("Feet", "feet"));
    select1.add(new Option("Inch", "inch"));
    select1.add(new Option("Yard", "yard"));
    select1.add(new Option("Mile", "mile"));
    select1.add(new Option("Nautical Mile", "nautical mile"));
    //Selector2
    select2.add(new Option("Meter", "meter"));
    select2.add(new Option("Petameter", "petameter"));
    select2.add(new Option("Terameter", "terameter"));
    select2.add(new Option("Gigameter", "gigameter"));
    select2.add(new Option("Megameter", "megameter"));
    select2.add(new Option("Kilometer", "kilometer"));
    select2.add(new Option("Hectometer", "hectometer"));
    select2.add(new Option("Decameter", "decameter"));
    select2.add(new Option("Decimeter", "decimeter"));
    select2.add(new Option("Centimeter", "centimeter"));
    select2.add(new Option("Millimeter", "millimeter"));
    select2.add(new Option("Micrometer", "micrometer"));
    select2.add(new Option("Nanometer", "nanometer"));
    select2.add(new Option("Picometer", "picometer"));
    select2.add(new Option("Femtometer", "femtometer"));
    select2.add(new Option("Feet", "feet"));
    select2.add(new Option("Inch", "inch"));
    select2.add(new Option("Yard", "yard"));
    select2.add(new Option("Mile", "mile"));
    select2.add(new Option("Nautical Mile", "nautical mile"));
    //Setting default values
    select1.value = "meter";
    select2.value = "feet";
    
  } else if (selectedSet === "mass") {
    //Selector1
    select1.add(new Option("Gram", "gram"));
    select1.add(new Option("Petagram", "petagram"));
    select1.add(new Option("Teragram", "teragram"));
    select1.add(new Option("Gigagram", "gigagram"));
    select1.add(new Option("Megagram", "megagram"));
    select1.add(new Option("Kilogram", "kilogram"));
    select1.add(new Option("Hectogram", "hectogram"));
    select1.add(new Option("Decagram", "decagram"));
    select1.add(new Option("Decigram", "decigram"));
    select1.add(new Option("Centigram", "centigram"));
    select1.add(new Option("Milligram", "milligram"));
    select1.add(new Option("Microgram", "microgram"));
    select1.add(new Option("Nanogram", "nanogram"));
    select1.add(new Option("Picogram", "picogram"));
    select1.add(new Option("Femtogram", "femtogram"));
    select1.add(new Option("Tonne", "tonne"));
    select1.add(new Option("Pound", "pound"));
    select1.add(new Option("Stone", "stone"));
    select1.add(new Option("Ounce", "ounce"));
    select1.add(new Option("Short Ton", "short-ton"));
    select1.add(new Option("US Ton", "us-ton"));
    select1.add(new Option("Long Ton", "long-ton"));
    //Selector2
    select2.add(new Option("Gram", "gram"));
    select2.add(new Option("Petagram", "petagram"));
    select2.add(new Option("Teragram", "teragram"));
    select2.add(new Option("Gigagram", "gigagram"));
    select2.add(new Option("Megagram", "megagram"));
    select2.add(new Option("Kilogram", "kilogram"));
    select2.add(new Option("Hectogram", "hectogram"));
    select2.add(new Option("Decagram", "decagram"));
    select2.add(new Option("Decigram", "decigram"));
    select2.add(new Option("Centigram", "centigram"));
    select2.add(new Option("Milligram", "milligram"));
    select2.add(new Option("Microgram", "microgram"));
    select2.add(new Option("Nanogram", "nanogram"));
    select2.add(new Option("Picogram", "picogram"));
    select2.add(new Option("Femtogram", "femtogram"));
    select2.add(new Option("Tonne", "tonne"));
    select2.add(new Option("Pound", "pound"));
    select2.add(new Option("Stone", "stone"));
    select2.add(new Option("Ounce", "ounce"));
    select2.add(new Option("Short Ton", "short-ton"));
    select2.add(new Option("US Ton", "us-ton"));
    select2.add(new Option("Long Ton", "long-ton"));
    //Setting default values
    select1.value = "kilogram";
    select2.value = "pound";
    
  } else if (selectedSet === "pressure") {
    //Selector1
    select1.add(new Option("Pascal", "pascal"));
    select1.add(new Option("Petapascal", "petapascal"));
    select1.add(new Option("Terapascal", "terapascal"));
    select1.add(new Option("Gigapascal", "gigapascal"));
    select1.add(new Option("Megapascal", "megapascal"));
    select1.add(new Option("Kilopascal", "kilopascal"));
    select1.add(new Option("Hectopascal", "hectopascal"));
    select1.add(new Option("Decapascal", "decapascal"));
    select1.add(new Option("Decipascal", "decipascal"));
    select1.add(new Option("Centipascal", "centipascal"));
    select1.add(new Option("Millipascal", "millipascal"));
    select1.add(new Option("Micropascal", "micropascal"));
    select1.add(new Option("Nanopascal", "nanopascal"));
    select1.add(new Option("Picopascal", "picopascal"));
    select1.add(new Option("Femtopascal", "femtopascal"));
    select1.add(new Option("Bar", "bar"));
    select1.add(new Option("Petabar", "petabar"));
    select1.add(new Option("Terabar", "terabar"));
    select1.add(new Option("Gigabar", "gigabar"));
    select1.add(new Option("Megabar", "megabar"));
    select1.add(new Option("Kilobar", "kilobar"));
    select1.add(new Option("Hectobar", "hectobar"));
    select1.add(new Option("Decabar", "decabar"));
    select1.add(new Option("Decibar", "decibar"));
    select1.add(new Option("Centibar", "centibar"));
    select1.add(new Option("Millibar", "millibar"));
    select1.add(new Option("Microbar", "microbar"));
    select1.add(new Option("Nanobar", "nanobar"));
    select1.add(new Option("Picobar", "picobar"));
    select1.add(new Option("Femtobar", "femtobar"));
    select1.add(new Option("Torr", "torr"));
    select1.add(new Option("Millitorr", "millitorr"));
    select1.add(new Option("Atmosphere", "atmosphere"));
    //Selector2
    select2.add(new Option("Pascal", "pascal"));
    select2.add(new Option("Petapascal", "petapascal"));
    select2.add(new Option("Terapascal", "terapascal"));
    select2.add(new Option("Gigapascal", "gigapascal"));
    select2.add(new Option("Megapascal", "megapascal"));
    select2.add(new Option("Kilopascal", "kilopascal"));
    select2.add(new Option("Hectopascal", "hectopascal"));
    select2.add(new Option("Decapascal", "decapascal"));
    select2.add(new Option("Decipascal", "decipascal"));
    select2.add(new Option("Centipascal", "centipascal"));
    select2.add(new Option("Millipascal", "millipascal"));
    select2.add(new Option("Micropascal", "micropascal"));
    select2.add(new Option("Nanopascal", "nanopascal"));
    select2.add(new Option("Picopascal", "picopascal"));
    select2.add(new Option("Femtopascal", "femtopascal"));
    select2.add(new Option("Bar", "bar"));
    select2.add(new Option("Petabar", "petabar"));
    select2.add(new Option("Terabar", "terabar"));
    select2.add(new Option("Gigabar", "gigabar"));
    select2.add(new Option("Megabar", "megabar"));
    select2.add(new Option("Kilobar", "kilobar"));
    select2.add(new Option("Hectobar", "hectobar"));
    select2.add(new Option("Decabar", "decabar"));
    select2.add(new Option("Decibar", "decibar"));
    select2.add(new Option("Centibar", "centibar"));
    select2.add(new Option("Millibar", "millibar"));
    select2.add(new Option("Microbar", "microbar"));
    select2.add(new Option("Nanobar", "nanobar"));
    select2.add(new Option("Picobar", "picobar"));
    select2.add(new Option("Femtobar", "femtobar"));
    select2.add(new Option("Torr", "torr"));
    select2.add(new Option("Millitorr", "millitorr"));
    select2.add(new Option("Atmosphere", "atmosphere"));
    //Setting default values
    select1.value = "pascal";
    select2.value = "atmosphere";
    
  } else if (selectedSet === "temperature") {
    //Selector1
    select1.add(new Option("Kelvin", "kelvin"));
    select1.add(new Option("Petakelvin", "petakelvin"));
    select1.add(new Option("Terakelvin", "terakelvin"));
    select1.add(new Option("Gigakelvin", "gigakelvin"));
    select1.add(new Option("Megakelvin", "megakelvin"));
    select1.add(new Option("Kilokelvin", "kilokelvin"));
    select1.add(new Option("Hectokelvin", "hectokelvin"));
    select1.add(new Option("Decakelvin", "decakelvin"));
    select1.add(new Option("Decikelvin", "decikelvin"));
    select1.add(new Option("Centikelvin", "centikelvin"));
    select1.add(new Option("Millikelvin", "millikelvin"));
    select1.add(new Option("Microkelvin", "microkelvin"));
    select1.add(new Option("Nanokelvin", "nanokelvin"));
    select1.add(new Option("Picokelvin", "picokelvin"));
    select1.add(new Option("Femtokelvin", "femtokelvin"));
    select1.add(new Option("Fahrenheit", "fahrenheit"));
    select1.add(new Option("Celsius", "celsius"));
    select1.add(new Option("Rankine", "rankine"));
    //Selector2
    select2.add(new Option("Kelvin", "kelvin"));
    select2.add(new Option("Petakelvin", "petakelvin"));
    select2.add(new Option("Terakelvin", "terakelvin"));
    select2.add(new Option("Gigakelvin", "gigakelvin"));
    select2.add(new Option("Megakelvin", "megakelvin"));
    select2.add(new Option("Kilokelvin", "kilokelvin"));
    select2.add(new Option("Hectokelvin", "hectokelvin"));
    select2.add(new Option("Decakelvin", "decakelvin"));
    select2.add(new Option("Decikelvin", "decikelvin"));
    select2.add(new Option("Centikelvin", "centikelvin"));
    select2.add(new Option("Millikelvin", "millikelvin"));
    select2.add(new Option("Microkelvin", "microkelvin"));
    select2.add(new Option("Nanokelvin", "nanokelvin"));
    select2.add(new Option("Picokelvin", "picokelvin"));
    select2.add(new Option("Femtokelvin", "femtokelvin"));
    select2.add(new Option("Fahrenheit", "fahrenheit"));
    select2.add(new Option("Celsius", "celsius"));
    select2.add(new Option("Rankine", "rankine"));
    //Setting default values
    select1.value = "celcius";
    select2.value = "fahrenheit";
    
  } else if (selectedSet === "time") {
    //Selector1
    select1.add(new Option("Second", "second"));
    select1.add(new Option("Petasecond", "petasecond"));
    select1.add(new Option("Terasecond", "terasecond"));
    select1.add(new Option("Gigasecond", "gigasecond"));
    select1.add(new Option("Megasecond", "megasecond"));
    select1.add(new Option("Kilosecond", "kilosecond"));
    select1.add(new Option("Hectosecond", "hectosecond"));
    select1.add(new Option("Decasecond", "decasecond"));
    select1.add(new Option("Decisecond", "decisecond"));
    select1.add(new Option("Centisecond", "centisecond"));
    select1.add(new Option("Millisecond", "millisecond"));
    select1.add(new Option("Microsecond", "microsecond"));
    select1.add(new Option("Nanosecond", "nanosecond"));
    select1.add(new Option("Picosecond", "picosecond"));
    select1.add(new Option("Femtosecond", "femtosecond"));
    select1.add(new Option("Minute", "minute"));
    select1.add(new Option("Hour", "hour"));
    select1.add(new Option("Milliday", "milliday"));
    select1.add(new Option("Day", "day"));
    select1.add(new Option("Week", "week"));
    select1.add(new Option("Fortnight", "fortnight"));
    select1.add(new Option("Month", "month"));
    select1.add(new Option("Year", "year"));
    select1.add(new Option("Decade", "decade"));
    select1.add(new Option("Century", "century"));
    select1.add(new Option("Millennium", "millennium"));
    select1.add(new Option("Moment", "moment"));
    select1.add(new Option("Shake", "shake"));
    select1.add(new Option("Time Unit", "time-unit"));
    select1.add(new Option("Svedberg", "svedberg"));
    //Selector2
    select2.add(new Option("Second", "second"));
    select2.add(new Option("Petasecond", "petasecond"));
    select2.add(new Option("Terasecond", "terasecond"));
    select2.add(new Option("Gigasecond", "gigasecond"));
    select2.add(new Option("Megasecond", "megasecond"));
    select2.add(new Option("Kilosecond", "kilosecond"));
    select2.add(new Option("Hectosecond", "hectosecond"));
    select2.add(new Option("Decasecond", "decasecond"));
    select2.add(new Option("Decisecond", "decisecond"));
    select2.add(new Option("Centisecond", "centisecond"));
    select2.add(new Option("Millisecond", "millisecond"));
    select2.add(new Option("Microsecond", "microsecond"));
    select2.add(new Option("Nanosecond", "nanosecond"));
    select2.add(new Option("Picosecond", "picosecond"));
    select2.add(new Option("Femtosecond", "femtosecond"));
    select2.add(new Option("Minute", "minute"));
    select2.add(new Option("Hour", "hour"));
    select2.add(new Option("Milliday", "milliday"));
    select2.add(new Option("Day", "day"));
    select2.add(new Option("Week", "week"));
    select2.add(new Option("Fortnight", "fortnight"));
    select2.add(new Option("Month", "month"));
    select2.add(new Option("Year", "year"));
    select2.add(new Option("Decade", "decade"));
    select2.add(new Option("Century", "century"));
    select2.add(new Option("Millennium", "millennium"));
    select2.add(new Option("Moment", "moment"));
    select2.add(new Option("Shake", "shake"));
    select2.add(new Option("Time Unit", "time-unit"));
    select2.add(new Option("Svedberg", "svedberg"));
    //Setting default values
    select1.value = "second";
    select2.value = "minute";
    
  } else if (selectedSet === "volume") {
    //Selector1
    select1.add(new Option("Cubic Meter", "cubic-meter"));
    select1.add(new Option("Cubic Petameter", "cubic-petameter"));
    select1.add(new Option("Cubic Terameter", "cubic-terameter"));
    select1.add(new Option("Cubic Gigameter", "cubic-gigameter"));
    select1.add(new Option("Cubic Megameter", "cubic-megameter"));
    select1.add(new Option("Cubic Kilometer", "cubic-kilometer"));
    select1.add(new Option("Cubic Hectometer", "cubic-hectometer"));
    select1.add(new Option("Cubic Decameter", "cubic-decameter"));
    select1.add(new Option("Cubic Decimeter", "cubic-decimeter"));
    select1.add(new Option("Cubic Centimeter", "cubic-centimeter"));
    select1.add(new Option("Cubic Millimeter", "cubic-millimeter"));
    select1.add(new Option("Cubic Micrometer", "cubic-micrometer"));
    select1.add(new Option("Cubic Nanometer", "cubic-nanometer"));
    select1.add(new Option("Cubic Picometer", "cubic-picometer"));
    select1.add(new Option("Cubic Femtometer", "cubic-femtometer"));
    select1.add(new Option("Liter", "liter"));
    select1.add(new Option("Petaliter", "petaliter"));
    select1.add(new Option("Teraliter", "teraliter"));
    select1.add(new Option("Gigaliter", "gigaliter"));
    select1.add(new Option("Megaliter", "megaliter"));
    select1.add(new Option("Kiloliter", "kiloliter"));
    select1.add(new Option("Hectoliter", "hectoliter"));
    select1.add(new Option("Decaliter", "decaliter"));
    select1.add(new Option("Deciliter", "deciliter"));
    select1.add(new Option("Centiliter", "centiliter"));
    select1.add(new Option("Milliliter", "milliliter"));
    select1.add(new Option("Microliter", "microliter"));
    select1.add(new Option("Nanoliter", "nanoliter"));
    select1.add(new Option("Picoliter", "picoliter"));
    select1.add(new Option("Femtoliter", "femtoliter"));
    select1.add(new Option("Cubic Mile", "cubic-mile"));
    select1.add(new Option("Acre-Foot", "acre-foot"));
    select1.add(new Option("Cubic Yard", "cubic-yard"));
    select1.add(new Option("Cubic Foot", "cubic-foot"));
    select1.add(new Option("Board Foot", "board-foot"));
    select1.add(new Option("Cubic Inch", "cubic-inch"));
    select1.add(new Option("Measurement Ton", "measurement-ton"));
    select1.add(new Option("Imperial Barrel", "imperial-barrel"));
    select1.add(new Option("Imperial Bushel", "imperial-bushel"));
    select1.add(new Option("Imperial Peck", "imperial-peck"));
    select1.add(new Option("Imperial Gallon", "imperial-gallon"));
    select1.add(new Option("Imperial Quart", "imperial-quart"));
    select1.add(new Option("Imperial Pint", "imperial-pint"));
    select1.add(new Option("Imperial Fluid Ounce", "imperial-fluid-ounce"));
    select1.add(new Option("Teaspoon", "teaspoon"));
    select1.add(new Option("Tablespoon", "tablespoon"));
    select1.add(new Option("US Fluid Ounce", "us-fluid-ounce"));
    select1.add(new Option("Cup", "cup"));
    select1.add(new Option("Pint", "pint"));
    select1.add(new Option("Quart", "quart"));
    select1.add(new Option("Gallon", "gallon"));
    select1.add(new Option("US Bushel", "us-bushel"));
    select1.add(new Option("US Peck", "us-peck"));
    select1.add(new Option("US Dry Gallon", "us-dry-gallon"));
    select1.add(new Option("US Dry Barrel", "us-dry-barrel"));
    select1.add(new Option("US Dry Quart", "us-dry-quart"));
    select1.add(new Option("US Dry Pint", "us-dry-pint"));
    //Selector2
    select2.add(new Option("Cubic Meter", "cubic-meter"));
    select2.add(new Option("Cubic Petameter", "cubic-petameter"));
    select2.add(new Option("Cubic Terameter", "cubic-terameter"));
    select2.add(new Option("Cubic Gigameter", "cubic-gigameter"));
    select2.add(new Option("Cubic Megameter", "cubic-megameter"));
    select2.add(new Option("Cubic Kilometer", "cubic-kilometer"));
    select2.add(new Option("Cubic Hectometer", "cubic-hectometer"));
    select2.add(new Option("Cubic Decameter", "cubic-decameter"));
    select2.add(new Option("Cubic Decimeter", "cubic-decimeter"));
    select2.add(new Option("Cubic Centimeter", "cubic-centimeter"));
    select2.add(new Option("Cubic Millimeter", "cubic-millimeter"));
    select2.add(new Option("Cubic Micrometer", "cubic-micrometer"));
    select2.add(new Option("Cubic Nanometer", "cubic-nanometer"));
    select2.add(new Option("Cubic Picometer", "cubic-picometer"));
    select2.add(new Option("Cubic Femtometer", "cubic-femtometer"));
    select2.add(new Option("Liter", "liter"));
    select2.add(new Option("Petaliter", "petaliter"));
    select2.add(new Option("Teraliter", "teraliter"));
    select2.add(new Option("Gigaliter", "gigaliter"));
    select2.add(new Option("Megaliter", "megaliter"));
    select2.add(new Option("Kiloliter", "kiloliter"));
    select2.add(new Option("Hectoliter", "hectoliter"));
    select2.add(new Option("Decaliter", "decaliter"));
    select2.add(new Option("Deciliter", "deciliter"));
    select2.add(new Option("Centiliter", "centiliter"));
    select2.add(new Option("Milliliter", "milliliter"));
    select2.add(new Option("Microliter", "microliter"));
    select2.add(new Option("Nanoliter", "nanoliter"));
    select2.add(new Option("Picoliter", "picoliter"));
    select2.add(new Option("Femtoliter", "femtoliter"));
    select2.add(new Option("Cubic Mile", "cubic-mile"));
    select2.add(new Option("Acre-Foot", "acre-foot"));
    select2.add(new Option("Cubic Yard", "cubic-yard"));
    select2.add(new Option("Cubic Foot", "cubic-foot"));
    select2.add(new Option("Board Foot", "board-foot"));
    select2.add(new Option("Cubic Inch", "cubic-inch"));
    select2.add(new Option("Measurement Ton", "measurement-ton"));
    select2.add(new Option("Imperial Barrel", "imperial-barrel"));
    select2.add(new Option("Imperial Bushel", "imperial-bushel"));
    select2.add(new Option("Imperial Peck", "imperial-peck"));
    select2.add(new Option("Imperial Gallon", "imperial-gallon"));
    select2.add(new Option("Imperial Quart", "imperial-quart"));
    select2.add(new Option("Imperial Pint", "imperial-pint"));
    select2.add(new Option("Imperial Fluid Ounce", "imperial-fluid-ounce"));
    select2.add(new Option("Teaspoon", "teaspoon"));
    select2.add(new Option("Tablespoon", "tablespoon"));
    select2.add(new Option("US Fluid Ounce", "us-fluid-ounce"));
    select2.add(new Option("Cup", "cup"));
    select2.add(new Option("Pint", "pint"));
    select2.add(new Option("Quart", "quart"));
    select2.add(new Option("Gallon", "gallon"));
    select2.add(new Option("US Bushel", "us-bushel"));
    select2.add(new Option("US Peck", "us-peck"));
    select2.add(new Option("US Dry Gallon", "us-dry-gallon"));
    select2.add(new Option("US Dry Barrel", "us-dry-barrel"));
    select2.add(new Option("US Dry Quart", "us-dry-quart"));
    select2.add(new Option("US Dry Pint", "us-dry-pint"));
    //Setting default values
    select1.value = "cubic-meter";
    select2.value = "cubic-foot";
    
  }
}
