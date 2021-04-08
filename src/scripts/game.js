import {CAR_CONSTANTS, PlayerCar} from "./car";

export class Game {
    constructor(car) {
        this.running = true;
        this.level = 1;
        this.car = car;
    }

    arrangeCars(ctx) {
        const sidwalk = document.getElementById('sidewalk-middle');
        for (let i = 0; i < ctx.canvas.height; i += 40) {
            ctx.drawImage(sidwalk, 0, i, 40, 40)
        }
        for (let i = 0; i < ctx.canvas.height; i += 40) {
            ctx.drawImage(sidwalk, 40, i, 40, 40)
        }

        for (let i = 0; i < ctx.canvas.height; i += 40) {
            ctx.drawImage(sidwalk, ctx.canvas.width - 40, i, 40, 40)
        }

        for (let i = 0; i < ctx.canvas.height; i += 40) {
            ctx.drawImage(sidwalk, ctx.canvas.width - 80, i, 40, 40)
        }

        const blueCar = document.getElementById('blue-car');
        ctx.drawImage(blueCar, 85, 80, 40, 80)
    }

    checkCollision() {
        if (this.car.location.x < 114) {
            console.log("crash")
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

    animate(ctx) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 700);
        ctx.moveTo(0, 350);
        ctx.lineTo(400, 350);
        ctx.strokeStyle = "#fff";
        ctx.stroke();
        this.checkCollision();
        this.arrangeCars(ctx);
        this.car.animate(ctx);
    }


}