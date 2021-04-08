import { Vector } from "./vector";

export const CAR_CONSTANTS = {

}

export class PlayerCar {
    constructor(width, height, x, y, car) {
        this.car = car;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.location = { x: this.x + this.width / 2, y: this.y + this.height / 2, phi: 0 };
        this.pivot = { x: this.x + 50, y: this.y + 20 };
        this.frontPivot = { x: this.x + this.width / 2, y: this.y + 20 };
        this.rearPivot = { x: this.x + this.width / 2, y: this.y + this.height };
        this.rotation = 0;
        this.turnAngle = 0;
        this.maxTurnAngle = 45;
        this.turnStep = 45;
        this.directionPivot = {
            x: this.frontPivot.x,
            y: this.frontPivot.y - 15,
        };
        this.rearPivotAbs = {
            x:
                50 * Math.cos(((this.rotation + 90) * Math.PI) / 180) +
                this.pivot.x,
            y:
                50 * Math.sin(((this.rotation + 90) * Math.PI) / 180) +
                this.pivot.y,
        };
        this.tempDirPivot = { x: 0, y: 0 };
        this.speed = 0;
        this.acceleration = 0.1;
        this.direction = new Vector(this.directionPivot, this.frontPivot).normalize();

        // move boolean
        this.accelerate = false;
        this.decelerate = false;
        this.break = false;
        this.turnLeft = false;
        this.turnRight = false;

        document.addEventListener(
            "keydown",
            e => {
                if (e.defaultPrevented) {
                    return;
                }

                switch (e.code) {
                    case "ArrowLeft":
                        this.turnLeft = true;
                        break;
                    case "ArrowRight":
                        this.turnRight = true;
                        break;
                    case "ArrowUp":
                        // console.log("key down");
                        this.accelerate = true;
                        // console.log(this.accelerate)
                        break;
                    case "ArrowDown":
                        this.decelerate = true;
                        break;
                    case "Space":
                        this.break = true;
                        if (this.speed != 0) {
                            this.speed -= 1.2;
                            if (this.speed < 0) this.speed = 0;
                        }
                        break;
                }
                e.preventDefault();
                // console.log(this.accelerate)
            }
        );

        document.addEventListener(
            "keyup",
            e => {
                if (e.defaultPrevented) {
                    return;
                }

                switch (e.code) {
                    case "ArrowLeft":
                        this.turnLeft = false;
                        break;
                    case "ArrowRight":
                        this.turnRight = false;
                        break;
                    case "ArrowUp":
                        this.accelerate = false;
                        break;
                    case "ArrowDown":
                        this.decelerate = false;
                        break;
                    case "Space":
                        this.break = false;
                        break;
                }

                e.preventDefault();
            }
        );
    }

    updateDirection() {
        if (this.turnLeft && this.turnAngle > -this.maxTurnAngle) {
            this.turnAngle -= this.turnStep;
        }

        if (this.turnRight && this.turnAngle < this.maxTurnAngle) {
            this.turnAngle += this.turnStep;
        }

        this.directionPivot.x =
            100 *
            Math.cos(((this.turnAngle + this.rotation - 90) * Math.PI) / 180) +
            this.frontPivot.x;
        this.directionPivot.y =
            100 *
            Math.sin(((this.turnAngle + this.rotation - 90) * Math.PI) / 180) +
            this.frontPivot.y;

        this.tempDirPivot.x =
            20 * Math.cos(((this.turnAngle - 90) * Math.PI) / 180) +
            this.frontPivot.x;
        this.tempDirPivot.y =
            20 * Math.sin(((this.turnAngle - 90) * Math.PI) / 180) +
            this.frontPivot.y - 20;

        this.direction = new Vector(this.directionPivot, this.frontPivot).normalize();
        this.direction.x *= this.speed;
        this.direction.y *= this.speed;
    }

    drawCar(ctx) {
        this.updateDirection();
        ctx.save();
        let dx = 0;
        let dy = 0;

        if (dx !== this.direction.x && dy !== this.direction.dy) {
            [dx, dy] = [this.direction.x, this.direction.y]
        }
        this.location.x += dx;
        this.location.y += dy;
        this.location.phi = this.rotation;
        // console.log(this.location);
        ctx.translate(this.pivot.x, this.pivot.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        ctx.drawImage(this.car, this.x, this.y, this.width, this.height);

        ctx.beginPath();

        // ctx.moveTo(this.frontPivot.x - 20, this.frontPivot.y);
        // ctx.lineTo(this.frontPivot.x + 20, this.frontPivot.y);
        // ctx.moveTo(this.rearPivot.x - 20, this.rearPivot.y);
        // ctx.lineTo(this.rearPivot.x + 20, this.rearPivot.y);

        // ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
        // ctx.lineTo(this.rearPivot.x, this.rearPivot.y);

        ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
        ctx.lineTo(this.tempDirPivot.x, this.tempDirPivot.y);

        ctx.strokeStyle = "#fff";
        ctx.stroke();

        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.pivot.x, this.pivot.y, 10, 10)

        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.location.x, this.location.y, 10, 10)

        // ctx.fillStyle = 'yellow';
        // ctx.fillRect(this.direction.x, this.direction.y, 10, 10)

        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.rearPivotAbs.x, this.rearPivotAbs.y, 10, 10)

        ctx.restore();
    }

    move() {
        if (this.accelerate) {
            this.speed += this.acceleration;
        } else if (this.speed > 0) {
            this.speed -= this.acceleration;
        }

        if (this.decelerate) {
            this.speed -= this.acceleration;
        } else if (this.speed < 0) {
            this.speed += this.acceleration;
        }

        if (this.break) {
            if (this.speed != 0) {
                this.speed -= 1.2;
                if (this.speed < 0) this.speed = 0;
            }
        }

        if ((this.accelerate || this.decelerate) && (!this.turnLeft || !this.turnRight)) {
            this.turnAngle = 0;
        }

        this.pivot.x += this.direction.x;
        this.pivot.y += this.direction.y;

        const vector = new Vector(this.pivot, this.rearPivotAbs);
        let angle = (Math.atan2(-vector.y, vector.x) * 180) / Math.PI;
        angle += 180;
        angle = 360 - angle - 90;
        this.rotation = angle;

        this.rearPivotAbs = {
            x:
                200 * Math.cos(((this.rotation + 90) * Math.PI) / 180) + this.pivot.x,
            y:
                200 * Math.sin(((this.rotation + 90) * Math.PI) / 180) + this.pivot.y,
        };
    }

    checkCollision() {

    }

    animate(ctx) {
        this.move();
        this.drawCar(ctx);
    }
}