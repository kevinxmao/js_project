import {CAR_CONSTANTS, PlayerCar} from "./car";
import { MovingObj } from "./moving_obj";

export class Game {
    constructor(ctx, car) {
        this.ctx = ctx;
        this.running = true;
        this.level = 1;
        this.car = car;
        this.balls = [];
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

    addBall(radius, vel) {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let angle = Math.random() * Math.PI * 2;

        let attr = {radius, x, y, color, vel, angle};
        console.log(attr)

        const ball = new MovingObj(this.ctx, attr);
        this.balls.push(ball);
    }

    checkBallCollision() {
        for (let i = 0; i < this.balls.length; i++) {
            for (let j = i + 1; j < this.balls.length; j++) {
                if (this.balls[i].isColliding(this.balls[j])) {
                    this.onBallCollision(this.balls[i], this.balls[j]);
                }
            }
        }
    }

    onBallCollision(obj1, obj2) {
        let vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };
        let distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
        let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };

        let vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

        if (speed < 0) {
            return;
        } else {
            // debugger;
            obj1.vx -= (speed * vCollisionNorm.x);
            obj1.vy -= (speed * vCollisionNorm.y);
            obj2.vx += (speed * vCollisionNorm.x);
            obj2.vy += (speed * vCollisionNorm.y);
        }
    }

    parked() {

    }

    start() {

    }

    // levelUp() {

    // }

    restart() {

    }

    animate() {
        const ctx = this.ctx;
        ctx.fillStyle = "wheat";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.balls.forEach(ball => {
            ball.animate();
        });
        this.checkBallCollision();
    }
}