let hoursBlock = document.querySelector('.countdown__clock-hours')
let minutesBlock = document.querySelector('.countdown__clock-minutes')
let secondsBlock = document.querySelector('.countdown__clock-seconds')

let date,
		now = new Date(),
		startTimer = '';

// calculate date, hour, minute and second
function calcTime(dates) {
	//ui variables
	clearInterval(startTimer);

	
	date = new Date(dates).getTime();
	

	function updateTimer(date){

		let now = new Date().getTime();
		let distance = date - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// select element
		hoursBlock.innerHTML = hours;
		minutesBlock.innerHTML = minutes;
		secondsBlock.innerHTML = seconds;

	}

	startTimer = setInterval(function() { updateTimer(date); }, 1000);

}


calcTime('2021-05-26')

