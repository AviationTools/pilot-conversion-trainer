let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let hintButton = document.getElementById("hintButton");

let screen = document.getElementById("screen");
let hint = document.getElementById("hint");

//Result (Object)
let randomReturnNumber;
let returnResult;
//Random (Button)
let randomElement;
let randomNumber;
//History
let questionHistory = [];
let historyCount = 0;

let timeOut;


function randomizer() {
	clearTimeout(timeOut);
	resetButtonColors();
	console.log("New Question!");

	returnResult = randomMethod();
	randomReturnNumber = returnResult.randomNumber;

	//DOM Update
	screen.innerHTML = randomReturnNumber + " " + returnResult.units.from + " = ";
	screen.innerHTML += "___" + returnResult.units.to;
	hint.innerHTML = "";
	
	historyCount++;
	questionHistory.push({
		"from": randomReturnNumber,
		"conversion": returnResult.units.from,
		"to": returnResult.units.to,
		"answer": returnResult.calc
	});

	randomizeOptionBtn(Math.round(returnResult.calc));
}

function specificRandomNumber(max, min) {
	return Math.round(Math.floor(Math.random() * (max - min) + min) / 10) * 10;
}

function randomMethod() {
	let randomNr = Math.floor(Math.random() * 6) + 1;
	let secondRandomNr = Math.floor(Math.random() * 2) + 1;
	
	console.log(randomNr)
	console.log(secondRandomNr)

	if (randomNr == 1) {
		if(secondRandomNr == 1) {
			return calculation.nmToKm();
		} else {
			return calculation.kmToNm();
		}
	} else if(randomNr == 2) {
		if(secondRandomNr == 1) {
			return calculation.feetToMeter();
		} else {
			return calculation.meterToFeet();
		}
	} else if(randomNr == 3) {
		if(secondRandomNr == 1) {
			return calculation.ktToKmh();
		} else {
			return calculation.kmhToKt();
		}
	} else if(randomNr == 4) {
		if(secondRandomNr == 1) {
			return calculation.celciusToFahrenheit();
		} else {
			return calculation.fahrenheitToCelcius();
		}
	} else if(randomNr == 5) {
		if(secondRandomNr == 1) {
			return calculation.poundsToKg();
		} else {
			return calculation.kgToPounds();
		}
	} else {
		if(secondRandomNr == 1) {
			return calculation.galToLiter();
		} else {
			return calculation.literToGal();
		}
	}
}


function randomizeOptionBtn(number) {
	randomNumber = number;
	let numberArray = [];
	for (var i = 0; i < 4; i++) {
		if(i == 0) {
			//Correct Answer
			numberArray.push(number);
		}else {
			numberArray.push(number + Math.floor(Math.random()*10) * 10 - 200);
		}
	}
	
	randomElement = shuffle(numberArray);
	btn1.innerText = randomElement[0];
	btn2.innerText = randomElement[1];
	btn3.innerText = randomElement[2];
	btn4.innerText = randomElement[3];

	btn1.setAttribute("style", "font: black;"); 
	btn2.setAttribute("style", "font: black;"); 
	btn3.setAttribute("style", "font: black;"); 
	btn4.setAttribute("style", "font: black;"); 
}

btn1.addEventListener("click", function() {
		screen.innerHTML = randomReturnNumber + " " + returnResult.units.from + " = " + randomElement[0] + " " + returnResult.units.to;
		//Check if  Correct
		if(checkIfCorrect(randomNumber, randomElement[0])) {
			console.log("true")
			//Color to Green("True")
			btn1.classList.remove("btn-primary");
			btn1.classList.add('btn-success');
			//Set Color to Default
			timeOut = setTimeout(function(){
				btn1.classList.remove("btn-success");
				btn1.classList.add('btn-primary');
				randomizer();
			}, 500);
		} else {
			console.log("false")
			btn1.classList.remove("btn-primary");
			btn1.classList.add('btn-danger');
		}
	});

	btn2.addEventListener("click", function() {
		screen.innerHTML = randomReturnNumber + " " + returnResult.units.from + " = " + randomElement[1] + " " + returnResult.units.to;
		//Check if  Correct
		if(checkIfCorrect(randomNumber, randomElement[1])) {
			console.log("true")
			//Color to Green("True")
			btn2.classList.remove("btn-primary");
			btn2.classList.add('btn-success');
			//Set Color to Default
			timeOut = setTimeout(function(){
				btn2.classList.remove("btn-success");
				btn2.classList.add('btn-primary');
				randomizer();
			}, 500);
		} else {
			console.log("false")
			btn2.classList.remove("btn-primary");
			btn2.classList.add('btn-danger');
		}
	});

	btn3.addEventListener("click", function() {
		screen.innerHTML = randomReturnNumber + " " + returnResult.units.from + " = " + randomElement[2] + " " + returnResult.units.to;
		//Check if  Correct
		if(checkIfCorrect(randomNumber, randomElement[2])) {
			console.log("true")
			//Color to Green("True")
			btn3.classList.remove("btn-primary");
			btn3.classList.add('btn-success');
			//Set Color to Default
			timeOut = setTimeout(function(){
				btn3.classList.remove("btn-success");
				btn3.classList.add('btn-primary');
				randomizer();
			}, 500);
		} else {
			console.log("false")
			btn3.classList.remove("btn-primary");
			btn3.classList.add('btn-danger');
		}
	});

	btn4.addEventListener("click", function() {
		screen.innerHTML = randomReturnNumber + " " + returnResult.units.from + " = " + randomElement[3] + " " + returnResult.units.to;
		//Check if  Correct
		if(checkIfCorrect(randomNumber, randomElement[3])) {
			console.log("true")
			//Color to Green("True")
			btn4.classList.remove("btn-primary");
			btn4.classList.add('btn-success');
			//Set Color to Default
			timeOut = setTimeout(function(){
				btn4.classList.remove("btn-success");
				btn4.classList.add('btn-primary');
				randomizer();
			}, 500);
		} else {
			console.log("false")
			btn4.classList.remove("btn-primary");
			btn4.classList.add('btn-danger');
		}
	});

	//Functionality Buttons
	previous.addEventListener("click", function() {
		//Not Ready yet
		historyCount
		let previousQuestion = questionHistory[historyCount-1]
		screen.innerHTML = previousQuestion.from + " " + previousQuestion.conversion + " = " + ___ + " " + previousQuestion.to;
	});

	hintButton.addEventListener("click", function() {
		hint.innerHTML = returnResult.help;
	});

	next.addEventListener("click", function() {
		randomizer();
	});

function checkIfCorrect(correctNumber, testNumber) {
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

function resetButtonColors() {
	btn1.classList.remove("btn-danger");
	btn1.classList.add('btn-primary');

	btn2.classList.remove("btn-danger");
	btn2.classList.add('btn-primary');

	btn3.classList.remove("btn-danger");
	btn3.classList.add('btn-primary');

	btn4.classList.remove("btn-danger");
	btn4.classList.add('btn-primary');
}


class MassystemIcao {
  getRandomNumberInRange(max, min) {
  	return Math.round(Math.floor(Math.random() * (max - min) + min) / 10) * 10;
  }
  //Strecken
  nmToKm() {
    const random = this.getRandomNumberInRange(500, 50);     

    return {
        units: {
            from: "nm",
            to: "km"
        },
        help: "nm * 2 * 0.9",
        calc: random * 2 * 0.9,
        randomNumber: random
    };
  }
  kmToNm() {
  	const random = this.getRandomNumberInRange(500, 50);     

    return {
        units: {
            from: "km",
            to: "nm"
        },
        help: "km / 2 * 1.1",
        calc: random / 2 * 1.1,
        randomNumber: random
    };
  }
  
  //Höhen
  feetToMeter() {
  	const random = this.getRandomNumberInRange(30000, 1000);     

    return {
        units: {
            from: "feet",
            to: "meters"
        },
        help: "ft / 10 * 3",
        calc: random / 10 * 3,
        randomNumber: random
    };
  }
  meterToFeet() {
  	const random = this.getRandomNumberInRange(10000, 1000);     

    return {
        units: {
            from: "meters",
            to: "feet"
        },
        help: "m / 3 * 10",
        calc: random / 3 * 10,
        randomNumber: random
    };
  }
  
  //Speeds
  ktToKmh() {
  	const random = this.getRandomNumberInRange(600, 100);     

    return {
        units: {
            from: "kts",
            to: "kmh"
        },
        help: "kt * 2 * 0.9",
        calc: random * 2 * 0.9,
        randomNumber: random
    };
  }
  kmhToKt() {
  	const random = this.getRandomNumberInRange(300, 100);     

    return {
        units: {
            from: "kmh",
            to: "kts"
        },
        help: "kmh / 2 * 1.1",
        calc: random / 2 * 1.1,
        randomNumber: random
    };
  }

  //Temperatur
  celciusToFahrenheit() {
  	const random = this.getRandomNumberInRange(100, 0);     

    return {
        units: {
            from: "celcius",
            to: "fahrenheit"
        },
        help: "(c * 9 / 5) + 32",
        calc: (random * 9 / 5) + 32,
        randomNumber: random
    };
  }
  fahrenheitToCelcius() {
  	const random = this.getRandomNumberInRange(60, -20);     

    return {
        units: {
            from: "fahrenheit",
            to: "celcius"
        },
        help: "(f - 32) * 5 / 9",
        calc: (random - 32) * 5 / 9,
        randomNumber: random
    };
  }

  //Gewicht
  poundsToKg() {
  	const random = this.getRandomNumberInRange(10000, 100);     

    return {
        units: {
            from: "pounds",
            to: "kgs"
        },
        help: "p / 2 * 0.9",
        calc: random / 2 * 0.9,
        randomNumber: random
    };
  }
  kgToPounds() {
  	const random = this.getRandomNumberInRange(10000, 100);     

    return {
        units: {
            from: "kgs",
            to: "pounds"
        },
        help: "kg * 2 * 1.1",
        calc: random * 2 * 1.1,
        randomNumber: random
    };
  }

  //Volumen
  galToLiter() {
  	const random = this.getRandomNumberInRange(1000, 50);     

    return {
        units: {
            from: "gallons",
            to: "liters"
        },
        help: "gal / 4 * 1.05",
        calc: random / 4 * 1.05,
        randomNumber: random
    };
  }
  literToGal() {
  	const random = this.getRandomNumberInRange(1000, 50);     

    return {
        units: {
            from: "liters",
            to: "gallons"
        },
        help: "l * 4 * 0.95",
        calc: random * 4 * 0.95,
        randomNumber: random
    };
  }
 }

 let calculation = new MassystemIcao();
 randomizer();