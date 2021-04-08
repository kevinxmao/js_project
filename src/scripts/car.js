export const CAR_CONSTANTS = {
  maxSpeed: 4,
  maxReverseSpeed: 3.5,
  acceleration: 0.5,
  decceleration: 0.05,
  angularAcceleration: 0.04
}

export class PlayerCar {
    constructor(car) {

        // car DOM element
        this.car = car;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.dx = 0;
        this.dy = 0;
        this.speed = 0;
        this.reverseSpeed = 0;
        this.angle = 0;
        this.omega = 0;

        // move boolean
        this.accelerate = false;
        this.reverse = false;
        // this.break = false;
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
                this.reverse = true;
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
                this.reverse = false;
                break;
              case "Space":
                this.break = false;
                break;
            }

            e.preventDefault();
          }
        );
    }

    move() {
      const { maxSpeed, acceleration, decceleration, maxReverseSpeed, angularAcceleration } = CAR_CONSTANTS;

      if (this.accelerate) {
        this.speed += acceleration;
      } else {
        this.speed -= decceleration;
      }

      if (this.reverse) {
        this.reverseSpeed += acceleration;
      } else {
        this.reverseSpeed -= decceleration;
      }

      this.speed = Math.min(maxSpeed, Math.max(this.speed, 0));
      this.reverseSpeed = Math.min(maxReverseSpeed, Math.max(this.reverseSpeed, 0));

      const direction = this.speed >= this.reverseSpeed ? 1 : -1;

      if (this.turnRight && (this.speed > 0.1 || this.reverseSpeed > 0.1)) {
        this.omega = direction * angularAcceleration;
      } else if (this.turnLeft && (this.speed > 0.1 || this.reverseSpeed > 0.1)) {
        this.omega = -direction * angularAcceleration;
      } else {
        this.omega = 0;
      }

      this.dx = Math.sin(this.angle) * (this.speed - this.reverseSpeed);
      this.dy = Math.cos(this.angle) * (this.speed - this.reverseSpeed);

      // console.log(this.x)

      this.x += this.dx;
      this.y -= this.dy;

      this.angle += this.omega;
      this.omega *= this.omega;

      if (this.x > window.innerWidth) {
        this.x -= window.innerWidth;
      } else if (this.x < 0) {
        this.x += window.innerWidth;
      }

      if (this.y > window.innerHeight) {
        this.y -= window.innerHeight;
      } else if (this.y < 0) {
        this.y += window.innerHeight;
      }
    }

    drawCar() {
      this.car.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.angle * 180 / Math.PI}deg)`;
    }

}