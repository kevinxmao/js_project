import "./styles/index.scss";
import { Game } from "./scripts/game";
import { PlayerCar } from "./scripts/car";
// import { MovingObj } from "./scripts/moving_obj";
import { Timer } from "./scripts/timer";

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector("a.start");
    const restartBtn = document.querySelector("a.restart-button");
    const modal = document.getElementById("modal");

    const canvas = document.getElementById("main-game");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const myCar = document.getElementById("local");
    const timerEle = document.querySelector('.timer span')

    const timer = new Timer(timerEle);
    const car = new PlayerCar(myCar);
    const game = new Game(ctx, car, timer);

    myCar.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px) rotate(${0}deg)`;
    myCar.style.opacity = "0.5";

  if (window.localStorage.getItem('park-it-time')) window.localStorage.removeItem('park-it-time');

    function animloop() {
        if (game.gameOver()) {
          window.cancelAnimationFrame(window.animationId);
          game.restart();
          return;
        }

        if (game.checkParked()) {
          window.cancelAnimationFrame(window.animationId);
          game.parked();
          return;
        }
        car.move();
        car.drawCar();
        game.animate();

        window.animationId = window.requestAnimationFrame(animloop);
    }

    window.restartBtn = restartBtn;

    restartBtn.addEventListener('click', () => {
      modal.style.visibility = 'hidden';
      startBtn.style.visibility = 'visible';
    });

    startBtn.addEventListener('click', () => {
      startBtn.style.visibility = 'hidden';
      game.start();
      animloop();
    });
})

// Rectangle Math

/*
TOP RIGHT VERTEX:
Top_Right.x = center.x + ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Top_Right.y = center.y + ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))



TOP LEFT VERTEX:
Top_Left.x = center.x - ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Top_Left.y = center.y - ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))



BOTTOM LEFT VERTEX:
Bot_Left.x = center.x - ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Bot_Left.y = center.y - ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))



BOTTOM RIGHT VERTEX:
Bot_Right.x = center.x + ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Bot_Right.y = center.y + ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))
*/