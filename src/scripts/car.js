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
        this.pivot = {x: this.x + this.width / 2, y: this.y + 20};
        this.frontPivot = { x: 0, y: 0 };
        this.rearPivot = { x: 0, y: 160 };
        this.rotation = 0;
        this.turnAngle = 0;
        this.maxTurnAngle = 45;
        this.turnStep = 9;
        this.directionPivot = {
          x: this.frontPivot.x,
          y: this.frontPivot.y - 50,
        };
        this.rearPivotAbs = {
          x:
            160 * Math.cos(((this.rotation + 90) * Math.PI) / 180) +
            this.pivot.x,
          y:
            160 * Math.sin(((this.rotation + 90) * Math.PI) / 180) +
            this.pivot.y,
        };
        this.tempDirPivot = { x: 0, y: 0 };
        this.speed = 0;
        this.acceleration = 0.2;
        this.direction = new Vector(this.directionPivot, this.frontPivot).normalize();
        
        // move boolean
        this.accelerate = false;
        this.decelerate = false;
        this.break = true;
        this.turnLeft = false;
        this.turnRight = false;

        document.addEventListener(
          "keydown",
          function (e) {
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
                console.log(e.code);
                this.accelerate = true;
                console.log(this.accelerate)
                break;
              case "ArrowDown":
                this.decelerate = true;
                break;
              case " ":
                this.break = true;
                if (this.speed != 0) {
                  this.speed -= 1.2;
                  if (this.speed < 0) this.speed = 0;
                }
                break;
            }
            e.preventDefault();
          }
        );

        document.addEventListener(
          "keyup",
          function (e) {
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
              case " ":
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
          50 *
            Math.cos(((this.turnAngle + this.rotation - 90) * Math.PI) / 180) +
          this.frontPivot.x;
        this.directionPivot.y =
          50 *
            Math.sin(((this.turnAngle + this.rotation - 90) * Math.PI) / 180) +
          this.frontPivot.y;

        this.tempDirPivot.x =
          50 * Math.cos(((this.turnAngle - 90) * Math.PI) / 180) +
          this.frontPivot.x;
        this.tempDirPivot.y =
          50 * Math.sin(((this.turnAngle - 90) * Math.PI) / 180) +
          this.frontPivot.x;

        this.direction = new Vector(this.directionPivot, this.frontPivot).normalize();
        this.direction.x *= this.speed;
        this.direction.y *= this.speed;
    }

    drawCar(ctx) {
        this.updateDirection();
        ctx.save();
        ctx.translate(this.pivot.x, this.pivot.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        ctx.drawImage(this.car, 100, 100);

        ctx.beginPath();

        ctx.moveTo(this.frontPivot.x - 50, this.frontPivot.y);
        ctx.lineTo(this.frontPivot.x + 50, this.frontPivot.y);
        ctx.moveTo(this.rearPivot.x - 50, this.rearPivot.y);
        ctx.lineTo(this.rearPivot.x + 50, this.rearPivot.y);
        ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
        ctx.lineTo(this.rearPivot.x, this.rearPivot.y);

        ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
        ctx.lineTo(this.tempDirPivot.x, this.tempDirPivot.y);
        ctx.strokeStyle = "#000";
        ctx.stroke();

        ctx.restore();
    }

    move() {
        if (this.accelerate) {
            this.speed += this.acceleration;
            console.log("hello")
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

        this.pivot.x += this.direction.x;
        this.pivot.y += this.direction.y;

        const vector = new Vector(this.pivot, this.rearPivotAbs);
        let angle = (Math.atan2(-vector.y, vector.x) * 180) / Math.PI;
        angle += 180;
        angle = 360 - angle - 90;
        this.rotation = angle;

        this.rearPivotAbs = {
          x:
            160 * Math.cos(((this.rotation + 90) * Math.PI) / 180) +
            this.pivot.x,
          y:
            160 * Math.sin(((this.rotation + 90) * Math.PI) / 180) +
            this.pivot.y,
        };
    }

    animate(ctx) {
        this.move();
        this.drawCar(ctx);
    }
}