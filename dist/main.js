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

  (function () {
    var lastTime = 0;
    var vendors = ["webkit", "moz"];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  })();

  function animloop() {
    car.move();
    car.drawCar();
    game.animate();
    window.animationId = window.requestAnimationFrame(animloop);
  }

  var startBtn = document.querySelector("a.start");
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
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
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
      this.car.car.style.transform = "translate(".concat(window.innerWidth / 2, "px, ").concat(window.innerHeight / 2, "px) rotate(", 0, "deg)");
      this.timer.startTimer();
    }
  }, {
    key: "parked",
    value: function parked() {}
  }, {
    key: "start",
    value: function start() {
      this.addBalls();
      this.timer.startTimer();
    }
  }, {
    key: "restart",
    value: function restart() {}
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
          _this.carCrashed();

          _this.timer.pauseTimer();
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
    _classCallCheck(this, MovingObj);

    this.ctx = ctx;
    this.radius = attr.radius;
    this.x = attr.x;
    this.y = attr.y;
    this.color = attr.color;
    this.vel = attr.vel;
    this.angle = attr.angle;
    this.mass = this.radius;
    this.vx = this.vel * Math.cos(this.angle);
    this.vy = this.vel * Math.sin(this.angle); // debugger
  }

  _createClass(MovingObj, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJ0aW1lckVsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lciIsIlRpbWVyIiwiY2FyIiwiUGxheWVyQ2FyIiwiZ2FtZSIsIkdhbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxhc3RUaW1lIiwidmVuZG9ycyIsIngiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiTWF0aCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFuaW1sb29wIiwibW92ZSIsImRyYXdDYXIiLCJhbmltYXRlIiwiYW5pbWF0aW9uSWQiLCJzdGFydEJ0biIsInZpc2liaWxpdHkiLCJzdGFydCIsIkNBUl9DT05TVEFOVFMiLCJtYXhTcGVlZCIsIm1heFJldmVyc2VTcGVlZCIsImFjY2VsZXJhdGlvbiIsImRlY2NlbGVyYXRpb24iLCJhbmd1bGFyQWNjZWxlcmF0aW9uIiwieSIsInZ4IiwidnkiLCJzcGVlZCIsInJldmVyc2VTcGVlZCIsImFuZ2xlIiwib21lZ2EiLCJtYXNzIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJtaW4iLCJkaXJlY3Rpb24iLCJzaW4iLCJjb3MiLCJiYWxsIiwidWNYIiwidWNZIiwiY2xvc2VzdFgiLCJjbG9zZXN0WSIsImRpc3RhbmNlIiwic3FydCIsInJhZGl1cyIsIlBJIiwicnVubmluZyIsImxldmVsIiwiYmFsbHMiLCJsaXZlcyIsImhlYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiYWRkQmFsbCIsInVwZGF0ZUhlYXJ0cyIsInJlc2V0IiwidmVsIiwiY29sb3IiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYXR0ciIsIk1vdmluZ09iaiIsInB1c2giLCJqIiwiaXNDb2xsaWRpbmciLCJvbkNvbGxpc2lvbiIsImFkZEJhbGxzIiwic3RhcnRUaW1lciIsIm9wYWNpdHkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvckVhY2giLCJjaGVja0NvbGxpc2lvbldpdGhCYWxsIiwiY2FyQ3Jhc2hlZCIsInBhdXNlVGltZXIiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJvYmoxIiwib2JqMiIsInZDb2xsaXNpb24iLCJ2Q29sbGlzaW9uTm9ybSIsInZSZWxhdGl2ZVZlbG9jaXR5IiwiaW1wdWxzZSIsInNhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIiwicmVzdG9yZSIsImR4IiwiZHkiLCJkIiwiZHJhdyIsInN0YXJ0VGltZSIsInRJbnRlcnZhbCIsInVwZGF0ZWRUaW1lIiwic2F2ZWRUaW1lIiwiZGlmZmVyZW5jZSIsInBhdXNlZCIsInRpbWVyRGlzcGxheSIsImdldFNob3dUaW1lIiwiYmluZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwiaW5uZXJIVE1M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QUFELEdBQWtDLElBQTdDLENBQWQ7QUFDQSxVQUFJUyxZQUFZLEdBQUc1RyxJQUFJLENBQUM2RCxLQUFMLENBQVksS0FBS3NDLFVBQUwsSUFBbUIsT0FBTyxFQUExQixDQUFELEdBQWtDLEVBQTdDLElBQW1ELEdBQXRFLENBWFUsQ0FZVjs7QUFDQU8sYUFBTyxHQUFJQSxPQUFPLEdBQUcsRUFBWCxHQUFpQixNQUFNQSxPQUF2QixHQUFpQ0EsT0FBM0M7QUFDQUMsYUFBTyxHQUFJQSxPQUFPLEdBQUcsRUFBWCxHQUFpQixNQUFNQSxPQUF2QixHQUFpQ0EsT0FBM0M7QUFDQUMsa0JBQVksR0FBSUEsWUFBWSxHQUFHLEdBQWhCLEdBQXdCQSxZQUFZLEdBQUcsRUFBaEIsR0FBc0IsTUFBTUEsWUFBNUIsR0FBMkMsS0FBS0EsWUFBdkUsR0FBc0ZBLFlBQXJHLENBZlUsQ0FnQlY7QUFDQTs7QUFDQSxXQUFLUCxZQUFMLENBQWtCUSxTQUFsQixhQUFpQ0gsT0FBakMsY0FBNENDLE9BQTVDLGNBQXVEQyxZQUF2RDtBQUNIO0FBOURMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJDYXIgfSBmcm9tIFwiLi9zY3JpcHRzL2NhclwiO1xuLy8gaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vc2NyaXB0cy9tb3Zpbmdfb2JqXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL3NjcmlwdHMvdGltZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1nYW1lXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IG15Q2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhbFwiKTtcbiAgICBjb25zdCB0aW1lckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lciBzcGFuJylcblxuICAgIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKHRpbWVyRWxlKTtcbiAgICBjb25zdCBjYXIgPSBuZXcgUGxheWVyQ2FyKG15Q2FyKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBjYXIsIHRpbWVyKTtcblxuICAgIG15Q2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9cHgsICR7d2luZG93LmlubmVySGVpZ2h0IC8gMn1weCkgcm90YXRlKCR7MH1kZWcpYDtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgICAgdmFyIHZlbmRvcnMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIl07XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgKyt4XG4gICAgICApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1sb29wKCkge1xuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuICAgICAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgICAgICB3aW5kb3cuYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc3RhcnRcIik7XG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgIGFuaW1sb29wKCk7XG4gICAgfSlcbn0pXG5cbi8vIFJlY3RhbmdsZSBNYXRoXG5cbi8qXG5UT1AgUklHSFQgVkVSVEVYOlxuVG9wX1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cblRPUCBMRUZUIFZFUlRFWDpcblRvcF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIExFRlQgVkVSVEVYOlxuQm90X0xlZnQueCA9IGNlbnRlci54IC0gKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcbkJvdF9MZWZ0LnkgPSBjZW50ZXIueSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gUklHSFQgVkVSVEVYOlxuQm90X1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcbiovIiwiZXhwb3J0IGNvbnN0IENBUl9DT05TVEFOVFMgPSB7XG4gIG1heFNwZWVkOiA0LFxuICBtYXhSZXZlcnNlU3BlZWQ6IDMuNSxcbiAgYWNjZWxlcmF0aW9uOiAwLjUsXG4gIGRlY2NlbGVyYXRpb246IDAuMixcbiAgYW5ndWxhckFjY2VsZXJhdGlvbjogMC4wNVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihjYXIpIHtcblxuICAgICAgICAvLyBjYXIgRE9NIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5vbWVnYSA9IDA7XG4gICAgICAgIHRoaXMubWFzcyA9IDE7XG5cbiAgICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGRvd25cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2VsZXJhdGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy52eCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLnZ5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KVxuXG4gICAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnZ5O1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IHRoaXMub21lZ2E7XG4gICAgICB0aGlzLm9tZWdhICo9IHRoaXMub21lZ2E7XG5cbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGhCYWxsKGJhbGwpIHtcbiAgICAgICAgLy8gdW5yb3RhdGVkIGNpcmNsZVxuICAgICAgICBsZXQgdWNYID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC54IC0gdGhpcy54KSAtIE1hdGguc2luKHRoaXMuYW5nbGUpICogKGJhbGwueSAtIHRoaXMueSkgKyB0aGlzLng7XG4gICAgICAgIGxldCB1Y1kgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIChiYWxsLnggLSB0aGlzLngpICsgTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC55IC0gdGhpcy55KSArIHRoaXMueTtcblxuICAgICAgICBsZXQgY2xvc2VzdFg7XG4gICAgICAgIGxldCBjbG9zZXN0WTtcblxuICAgICAgICBpZiAodWNYIDwgdGhpcy54KSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB0aGlzLng7XG4gICAgICAgIH0gZWxzZSBpZiAodWNYID4gdGhpcy54ICsgMTYpIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHRoaXMueCArIDE2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdWNYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVjWSA8IHRoaXMueSkge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdGhpcy55O1xuICAgICAgICB9IGVsc2UgaWYgKHVjWSA+IHRoaXMueSArIDMyKSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB0aGlzLnkgKyAxNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHVjWTtcbiAgICAgICAgfVxuXG4gICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHVjWCAtIGNsb3Nlc3RYKSAqICh1Y1ggLSBjbG9zZXN0WCkgKyAodWNZIC0gY2xvc2VzdFkpICogKHVjWSAtIGNsb3Nlc3RZKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYmFsbC5yYWRpdXM7XG4gICAgfSBcblxuICAgIGRyYXdDYXIoKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weCkgcm90YXRlKCR7dGhpcy5hbmdsZSAqIDE4MCAvIE1hdGguUEl9ZGVnKWA7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vbW92aW5nX29ialwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYXIsIHRpbWVyKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy5oZWFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmxpdmVzIGxpXCIpO1xuICAgIH1cblxuICAgIGFkZEJhbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCYWxsKDMwLCA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQYXJraW5nU3BvdCgpIHtcblxuICAgIH1cblxuICAgIGNhckNyYXNoZWQoKSB7XG4gICAgICAgIC0tdGhpcy5saXZlcztcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGFkZEJhbGwocmFkaXVzLCB2ZWwpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuXG4gICAgICAgIGxldCBhdHRyID0ge3JhZGl1cywgeCwgeSwgY29sb3IsIHZlbCwgYW5nbGV9O1xuXG4gICAgICAgIGNvbnN0IGJhbGwgPSBuZXcgTW92aW5nT2JqKHRoaXMuY3R4LCBhdHRyKTtcbiAgICAgICAgdGhpcy5iYWxscy5wdXNoKGJhbGwpO1xuICAgIH1cblxuICAgIGNoZWNrQmFsbENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLmJhbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbHNbaV0uaXNDb2xsaWRpbmcodGhpcy5iYWxsc1tqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5vbkNvbGxpc2lvbih0aGlzLmJhbGxzW2ldLCB0aGlzLmJhbGxzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHRoaXMuYmFsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRCYWxscygpO1xuICAgICAgICB0aGlzLmNhci5jYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3dpbmRvdy5pbm5lcldpZHRoIC8gMn1weCwgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLyAyfXB4KSByb3RhdGUoJHswfWRlZylgO1xuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25Db2xsaXNpb24ob2JqMSwgb2JqMikge1xuICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHsgeDogb2JqMi54IC0gb2JqMS54LCB5OiBvYmoyLnkgLSBvYmoxLnkgfTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChvYmoyLnggLSBvYmoxLngpICogKG9iajIueCAtIG9iajEueCkgKyAob2JqMi55IC0gb2JqMS55KSAqIChvYmoyLnkgLSBvYmoxLnkpKTtcbiAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0geyB4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2UgfTtcblxuICAgICAgICBsZXQgdlJlbGF0aXZlVmVsb2NpdHkgPSB7IHg6IG9iajEudnggLSBvYmoyLnZ4LCB5OiBvYmoxLnZ5IC0gb2JqMi52eSB9O1xuICAgICAgICBsZXQgc3BlZWQgPSB2UmVsYXRpdmVWZWxvY2l0eS54ICogdkNvbGxpc2lvbk5vcm0ueCArIHZSZWxhdGl2ZVZlbG9jaXR5LnkgKiB2Q29sbGlzaW9uTm9ybS55O1xuXG4gICAgICAgIGxldCBpbXB1bHNlID0gMiAqIHNwZWVkIC8gKG9iajEubWFzcyArIG9iajIubWFzcyk7XG5cbiAgICAgICAgaWYgKHNwZWVkIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICBvYmoxLnZ4IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoxLnZ5IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgICAgICBvYmoyLnZ4ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoyLnZ5ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJrZWQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRCYWxscygpO1xuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuXG4gICAgfVxuICAgIFxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGl2ZXM7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhcnRzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0c1tpXS5zdHlsZS5vcGFjaXR5ID0gaSA8IHRoaXMubGl2ZXMgPyAxIDogMC4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoZWF0XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgICAgIGJhbGwuYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FyLmNoZWNrQ29sbGlzaW9uV2l0aEJhbGwoYmFsbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhckNyYXNoZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb3ZpbmdPYmoge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgYXR0cikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBhdHRyLnJhZGl1cztcbiAgICAgICAgdGhpcy54ID0gYXR0ci54O1xuICAgICAgICB0aGlzLnkgPSBhdHRyLnk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBhdHRyLmNvbG9yO1xuICAgICAgICB0aGlzLnZlbCA9IGF0dHIudmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYXR0ci5hbmdsZTtcbiAgICAgICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXM7XG5cbiAgICAgICAgdGhpcy52eCA9IHRoaXMudmVsICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnZlbCAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBbdGhpcy52eCwgdGhpcy52eV07XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy54IC09IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGlkaW5nKGJhbGwpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gYmFsbC54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSBiYWxsLnk7XG5cbiAgICAgICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIHJldHVybiBkIDwgKHRoaXMucmFkaXVzICsgYmFsbC5yYWRpdXMpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy50SW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5zYXZlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lckRpc3BsYXkgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5nZXRTaG93VGltZSA9IHRoaXMuZ2V0U2hvd1RpbWUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMudEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHRoaXMuZ2V0U2hvd1RpbWUsIDEpO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZVRpbWVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkVGltZSA9IHRoaXMuZGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudEludGVydmFsKTtcbiAgICAgICAgdGhpcy5zYXZlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRTaG93VGltZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAodGhpcy5zYXZlZFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9ICh0aGlzLnVwZGF0ZWRUaW1lIC0gdGhpcy5zdGFydFRpbWUpICsgdGhpcy5zYXZlZFRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSB0aGlzLnVwZGF0ZWRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICBsZXQgbWlsbGlzZWNvbmRzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTApICUgMTAwO1xuICAgICAgICAvLyBob3VycyA9IChob3VycyA8IDEwKSA/IFwiMFwiICsgaG91cnMgOiBob3VycztcbiAgICAgICAgbWludXRlcyA9IChtaW51dGVzIDwgMTApID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgc2Vjb25kcyA9IChzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gKG1pbGxpc2Vjb25kcyA8IDEwMCkgPyAobWlsbGlzZWNvbmRzIDwgMTApID8gXCIwXCIgKyBtaWxsaXNlY29uZHMgOiBcIlwiICsgbWlsbGlzZWNvbmRzIDogbWlsbGlzZWNvbmRzO1xuICAgICAgICAvLyBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gKTtcbiAgICAgICAgLy8gdGhpcy50aW1lckRpc3BsYXkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgICAgdGhpcy50aW1lckRpc3BsYXkuaW5uZXJIVE1MID0gYCR7bWludXRlc306JHtzZWNvbmRzfToke21pbGxpc2Vjb25kc31gO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9