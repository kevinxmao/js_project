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
    }

    addBalls() {
        if (this.level === 1) {
            for (let i = 0; i < 10; i++) {
                this.addBall(30, 5);
            }
        }
    }

    drawParkingSpot() {

    }

    carCrashed() {
        --this.lives;
        this.updateHearts();
        this.reset();
    }

    addBall(radius, vel) {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
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
        // debugger;
        this.balls = [];
        this.addBalls();
        this.car.car.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px) rotate(${0}deg)`;
        this.timer.startTimer();
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
            // debugger;
            obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
            obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
            obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
            obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
        }
    }

    parked() {

    }

    start() {
        this.addBalls();
        this.timer.startTimer();
    }

    restart() {

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
        this.balls.forEach(ball => {
            ball.animate();
        });
        this.balls.forEach(ball => {
            if (this.car.checkCollisionWithBall(ball)) {
                this.carCrashed();
                this.timer.pauseTimer();
            }
        });
        this.checkBallCollision();
    }
}