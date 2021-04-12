export class Timer {
    constructor(timer) {
        this.startTime = 0;
        this.tInterval = 0;
        this.updatedTime = 0;
        this.savedTime = 0;
        this.difference = 0;
        this.running = false;
        this.paused = false;
        this.timerDisplay = timer;
        this.getShowTime = this.getShowTime.bind(this);
    }

    startTimer() {
        if (!this.running) {
            this.startTime = new Date().getTime();
            this.tInterval = window.setInterval(this.getShowTime, 1);
            this.running = true;
            this.paused = false;
        }
    }

    pauseTimer() {
        if (!this.difference) {
            return;
        } else if (!this.paused) {
            clearInterval(this.tInterval);
            this.savedTime = this.difference;
            this.paused = true;
            this.running = false;
        } else {
            this.startTimer();
        }
    }

    resetTimer() {
        clearInterval(this.tInterval);
        this.savedTime = 0;
        this.difference = 0;
        this.paused = false;
        this.running = false;
    }

    getShowTime() {
        this.updatedTime = new Date().getTime();
        if (this.savedTime) {
            this.difference = (this.updatedTime - this.startTime) + this.savedTime;
        } else {
            this.difference = this.updatedTime - this.startTime;
        }

        let minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((this.difference % (1000 * 60)) / 10) % 100;
        
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "0" + milliseconds : "" + milliseconds : milliseconds;

        this.timerDisplay.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
    }
}