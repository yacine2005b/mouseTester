var clickCount = 0;
var timerSeconds = 5; // Set the time limit in seconds
var timerInterval;
var canClick = true
const resultImg = document.querySelector('.result img')
const resutlTitle = document.querySelector('.result h2')

function incrementCounter() {
	if (canClick) {
		clickCount++;
		updateCounterDisplay();
	}


	// Start the timer if not already started
	if (!timerInterval) {
		timerInterval = setInterval(updateTimer, 1000);
		setTimeout(endTest, timerSeconds * 1000);
	}
}

function updateCounterDisplay() {
	var counterElement = document.getElementById("counter");
	counterElement.textContent = "Clicks: " + clickCount;
}

function updateTimer() {
	timerSeconds--;
	var timerElement = document.getElementById("timer");
	timerElement.textContent = "Time Left: " + timerSeconds + " seconds";

	if (timerSeconds === 0) {
		endTest();
	}
}

function endTest() {
	const result = document.querySelector('.result')
	const resultText = document.querySelector('.result h5')
	const resultdesc = document.querySelector('.result h3')
	const main = document.querySelector('.idk')
	var cps = clickCount / 5
	clearInterval(timerInterval);
	canClick = false

	main.style.display = 'none'

	resultText.innerHTML = 'u clicked ' + clickCount + " times " + " in 5 seconds"
	result.style.display = 'block'

	if (clickCount < 15) {

		resutlTitle.textContent = 'you are a turtle'
		resultdesc.textContent = ' u clicked with the speed of ' + cps + " CPS"
		resultImg.src = "imgs/turtle.png"
	}
	else if (clickCount > 15 && clickCount <= 35) {
		resultdesc.textContent = ' u clicked with the speed of ' + cps + " CPS"
		resutlTitle.textContent = 'you are an octopus'
		resultImg.src = "imgs/octopus.jfif"
		document.querySelector('#octopus').style.display = 'none'
	}
	else if (clickCount > 35 && clickCount < 60) {
		resultdesc.textContent = ' u clicked with the speed of ' + cps + " CPS"
		resutlTitle.textContent = 'you are a cheetah'
		resultImg.src = "imgs/cheetah.jfif"
		document.querySelector('#octopus').style.display = 'none'
		document.querySelector('#cheetah').style.display = 'none'
	}
}


function refreshPage() {
	location.reload()
}