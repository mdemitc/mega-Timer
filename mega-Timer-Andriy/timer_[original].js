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
    this._switchState(this.states.active);

    if (this.time.seconds < 59)
        this.time.seconds++;
    else if (this.time.minute < 59){
        this.time.minute++;
        this.time.seconds = 0;
    } else {
        this.time.hours++;
        this.time.minute = 0;
        this.time.seconds = 0;
    }

    return this.time;
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