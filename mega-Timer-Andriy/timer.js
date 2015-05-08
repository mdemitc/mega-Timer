function pad_zero(s) {
	return ("00" + s).slice(-2)
};

function Timer(title) {
	this.state = 'paused';
	this._timeSeconds = 0;
	this.title = title;
	this.timeHMS = '00:00:00';
	//States
	this.states = {
		active: 'active',
		paused: 'paused',
		finished: 'finished'
	}
}

Timer.prototype.start = function() {
	var timeAll;
	this._switchState(this.states.active);
	this._timeSeconds++;
	timeAll = {
		hours: pad_zero(Math.floor(this._timeSeconds / 3600)),
		seconds: pad_zero(this._timeSeconds % 60),
		minutes: pad_zero(Math.floor((this._timeSeconds - Math.floor(this._timeSeconds / 3600) * 3600) / 60))
	};
	//console.log(timeAll.hours + ':' + timeAll.minutes + ':' + timeAll.seconds);
	this.timeHMS = timeAll.hours + ':' + timeAll.minutes + ':' + timeAll.seconds;
}

Timer.prototype.pause = function() {
	this._switchState(this.states.paused);
}

Timer.prototype.stop = function() {
	this._switchState(this.states.finished);
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
