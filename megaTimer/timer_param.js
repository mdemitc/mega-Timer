window.addEventListener('load', init, false);

function init() {
	var timer_1 = document.getElementById('timer_1');
	startTimer.addEventListener('click', start, false);
	stopTimer.addEventListener('click', stop, false);
	timerObject = new Timer('Work it bitch!');
}
var timerObject, stopedTime, now, elapsed, timerCheck = true;
function start() {
	console.log()
	timer = setInterval(function(){
		if (timerCheck) {
			now = new Date();
			elapsed = now.getTime() - timerObject.time.getTime();
		} else {
			now2 = new Date(stopedTime);
			elapsed = (now2.getTime() - timerObject.time.getTime());
		}
		
		result.innerHTML = toFloor(elapsed);
	 }, 1000)
	  
}

function stop() {
	stopedTime = new Date();
	console.log(stopedTime);
	timerCheck = false;
	clearInterval(timer);
}