import {CAR_CONSTANTS, PlayerCar} from "./car";
import { MovingObj } from "./moving_obj";

export class Game {
    constructor(ctx, car, timer) {
        this.ctx = ctx;
        this.running = true;
        this.level = 1;
        this.car = car;
        this.timer = timer;
        this.balls = [];
        this.lives = 5;
        this.hearts = document.querySelectorAll("div.lives li");
        this.time = null;
        this.pX = 0;
        this.pY = 0;

        this.img = new Image();
        this.img.src = "src/assets/images/parking.png";
    }

    addBalls() {
        if (this.level === 1) {
            for (let i = 0; i < 15; i++) {
                this.addBall(30, 5);
            }
        }
    }

    drawParkingSpot() {
        const skirt = 60;
        const innerBox = 300;

        let x = Math.floor(Math.random() * (window.innerWidth - skirt));
        let y = Math.floor(Math.random() * (window.innerHeight - skirt));

        while ((x > window.innerWidth / 2 - innerBox / 2) && (x < window.innerWidth / 2 + innerBox / 2)) {
            x = Math.floor(Math.random() * (window.innerWidth - skirt));
        }

        while ((y > window.innerHeight / 2 - innerBox / 2) && (y < window.innerHeight / 2 + innerBox / 2)) {
            y = Math.floor(Math.random() * (window.innerHeight - skirt));
        }

        this.pX = x;
        this.pY = y;
    }

    animateParkingSpot() {
        this.ctx.fillStyle = '#0071cc';
        this.ctx.fillRect(this.pX, this.pY, 60, 60);
    }

    carCrashed() {
        --this.lives;
        this.updateHearts();
        this.reset();
    }

    addBall(radius, vel) {
        // let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let color = 'blue';
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let angle = Math.random() * Math.PI * 2;

        let attr = {radius, x, y, color, vel, angle};

        const ball = new MovingObj(this.ctx, attr);
        this.balls.push(ball);
    }

    checkBallCollision() {
        for (let i = 0; i < this.balls.length; i++) {
            for (let j = i + 1; j < this.balls.length; j++) {
                if (this.balls[i].isColliding(this.balls[j])) {
                    Game.onCollision(this.balls[i], this.balls[j]);
                }
            }
        }
    }

    reset() {
        this.balls = [];
        this.addBalls();
        this.car.reset();
        this.time = (new Date()).getTime();
        setTimeout(() => {
            this.car.car.style.opacity = '1';
        }, 1500);
    }

    static onCollision(obj1, obj2) {
        let vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };
        let distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
        let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };

        let vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

        let impulse = 2 * speed / (obj1.mass + obj2.mass);

        if (speed < 0) {
            return;
        } else {
            obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
            obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
            obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
            obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
        }
    }

    checkParked() {
        const car = this.car;
        const width = 16;
        const height = 32;
        let x = [
            car.x + ((width / 2) * Math.cos(car.angle)) + ((32 / 2) * Math.sin(car.angle)),
            car.x - ((width / 2) * Math.cos(car.angle)) + ((32 / 2) * Math.sin(car.angle)),
            car.x - ((width / 2) * Math.cos(car.angle)) - ((32 / 2) * Math.sin(car.angle)),
            car.x + ((width / 2) * Math.cos(car.angle)) - ((32 / 2) * Math.sin(car.angle))
        ];

        let y = [
            car.y + ((width / 2) * Math.sin(car.angle)) - ((height / 2) * Math.cos(car.angle)),
            car.y - ((width / 2) * Math.sin(car.angle)) - ((height / 2) * Math.cos(car.angle)),
            car.y - ((width / 2) * Math.sin(car.angle)) + ((height / 2) * Math.cos(car.angle)),
            car.y + ((width / 2) * Math.sin(car.angle)) + ((height / 2) * Math.cos(car.angle))
        ]

        let minX = Math.min(...x);
        let maxX = Math.max(...x);
        let minY = Math.min(...y);
        let maxY = Math.max(...y);

        let conditions = [
            (minX > this.pX && minX < this.pX + 60),
            (maxX > this.pX && maxX < this.pX + 60),
            (minY > this.pY && minY < this.pY + 60),
            (maxY > this.pY && maxY < this.pY + 60)
        ];

        let parked = !conditions.includes(false);
        return parked;
    }

    parked() {
        let time = this.timer.timerDisplay.innerHTML;
        if (localStorage.getItem('park-it-time') === null) {
            localStorage.setItem('park-it-time', time);
        }
        
        if (new Date(`1970-01-01 ${time}`) < new Date(`1970-01-01 ${localStorage.getItem('park-it-time')}`)) {
            localStorage.removeItem('park-it-time');
            localStorage.setItem('park-it-time', time);
        }

        let bestTime = localStorage.getItem('park-it-time');
        document.querySelector(".win-lose span").innerHTML = `Your best time: ${bestTime}`;
        document.querySelector(".actual-time span").innerHTML = `Time: ${time}`;
        this.restart();
    }

    start() {
        this.addBalls();
        this.timer.startTimer();
        this.time = (new Date()).getTime();
        setTimeout(() => {
            this.car.car.style.opacity = '1';
        }, 1500);
        this.drawParkingSpot();
    }

    restart() {
        const ctx = this.ctx;
        ctx.fillStyle = "wheat";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.balls = [];
        this.car.reset();
        this.timer.resetTimer();
        this.timer.timerDisplay.innerHTML = "00:00:00";

        if (!this.lives) {
            document.querySelector("div.win-lose span").innerHTML = 'You got a parking ticket';
            document.querySelector("div.actual-time span").innerHTML = '';
        }

        this.lives = 5;
        this.updateHearts();

        document.getElementById("modal").style.visibility = 'visible';
    }
    
    gameOver() {
        return !this.lives;
    }

    updateHearts() {
        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].style.opacity = i < this.lives ? 1 : 0.2;
        }
    }

    animate() {
        const ctx = this.ctx;
        ctx.fillStyle = "wheat";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.animateParkingSpot();
        this.balls.forEach(ball => {
            ball.animate();
        });
        this.balls.forEach(ball => {
            if (this.car.checkCollisionWithBall(ball) && (new Date().getTime()) - this.time > 1500) {
                this.carCrashed();
            }
        });
        this.checkBallCollision();
    }
}