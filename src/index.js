import "./styles/index.scss";
import { Game } from "./scripts/game";
import { PlayerCar } from "./scripts/car";
// import { MovingObj } from "./scripts/moving_obj";
import { Timer } from "./scripts/timer";

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector("a.start");
    const restartBtn = document.querySelector("a.restart-button");

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

    (function () {
      var lastTime = 0;
      var vendors = ["webkit", "moz"];
      for (
        var x = 0;
        x < vendors.length && !window.requestAnimationFrame;
        ++x
      ) {
        window.requestAnimationFrame =
          window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame =
          window[vendors[x] + "CancelAnimationFrame"] ||
          window[vendors[x] + "CancelRequestAnimationFrame"];
      }

      if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
    })();

    function animloop() {
        if (game.gameOver()) {
          game.restart();
          window.cancelAnimationFrame(window.animationId);
        }
        car.move();
        car.drawCar();
        game.animate();

        window.animationId = window.requestAnimationFrame(animloop);
    }

    restartBtn.addEventListener('click', () => {
      console.log('hello')
      document.getElementById("modal").style.visibility = 'hidden';
      startBtn.style.visibility = 'visible';
    })

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