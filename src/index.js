import "./styles/index.scss";
import { Game } from "./scripts/game";
import { PlayerCar } from "./scripts/car";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("main-game");
    const game = new Game(canvas);

    const ctx = canvas.getContext("2d");

    const car = document.getElementById('striped-car');
    const playerCar = new PlayerCar(80, 80, 100, 100, car);

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
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        playerCar.animate(ctx);
      window.animationId = window.requestAnimationFrame(animloop);
    }
    animloop();
})