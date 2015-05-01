window.addEventListener('load', init, false);

function init() {
	//var timer_1 = document.getElementById('timer_1');
	startTimer.addEventListener('click', start, false);
	pauseTimer.addEventListener('click', paused, false);
	stopTimer.addEventListener('click', stop, false);
	timerObject = new Timer('Work it bitch!');
}
var timerObject;
function start() {
	var h= 0,m = 0,s = 0;
	timer = setInterval(function(){
		var valueTime = timerObject.start();
			//00:00:00 this format
			(valueTime.hours < 10) ? h = ('0' + valueTime.hours).toString(): h = valueTime.hours;
			(valueTime.minute < 10) ? m = ('0' + valueTime.minute).toString(): m = valueTime.minute;
			(valueTime.seconds < 10) ? s = ('0' + valueTime.seconds).toString(): s = valueTime.seconds;

			result.innerHTML = h + ':' + m + ':' + s;
		}, 1000);
		
	  
}

function paused() {
		clearInterval(timer);
		//timerObject.pause();
}
function stop() {
		clearInterval(timer);
		timerObject.stop();
		result.innerHTML = '00' + ':' + '00' + ':' + '00';
		timerObject.time.hours = 0;
		timerObject.time.minute = 0;
		timerObject.time.seconds = 0;
}