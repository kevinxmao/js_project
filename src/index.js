import "./styles/index.scss";
import { Game } from "./scripts/game";
import { PlayerCar } from "./scripts/car";
import { MovingObj } from "./scripts/moving_obj";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("main-game");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const myCar = document.getElementById("local");

    const car = new PlayerCar(myCar);
    const game = new Game(ctx, car);
    game.addBalls();

    // const car = document.getElementById('striped-car');
    // const playerCar = new PlayerCar(40, 80, 100, 100, car);
    // const game = new Game(playerCar);

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
      let x = car.x;
      let y = car.y;
      let angle = car.angle;
      let width = 16;
      let height = 32;

      // ctx.fillStyle = 'blue';
      // ctx.fillRect(
      //   x - ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
      //   y - ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
      //   1,
      //   1
      // );
      // ctx.fillRect(
      //   x + ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
      //   y + ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
      //   1,
      //   1
      // );

        car.move();
        car.drawCar();
        game.animate();
        window.animationId = window.requestAnimationFrame(animloop);
    }
    animloop();

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