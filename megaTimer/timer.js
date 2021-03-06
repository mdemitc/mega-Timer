function Timer(title) {
	this.state = 'paused';
	this.time = {
		seconds: 0,
		minute: 0,
		hours: 0
	};
	this.title = title;
	this.checkPause = true;
	//States
	this.states = {
		active: 'active',
		paused: 'paused',
		finished: 'finished'
	}
}

Timer.prototype.start = function() {
	_switchState(states.active);
	this.time = new Date();
}

Timer.prototype.pause = function() {
	_switchState(states.paused);
}

Timer.prototype.stop = function() {
	_switchState(states.finished);
}

Timer.prototype._switchState = function(newState) {
	switch (newState){
		case this.states.active:
			this.state = this.states.active;
			break;			
		case this.states.paused:
			this.state = this.states.paused;
			break;
		case this.states.finished:
			this.state = this.states.finished;
			break;
	}
}