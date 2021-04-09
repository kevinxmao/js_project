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

  function animloop() {
    if (game.gameOver()) {
      window.cancelAnimationFrame(window.animationId);
      game.restart();
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
        case "ArrowLeft":
          _this.turnLeft = true;
          break;

        case "ArrowRight":
          _this.turnRight = true;
          break;

        case "ArrowUp":
          // console.log("key down");
          _this.accelerate = true; // console.log(this.accelerate)

          break;

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
        case "ArrowLeft":
          _this.turnLeft = false;
          break;

        case "ArrowRight":
          _this.turnRight = false;
          break;

        case "ArrowUp":
          _this.accelerate = false;
          break;

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
    value: function drawParkingSpot() {}
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
      // debugger;
      this.balls = [];
      this.addBalls();
      this.car.reset(); // this.timer.startTimer();
    }
  }, {
    key: "parked",
    value: function parked() {
      var time = this.timer.timerDisplay.innerHTML;

      if (!localStorage.getItem('time')) {
        localStorage.setItem('time', time);
      } else if (Date.parse(time) > Date.parse(localStorage.getItem('time'))) {
        localStorage.setItem('time', time);
      }

      var bestTime = localStorage.getItem('time');
      document.querySelector(".win-lose span").innerHTML = bestTime;
      this.restart();
    }
  }, {
    key: "start",
    value: function start() {
      this.addBalls();
      this.timer.startTimer();
    }
  }, {
    key: "restart",
    value: function restart() {
      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.balls = [];
      this.car.reset();
      console.log(this.balls);
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
      var _this = this;

      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.balls.forEach(function (ball) {
        ball.animate();
      });
      this.balls.forEach(function (ball) {
        if (_this.car.checkCollisionWithBall(ball)) {
          _this.carCrashed(); // this.timer.pauseTimer();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QnRuIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdG4iLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJ0aW1lckVsZSIsInRpbWVyIiwiVGltZXIiLCJjYXIiLCJQbGF5ZXJDYXIiLCJnYW1lIiwiR2FtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYW5pbWxvb3AiLCJnYW1lT3ZlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwibW92ZSIsImRyYXdDYXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidmlzaWJpbGl0eSIsInN0YXJ0IiwiQ0FSX0NPTlNUQU5UUyIsIm1heFNwZWVkIiwibWF4UmV2ZXJzZVNwZWVkIiwiYWNjZWxlcmF0aW9uIiwiZGVjY2VsZXJhdGlvbiIsImFuZ3VsYXJBY2NlbGVyYXRpb24iLCJ4IiwieSIsInZ4IiwidnkiLCJzcGVlZCIsInJldmVyc2VTcGVlZCIsImFuZ2xlIiwib21lZ2EiLCJtYXNzIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJNYXRoIiwibWluIiwibWF4IiwiZGlyZWN0aW9uIiwic2luIiwiY29zIiwiYmFsbCIsInVjWCIsInVjWSIsImNsb3Nlc3RYIiwiY2xvc2VzdFkiLCJkaXN0YW5jZSIsInNxcnQiLCJyYWRpdXMiLCJQSSIsInJ1bm5pbmciLCJsZXZlbCIsImJhbGxzIiwibGl2ZXMiLCJoZWFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImFkZEJhbGwiLCJ1cGRhdGVIZWFydHMiLCJyZXNldCIsInZlbCIsImNvbG9yIiwiZmxvb3IiLCJyYW5kb20iLCJhdHRyIiwiTW92aW5nT2JqIiwicHVzaCIsImxlbmd0aCIsImoiLCJpc0NvbGxpZGluZyIsIm9uQ29sbGlzaW9uIiwiYWRkQmFsbHMiLCJ0aW1lIiwidGltZXJEaXNwbGF5IiwiaW5uZXJIVE1MIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJEYXRlIiwicGFyc2UiLCJiZXN0VGltZSIsInN0YXJ0VGltZXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldFRpbWVyIiwib3BhY2l0eSIsImZvckVhY2giLCJjaGVja0NvbGxpc2lvbldpdGhCYWxsIiwiY2FyQ3Jhc2hlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsIm9iajEiLCJvYmoyIiwidkNvbGxpc2lvbiIsInZDb2xsaXNpb25Ob3JtIiwidlJlbGF0aXZlVmVsb2NpdHkiLCJpbXB1bHNlIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3Iiwic3JjIiwic2F2ZSIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImNsaXAiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZHgiLCJkeSIsImQiLCJzdGFydFRpbWUiLCJ0SW50ZXJ2YWwiLCJ1cGRhdGVkVGltZSIsInNhdmVkVGltZSIsImRpZmZlcmVuY2UiLCJwYXVzZWQiLCJnZXRTaG93VGltZSIsImJpbmQiLCJnZXRUaW1lIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQW5CO0FBQ0EsTUFBTUUsS0FBSyxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUVBLE1BQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDTSxjQUFULENBQXdCLFdBQXhCLENBQWY7QUFDQSxNQUFNRSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FGLFFBQU0sQ0FBQ0csTUFBUCxHQUFnQkMsTUFBTSxDQUFDQyxXQUF2QjtBQUNBTCxRQUFNLENBQUNNLEtBQVAsR0FBZUYsTUFBTSxDQUFDRyxVQUF0QjtBQUVBLE1BQU1DLEtBQUssR0FBR2YsUUFBUSxDQUFDTSxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFNVSxRQUFRLEdBQUdoQixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7QUFFQSxNQUFNYyxLQUFLLEdBQUcsSUFBSUMsb0RBQUosQ0FBVUYsUUFBVixDQUFkO0FBQ0EsTUFBTUcsR0FBRyxHQUFHLElBQUlDLHNEQUFKLENBQWNMLEtBQWQsQ0FBWjtBQUNBLE1BQU1NLElBQUksR0FBRyxJQUFJQyxrREFBSixDQUFTZCxHQUFULEVBQWNXLEdBQWQsRUFBbUJGLEtBQW5CLENBQWI7QUFFQUYsT0FBSyxDQUFDUSxLQUFOLENBQVlDLFNBQVosdUJBQXFDYixNQUFNLENBQUNHLFVBQVAsR0FBb0IsQ0FBekQsaUJBQWlFSCxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBdEYsaUJBQXFHLENBQXJHOztBQUVBLFdBQVNhLFFBQVQsR0FBb0I7QUFDaEIsUUFBSUosSUFBSSxDQUFDSyxRQUFMLEVBQUosRUFBcUI7QUFDbkJmLFlBQU0sQ0FBQ2dCLG9CQUFQLENBQTRCaEIsTUFBTSxDQUFDaUIsV0FBbkM7QUFDQVAsVUFBSSxDQUFDUSxPQUFMO0FBQ0E7QUFDRDs7QUFDRFYsT0FBRyxDQUFDVyxJQUFKO0FBQ0FYLE9BQUcsQ0FBQ1ksT0FBSjtBQUNBVixRQUFJLENBQUNXLE9BQUw7QUFFQXJCLFVBQU0sQ0FBQ2lCLFdBQVAsR0FBcUJqQixNQUFNLENBQUNzQixxQkFBUCxDQUE2QlIsUUFBN0IsQ0FBckI7QUFDSDs7QUFFRGQsUUFBTSxDQUFDUCxVQUFQLEdBQW9CQSxVQUFwQjtBQUVBQSxZQUFVLENBQUNILGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekNJLFNBQUssQ0FBQ2tCLEtBQU4sQ0FBWVcsVUFBWixHQUF5QixRQUF6QjtBQUNBaEMsWUFBUSxDQUFDcUIsS0FBVCxDQUFlVyxVQUFmLEdBQTRCLFNBQTVCO0FBQ0QsR0FIRDtBQUtBaEMsVUFBUSxDQUFDRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3ZDQyxZQUFRLENBQUNxQixLQUFULENBQWVXLFVBQWYsR0FBNEIsUUFBNUI7QUFDQWIsUUFBSSxDQUFDYyxLQUFMO0FBQ0FWLFlBQVE7QUFDVCxHQUpEO0FBS0gsQ0E1Q0QsRSxDQThDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFTyxJQUFNVyxhQUFhLEdBQUc7QUFDM0JDLFVBQVEsRUFBRSxDQURpQjtBQUUzQkMsaUJBQWUsRUFBRSxHQUZVO0FBRzNCQyxjQUFZLEVBQUUsR0FIYTtBQUkzQkMsZUFBYSxFQUFFLEdBSlk7QUFLM0JDLHFCQUFtQixFQUFFO0FBTE0sQ0FBdEI7QUFRQSxJQUFNckIsU0FBYjtBQUNJLHFCQUFZRCxHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBRWI7QUFDQSxTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLdUIsQ0FBTCxHQUFTL0IsTUFBTSxDQUFDRyxVQUFQLEdBQW9CLENBQTdCO0FBQ0EsU0FBSzZCLENBQUwsR0FBU2hDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixDQUE5QjtBQUNBLFNBQUtnQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFaLENBWmEsQ0FjYjs7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWYsQ0FoQmEsQ0FpQmI7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFFQXRELFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FDRSxTQURGLEVBRUUsVUFBQXNELENBQUMsRUFBSTtBQUNILFVBQUlBLENBQUMsQ0FBQ0MsZ0JBQU4sRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxjQUFRRCxDQUFDLENBQUNFLElBQVY7QUFDRSxhQUFLLFdBQUw7QUFDRSxlQUFJLENBQUNKLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTs7QUFDRixhQUFLLFlBQUw7QUFDRSxlQUFJLENBQUNDLFNBQUwsR0FBaUIsSUFBakI7QUFDQTs7QUFDRixhQUFLLFNBQUw7QUFDRTtBQUNBLGVBQUksQ0FBQ0gsVUFBTCxHQUFrQixJQUFsQixDQUZGLENBR0U7O0FBQ0E7O0FBQ0YsYUFBSyxXQUFMO0FBQ0UsZUFBSSxDQUFDQyxPQUFMLEdBQWUsSUFBZjtBQUNBOztBQUNGLGFBQUssT0FBTDtBQUNFLGVBQUksQ0FBQ00sS0FBTCxHQUFhLElBQWI7O0FBQ0EsY0FBSSxLQUFJLENBQUNaLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNuQixpQkFBSSxDQUFDQSxLQUFMLElBQWMsR0FBZDtBQUNBLGdCQUFJLEtBQUksQ0FBQ0EsS0FBTCxHQUFhLENBQWpCLEVBQW9CLEtBQUksQ0FBQ0EsS0FBTCxHQUFhLENBQWI7QUFDckI7O0FBQ0Q7QUFyQko7O0FBdUJBUyxPQUFDLENBQUNJLGNBQUYsR0E1QkcsQ0E2Qkg7QUFDRCxLQWhDSDtBQW1DQTNELFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FDRSxPQURGLEVBRUUsVUFBQXNELENBQUMsRUFBSTtBQUNILFVBQUlBLENBQUMsQ0FBQ0MsZ0JBQU4sRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxjQUFRRCxDQUFDLENBQUNFLElBQVY7QUFDRSxhQUFLLFdBQUw7QUFDRSxlQUFJLENBQUNKLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTs7QUFDRixhQUFLLFlBQUw7QUFDRSxlQUFJLENBQUNDLFNBQUwsR0FBaUIsS0FBakI7QUFDQTs7QUFDRixhQUFLLFNBQUw7QUFDRSxlQUFJLENBQUNILFVBQUwsR0FBa0IsS0FBbEI7QUFDQTs7QUFDRixhQUFLLFdBQUw7QUFDRSxlQUFJLENBQUNDLE9BQUwsR0FBZSxLQUFmO0FBQ0E7O0FBQ0YsYUFBSyxPQUFMO0FBQ0UsZUFBSSxDQUFDTSxLQUFMLEdBQWEsS0FBYjtBQUNBO0FBZko7O0FBa0JBSCxPQUFDLENBQUNJLGNBQUY7QUFDRCxLQTFCSDtBQTRCSDs7QUFyRkw7QUFBQTtBQUFBLFdBdUZJLGlCQUFRO0FBQ04sV0FBS2pCLENBQUwsR0FBUy9CLE1BQU0sQ0FBQ0csVUFBUCxHQUFvQixDQUE3QjtBQUNBLFdBQUs2QixDQUFMLEdBQVNoQyxNQUFNLENBQUNDLFdBQVAsR0FBcUIsQ0FBOUI7QUFDQSxXQUFLZ0MsRUFBTCxHQUFVLENBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksQ0FBWixDQVRNLENBV047O0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFmLENBYk0sQ0FjTjs7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtuQyxHQUFMLENBQVNJLEtBQVQsQ0FBZUMsU0FBZix1QkFBd0NiLE1BQU0sQ0FBQ0csVUFBUCxHQUFvQixDQUE1RCxpQkFBb0VILE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixDQUF6RixpQkFBd0csQ0FBeEc7QUFDRDtBQXpHTDtBQUFBO0FBQUEsV0EyR0ksdUJBQWMsQ0FFYjtBQTdHTDtBQUFBO0FBQUEsV0ErR0ksZ0JBQU87QUFBQSxVQUNHeUIsUUFESCxHQUNtRkQsYUFEbkYsQ0FDR0MsUUFESDtBQUFBLFVBQ2FFLFlBRGIsR0FDbUZILGFBRG5GLENBQ2FHLFlBRGI7QUFBQSxVQUMyQkMsYUFEM0IsR0FDbUZKLGFBRG5GLENBQzJCSSxhQUQzQjtBQUFBLFVBQzBDRixlQUQxQyxHQUNtRkYsYUFEbkYsQ0FDMENFLGVBRDFDO0FBQUEsVUFDMkRHLG1CQUQzRCxHQUNtRkwsYUFEbkYsQ0FDMkRLLG1CQUQzRDs7QUFHTCxVQUFJLEtBQUtVLFVBQVQsRUFBcUI7QUFDbkIsYUFBS0wsS0FBTCxJQUFjUCxZQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS08sS0FBTCxJQUFjTixhQUFkO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLWSxPQUFULEVBQWtCO0FBQ2hCLGFBQUtMLFlBQUwsSUFBcUJSLFlBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS1EsWUFBTCxJQUFxQlAsYUFBckI7QUFDRDs7QUFFRCxXQUFLTSxLQUFMLEdBQWFjLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEIsUUFBVCxFQUFtQnVCLElBQUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUtoQixLQUFkLEVBQXFCLENBQXJCLENBQW5CLENBQWI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CYSxJQUFJLENBQUNDLEdBQUwsQ0FBU3ZCLGVBQVQsRUFBMEJzQixJQUFJLENBQUNFLEdBQUwsQ0FBUyxLQUFLZixZQUFkLEVBQTRCLENBQTVCLENBQTFCLENBQXBCO0FBRUEsVUFBTWdCLFNBQVMsR0FBRyxLQUFLakIsS0FBTCxJQUFjLEtBQUtDLFlBQW5CLEdBQWtDLENBQWxDLEdBQXNDLENBQUMsQ0FBekQ7O0FBRUEsVUFBSSxLQUFLTyxTQUFMLEtBQW1CLEtBQUtSLEtBQUwsR0FBYSxHQUFiLElBQW9CLEtBQUtDLFlBQUwsR0FBb0IsR0FBM0QsQ0FBSixFQUFxRTtBQUNuRSxhQUFLRSxLQUFMLEdBQWFjLFNBQVMsR0FBR3RCLG1CQUF6QjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtZLFFBQUwsS0FBa0IsS0FBS1AsS0FBTCxHQUFhLEdBQWIsSUFBb0IsS0FBS0MsWUFBTCxHQUFvQixHQUExRCxDQUFKLEVBQW9FO0FBQ3pFLGFBQUtFLEtBQUwsR0FBYSxDQUFDYyxTQUFELEdBQWF0QixtQkFBMUI7QUFDRCxPQUZNLE1BRUE7QUFDTCxhQUFLUSxLQUFMLEdBQWEsQ0FBYjtBQUNEOztBQUVELFdBQUtMLEVBQUwsR0FBVWdCLElBQUksQ0FBQ0ksR0FBTCxDQUFTLEtBQUtoQixLQUFkLEtBQXdCLEtBQUtGLEtBQUwsR0FBYSxLQUFLQyxZQUExQyxDQUFWO0FBQ0EsV0FBS0YsRUFBTCxHQUFVZSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxLQUFLakIsS0FBZCxLQUF3QixLQUFLRixLQUFMLEdBQWEsS0FBS0MsWUFBMUMsQ0FBVixDQTdCSyxDQStCTDs7QUFFQSxXQUFLTCxDQUFMLElBQVUsS0FBS0UsRUFBZjtBQUNBLFdBQUtELENBQUwsSUFBVSxLQUFLRSxFQUFmO0FBRUEsV0FBS0csS0FBTCxJQUFjLEtBQUtDLEtBQW5CO0FBQ0EsV0FBS0EsS0FBTCxJQUFjLEtBQUtBLEtBQW5COztBQUVBLFVBQUksS0FBS1AsQ0FBTCxHQUFTL0IsTUFBTSxDQUFDRyxVQUFwQixFQUFnQztBQUM5QixhQUFLNEIsQ0FBTCxJQUFVL0IsTUFBTSxDQUFDRyxVQUFqQjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUs0QixDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNyQixhQUFLQSxDQUFMLElBQVUvQixNQUFNLENBQUNHLFVBQWpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLNkIsQ0FBTCxHQUFTaEMsTUFBTSxDQUFDQyxXQUFwQixFQUFpQztBQUMvQixhQUFLK0IsQ0FBTCxJQUFVaEMsTUFBTSxDQUFDQyxXQUFqQjtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUsrQixDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNyQixhQUFLQSxDQUFMLElBQVVoQyxNQUFNLENBQUNDLFdBQWpCO0FBQ0Q7QUFDRjtBQWpLTDtBQUFBO0FBQUEsV0FtS0ksZ0NBQXVCc0QsSUFBdkIsRUFBNkI7QUFDekI7QUFDQSxVQUFJQyxHQUFHLEdBQUdQLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtqQixLQUFkLEtBQXdCa0IsSUFBSSxDQUFDeEIsQ0FBTCxHQUFTLEtBQUtBLENBQXRDLElBQTJDa0IsSUFBSSxDQUFDSSxHQUFMLENBQVMsS0FBS2hCLEtBQWQsS0FBd0JrQixJQUFJLENBQUN2QixDQUFMLEdBQVMsS0FBS0EsQ0FBdEMsQ0FBM0MsR0FBc0YsS0FBS0QsQ0FBckc7QUFDQSxVQUFJMEIsR0FBRyxHQUFHUixJQUFJLENBQUNJLEdBQUwsQ0FBUyxLQUFLaEIsS0FBZCxLQUF3QmtCLElBQUksQ0FBQ3hCLENBQUwsR0FBUyxLQUFLQSxDQUF0QyxJQUEyQ2tCLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtqQixLQUFkLEtBQXdCa0IsSUFBSSxDQUFDdkIsQ0FBTCxHQUFTLEtBQUtBLENBQXRDLENBQTNDLEdBQXNGLEtBQUtBLENBQXJHO0FBRUEsVUFBSTBCLFFBQUo7QUFDQSxVQUFJQyxRQUFKOztBQUVBLFVBQUlILEdBQUcsR0FBRyxLQUFLekIsQ0FBZixFQUFrQjtBQUNoQjJCLGdCQUFRLEdBQUcsS0FBSzNCLENBQWhCO0FBQ0QsT0FGRCxNQUVPLElBQUl5QixHQUFHLEdBQUcsS0FBS3pCLENBQUwsR0FBUyxFQUFuQixFQUF1QjtBQUM1QjJCLGdCQUFRLEdBQUcsS0FBSzNCLENBQUwsR0FBUyxFQUFwQjtBQUNELE9BRk0sTUFFQTtBQUNMMkIsZ0JBQVEsR0FBR0YsR0FBWDtBQUNEOztBQUVELFVBQUlDLEdBQUcsR0FBRyxLQUFLekIsQ0FBZixFQUFrQjtBQUNoQjJCLGdCQUFRLEdBQUcsS0FBSzNCLENBQWhCO0FBQ0QsT0FGRCxNQUVPLElBQUl5QixHQUFHLEdBQUcsS0FBS3pCLENBQUwsR0FBUyxFQUFuQixFQUF1QjtBQUM1QjJCLGdCQUFRLEdBQUcsS0FBSzNCLENBQUwsR0FBUyxFQUFwQjtBQUNELE9BRk0sTUFFQTtBQUNMMkIsZ0JBQVEsR0FBR0YsR0FBWDtBQUNEOztBQUVILFVBQUlHLFFBQVEsR0FBR1gsSUFBSSxDQUFDWSxJQUFMLENBQVUsQ0FBQ0wsR0FBRyxHQUFHRSxRQUFQLEtBQW9CRixHQUFHLEdBQUdFLFFBQTFCLElBQXNDLENBQUNELEdBQUcsR0FBR0UsUUFBUCxLQUFvQkYsR0FBRyxHQUFHRSxRQUExQixDQUFoRCxDQUFmO0FBQ0EsYUFBT0MsUUFBUSxJQUFJTCxJQUFJLENBQUNPLE1BQXhCO0FBQ0Q7QUE3TEw7QUFBQTtBQUFBLFdBK0xJLG1CQUFVO0FBQ1IsV0FBS3RELEdBQUwsQ0FBU0ksS0FBVCxDQUFlQyxTQUFmLHVCQUF3QyxLQUFLa0IsQ0FBN0MsaUJBQXFELEtBQUtDLENBQTFELHdCQUF5RSxLQUFLSyxLQUFMLEdBQWEsR0FBYixHQUFtQlksSUFBSSxDQUFDYyxFQUFqRztBQUNEO0FBak1MOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFFTyxJQUFNcEQsSUFBYjtBQUNJLGdCQUFZZCxHQUFaLEVBQWlCVyxHQUFqQixFQUFzQkYsS0FBdEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS1QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS21FLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLekQsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzRELEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMvRSxRQUFRLENBQUNnRixnQkFBVCxDQUEwQixjQUExQixDQUFkO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLFdBWUksb0JBQVc7QUFDUCxVQUFJLEtBQUtKLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUNsQixhQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsZUFBS0MsT0FBTCxDQUFhLEVBQWIsRUFBaUIsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7QUFsQkw7QUFBQTtBQUFBLFdBb0JJLDJCQUFrQixDQUVqQjtBQXRCTDtBQUFBO0FBQUEsV0F3Qkksc0JBQWE7QUFDVCxRQUFFLEtBQUtKLEtBQVA7QUFDQSxXQUFLSyxZQUFMO0FBQ0EsV0FBS0MsS0FBTDtBQUNIO0FBNUJMO0FBQUE7QUFBQSxXQThCSSxpQkFBUVgsTUFBUixFQUFnQlksR0FBaEIsRUFBcUI7QUFDakI7QUFDQSxVQUFJQyxLQUFLLEdBQUcsTUFBWjtBQUNBLFVBQUk1QyxDQUFDLEdBQUdrQixJQUFJLENBQUMyQixLQUFMLENBQVczQixJQUFJLENBQUM0QixNQUFMLEtBQWdCN0UsTUFBTSxDQUFDRyxVQUFsQyxDQUFSO0FBQ0EsVUFBSTZCLENBQUMsR0FBR2lCLElBQUksQ0FBQzJCLEtBQUwsQ0FBVzNCLElBQUksQ0FBQzRCLE1BQUwsS0FBZ0I3RSxNQUFNLENBQUNDLFdBQWxDLENBQVI7QUFDQSxVQUFJb0MsS0FBSyxHQUFHWSxJQUFJLENBQUM0QixNQUFMLEtBQWdCNUIsSUFBSSxDQUFDYyxFQUFyQixHQUEwQixDQUF0QztBQUVBLFVBQUllLElBQUksR0FBRztBQUFDaEIsY0FBTSxFQUFOQSxNQUFEO0FBQVMvQixTQUFDLEVBQURBLENBQVQ7QUFBWUMsU0FBQyxFQUFEQSxDQUFaO0FBQWUyQyxhQUFLLEVBQUxBLEtBQWY7QUFBc0JELFdBQUcsRUFBSEEsR0FBdEI7QUFBMkJyQyxhQUFLLEVBQUxBO0FBQTNCLE9BQVg7QUFFQSxVQUFNa0IsSUFBSSxHQUFHLElBQUl3QixxREFBSixDQUFjLEtBQUtsRixHQUFuQixFQUF3QmlGLElBQXhCLENBQWI7QUFDQSxXQUFLWixLQUFMLENBQVdjLElBQVgsQ0FBZ0J6QixJQUFoQjtBQUNIO0FBekNMO0FBQUE7QUFBQSxXQTJDSSw4QkFBcUI7QUFDakIsV0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtKLEtBQUwsQ0FBV2UsTUFBL0IsRUFBdUNYLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsYUFBSyxJQUFJWSxDQUFDLEdBQUdaLENBQUMsR0FBRyxDQUFqQixFQUFvQlksQ0FBQyxHQUFHLEtBQUtoQixLQUFMLENBQVdlLE1BQW5DLEVBQTJDQyxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGNBQUksS0FBS2hCLEtBQUwsQ0FBV0ksQ0FBWCxFQUFjYSxXQUFkLENBQTBCLEtBQUtqQixLQUFMLENBQVdnQixDQUFYLENBQTFCLENBQUosRUFBOEM7QUFDMUN2RSxnQkFBSSxDQUFDeUUsV0FBTCxDQUFpQixLQUFLbEIsS0FBTCxDQUFXSSxDQUFYLENBQWpCLEVBQWdDLEtBQUtKLEtBQUwsQ0FBV2dCLENBQVgsQ0FBaEM7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQW5ETDtBQUFBO0FBQUEsV0FxREksaUJBQVE7QUFDSjtBQUNBLFdBQUtoQixLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUttQixRQUFMO0FBQ0EsV0FBSzdFLEdBQUwsQ0FBU2lFLEtBQVQsR0FKSSxDQU1KO0FBQ0g7QUE1REw7QUFBQTtBQUFBLFdBbUZJLGtCQUFTO0FBQ0wsVUFBSWEsSUFBSSxHQUFHLEtBQUtoRixLQUFMLENBQVdpRixZQUFYLENBQXdCQyxTQUFuQzs7QUFDQSxVQUFJLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFMLEVBQW1DO0FBQy9CRCxvQkFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCTCxJQUE3QjtBQUNILE9BRkQsTUFFTyxJQUFJTSxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsSUFBWCxJQUFtQk0sSUFBSSxDQUFDQyxLQUFMLENBQVdKLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQXZCLEVBQWlFO0FBQ3BFRCxvQkFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCTCxJQUE3QjtBQUNIOztBQUVELFVBQUlRLFFBQVEsR0FBR0wsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQWY7QUFDQXJHLGNBQVEsQ0FBQ0csYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNnRyxTQUF6QyxHQUFxRE0sUUFBckQ7QUFDQSxXQUFLNUUsT0FBTDtBQUNIO0FBOUZMO0FBQUE7QUFBQSxXQWdHSSxpQkFBUTtBQUNKLFdBQUttRSxRQUFMO0FBQ0EsV0FBSy9FLEtBQUwsQ0FBV3lGLFVBQVg7QUFDSDtBQW5HTDtBQUFBO0FBQUEsV0FxR0ksbUJBQVU7QUFDTixVQUFNbEcsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0FBLFNBQUcsQ0FBQ21HLFNBQUosR0FBZ0IsT0FBaEI7QUFDQW5HLFNBQUcsQ0FBQ29HLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CcEcsR0FBRyxDQUFDRCxNQUFKLENBQVdNLEtBQTlCLEVBQXFDTCxHQUFHLENBQUNELE1BQUosQ0FBV0csTUFBaEQ7QUFDQSxXQUFLbUUsS0FBTCxHQUFhLEVBQWI7QUFDQSxXQUFLMUQsR0FBTCxDQUFTaUUsS0FBVDtBQUNBeUIsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS2pDLEtBQWpCO0FBQ0EsV0FBSzVELEtBQUwsQ0FBVzhGLFVBQVg7QUFDQSxXQUFLOUYsS0FBTCxDQUFXaUYsWUFBWCxDQUF3QkMsU0FBeEIsR0FBb0MsVUFBcEM7O0FBRUEsVUFBSSxDQUFDLEtBQUtyQixLQUFWLEVBQWlCO0FBQ2I5RSxnQkFBUSxDQUFDRyxhQUFULENBQXVCLG1CQUF2QixFQUE0Q2dHLFNBQTVDLEdBQXdELDBCQUF4RDtBQUNIOztBQUVELFdBQUtyQixLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtLLFlBQUw7QUFFQW5GLGNBQVEsQ0FBQ00sY0FBVCxDQUF3QixPQUF4QixFQUFpQ2lCLEtBQWpDLENBQXVDVyxVQUF2QyxHQUFvRCxTQUFwRDtBQUNIO0FBdkhMO0FBQUE7QUFBQSxXQXlISSxvQkFBVztBQUNQLGFBQU8sQ0FBQyxLQUFLNEMsS0FBYjtBQUNIO0FBM0hMO0FBQUE7QUFBQSxXQTZISSx3QkFBZTtBQUNYLFdBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixNQUFMLENBQVlhLE1BQWhDLEVBQXdDWCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGFBQUtGLE1BQUwsQ0FBWUUsQ0FBWixFQUFlMUQsS0FBZixDQUFxQnlGLE9BQXJCLEdBQStCL0IsQ0FBQyxHQUFHLEtBQUtILEtBQVQsR0FBaUIsQ0FBakIsR0FBcUIsR0FBcEQ7QUFDSDtBQUNKO0FBaklMO0FBQUE7QUFBQSxXQW1JSSxtQkFBVTtBQUFBOztBQUNOLFVBQU10RSxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQUEsU0FBRyxDQUFDbUcsU0FBSixHQUFnQixPQUFoQjtBQUNBbkcsU0FBRyxDQUFDb0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJwRyxHQUFHLENBQUNELE1BQUosQ0FBV00sS0FBOUIsRUFBcUNMLEdBQUcsQ0FBQ0QsTUFBSixDQUFXRyxNQUFoRDtBQUNBLFdBQUttRSxLQUFMLENBQVdvQyxPQUFYLENBQW1CLFVBQUEvQyxJQUFJLEVBQUk7QUFDdkJBLFlBQUksQ0FBQ2xDLE9BQUw7QUFDSCxPQUZEO0FBR0EsV0FBSzZDLEtBQUwsQ0FBV29DLE9BQVgsQ0FBbUIsVUFBQS9DLElBQUksRUFBSTtBQUN2QixZQUFJLEtBQUksQ0FBQy9DLEdBQUwsQ0FBUytGLHNCQUFULENBQWdDaEQsSUFBaEMsQ0FBSixFQUEyQztBQUN2QyxlQUFJLENBQUNpRCxVQUFMLEdBRHVDLENBRXZDOztBQUNIO0FBQ0osT0FMRDtBQU1BLFdBQUtDLGtCQUFMO0FBQ0g7QUFqSkw7QUFBQTtBQUFBLFdBOERJLHFCQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzNCLFVBQUlDLFVBQVUsR0FBRztBQUFFN0UsU0FBQyxFQUFFNEUsSUFBSSxDQUFDNUUsQ0FBTCxHQUFTMkUsSUFBSSxDQUFDM0UsQ0FBbkI7QUFBc0JDLFNBQUMsRUFBRTJFLElBQUksQ0FBQzNFLENBQUwsR0FBUzBFLElBQUksQ0FBQzFFO0FBQXZDLE9BQWpCO0FBQ0EsVUFBSTRCLFFBQVEsR0FBR1gsSUFBSSxDQUFDWSxJQUFMLENBQVUsQ0FBQzhDLElBQUksQ0FBQzVFLENBQUwsR0FBUzJFLElBQUksQ0FBQzNFLENBQWYsS0FBcUI0RSxJQUFJLENBQUM1RSxDQUFMLEdBQVMyRSxJQUFJLENBQUMzRSxDQUFuQyxJQUF3QyxDQUFDNEUsSUFBSSxDQUFDM0UsQ0FBTCxHQUFTMEUsSUFBSSxDQUFDMUUsQ0FBZixLQUFxQjJFLElBQUksQ0FBQzNFLENBQUwsR0FBUzBFLElBQUksQ0FBQzFFLENBQW5DLENBQWxELENBQWY7QUFDQSxVQUFJNkUsY0FBYyxHQUFHO0FBQUU5RSxTQUFDLEVBQUU2RSxVQUFVLENBQUM3RSxDQUFYLEdBQWU2QixRQUFwQjtBQUE4QjVCLFNBQUMsRUFBRTRFLFVBQVUsQ0FBQzVFLENBQVgsR0FBZTRCO0FBQWhELE9BQXJCO0FBRUEsVUFBSWtELGlCQUFpQixHQUFHO0FBQUUvRSxTQUFDLEVBQUUyRSxJQUFJLENBQUN6RSxFQUFMLEdBQVUwRSxJQUFJLENBQUMxRSxFQUFwQjtBQUF3QkQsU0FBQyxFQUFFMEUsSUFBSSxDQUFDeEUsRUFBTCxHQUFVeUUsSUFBSSxDQUFDekU7QUFBMUMsT0FBeEI7QUFDQSxVQUFJQyxLQUFLLEdBQUcyRSxpQkFBaUIsQ0FBQy9FLENBQWxCLEdBQXNCOEUsY0FBYyxDQUFDOUUsQ0FBckMsR0FBeUMrRSxpQkFBaUIsQ0FBQzlFLENBQWxCLEdBQXNCNkUsY0FBYyxDQUFDN0UsQ0FBMUY7QUFFQSxVQUFJK0UsT0FBTyxHQUFHLElBQUk1RSxLQUFKLElBQWF1RSxJQUFJLENBQUNuRSxJQUFMLEdBQVlvRSxJQUFJLENBQUNwRSxJQUE5QixDQUFkOztBQUVBLFVBQUlKLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWDtBQUNILE9BRkQsTUFFTztBQUNIO0FBQ0F1RSxZQUFJLENBQUN6RSxFQUFMLElBQVk4RSxPQUFPLEdBQUdKLElBQUksQ0FBQ3BFLElBQWYsR0FBc0JzRSxjQUFjLENBQUM5RSxDQUFqRDtBQUNBMkUsWUFBSSxDQUFDeEUsRUFBTCxJQUFZNkUsT0FBTyxHQUFHSixJQUFJLENBQUNwRSxJQUFmLEdBQXNCc0UsY0FBYyxDQUFDN0UsQ0FBakQ7QUFDQTJFLFlBQUksQ0FBQzFFLEVBQUwsSUFBWThFLE9BQU8sR0FBR0wsSUFBSSxDQUFDbkUsSUFBZixHQUFzQnNFLGNBQWMsQ0FBQzlFLENBQWpEO0FBQ0E0RSxZQUFJLENBQUN6RSxFQUFMLElBQVk2RSxPQUFPLEdBQUdMLElBQUksQ0FBQ25FLElBQWYsR0FBc0JzRSxjQUFjLENBQUM3RSxDQUFqRDtBQUNIO0FBQ0o7QUFqRkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPLElBQU0rQyxTQUFiO0FBQ0kscUJBQVlsRixHQUFaLEVBQWlCaUYsSUFBakIsRUFBdUI7QUFBQTs7QUFBQTs7QUFDbkIsU0FBS2pGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtpRSxNQUFMLEdBQWNnQixJQUFJLENBQUNoQixNQUFuQjtBQUNBLFNBQUsvQixDQUFMLEdBQVMrQyxJQUFJLENBQUMvQyxDQUFkO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTOEMsSUFBSSxDQUFDOUMsQ0FBZDtBQUNBLFNBQUsyQyxLQUFMLEdBQWFHLElBQUksQ0FBQ0gsS0FBbEI7QUFDQSxTQUFLRCxHQUFMLEdBQVdJLElBQUksQ0FBQ0osR0FBaEI7QUFDQSxTQUFLckMsS0FBTCxHQUFheUMsSUFBSSxDQUFDekMsS0FBbEI7QUFDQSxTQUFLRSxJQUFMLEdBQVksS0FBS3VCLE1BQWpCO0FBQ0EsU0FBS2tELEdBQUwsR0FBVyxJQUFJQyxLQUFKLEVBQVg7O0FBQ0EsU0FBS0QsR0FBTCxDQUFTRSxNQUFULEdBQWtCO0FBQUEsYUFBTSxLQUFJLENBQUNDLElBQUwsQ0FBVXRILEdBQVYsQ0FBTjtBQUFBLEtBQWxCOztBQUNBLFNBQUttSCxHQUFMLENBQVNJLEdBQVQsR0FBZSxrQ0FBZjtBQUNBLFNBQUtuRixFQUFMLEdBQVUsS0FBS3lDLEdBQUwsR0FBV3pCLElBQUksQ0FBQ0ssR0FBTCxDQUFTLEtBQUtqQixLQUFkLENBQXJCO0FBQ0EsU0FBS0gsRUFBTCxHQUFVLEtBQUt3QyxHQUFMLEdBQVd6QixJQUFJLENBQUNJLEdBQUwsQ0FBUyxLQUFLaEIsS0FBZCxDQUFyQixDQWJtQixDQWNuQjtBQUNIOztBQWhCTDtBQUFBO0FBQUEsV0FrQkksY0FBS3hDLEdBQUwsRUFBVTtBQUNOQSxTQUFHLENBQUN3SCxJQUFKO0FBQ0F4SCxTQUFHLENBQUN5SCxTQUFKO0FBQ0F6SCxTQUFHLENBQUMwSCxHQUFKLENBQVEsS0FBS3hGLENBQWIsRUFBZ0IsS0FBS0MsQ0FBckIsRUFBd0IsS0FBSzhCLE1BQTdCLEVBQXFDLENBQXJDLEVBQXdDLElBQUliLElBQUksQ0FBQ2MsRUFBakQsRUFITSxDQUlOO0FBQ0E7O0FBQ0FsRSxTQUFHLENBQUMySCxTQUFKO0FBQ0EzSCxTQUFHLENBQUM0SCxJQUFKO0FBQ0E1SCxTQUFHLENBQUM2SCxTQUFKLENBQ0ksS0FBS1YsR0FEVCxFQUVJLEtBQUtqRixDQUFMLEdBQVMsS0FBSytCLE1BRmxCLEVBR0ksS0FBSzlCLENBQUwsR0FBUyxLQUFLOEIsTUFIbEIsRUFJSSxLQUFLQSxNQUFMLEdBQWMsQ0FKbEIsRUFLSSxLQUFLQSxNQUFMLEdBQWMsQ0FMbEI7QUFPQWpFLFNBQUcsQ0FBQzhILE9BQUo7QUFDSDtBQWxDTDtBQUFBO0FBQUEsV0FvQ0ksZ0JBQU87QUFBQSxpQkFDYyxDQUFDLEtBQUsxRixFQUFOLEVBQVUsS0FBS0MsRUFBZixDQURkO0FBQUEsVUFDSTBGLEVBREo7QUFBQSxVQUNRQyxFQURSO0FBRUgsV0FBSzlGLENBQUwsSUFBVTZGLEVBQVY7QUFDQSxXQUFLNUYsQ0FBTCxJQUFVNkYsRUFBVjs7QUFFQSxVQUFJLEtBQUs5RixDQUFMLEdBQVMvQixNQUFNLENBQUNHLFVBQXBCLEVBQWdDO0FBQzVCLGFBQUs0QixDQUFMLElBQVUvQixNQUFNLENBQUNHLFVBQWpCO0FBQ0gsT0FGRCxNQUVPLElBQUksS0FBSzRCLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ25CLGFBQUtBLENBQUwsSUFBVS9CLE1BQU0sQ0FBQ0csVUFBakI7QUFDSDs7QUFFRCxVQUFJLEtBQUs2QixDQUFMLEdBQVNoQyxNQUFNLENBQUNDLFdBQXBCLEVBQWlDO0FBQzdCLGFBQUsrQixDQUFMLElBQVVoQyxNQUFNLENBQUNDLFdBQWpCO0FBQ0gsT0FGRCxNQUVPLElBQUksS0FBSytCLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ25CLGFBQUtBLENBQUwsSUFBVWhDLE1BQU0sQ0FBQ0MsV0FBakI7QUFDSDtBQUNKO0FBcERMO0FBQUE7QUFBQSxXQXNESSxxQkFBWXNELElBQVosRUFBa0I7QUFDZCxVQUFJcUUsRUFBRSxHQUFHLEtBQUs3RixDQUFMLEdBQVN3QixJQUFJLENBQUN4QixDQUF2QjtBQUNBLFVBQUk4RixFQUFFLEdBQUcsS0FBSzdGLENBQUwsR0FBU3VCLElBQUksQ0FBQ3ZCLENBQXZCO0FBRUEsVUFBSThGLENBQUMsR0FBRzdFLElBQUksQ0FBQ1ksSUFBTCxDQUFVK0QsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUjtBQUVBLGFBQU9DLENBQUMsR0FBSSxLQUFLaEUsTUFBTCxHQUFjUCxJQUFJLENBQUNPLE1BQS9CO0FBQ0g7QUE3REw7QUFBQTtBQUFBLFdBK0RJLG1CQUFVO0FBQ04sV0FBSzNDLElBQUw7QUFDQSxXQUFLZ0csSUFBTCxDQUFVLEtBQUt0SCxHQUFmO0FBQ0g7QUFsRUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1VLEtBQWI7QUFDSSxpQkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUNmLFNBQUt5SCxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtuRSxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtvRSxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUs3QyxZQUFMLEdBQW9CakYsS0FBcEI7QUFDQSxTQUFLK0gsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNIOztBQVhMO0FBQUE7QUFBQSxXQWFJLHNCQUFhO0FBQ1QsVUFBSSxDQUFDLEtBQUt0RSxPQUFWLEVBQW1CO0FBQ2YsYUFBSytELFNBQUwsR0FBaUIsSUFBSW5DLElBQUosR0FBVzJDLE9BQVgsRUFBakI7QUFDQSxhQUFLUCxTQUFMLEdBQWlCaEksTUFBTSxDQUFDd0ksV0FBUCxDQUFtQixLQUFLSCxXQUF4QixFQUFxQyxDQUFyQyxDQUFqQjtBQUNBLGFBQUtyRSxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUtvRSxNQUFMLEdBQWMsS0FBZDtBQUNIO0FBQ0o7QUFwQkw7QUFBQTtBQUFBLFdBc0JJLHNCQUFhO0FBQ1QsVUFBSSxDQUFDLEtBQUtELFVBQVYsRUFBc0I7QUFDbEI7QUFDSCxPQUZELE1BRU8sSUFBSSxDQUFDLEtBQUtDLE1BQVYsRUFBa0I7QUFDckJLLHFCQUFhLENBQUMsS0FBS1QsU0FBTixDQUFiO0FBQ0EsYUFBS0UsU0FBTCxHQUFpQixLQUFLQyxVQUF0QjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBS3BFLE9BQUwsR0FBZSxLQUFmO0FBQ0gsT0FMTSxNQUtBO0FBQ0gsYUFBSytCLFVBQUw7QUFDSDtBQUNKO0FBakNMO0FBQUE7QUFBQSxXQW1DSSxzQkFBYTtBQUNUMEMsbUJBQWEsQ0FBQyxLQUFLVCxTQUFOLENBQWI7QUFDQSxXQUFLRSxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS3BFLE9BQUwsR0FBZSxLQUFmO0FBQ0g7QUF6Q0w7QUFBQTtBQUFBLFdBMkNJLHVCQUFjO0FBQ1YsV0FBS2lFLFdBQUwsR0FBbUIsSUFBSXJDLElBQUosR0FBVzJDLE9BQVgsRUFBbkI7O0FBQ0EsVUFBSSxLQUFLTCxTQUFULEVBQW9CO0FBQ2hCLGFBQUtDLFVBQUwsR0FBbUIsS0FBS0YsV0FBTCxHQUFtQixLQUFLRixTQUF6QixHQUFzQyxLQUFLRyxTQUE3RDtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtDLFVBQUwsR0FBa0IsS0FBS0YsV0FBTCxHQUFtQixLQUFLRixTQUExQztBQUNILE9BTlMsQ0FRVjs7O0FBQ0EsVUFBSVcsT0FBTyxHQUFHekYsSUFBSSxDQUFDMkIsS0FBTCxDQUFZLEtBQUt1RCxVQUFMLElBQW1CLE9BQU8sRUFBUCxHQUFZLEVBQS9CLENBQUQsSUFBd0MsT0FBTyxFQUEvQyxDQUFYLENBQWQ7QUFDQSxVQUFJUSxPQUFPLEdBQUcxRixJQUFJLENBQUMyQixLQUFMLENBQVksS0FBS3VELFVBQUwsSUFBbUIsT0FBTyxFQUExQixDQUFELEdBQWtDLElBQTdDLENBQWQ7QUFDQSxVQUFJUyxZQUFZLEdBQUczRixJQUFJLENBQUMyQixLQUFMLENBQVksS0FBS3VELFVBQUwsSUFBbUIsT0FBTyxFQUExQixDQUFELEdBQWtDLEVBQTdDLElBQW1ELEdBQXRFLENBWFUsQ0FZVjs7QUFDQU8sYUFBTyxHQUFJQSxPQUFPLEdBQUcsRUFBWCxHQUFpQixNQUFNQSxPQUF2QixHQUFpQ0EsT0FBM0M7QUFDQUMsYUFBTyxHQUFJQSxPQUFPLEdBQUcsRUFBWCxHQUFpQixNQUFNQSxPQUF2QixHQUFpQ0EsT0FBM0M7QUFDQUMsa0JBQVksR0FBSUEsWUFBWSxHQUFHLEdBQWhCLEdBQXdCQSxZQUFZLEdBQUcsRUFBaEIsR0FBc0IsTUFBTUEsWUFBNUIsR0FBMkMsS0FBS0EsWUFBdkUsR0FBc0ZBLFlBQXJHLENBZlUsQ0FnQlY7QUFDQTs7QUFDQSxXQUFLckQsWUFBTCxDQUFrQkMsU0FBbEIsYUFBaUNrRCxPQUFqQyxjQUE0Q0MsT0FBNUMsY0FBdURDLFlBQXZEO0FBQ0g7QUE5REw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCB7IFBsYXllckNhciB9IGZyb20gXCIuL3NjcmlwdHMvY2FyXCI7XG4vLyBpbXBvcnQgeyBNb3ZpbmdPYmogfSBmcm9tIFwiLi9zY3JpcHRzL21vdmluZ19vYmpcIjtcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSBcIi4vc2NyaXB0cy90aW1lclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zdGFydFwiKTtcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEucmVzdGFydC1idXR0b25cIik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWdhbWVcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgbXlDYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2FsXCIpO1xuICAgIGNvbnN0IHRpbWVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyIHNwYW4nKVxuXG4gICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIodGltZXJFbGUpO1xuICAgIGNvbnN0IGNhciA9IG5ldyBQbGF5ZXJDYXIobXlDYXIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgsIGNhciwgdGltZXIpO1xuXG4gICAgbXlDYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3dpbmRvdy5pbm5lcldpZHRoIC8gMn1weCwgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLyAyfXB4KSByb3RhdGUoJHswfWRlZylgO1xuXG4gICAgZnVuY3Rpb24gYW5pbWxvb3AoKSB7XG4gICAgICAgIGlmIChnYW1lLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgICAgICBnYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FyLm1vdmUoKTtcbiAgICAgICAgY2FyLmRyYXdDYXIoKTtcbiAgICAgICAgZ2FtZS5hbmltYXRlKCk7XG5cbiAgICAgICAgd2luZG93LmFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltbG9vcCk7XG4gICAgfVxuXG4gICAgd2luZG93LnJlc3RhcnRCdG4gPSByZXN0YXJ0QnRuO1xuXG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfSk7XG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgIGFuaW1sb29wKCk7XG4gICAgfSk7XG59KVxuXG4vLyBSZWN0YW5nbGUgTWF0aFxuXG4vKlxuVE9QIFJJR0hUIFZFUlRFWDpcblRvcF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5UT1AgTEVGVCBWRVJURVg6XG5Ub3BfTGVmdC54ID0gY2VudGVyLnggLSAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX0xlZnQueSA9IGNlbnRlci55IC0gKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cbkJPVFRPTSBMRUZUIFZFUlRFWDpcbkJvdF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIFJJR0hUIFZFUlRFWDpcbkJvdF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuQm90X1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG4qLyIsImV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuICBtYXhTcGVlZDogNCxcbiAgbWF4UmV2ZXJzZVNwZWVkOiAzLjUsXG4gIGFjY2VsZXJhdGlvbjogMC41LFxuICBkZWNjZWxlcmF0aW9uOiAwLjIsXG4gIGFuZ3VsYXJBY2NlbGVyYXRpb246IDAuMDVcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3IoY2FyKSB7XG5cbiAgICAgICAgLy8gY2FyIERPTSBlbGVtZW50XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgICB0aGlzLm1hc3MgPSAxO1xuXG4gICAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleSBkb3duXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAxLjI7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCA9IDA7XG4gICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgdGhpcy5tYXNzID0gMTtcblxuICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9cHgsICR7d2luZG93LmlubmVySGVpZ2h0IC8gMn1weCkgcm90YXRlKCR7MH1kZWcpYDtcbiAgICB9XG5cbiAgICByZW5kZXJDcmFzaCgpIHtcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy52eCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLnZ5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KVxuXG4gICAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnZ5O1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IHRoaXMub21lZ2E7XG4gICAgICB0aGlzLm9tZWdhICo9IHRoaXMub21lZ2E7XG5cbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGhCYWxsKGJhbGwpIHtcbiAgICAgICAgLy8gdW5yb3RhdGVkIGNpcmNsZVxuICAgICAgICBsZXQgdWNYID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC54IC0gdGhpcy54KSAtIE1hdGguc2luKHRoaXMuYW5nbGUpICogKGJhbGwueSAtIHRoaXMueSkgKyB0aGlzLng7XG4gICAgICAgIGxldCB1Y1kgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIChiYWxsLnggLSB0aGlzLngpICsgTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC55IC0gdGhpcy55KSArIHRoaXMueTtcblxuICAgICAgICBsZXQgY2xvc2VzdFg7XG4gICAgICAgIGxldCBjbG9zZXN0WTtcblxuICAgICAgICBpZiAodWNYIDwgdGhpcy54KSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB0aGlzLng7XG4gICAgICAgIH0gZWxzZSBpZiAodWNYID4gdGhpcy54ICsgMTYpIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHRoaXMueCArIDE2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdWNYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVjWSA8IHRoaXMueSkge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdGhpcy55O1xuICAgICAgICB9IGVsc2UgaWYgKHVjWSA+IHRoaXMueSArIDMyKSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB0aGlzLnkgKyAxNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHVjWTtcbiAgICAgICAgfVxuXG4gICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHVjWCAtIGNsb3Nlc3RYKSAqICh1Y1ggLSBjbG9zZXN0WCkgKyAodWNZIC0gY2xvc2VzdFkpICogKHVjWSAtIGNsb3Nlc3RZKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYmFsbC5yYWRpdXM7XG4gICAgfSBcblxuICAgIGRyYXdDYXIoKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weCkgcm90YXRlKCR7dGhpcy5hbmdsZSAqIDE4MCAvIE1hdGguUEl9ZGVnKWA7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vbW92aW5nX29ialwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYXIsIHRpbWVyKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy5oZWFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmxpdmVzIGxpXCIpO1xuICAgIH1cblxuICAgIGFkZEJhbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCYWxsKDMwLCA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQYXJraW5nU3BvdCgpIHtcblxuICAgIH1cblxuICAgIGNhckNyYXNoZWQoKSB7XG4gICAgICAgIC0tdGhpcy5saXZlcztcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGFkZEJhbGwocmFkaXVzLCB2ZWwpIHtcbiAgICAgICAgLy8gbGV0IGNvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGNvbG9yID0gJ2JsdWUnO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cbiAgICAgICAgbGV0IGF0dHIgPSB7cmFkaXVzLCB4LCB5LCBjb2xvciwgdmVsLCBhbmdsZX07XG5cbiAgICAgICAgY29uc3QgYmFsbCA9IG5ldyBNb3ZpbmdPYmoodGhpcy5jdHgsIGF0dHIpO1xuICAgICAgICB0aGlzLmJhbGxzLnB1c2goYmFsbCk7XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYmFsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsc1tpXS5pc0NvbGxpZGluZyh0aGlzLmJhbGxzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lLm9uQ29sbGlzaW9uKHRoaXMuYmFsbHNbaV0sIHRoaXMuYmFsbHNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmFkZEJhbGxzKCk7XG4gICAgICAgIHRoaXMuY2FyLnJlc2V0KCk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25Db2xsaXNpb24ob2JqMSwgb2JqMikge1xuICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHsgeDogb2JqMi54IC0gb2JqMS54LCB5OiBvYmoyLnkgLSBvYmoxLnkgfTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChvYmoyLnggLSBvYmoxLngpICogKG9iajIueCAtIG9iajEueCkgKyAob2JqMi55IC0gb2JqMS55KSAqIChvYmoyLnkgLSBvYmoxLnkpKTtcbiAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0geyB4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2UgfTtcblxuICAgICAgICBsZXQgdlJlbGF0aXZlVmVsb2NpdHkgPSB7IHg6IG9iajEudnggLSBvYmoyLnZ4LCB5OiBvYmoxLnZ5IC0gb2JqMi52eSB9O1xuICAgICAgICBsZXQgc3BlZWQgPSB2UmVsYXRpdmVWZWxvY2l0eS54ICogdkNvbGxpc2lvbk5vcm0ueCArIHZSZWxhdGl2ZVZlbG9jaXR5LnkgKiB2Q29sbGlzaW9uTm9ybS55O1xuXG4gICAgICAgIGxldCBpbXB1bHNlID0gMiAqIHNwZWVkIC8gKG9iajEubWFzcyArIG9iajIubWFzcyk7XG5cbiAgICAgICAgaWYgKHNwZWVkIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICBvYmoxLnZ4IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoxLnZ5IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgICAgICBvYmoyLnZ4ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoyLnZ5ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJrZWQoKSB7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy50aW1lci50aW1lckRpc3BsYXkuaW5uZXJIVE1MO1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJykpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoRGF0ZS5wYXJzZSh0aW1lKSA+IERhdGUucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gYmVzdFRpbWU7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZEJhbGxzKCk7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGVhdFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgICAgIHRoaXMuY2FyLnJlc2V0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFsbHMpXG4gICAgICAgIHRoaXMudGltZXIucmVzZXRUaW1lcigpO1xuICAgICAgICB0aGlzLnRpbWVyLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBcIjAwOjAwOjAwXCI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxpdmVzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gJ1lvdSBnb3QgYSBwYXJraW5nIHRpY2tldCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICAgIFxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGl2ZXM7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhcnRzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0c1tpXS5zdHlsZS5vcGFjaXR5ID0gaSA8IHRoaXMubGl2ZXMgPyAxIDogMC4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoZWF0XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgICAgIGJhbGwuYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FyLmNoZWNrQ29sbGlzaW9uV2l0aEJhbGwoYmFsbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhckNyYXNoZWQoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpbWVyLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb3ZpbmdPYmoge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgYXR0cikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBhdHRyLnJhZGl1cztcbiAgICAgICAgdGhpcy54ID0gYXR0ci54O1xuICAgICAgICB0aGlzLnkgPSBhdHRyLnk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBhdHRyLmNvbG9yO1xuICAgICAgICB0aGlzLnZlbCA9IGF0dHIudmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYXR0ci5hbmdsZTtcbiAgICAgICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL25vX3BhcmtpbmcucG5nXCI7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZlbCAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52ZWwgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmltZyxcbiAgICAgICAgICAgIHRoaXMueCAtIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy55IC0gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAqIDIsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAqIDJcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IFt0aGlzLnZ4LCB0aGlzLnZ5XTtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy55IC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmcoYmFsbCkge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSBiYWxsLng7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIGJhbGwueTtcblxuICAgICAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgcmV0dXJuIGQgPCAodGhpcy5yYWRpdXMgKyBiYWxsLnJhZGl1cyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IodGltZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnRJbnRlcnZhbCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnNhdmVkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyRGlzcGxheSA9IHRpbWVyO1xuICAgICAgICB0aGlzLmdldFNob3dUaW1lID0gdGhpcy5nZXRTaG93VGltZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy50SW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5nZXRTaG93VGltZSwgMSk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlVGltZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRUaW1lID0gdGhpcy5kaWZmZXJlbmNlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0VGltZXIoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50SW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnNhdmVkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFNob3dUaW1lKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkVGltZSkge1xuICAgICAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gKHRoaXMudXBkYXRlZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgKyB0aGlzLnNhdmVkVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IHRoaXMudXBkYXRlZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIGxldCBtaWxsaXNlY29uZHMgPSBNYXRoLmZsb29yKCh0aGlzLmRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMCkgJSAxMDA7XG4gICAgICAgIC8vIGhvdXJzID0gKGhvdXJzIDwgMTApID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xuICAgICAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgICAgICBzZWNvbmRzID0gKHNlY29uZHMgPCAxMCkgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgICAgICBtaWxsaXNlY29uZHMgPSAobWlsbGlzZWNvbmRzIDwgMTAwKSA/IChtaWxsaXNlY29uZHMgPCAxMCkgPyBcIjBcIiArIG1pbGxpc2Vjb25kcyA6IFwiXCIgKyBtaWxsaXNlY29uZHMgOiBtaWxsaXNlY29uZHM7XG4gICAgICAgIC8vIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHttaW51dGVzfToke3NlY29uZHN9OiR7bWlsbGlzZWNvbmRzfWApO1xuICAgICAgICAvLyB0aGlzLnRpbWVyRGlzcGxheS5hcHBlbmRDaGlsZCh0eHQpO1xuICAgICAgICB0aGlzLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBgJHttaW51dGVzfToke3NlY29uZHN9OiR7bWlsbGlzZWNvbmRzfWA7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=