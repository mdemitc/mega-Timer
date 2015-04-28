window.addEventListener('load', init, false);

function init() {
	//var timer_1 = document.getElementById('timer_1');
	startTimer.addEventListener('click', start, false);
	stopTimer.addEventListener('click', stop, false);
}
var timer;
function start() {
	var timerObject = new Timer('Work it bitch!');
	timer = setInterval(function(){
		timerObject.time = new Date();
		result.innerHTML = timerObject.time.getDate()+"/"+timerObject.time.getMonth()+1 + "/"
		+ timerObject.time.getFullYear() + "@" + timerObject.time.getHours() + ":" 
		+ timerObject.time.getMinutes() + ":" + timerObject.time.getSeconds();
	}, 1000);
}

function stop() {
	var timerObject = new Timer('Work it bitch!');
	clearInterval(timer);
	result.innerHTML = timerObject.time.getDate()+"/"+timerObject.time.getMonth()+1 + "/"
	+ timerObject.time.getFullYear() + "@" + timerObject.time.getHours() + ":" 
	+ timerObject.time.getMinutes() + ":" + timerObject.time.getSeconds();
}