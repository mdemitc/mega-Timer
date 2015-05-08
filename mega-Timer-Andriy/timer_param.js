window.addEventListener('load', init);

function init() {
    pauseButton.addEventListener('click', Clock.pause);
    resumeButton.addEventListener('click', Clock.resume);
    Clock.start();
}


var Clock;
Clock = {
    totalSeconds: 0,

    start: function () {

        this.interval = setInterval(function () {
            Clock.totalSeconds += 1;

            function pad_zero(s) {
                return ("00" + s).slice(-2)
            };

            document.getElementById('hour').innerHTML = pad_zero(Math.floor(Clock.totalSeconds / 3600));
            document.getElementById('min').innerHTML = pad_zero(Math.floor(Clock.totalSeconds / 3600));
            document.getElementById('sec').innerHTML = pad_zero(Clock.totalSeconds % 60);
        }, 1000);
    },

    pause: function () {
        console.log(Clock);
        clearInterval(Clock.interval);
        delete Clock.interval;
    },

    resume: function () {
        if (!Clock.interval) Clock.start();
    }
};

//Clock.start();

//document.getElementById('pauseButton').click(function () { Clock.pause(); });

//$('#pauseButton').click(function () { Clock.pause(); });
//$('#resumeButton').click(function () { Clock.resume(); });