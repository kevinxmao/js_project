/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/car */ "./src/scripts/car.js");
/* harmony import */ var _scripts_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/timer */ "./src/scripts/timer.js");


 // import { MovingObj } from "./scripts/moving_obj";


document.addEventListener("DOMContentLoaded", function () {
  var startBtn = document.querySelector("a.start");
  var restartBtn = document.querySelector("a.restart-button");
  var modal = document.getElementById("modal");
  var canvas = document.getElementById("main-game");
  var ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  var myCar = document.getElementById("local");
  var timerEle = document.querySelector('.timer span');
  var timer = new _scripts_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](timerEle);
  var car = new _scripts_car__WEBPACK_IMPORTED_MODULE_2__["PlayerCar"](myCar);
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["Game"](ctx, car, timer);
  myCar.style.transform = "translate(".concat(window.innerWidth / 2, "px, ").concat(window.innerHeight / 2, "px) rotate(", 0, "deg)");
  myCar.style.opacity = "0.5";

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
  restartBtn.addEventListener('click', function () {
    modal.style.visibility = 'hidden';
    startBtn.style.visibility = 'visible';
  });
  startBtn.addEventListener('click', function () {
    startBtn.style.visibility = 'hidden';
    game.start();
    animloop();
  });
}); // Rectangle Math

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

/***/ }),

/***/ "./src/scripts/car.js":
/*!****************************!*\
  !*** ./src/scripts/car.js ***!
  \****************************/
/*! exports provided: CAR_CONSTANTS, PlayerCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAR_CONSTANTS", function() { return CAR_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCar", function() { return PlayerCar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CAR_CONSTANTS = {
  maxSpeed: 4,
  maxReverseSpeed: 3.5,
  acceleration: 0.5,
  decceleration: 0.2,
  angularAcceleration: 0.05
};
var PlayerCar = /*#__PURE__*/function () {
  function PlayerCar(car) {
    var _this = this;

    _classCallCheck(this, PlayerCar);

    // car DOM element
    this.car = car;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.reverseSpeed = 0;
    this.angle = 0;
    this.omega = 0;
    this.mass = 1; // move boolean

    this.accelerate = false;
    this.reverse = false; // this.break = false;

    this.turnLeft = false;
    this.turnRight = false;
    document.addEventListener("keydown", function (e) {
      if (e.defaultPrevented) {
        return;
      }

      switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
          _this.turnLeft = true;
          break;

        case "KeyD":
        case "ArrowRight":
          _this.turnRight = true;
          break;

        case "KeyW":
        case "ArrowUp":
          // console.log("key down");
          _this.accelerate = true; // console.log(this.accelerate)

          break;

        case "KeyS":
        case "ArrowDown":
          _this.reverse = true;
          break;

        case "Space":
          _this.break = true;

          if (_this.speed != 0) {
            _this.speed -= 1.2;
            if (_this.speed < 0) _this.speed = 0;
          }

          break;
      }

      e.preventDefault(); // console.log(this.accelerate)
    });
    document.addEventListener("keyup", function (e) {
      if (e.defaultPrevented) {
        return;
      }

      switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
          _this.turnLeft = false;
          break;

        case "KeyD":
        case "ArrowRight":
          _this.turnRight = false;
          break;

        case "KeyW":
        case "ArrowUp":
          _this.accelerate = false;
          break;

        case "KeyS":
        case "ArrowDown":
          _this.reverse = false;
          break;

        case "Space":
          _this.break = false;
          break;
      }

      e.preventDefault();
    });
  }

  _createClass(PlayerCar, [{
    key: "reset",
    value: function reset() {
      this.x = window.innerWidth / 2;
      this.y = window.innerHeight / 2;
      this.vx = 0;
      this.vy = 0;
      this.speed = 0;
      this.reverseSpeed = 0;
      this.angle = 0;
      this.omega = 0;
      this.mass = 1; // move boolean

      this.accelerate = false;
      this.reverse = false; // this.break = false;

      this.turnLeft = false;
      this.turnRight = false;
      this.car.style.transform = "translate(".concat(window.innerWidth / 2, "px, ").concat(window.innerHeight / 2, "px) rotate(", 0, "deg)");
      this.car.style.opacity = '0.5';
    }
  }, {
    key: "renderCrash",
    value: function renderCrash() {}
  }, {
    key: "move",
    value: function move() {
      var maxSpeed = CAR_CONSTANTS.maxSpeed,
          acceleration = CAR_CONSTANTS.acceleration,
          decceleration = CAR_CONSTANTS.decceleration,
          maxReverseSpeed = CAR_CONSTANTS.maxReverseSpeed,
          angularAcceleration = CAR_CONSTANTS.angularAcceleration;

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
      var direction = this.speed >= this.reverseSpeed ? 1 : -1;

      if (this.turnRight && (this.speed > 0.1 || this.reverseSpeed > 0.1)) {
        this.omega = direction * angularAcceleration;
      } else if (this.turnLeft && (this.speed > 0.1 || this.reverseSpeed > 0.1)) {
        this.omega = -direction * angularAcceleration;
      } else {
        this.omega = 0;
      }

      this.vx = Math.sin(this.angle) * (this.speed - this.reverseSpeed);
      this.vy = Math.cos(this.angle) * (this.speed - this.reverseSpeed); // console.log(this.x)

      this.x += this.vx;
      this.y -= this.vy;
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
  }, {
    key: "checkCollisionWithBall",
    value: function checkCollisionWithBall(ball) {
      // unrotated circle
      var ucX = Math.cos(this.angle) * (ball.x - this.x) - Math.sin(this.angle) * (ball.y - this.y) + this.x;
      var ucY = Math.sin(this.angle) * (ball.x - this.x) + Math.cos(this.angle) * (ball.y - this.y) + this.y;
      var closestX;
      var closestY;

      if (ucX < this.x) {
        closestX = this.x;
      } else if (ucX > this.x + 16) {
        closestX = this.x + 16;
      } else {
        closestX = ucX;
      }

      if (ucY < this.y) {
        closestY = this.y;
      } else if (ucY > this.y + 32) {
        closestY = this.y + 16;
      } else {
        closestY = ucY;
      }

      var distance = Math.sqrt((ucX - closestX) * (ucX - closestX) + (ucY - closestY) * (ucY - closestY));
      return distance <= ball.radius;
    }
  }, {
    key: "drawCar",
    value: function drawCar() {
      this.car.style.transform = "translate(".concat(this.x, "px, ").concat(this.y, "px) rotate(").concat(this.angle * 180 / Math.PI, "deg)");
    }
  }]);

  return PlayerCar;
}();

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./src/scripts/car.js");
/* harmony import */ var _moving_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_obj */ "./src/scripts/moving_obj.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(ctx, car, timer) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.running = true;
    this.level = 1;
    this.car = car;
    this.timer = timer;
    this.balls = [];
    this.lives = 5;
    this.hearts = document.querySelectorAll("div.lives li");
    this.time = null;
    this.pX = 0;
    this.pY = 0;
    this.img = new Image(); // this.img.onload = () => this.draw(ctx);

    this.img.src = "src/assets/images/parking.png";
  }

  _createClass(Game, [{
    key: "addBalls",
    value: function addBalls() {
      if (this.level === 1) {
        for (var i = 0; i < 10; i++) {
          this.addBall(30, 5);
        }
      }
    }
  }, {
    key: "drawParkingSpot",
    value: function drawParkingSpot() {
      var skirt = 30;
      var innerBox = 100;
      var x = Math.floor(Math.random() * (window.innerWidth - skirt)) + skirt;
      var y = Math.floor(Math.random() * (window.innerHeight - skirt)) + skirt;

      while (x > window.innerWidth / 2 - innerBox / 2 && x < window.innerWidth / 2 + innerBox / 2) {
        x = Math.floor(Math.random() * (window.innerWidth - skirt)) + skirt;
      }

      while (y > window.innerHeight / 2 - innerBox / 2 && y < window.innerHeight / 2 + innerBox / 2) {
        y = Math.floor(Math.random() * (window.innerHeight - skirt)) + skirt;
      }

      this.pX = x;
      this.pY = y;
    }
  }, {
    key: "animateParkingSpot",
    value: function animateParkingSpot() {
      this.ctx.fillStyle = '#0071cc';
      this.ctx.fillRect(this.pX, this.pY, 60, 60); // let region = new Path2D();
      // region.rect(this.pX, this.pY, 60, 60);
      // this.ctx.clip(region);
      // this.ctx.drawImage(
      //     this.img,
      //     this.pX,
      //     this.pY,
      //     60,
      //     60
      // );
    }
  }, {
    key: "carCrashed",
    value: function carCrashed() {
      --this.lives;
      this.updateHearts();
      this.reset();
    }
  }, {
    key: "addBall",
    value: function addBall(radius, vel) {
      // let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      var color = 'blue';
      var x = Math.floor(Math.random() * window.innerWidth);
      var y = Math.floor(Math.random() * window.innerHeight);
      var angle = Math.random() * Math.PI * 2;
      var attr = {
        radius: radius,
        x: x,
        y: y,
        color: color,
        vel: vel,
        angle: angle
      };
      var ball = new _moving_obj__WEBPACK_IMPORTED_MODULE_1__["MovingObj"](this.ctx, attr);
      this.balls.push(ball);
    }
  }, {
    key: "checkBallCollision",
    value: function checkBallCollision() {
      for (var i = 0; i < this.balls.length; i++) {
        for (var j = i + 1; j < this.balls.length; j++) {
          if (this.balls[i].isColliding(this.balls[j])) {
            Game.onCollision(this.balls[i], this.balls[j]);
          }
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      // debugger;
      this.balls = [];
      this.addBalls();
      this.car.reset();
      this.time = new Date().getTime();
      setTimeout(function () {
        _this.car.car.style.opacity = '1';
      }, 1500);
    }
  }, {
    key: "checkParked",
    value: function checkParked() {
      var car = this.car;
      var width = 16;
      var height = 32;
      var x = [car.x + width / 2 * Math.cos(car.angle) + 32 / 2 * Math.sin(car.angle), car.x - width / 2 * Math.cos(car.angle) + 32 / 2 * Math.sin(car.angle), car.x - width / 2 * Math.cos(car.angle) - 32 / 2 * Math.sin(car.angle), car.x + width / 2 * Math.cos(car.angle) - 32 / 2 * Math.sin(car.angle)];
      var y = [car.y + width / 2 * Math.sin(car.angle) - height / 2 * Math.cos(car.angle), car.y - width / 2 * Math.sin(car.angle) - height / 2 * Math.cos(car.angle), car.y - width / 2 * Math.sin(car.angle) + height / 2 * Math.cos(car.angle), car.y + width / 2 * Math.sin(car.angle) + height / 2 * Math.cos(car.angle)];
      var minX = Math.min.apply(Math, x);
      var maxX = Math.max.apply(Math, x);
      var minY = Math.min.apply(Math, y);
      var maxY = Math.max.apply(Math, y);
      var conditions = [minX > this.pX && minX < this.pX + 60, maxX > this.pX && maxX < this.pX + 60, minY > this.pY && minY < this.pY + 60, maxY > this.pY && maxY < this.pY + 60];
      var parked = !conditions.includes(false);
      return parked;
    }
  }, {
    key: "parked",
    value: function parked() {
      var time = this.timer.timerDisplay.innerHTML;

      if (localStorage.getItem('time') === null) {
        localStorage.setItem('time', time);
      }

      console.log(time);

      if (Date.parse(time) < Date.parse(localStorage.getItem('time'))) {
        localStorage.removeItem('time');
        localStorage.setItem('time', time);
      }

      var bestTime = localStorage.getItem('time');
      document.querySelector(".win-lose span").innerHTML = "Your best time: ".concat(bestTime);
      this.restart();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.addBalls();
      this.timer.startTimer();
      this.time = new Date().getTime();
      setTimeout(function () {
        _this2.car.car.style.opacity = '1';
      }, 1500);
      this.drawParkingSpot();
    }
  }, {
    key: "restart",
    value: function restart() {
      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.balls = [];
      this.car.reset();
      this.timer.resetTimer();
      this.timer.timerDisplay.innerHTML = "00:00:00";

      if (!this.lives) {
        document.querySelector("div.win-lose span").innerHTML = 'You got a parking ticket';
      }

      this.lives = 5;
      this.updateHearts();
      document.getElementById("modal").style.visibility = 'visible';
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return !this.lives;
    }
  }, {
    key: "updateHearts",
    value: function updateHearts() {
      for (var i = 0; i < this.hearts.length; i++) {
        this.hearts[i].style.opacity = i < this.lives ? 1 : 0.2;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.animateParkingSpot();
      this.balls.forEach(function (ball) {
        ball.animate();
      });
      this.balls.forEach(function (ball) {
        if (_this3.car.checkCollisionWithBall(ball) && new Date().getTime() - _this3.time > 1500) {
          _this3.carCrashed();
        }
      });
      this.checkBallCollision();
    }
  }], [{
    key: "onCollision",
    value: function onCollision(obj1, obj2) {
      var vCollision = {
        x: obj2.x - obj1.x,
        y: obj2.y - obj1.y
      };
      var distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));
      var vCollisionNorm = {
        x: vCollision.x / distance,
        y: vCollision.y / distance
      };
      var vRelativeVelocity = {
        x: obj1.vx - obj2.vx,
        y: obj1.vy - obj2.vy
      };
      var speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
      var impulse = 2 * speed / (obj1.mass + obj2.mass);

      if (speed < 0) {
        return;
      } else {
        // debugger;
        obj1.vx -= impulse * obj2.mass * vCollisionNorm.x;
        obj1.vy -= impulse * obj2.mass * vCollisionNorm.y;
        obj2.vx += impulse * obj1.mass * vCollisionNorm.x;
        obj2.vy += impulse * obj1.mass * vCollisionNorm.y;
      }
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/scripts/moving_obj.js":
/*!***********************************!*\
  !*** ./src/scripts/moving_obj.js ***!
  \***********************************/
/*! exports provided: MovingObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingObj", function() { return MovingObj; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingObj = /*#__PURE__*/function () {
  function MovingObj(ctx, attr) {
    var _this = this;

    _classCallCheck(this, MovingObj);

    this.ctx = ctx;
    this.radius = attr.radius;
    this.x = attr.x;
    this.y = attr.y;
    this.color = attr.color;
    this.vel = attr.vel;
    this.angle = attr.angle;
    this.mass = this.radius;
    this.img = new Image();

    this.img.onload = function () {
      return _this.draw(ctx);
    };

    this.img.src = "src/assets/images/no_parking.png";
    this.vx = this.vel * Math.cos(this.angle);
    this.vy = this.vel * Math.sin(this.angle); // debugger
  }

  _createClass(MovingObj, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // ctx.fillStyle = this.color;
      // ctx.fill();

      ctx.closePath();
      ctx.clip();
      ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      var _ref = [this.vx, this.vy],
          dx = _ref[0],
          dy = _ref[1];
      this.x += dx;
      this.y += dy;

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
  }, {
    key: "isColliding",
    value: function isColliding(ball) {
      var dx = this.x - ball.x;
      var dy = this.y - ball.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      return d < this.radius + ball.radius;
    }
  }, {
    key: "animate",
    value: function animate() {
      this.move();
      this.draw(this.ctx);
    }
  }]);

  return MovingObj;
}();

/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(timer) {
    _classCallCheck(this, Timer);

    this.startTime = 0;
    this.tInterval = 0;
    this.updatedTime = 0;
    this.savedTime = 0;
    this.difference = 0;
    this.running = false;
    this.paused = false;
    this.timerDisplay = timer;
    this.getShowTime = this.getShowTime.bind(this);
  }

  _createClass(Timer, [{
    key: "startTimer",
    value: function startTimer() {
      if (!this.running) {
        this.startTime = new Date().getTime();
        this.tInterval = window.setInterval(this.getShowTime, 1);
        this.running = true;
        this.paused = false;
      }
    }
  }, {
    key: "pauseTimer",
    value: function pauseTimer() {
      if (!this.difference) {
        return;
      } else if (!this.paused) {
        clearInterval(this.tInterval);
        this.savedTime = this.difference;
        this.paused = true;
        this.running = false;
      } else {
        this.startTimer();
      }
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      clearInterval(this.tInterval);
      this.savedTime = 0;
      this.difference = 0;
      this.paused = false;
      this.running = false;
    }
  }, {
    key: "getShowTime",
    value: function getShowTime() {
      this.updatedTime = new Date().getTime();

      if (this.savedTime) {
        this.difference = this.updatedTime - this.startTime + this.savedTime;
      } else {
        this.difference = this.updatedTime - this.startTime;
      } // let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


      var minutes = Math.floor(this.difference % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(this.difference % (1000 * 60) / 1000);
      var milliseconds = Math.floor(this.difference % (1000 * 60) / 10) % 100; // hours = (hours < 10) ? "0" + hours : hours;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      milliseconds = milliseconds < 100 ? milliseconds < 10 ? "0" + milliseconds : "" + milliseconds : milliseconds; // let txt = document.createTextNode(`${minutes}:${seconds}:${milliseconds}`);
      // this.timerDisplay.appendChild(txt);

      this.timerDisplay.innerHTML = "".concat(minutes, ":").concat(seconds, ":").concat(milliseconds);
    }
  }]);

  return Timer;
}();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QnRuIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdG4iLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJ0aW1lckVsZSIsInRpbWVyIiwiVGltZXIiLCJjYXIiLCJQbGF5ZXJDYXIiLCJnYW1lIiwiR2FtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImFuaW1sb29wIiwiZ2FtZU92ZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbklkIiwicmVzdGFydCIsImNoZWNrUGFya2VkIiwicGFya2VkIiwibW92ZSIsImRyYXdDYXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidmlzaWJpbGl0eSIsInN0YXJ0IiwiQ0FSX0NPTlNUQU5UUyIsIm1heFNwZWVkIiwibWF4UmV2ZXJzZVNwZWVkIiwiYWNjZWxlcmF0aW9uIiwiZGVjY2VsZXJhdGlvbiIsImFuZ3VsYXJBY2NlbGVyYXRpb24iLCJ4IiwieSIsInZ4IiwidnkiLCJzcGVlZCIsInJldmVyc2VTcGVlZCIsImFuZ2xlIiwib21lZ2EiLCJtYXNzIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJNYXRoIiwibWluIiwibWF4IiwiZGlyZWN0aW9uIiwic2luIiwiY29zIiwiYmFsbCIsInVjWCIsInVjWSIsImNsb3Nlc3RYIiwiY2xvc2VzdFkiLCJkaXN0YW5jZSIsInNxcnQiLCJyYWRpdXMiLCJQSSIsInJ1bm5pbmciLCJsZXZlbCIsImJhbGxzIiwibGl2ZXMiLCJoZWFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGltZSIsInBYIiwicFkiLCJpbWciLCJJbWFnZSIsInNyYyIsImkiLCJhZGRCYWxsIiwic2tpcnQiLCJpbm5lckJveCIsImZsb29yIiwicmFuZG9tIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGVIZWFydHMiLCJyZXNldCIsInZlbCIsImNvbG9yIiwiYXR0ciIsIk1vdmluZ09iaiIsInB1c2giLCJsZW5ndGgiLCJqIiwiaXNDb2xsaWRpbmciLCJvbkNvbGxpc2lvbiIsImFkZEJhbGxzIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRUaW1lb3V0IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsImNvbmRpdGlvbnMiLCJpbmNsdWRlcyIsInRpbWVyRGlzcGxheSIsImlubmVySFRNTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInBhcnNlIiwicmVtb3ZlSXRlbSIsImJlc3RUaW1lIiwic3RhcnRUaW1lciIsImRyYXdQYXJraW5nU3BvdCIsInJlc2V0VGltZXIiLCJhbmltYXRlUGFya2luZ1Nwb3QiLCJmb3JFYWNoIiwiY2hlY2tDb2xsaXNpb25XaXRoQmFsbCIsImNhckNyYXNoZWQiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJvYmoxIiwib2JqMiIsInZDb2xsaXNpb24iLCJ2Q29sbGlzaW9uTm9ybSIsInZSZWxhdGl2ZVZlbG9jaXR5IiwiaW1wdWxzZSIsIm9ubG9hZCIsImRyYXciLCJzYXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiY2xpcCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJkeCIsImR5IiwiZCIsInN0YXJ0VGltZSIsInRJbnRlcnZhbCIsInVwZGF0ZWRUaW1lIiwic2F2ZWRUaW1lIiwiZGlmZmVyZW5jZSIsInBhdXNlZCIsImdldFNob3dUaW1lIiwiYmluZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLE1BQU1DLFVB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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyQ2FyIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJcIjtcbi8vIGltcG9ydCB7IE1vdmluZ09iaiB9IGZyb20gXCIuL3NjcmlwdHMvbW92aW5nX29ialwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9zY3JpcHRzL3RpbWVyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnN0YXJ0XCIpO1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5yZXN0YXJ0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZ2FtZVwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBteUNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxcIik7XG4gICAgY29uc3QgdGltZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXIgc3BhbicpXG5cbiAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcih0aW1lckVsZSk7XG4gICAgY29uc3QgY2FyID0gbmV3IFBsYXllckNhcihteUNhcik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgY2FyLCB0aW1lcik7XG5cbiAgICBteUNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7d2luZG93LmlubmVyV2lkdGggLyAyfXB4LCAke3dpbmRvdy5pbm5lckhlaWdodCAvIDJ9cHgpIHJvdGF0ZSgkezB9ZGVnKWA7XG4gICAgbXlDYXIuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG5cbiAgICBmdW5jdGlvbiBhbmltbG9vcCgpIHtcbiAgICAgICAgaWYgKGdhbWUuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh3aW5kb3cuYW5pbWF0aW9uSWQpO1xuICAgICAgICAgIGdhbWUucmVzdGFydCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lLmNoZWNrUGFya2VkKCkpIHtcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgICAgICBnYW1lLnBhcmtlZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuICAgICAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgICAgICB3aW5kb3cuYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVzdGFydEJ0biA9IHJlc3RhcnRCdG47XG5cbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9KTtcblxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgYW5pbWxvb3AoKTtcbiAgICB9KTtcbn0pXG5cbi8vIFJlY3RhbmdsZSBNYXRoXG5cbi8qXG5UT1AgUklHSFQgVkVSVEVYOlxuVG9wX1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cblRPUCBMRUZUIFZFUlRFWDpcblRvcF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIExFRlQgVkVSVEVYOlxuQm90X0xlZnQueCA9IGNlbnRlci54IC0gKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcbkJvdF9MZWZ0LnkgPSBjZW50ZXIueSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gUklHSFQgVkVSVEVYOlxuQm90X1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcbiovIiwiZXhwb3J0IGNvbnN0IENBUl9DT05TVEFOVFMgPSB7XG4gIG1heFNwZWVkOiA0LFxuICBtYXhSZXZlcnNlU3BlZWQ6IDMuNSxcbiAgYWNjZWxlcmF0aW9uOiAwLjUsXG4gIGRlY2NlbGVyYXRpb246IDAuMixcbiAgYW5ndWxhckFjY2VsZXJhdGlvbjogMC4wNVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihjYXIpIHtcblxuICAgICAgICAvLyBjYXIgRE9NIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5vbWVnYSA9IDA7XG4gICAgICAgIHRoaXMubWFzcyA9IDE7XG5cbiAgICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiS2V5QVwiOlxuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlEXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGRvd25cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2VsZXJhdGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiS2V5QVwiOlxuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiS2V5RFwiOlxuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlXXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgdGhpcy54ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgIHRoaXMudnggPSAwO1xuICAgICAgdGhpcy52eSA9IDA7XG4gICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gMDtcbiAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgdGhpcy5vbWVnYSA9IDA7XG4gICAgICB0aGlzLm1hc3MgPSAxO1xuXG4gICAgICAvLyBtb3ZlIGJvb2xlYW5cbiAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmJyZWFrID0gZmFsc2U7XG4gICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3dpbmRvdy5pbm5lcldpZHRoIC8gMn1weCwgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLyAyfXB4KSByb3RhdGUoJHswfWRlZylgO1xuICAgICAgdGhpcy5jYXIuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIH1cblxuICAgIHJlbmRlckNyYXNoKCkge1xuXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgIGNvbnN0IHsgbWF4U3BlZWQsIGFjY2VsZXJhdGlvbiwgZGVjY2VsZXJhdGlvbiwgbWF4UmV2ZXJzZVNwZWVkLCBhbmd1bGFyQWNjZWxlcmF0aW9uIH0gPSBDQVJfQ09OU1RBTlRTO1xuXG4gICAgICBpZiAodGhpcy5hY2NlbGVyYXRlKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgKz0gYWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZXZlcnNlKSB7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkIC09IGRlY2NlbGVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLm1pbihtYXhTcGVlZCwgTWF0aC5tYXgodGhpcy5zcGVlZCwgMCkpO1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSBNYXRoLm1pbihtYXhSZXZlcnNlU3BlZWQsIE1hdGgubWF4KHRoaXMucmV2ZXJzZVNwZWVkLCAwKSk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWQgPj0gdGhpcy5yZXZlcnNlU3BlZWQgPyAxIDogLTE7XG5cbiAgICAgIGlmICh0aGlzLnR1cm5SaWdodCAmJiAodGhpcy5zcGVlZCA+IDAuMSB8fCB0aGlzLnJldmVyc2VTcGVlZCA+IDAuMSkpIHtcbiAgICAgICAgdGhpcy5vbWVnYSA9IGRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHVybkxlZnQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSAtZGlyZWN0aW9uICogYW5ndWxhckFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZ4ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcbiAgICAgIHRoaXMudnkgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqICh0aGlzLnNwZWVkIC0gdGhpcy5yZXZlcnNlU3BlZWQpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpXG5cbiAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgICAgdGhpcy55IC09IHRoaXMudnk7XG5cbiAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy5vbWVnYTtcbiAgICAgIHRoaXMub21lZ2EgKj0gdGhpcy5vbWVnYTtcblxuICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMueCAtPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICB0aGlzLnggKz0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy55IC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICB0aGlzLnkgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uV2l0aEJhbGwoYmFsbCkge1xuICAgICAgICAvLyB1bnJvdGF0ZWQgY2lyY2xlXG4gICAgICAgIGxldCB1Y1ggPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIChiYWxsLnggLSB0aGlzLngpIC0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiAoYmFsbC55IC0gdGhpcy55KSArIHRoaXMueDtcbiAgICAgICAgbGV0IHVjWSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKGJhbGwueCAtIHRoaXMueCkgKyBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIChiYWxsLnkgLSB0aGlzLnkpICsgdGhpcy55O1xuXG4gICAgICAgIGxldCBjbG9zZXN0WDtcbiAgICAgICAgbGV0IGNsb3Nlc3RZO1xuXG4gICAgICAgIGlmICh1Y1ggPCB0aGlzLngpIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHRoaXMueDtcbiAgICAgICAgfSBlbHNlIGlmICh1Y1ggPiB0aGlzLnggKyAxNikge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdGhpcy54ICsgMTY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB1Y1g7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodWNZIDwgdGhpcy55KSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB0aGlzLnk7XG4gICAgICAgIH0gZWxzZSBpZiAodWNZID4gdGhpcy55ICsgMzIpIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHRoaXMueSArIDE2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdWNZO1xuICAgICAgICB9XG5cbiAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgodWNYIC0gY2xvc2VzdFgpICogKHVjWCAtIGNsb3Nlc3RYKSArICh1Y1kgLSBjbG9zZXN0WSkgKiAodWNZIC0gY2xvc2VzdFkpKTtcbiAgICAgIHJldHVybiBkaXN0YW5jZSA8PSBiYWxsLnJhZGl1cztcbiAgICB9IFxuXG4gICAgZHJhd0NhcigpIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KSByb3RhdGUoJHt0aGlzLmFuZ2xlICogMTgwIC8gTWF0aC5QSX1kZWcpYDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0NBUl9DT05TVEFOVFMsIFBsYXllckNhcn0gZnJvbSBcIi4vY2FyXCI7XG5pbXBvcnQgeyBNb3ZpbmdPYmogfSBmcm9tIFwiLi9tb3Zpbmdfb2JqXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhciwgdGltZXIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmNhciA9IGNhcjtcbiAgICAgICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgICAgIHRoaXMubGl2ZXMgPSA1O1xuICAgICAgICB0aGlzLmhlYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYubGl2ZXMgbGlcIik7XG4gICAgICAgIHRoaXMudGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMucFggPSAwO1xuICAgICAgICB0aGlzLnBZID0gMDtcblxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9wYXJraW5nLnBuZ1wiO1xuICAgIH1cblxuICAgIGFkZEJhbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCYWxsKDMwLCA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQYXJraW5nU3BvdCgpIHtcbiAgICAgICAgY29uc3Qgc2tpcnQgPSAzMDtcbiAgICAgICAgY29uc3QgaW5uZXJCb3ggPSAxMDA7XG5cbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2luZG93LmlubmVyV2lkdGggLSBza2lydCkpICsgc2tpcnQ7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHdpbmRvdy5pbm5lckhlaWdodCAtIHNraXJ0KSkgKyBza2lydDtcblxuICAgICAgICB3aGlsZSAoKHggPiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBpbm5lckJveCAvIDIpICYmICh4IDwgd2luZG93LmlubmVyV2lkdGggLyAyICsgaW5uZXJCb3ggLyAyKSkge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh3aW5kb3cuaW5uZXJXaWR0aCAtIHNraXJ0KSkgKyBza2lydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICgoeSA+IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBpbm5lckJveCAvIDIpICYmICh5IDwgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIGlubmVyQm94IC8gMikpIHtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2luZG93LmlubmVySGVpZ2h0IC0gc2tpcnQpKSArIHNraXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wWCA9IHg7XG4gICAgICAgIHRoaXMucFkgPSB5O1xuICAgIH1cblxuICAgIGFuaW1hdGVQYXJraW5nU3BvdCgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyMwMDcxY2MnO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBYLCB0aGlzLnBZLCA2MCwgNjApO1xuICAgICAgICAvLyBsZXQgcmVnaW9uID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAvLyByZWdpb24ucmVjdCh0aGlzLnBYLCB0aGlzLnBZLCA2MCwgNjApO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGlwKHJlZ2lvbik7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIHRoaXMuaW1nLFxuICAgICAgICAvLyAgICAgdGhpcy5wWCxcbiAgICAgICAgLy8gICAgIHRoaXMucFksXG4gICAgICAgIC8vICAgICA2MCxcbiAgICAgICAgLy8gICAgIDYwXG4gICAgICAgIC8vICk7XG4gICAgfVxuXG4gICAgY2FyQ3Jhc2hlZCgpIHtcbiAgICAgICAgLS10aGlzLmxpdmVzO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlYXJ0cygpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgYWRkQmFsbChyYWRpdXMsIHZlbCkge1xuICAgICAgICAvLyBsZXQgY29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgY29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcblxuICAgICAgICBsZXQgYXR0ciA9IHtyYWRpdXMsIHgsIHksIGNvbG9yLCB2ZWwsIGFuZ2xlfTtcblxuICAgICAgICBjb25zdCBiYWxsID0gbmV3IE1vdmluZ09iaih0aGlzLmN0eCwgYXR0cik7XG4gICAgICAgIHRoaXMuYmFsbHMucHVzaChiYWxsKTtcbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5iYWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxzW2ldLmlzQ29sbGlkaW5nKHRoaXMuYmFsbHNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUub25Db2xsaXNpb24odGhpcy5iYWxsc1tpXSwgdGhpcy5iYWxsc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgICAgIHRoaXMuYWRkQmFsbHMoKTtcbiAgICAgICAgdGhpcy5jYXIucmVzZXQoKTtcbiAgICAgICAgdGhpcy50aW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhci5jYXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uQ29sbGlzaW9uKG9iajEsIG9iajIpIHtcbiAgICAgICAgbGV0IHZDb2xsaXNpb24gPSB7IHg6IG9iajIueCAtIG9iajEueCwgeTogb2JqMi55IC0gb2JqMS55IH07XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgob2JqMi54IC0gb2JqMS54KSAqIChvYmoyLnggLSBvYmoxLngpICsgKG9iajIueSAtIG9iajEueSkgKiAob2JqMi55IC0gb2JqMS55KSk7XG4gICAgICAgIGxldCB2Q29sbGlzaW9uTm9ybSA9IHsgeDogdkNvbGxpc2lvbi54IC8gZGlzdGFuY2UsIHk6IHZDb2xsaXNpb24ueSAvIGRpc3RhbmNlIH07XG5cbiAgICAgICAgbGV0IHZSZWxhdGl2ZVZlbG9jaXR5ID0geyB4OiBvYmoxLnZ4IC0gb2JqMi52eCwgeTogb2JqMS52eSAtIG9iajIudnkgfTtcbiAgICAgICAgbGV0IHNwZWVkID0gdlJlbGF0aXZlVmVsb2NpdHkueCAqIHZDb2xsaXNpb25Ob3JtLnggKyB2UmVsYXRpdmVWZWxvY2l0eS55ICogdkNvbGxpc2lvbk5vcm0ueTtcblxuICAgICAgICBsZXQgaW1wdWxzZSA9IDIgKiBzcGVlZCAvIChvYmoxLm1hc3MgKyBvYmoyLm1hc3MpO1xuXG4gICAgICAgIGlmIChzcGVlZCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgb2JqMS52eCAtPSAoaW1wdWxzZSAqIG9iajIubWFzcyAqIHZDb2xsaXNpb25Ob3JtLngpO1xuICAgICAgICAgICAgb2JqMS52eSAtPSAoaW1wdWxzZSAqIG9iajIubWFzcyAqIHZDb2xsaXNpb25Ob3JtLnkpO1xuICAgICAgICAgICAgb2JqMi52eCArPSAoaW1wdWxzZSAqIG9iajEubWFzcyAqIHZDb2xsaXNpb25Ob3JtLngpO1xuICAgICAgICAgICAgb2JqMi52eSArPSAoaW1wdWxzZSAqIG9iajEubWFzcyAqIHZDb2xsaXNpb25Ob3JtLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQYXJrZWQoKSB7XG4gICAgICAgIGNvbnN0IGNhciA9IHRoaXMuY2FyO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDE2O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAzMjtcbiAgICAgICAgbGV0IHggPSBbXG4gICAgICAgICAgICBjYXIueCArICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpICsgKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpICsgKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpIC0gKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCArICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpIC0gKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSlcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgeSA9IFtcbiAgICAgICAgICAgIGNhci55ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueSAtICgod2lkdGggLyAyKSAqIE1hdGguc2luKGNhci5hbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpLFxuICAgICAgICAgICAgY2FyLnkgLSAoKHdpZHRoIC8gMikgKiBNYXRoLnNpbihjYXIuYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhjYXIuYW5nbGUpKSxcbiAgICAgICAgICAgIGNhci55ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoY2FyLmFuZ2xlKSlcbiAgICAgICAgXVxuXG4gICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4oLi4ueCk7XG4gICAgICAgIGxldCBtYXhYID0gTWF0aC5tYXgoLi4ueCk7XG4gICAgICAgIGxldCBtaW5ZID0gTWF0aC5taW4oLi4ueSk7XG4gICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgoLi4ueSk7XG5cbiAgICAgICAgbGV0IGNvbmRpdGlvbnMgPSBbXG4gICAgICAgICAgICAobWluWCA+IHRoaXMucFggJiYgbWluWCA8IHRoaXMucFggKyA2MCksXG4gICAgICAgICAgICAobWF4WCA+IHRoaXMucFggJiYgbWF4WCA8IHRoaXMucFggKyA2MCksXG4gICAgICAgICAgICAobWluWSA+IHRoaXMucFkgJiYgbWluWSA8IHRoaXMucFkgKyA2MCksXG4gICAgICAgICAgICAobWF4WSA+IHRoaXMucFkgJiYgbWF4WSA8IHRoaXMucFkgKyA2MClcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgcGFya2VkID0gIWNvbmRpdGlvbnMuaW5jbHVkZXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcGFya2VkO1xuICAgIH1cblxuICAgIHBhcmtlZCgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnRpbWVyLnRpbWVyRGlzcGxheS5pbm5lckhUTUw7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZScsIHRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGltZSlcbiAgICAgICAgXG4gICAgICAgIGlmKCBEYXRlLnBhcnNlKHRpbWUpIDwgRGF0ZS5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpbWUnKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gYFlvdXIgYmVzdCB0aW1lOiAke2Jlc3RUaW1lfWA7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZEJhbGxzKCk7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnRUaW1lcigpO1xuICAgICAgICB0aGlzLnRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FyLmNhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgdGhpcy5kcmF3UGFya2luZ1Nwb3QoKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hlYXRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmNhci5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpbWVyLnJlc2V0VGltZXIoKTtcbiAgICAgICAgdGhpcy50aW1lci50aW1lckRpc3BsYXkuaW5uZXJIVE1MID0gXCIwMDowMDowMFwiO1xuXG4gICAgICAgIGlmICghdGhpcy5saXZlcykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi53aW4tbG9zZSBzcGFuXCIpLmlubmVySFRNTCA9ICdZb3UgZ290IGEgcGFya2luZyB0aWNrZXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXZlcyA9IDU7XG4gICAgICAgIHRoaXMudXBkYXRlSGVhcnRzKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgICBcbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxpdmVzO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYXJ0cygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhlYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5oZWFydHNbaV0uc3R5bGUub3BhY2l0eSA9IGkgPCB0aGlzLmxpdmVzID8gMSA6IDAuMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGVhdFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmFuaW1hdGVQYXJraW5nU3BvdCgpO1xuICAgICAgICB0aGlzLmJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG4gICAgICAgICAgICBiYWxsLmFuaW1hdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhci5jaGVja0NvbGxpc2lvbldpdGhCYWxsKGJhbGwpICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLSB0aGlzLnRpbWUgPiAxNTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJDcmFzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTW92aW5nT2JqIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGF0dHIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucmFkaXVzID0gYXR0ci5yYWRpdXM7XG4gICAgICAgIHRoaXMueCA9IGF0dHIueDtcbiAgICAgICAgdGhpcy55ID0gYXR0ci55O1xuICAgICAgICB0aGlzLmNvbG9yID0gYXR0ci5jb2xvcjtcbiAgICAgICAgdGhpcy52ZWwgPSBhdHRyLnZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGF0dHIuYW5nbGU7XG4gICAgICAgIHRoaXMubWFzcyA9IHRoaXMucmFkaXVzO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSAoKSA9PiB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCJzcmMvYXNzZXRzL2ltYWdlcy9ub19wYXJraW5nLnBuZ1wiO1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52ZWwgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudmVsICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5pbWcsXG4gICAgICAgICAgICB0aGlzLnggLSB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHRoaXMueSAtIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgKiAyLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgKiAyXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBbdGhpcy52eCwgdGhpcy52eV07XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy54IC09IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGlkaW5nKGJhbGwpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gYmFsbC54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSBiYWxsLnk7XG5cbiAgICAgICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIHJldHVybiBkIDwgKHRoaXMucmFkaXVzICsgYmFsbC5yYWRpdXMpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy50SW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5zYXZlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lckRpc3BsYXkgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5nZXRTaG93VGltZSA9IHRoaXMuZ2V0U2hvd1RpbWUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMudEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHRoaXMuZ2V0U2hvd1RpbWUsIDEpO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZVRpbWVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkVGltZSA9IHRoaXMuZGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudEludGVydmFsKTtcbiAgICAgICAgdGhpcy5zYXZlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRTaG93VGltZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAodGhpcy5zYXZlZFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9ICh0aGlzLnVwZGF0ZWRUaW1lIC0gdGhpcy5zdGFydFRpbWUpICsgdGhpcy5zYXZlZFRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSB0aGlzLnVwZGF0ZWRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICBsZXQgbWlsbGlzZWNvbmRzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTApICUgMTAwO1xuICAgICAgICAvLyBob3VycyA9IChob3VycyA8IDEwKSA/IFwiMFwiICsgaG91cnMgOiBob3VycztcbiAgICAgICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgc2Vjb25kcyA9IChzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gKG1pbGxpc2Vjb25kcyA8IDEwMCkgPyAobWlsbGlzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBtaWxsaXNlY29uZHMgOiBcIlwiICsgbWlsbGlzZWNvbmRzIDogbWlsbGlzZWNvbmRzO1xuICAgICAgICAvLyBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gKTtcbiAgICAgICAgLy8gdGhpcy50aW1lckRpc3BsYXkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgICAgdGhpcy50aW1lckRpc3BsYXkuaW5uZXJIVE1MID0gYCR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9