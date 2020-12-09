//c zu f muss max 60 Grad oder F equivalent

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let screen = document.getElementById("screen");
let fromNr;
let returnObj;


function randomizer() {
	fromNr = Math.floor(Math.random()*10) * 50 + 100;
	returnObj = randomMethod(fromNr);
	//DOM Update
	screen.innerHTML = fromNr + " " + returnObj.from + " = ";
	screen.innerHTML += "___" + returnObj.to;
	
	randomizeOptionBtn(Math.round(returnObj.calc));
}
function randomMethod(number) {
	let randomNr = Math.floor(Math.random() * 6) + 1;
	let secondRandomNr = Math.floor(Math.random() * 2) + 1;
	
	if (randomNr == 1) {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.nmToKm(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.kmToNm(number);
			return calculationReturn;
		}
	} else if(randomNr == 2) {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.feetToMeter(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.meterToFeet(number);
			return calculationReturn;
		}
	} else if(randomNr == 3) {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.ktToKmh(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.kmhToKt(number);
			return calculationReturn;
		}
	} else if(randomNr == 4) {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.celciusToFahrenheit(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.fahrenheitToCelcius(number);
			return calculationReturn;
		}
	} else if(randomNr == 5) {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.poundsToKg(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.kgToPounds(number);
			return calculationReturn;
		}
	} else {
		if(secondRandomNr == 1) {
			let calculationReturn = calculation.galToLiter(number);
			return calculationReturn;
		} else {
			let calculationReturn = calculation.literToGal(number);
			return calculationReturn;
		}
	}
}


function randomizeOptionBtn(number) {
	let numberArray = [];
	for (var i = 0; i < 4; i++) {
		if(i == 0) {
			//Correct Answer
			numberArray.push(number);
		}else {
			numberArray.push(number + Math.floor(Math.random()*10) * 10 - 200);
		}
	}
	
	let randomElement = shuffle(numberArray);
	btn1.innerText = randomElement[0];
	btn2.innerText = randomElement[1];
	btn3.innerText = randomElement[2];
	btn4.innerText = randomElement[3];

	btn1.setAttribute("style", "font: black;"); 
	btn2.setAttribute("style", "font: black;"); 
	btn3.setAttribute("style", "font: black;"); 
	btn4.setAttribute("style", "font: black;"); 

	btn1.addEventListener("click", function() {
		console.log(number + " / " + randomElement[1]);
		screen.innerHTML = fromNr + " " + returnObj.from + " = " + randomElement[0] + " " + returnObj.to;
		//Check if  Correct
		if(checkIfCorrect(number == randomElement[0])) {
			btn1.setAttribute("style", "background-color: green;");
			randomizer();
		} else {
			btn1.setAttribute("style", "background-color: red;");
			btn1.setAttribute("style", "background-color: Gainsboro;");
		}
	});

	btn2.addEventListener("click", function() {
		screen.innerHTML = fromNr + " " + returnObj.from + " = " + randomElement[1] + " " + returnObj.to;
		//Check if  Correct
		if(checkIfCorrect(number == randomElement[1])) {
			btn2.setAttribute("style", "background-color: green;");	
			randomizer();
		} else {
			btn2.setAttribute("style", "background-color: red;");
			btn2.setAttribute("style", "background-color: Gainsboro;");
		}
	});

	btn3.addEventListener("click", function() {
		screen.innerHTML = fromNr + " " + returnObj.from + " = " + randomElement[2] + " " + returnObj.to;
		//Check if  Correct
		if(checkIfCorrect(number == randomElement[2])) {
			btn3.setAttribute("style", "background-color: green;");
			randomizer();
		} else {
			btn3.setAttribute("style", "background-color: red;");
			btn3.setAttribute("style", "background-color: Gainsboro;");
		}
	});

	btn4.addEventListener("click", function() {
		screen.innerHTML = fromNr + " " + returnObj.from + " = " + randomElement[3] + " " + returnObj.to;
		//Check if  Correct
		if(checkIfCorrect(number == randomElement[3])) {
			btn4.setAttribute("style", "background-color: green;"); 
			randomizer();
		} else {
			btn4.setAttribute("style", "background-color: red;");
			btn4.setAttribute("style", "background-color: Gainsboro;");
		}
	});
}

function checkIfCorrect(correctNumber, testNumber) {
	console.log(correctNumber);
	console.log(testNumber);
	if(correctNumber == testNumber) {
		return true;
	} else {
		return false;
	}
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


class MassystemIcao {
  
  //Strecken
  nmToKm(nm) {
  	let obj = {
  		calc: nm * 2 * 0.9,
  		from: "nm",
  		to: "km",
  		help: "nm * 2 * 0.9"
  	};
  	return obj;
  }
  kmToNm(km) {
  	let obj = {
  		calc: km / 2 * 1.1,
  		from: "km",
  		to: "nm",
  		help: "km / 2 * 1.1"
  	};
  	return obj;
  }
  
  //Höhen
  feetToMeter(ft) {
  	let obj = {
  		calc: ft / 10  * 3,
  		from: "feet",
  		to: "meters",
  		help: "ft / 10  * 3"
  	};
  	return obj;
  }
  meterToFeet(m) {
  	let obj = {
  		calc: m / 3  * 10,
  		from: "meters",
  		to: "feet",
  		help: "m / 3  * 10"
  	};
  	return obj;
  }
  
  //Speeds
  ktToKmh(kt) {
  	let obj = {
  		calc: kt * 2 * 0.9,
  		from: "kts",
  		to: "kmh",
  		help: "kt * 2 * 0.9"
  	};
  	return obj;
  }
  kmhToKt(kmh) {
  	let obj = {
  		calc: kmh / 2 * 1.1,
  		from: "kmh",
  		to: "kts",
  		help: "kmh / 2 * 1.1"
  	};
  	return obj;
  }

  //Temperatur
  celciusToFahrenheit(c) {
  	let obj = {
  		calc: (c * 9 / 5) + 32,
  		from: "celcius",
  		to: "fahrenheit",
  		help: "(c * 9 / 5) + 32"
  	};
  	return obj;
  }
  fahrenheitToCelcius(f) {
  	let obj = {
  		calc: (f - 32) * 5 / 9,
  		from: "fahrenheit",
  		to: "celcius",
  		help: "(f - 32) * 5 / 9"
  	};
  	return obj;
  }

  //Gewicht
  poundsToKg(p) {
  	let obj = {
  		calc: p / 2 * 0.9,
  		from: "pounds",
  		to: "kgs",
  		help: "p / 2 * 0.9"
  	};
  	return obj;
  }
  kgToPounds(kg) {
  	let obj = {
  		calc: kg * 2 * 1.1,
  		from: "kgs",
  		to: "pounds",
  		help: "kg * 2 * 1.1"
  	};
  	return obj;
  }

  //Volumen
  galToLiter(l) {
  	let obj = {
  		calc: l * 4 * 0.95,
  		from: "gallons",
  		to: "liters",
  		help: "l * 4 * 0.95"
  	};
  	return obj;
  }
  literToGal(gal) {
  	let obj = {
  		calc: gal / 4 * 1.05,
  		from: "liters",
  		to: "gallons",
  		help: "gal / 4 * 1.05"
  	};
  	return obj;
  }
 }

 let calculation = new MassystemIcao();
 randomizer();