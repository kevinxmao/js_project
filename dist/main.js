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
    if (game.gameOver()) {
      game.restart();
      window.cancelAnimationFrame(window.animationId);
    }

    car.move();
    car.drawCar();
    game.animate();
    window.animationId = window.requestAnimationFrame(animloop);
  }

  restartBtn.addEventListener('click', function () {
    console.log('hello');
    document.getElementById("modal").style.visibility = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QnRuIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdG4iLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm15Q2FyIiwidGltZXJFbGUiLCJ0aW1lciIsIlRpbWVyIiwiY2FyIiwiUGxheWVyQ2FyIiwiZ2FtZSIsIkdhbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxhc3RUaW1lIiwidmVuZG9ycyIsIngiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiTWF0aCIsIm1heCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFuaW1sb29wIiwiZ2FtZU92ZXIiLCJyZXN0YXJ0IiwiYW5pbWF0aW9uSWQiLCJtb3ZlIiwiZHJhd0NhciIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIiwidmlzaWJpbGl0eSIsInN0YXJ0IiwiQ0FSX0NPTlNUQU5UUyIsIm1heFNwZWVkIiwibWF4UmV2ZXJzZVNwZWVkIiwiYWNjZWxlcmF0aW9uIiwiZGVjY2VsZXJhdGlvbiIsImFuZ3VsYXJBY2NlbGVyYXRpb24iLCJ5IiwidngiLCJ2eSIsInNwZWVkIiwicmV2ZXJzZVNwZWVkIiwiYW5nbGUiLCJvbWVnYSIsIm1hc3MiLCJhY2NlbGVyYXRlIiwicmV2ZXJzZSIsInR1cm5MZWZ0IiwidHVyblJpZ2h0IiwiZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwiYnJlYWsiLCJwcmV2ZW50RGVmYXVsdCIsIm1pbiIsImRpcmVjdGlvbiIsInNpbiIsImNvcyIsImJhbGwiLCJ1Y1giLCJ1Y1kiLCJjbG9zZXN0WCIsImNsb3Nlc3RZIiwiZGlzdGFuY2UiLCJzcXJ0IiwicmFkaXVzIiwiUEkiLCJydW5uaW5nIiwibGV2ZWwiLCJiYWxscyIsImxpdmVzIiwiaGVhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJhZGRCYWxsIiwidXBkYXRlSGVhcnRzIiwicmVzZXQiLCJ2ZWwiLCJjb2xvciIsImZsb29yIiwicmFuZG9tIiwiYXR0ciIsIk1vdmluZ09iaiIsInB1c2giLCJqIiwiaXNDb2xsaWRpbmciLCJvbkNvbGxpc2lvbiIsImFkZEJhbGxzIiwidGltZSIsInRpbWVyRGlzcGxheSIsImlubmVySFRNTCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicGFyc2UiLCJiZXN0VGltZSIsInN0YXJ0VGltZXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc2V0VGltZXIiLCJvcGFjaXR5IiwiZm9yRWFjaCIsImNoZWNrQ29sbGlzaW9uV2l0aEJhbGwiLCJjYXJDcmFzaGVkIiwiY2hlY2tCYWxsQ29sbGlzaW9uIiwib2JqMSIsIm9iajIiLCJ2Q29sbGlzaW9uIiwidkNvbGxpc2lvbk5vcm0iLCJ2UmVsYXRpdmVWZWxvY2l0eSIsImltcHVsc2UiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRyYXciLCJzcmMiLCJzYXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiY2xpcCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJkeCIsImR5IiwiZCIsInN0YXJ0VGltZSIsInRJbnRlcnZhbCIsInVwZGF0ZWRUaW1lIiwic2F2ZWRUaW1lIiwiZGlmZmVyZW5jZSIsInBhdXNlZCIsImdldFNob3dUaW1lIiwiYmluZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLGtCQUF2QixDQUFuQjtBQUVBLE1BQU1FLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxj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OEMsT0FBakMsY0FBNENDLE9BQTVDLGNBQXVEQyxZQUF2RDtBQUNIO0FBOURMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJDYXIgfSBmcm9tIFwiLi9zY3JpcHRzL2NhclwiO1xuLy8gaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vc2NyaXB0cy9tb3Zpbmdfb2JqXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL3NjcmlwdHMvdGltZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc3RhcnRcIik7XG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnJlc3RhcnQtYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWdhbWVcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgbXlDYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2FsXCIpO1xuICAgIGNvbnN0IHRpbWVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyIHNwYW4nKVxuXG4gICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIodGltZXJFbGUpO1xuICAgIGNvbnN0IGNhciA9IG5ldyBQbGF5ZXJDYXIobXlDYXIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgsIGNhciwgdGltZXIpO1xuXG4gICAgbXlDYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3dpbmRvdy5pbm5lcldpZHRoIC8gMn1weCwgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLyAyfXB4KSByb3RhdGUoJHswfWRlZylgO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgICB2YXIgdmVuZG9ycyA9IFtcIndlYmtpdFwiLCBcIm1velwiXTtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICArK3hcbiAgICAgICkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuXG4gICAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWxvb3AoKSB7XG4gICAgICAgIGlmIChnYW1lLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICBnYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuICAgICAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgICAgICB3aW5kb3cuYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcbiAgICB9XG5cbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIikuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0pXG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgIGFuaW1sb29wKCk7XG4gICAgfSk7XG59KVxuXG4vLyBSZWN0YW5nbGUgTWF0aFxuXG4vKlxuVE9QIFJJR0hUIFZFUlRFWDpcblRvcF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5UT1AgTEVGVCBWRVJURVg6XG5Ub3BfTGVmdC54ID0gY2VudGVyLnggLSAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX0xlZnQueSA9IGNlbnRlci55IC0gKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cbkJPVFRPTSBMRUZUIFZFUlRFWDpcbkJvdF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIFJJR0hUIFZFUlRFWDpcbkJvdF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuQm90X1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG4qLyIsImV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuICBtYXhTcGVlZDogNCxcbiAgbWF4UmV2ZXJzZVNwZWVkOiAzLjUsXG4gIGFjY2VsZXJhdGlvbjogMC41LFxuICBkZWNjZWxlcmF0aW9uOiAwLjIsXG4gIGFuZ3VsYXJBY2NlbGVyYXRpb246IDAuMDVcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3IoY2FyKSB7XG5cbiAgICAgICAgLy8gY2FyIERPTSBlbGVtZW50XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgICB0aGlzLm1hc3MgPSAxO1xuXG4gICAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleSBkb3duXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAxLjI7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCA9IDA7XG4gICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgdGhpcy5tYXNzID0gMTtcblxuICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9cHgsICR7d2luZG93LmlubmVySGVpZ2h0IC8gMn1weCkgcm90YXRlKCR7MH1kZWcpYDtcbiAgICB9XG5cbiAgICByZW5kZXJDcmFzaCgpIHtcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy52eCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLnZ5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KVxuXG4gICAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnZ5O1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IHRoaXMub21lZ2E7XG4gICAgICB0aGlzLm9tZWdhICo9IHRoaXMub21lZ2E7XG5cbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGhCYWxsKGJhbGwpIHtcbiAgICAgICAgLy8gdW5yb3RhdGVkIGNpcmNsZVxuICAgICAgICBsZXQgdWNYID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC54IC0gdGhpcy54KSAtIE1hdGguc2luKHRoaXMuYW5nbGUpICogKGJhbGwueSAtIHRoaXMueSkgKyB0aGlzLng7XG4gICAgICAgIGxldCB1Y1kgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIChiYWxsLnggLSB0aGlzLngpICsgTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC55IC0gdGhpcy55KSArIHRoaXMueTtcblxuICAgICAgICBsZXQgY2xvc2VzdFg7XG4gICAgICAgIGxldCBjbG9zZXN0WTtcblxuICAgICAgICBpZiAodWNYIDwgdGhpcy54KSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB0aGlzLng7XG4gICAgICAgIH0gZWxzZSBpZiAodWNYID4gdGhpcy54ICsgMTYpIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHRoaXMueCArIDE2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdWNYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVjWSA8IHRoaXMueSkge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdGhpcy55O1xuICAgICAgICB9IGVsc2UgaWYgKHVjWSA+IHRoaXMueSArIDMyKSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB0aGlzLnkgKyAxNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHVjWTtcbiAgICAgICAgfVxuXG4gICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHVjWCAtIGNsb3Nlc3RYKSAqICh1Y1ggLSBjbG9zZXN0WCkgKyAodWNZIC0gY2xvc2VzdFkpICogKHVjWSAtIGNsb3Nlc3RZKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYmFsbC5yYWRpdXM7XG4gICAgfSBcblxuICAgIGRyYXdDYXIoKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weCkgcm90YXRlKCR7dGhpcy5hbmdsZSAqIDE4MCAvIE1hdGguUEl9ZGVnKWA7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vbW92aW5nX29ialwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYXIsIHRpbWVyKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy5oZWFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmxpdmVzIGxpXCIpO1xuICAgIH1cblxuICAgIGFkZEJhbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCYWxsKDMwLCA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQYXJraW5nU3BvdCgpIHtcblxuICAgIH1cblxuICAgIGNhckNyYXNoZWQoKSB7XG4gICAgICAgIC0tdGhpcy5saXZlcztcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGFkZEJhbGwocmFkaXVzLCB2ZWwpIHtcbiAgICAgICAgLy8gbGV0IGNvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGNvbG9yID0gJ2JsdWUnO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cbiAgICAgICAgbGV0IGF0dHIgPSB7cmFkaXVzLCB4LCB5LCBjb2xvciwgdmVsLCBhbmdsZX07XG5cbiAgICAgICAgY29uc3QgYmFsbCA9IG5ldyBNb3ZpbmdPYmoodGhpcy5jdHgsIGF0dHIpO1xuICAgICAgICB0aGlzLmJhbGxzLnB1c2goYmFsbCk7XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYmFsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsc1tpXS5pc0NvbGxpZGluZyh0aGlzLmJhbGxzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lLm9uQ29sbGlzaW9uKHRoaXMuYmFsbHNbaV0sIHRoaXMuYmFsbHNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgICB0aGlzLmFkZEJhbGxzKCk7XG4gICAgICAgIHRoaXMuY2FyLnJlc2V0KCk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnRpbWVyLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25Db2xsaXNpb24ob2JqMSwgb2JqMikge1xuICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHsgeDogb2JqMi54IC0gb2JqMS54LCB5OiBvYmoyLnkgLSBvYmoxLnkgfTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChvYmoyLnggLSBvYmoxLngpICogKG9iajIueCAtIG9iajEueCkgKyAob2JqMi55IC0gb2JqMS55KSAqIChvYmoyLnkgLSBvYmoxLnkpKTtcbiAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0geyB4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2UgfTtcblxuICAgICAgICBsZXQgdlJlbGF0aXZlVmVsb2NpdHkgPSB7IHg6IG9iajEudnggLSBvYmoyLnZ4LCB5OiBvYmoxLnZ5IC0gb2JqMi52eSB9O1xuICAgICAgICBsZXQgc3BlZWQgPSB2UmVsYXRpdmVWZWxvY2l0eS54ICogdkNvbGxpc2lvbk5vcm0ueCArIHZSZWxhdGl2ZVZlbG9jaXR5LnkgKiB2Q29sbGlzaW9uTm9ybS55O1xuXG4gICAgICAgIGxldCBpbXB1bHNlID0gMiAqIHNwZWVkIC8gKG9iajEubWFzcyArIG9iajIubWFzcyk7XG5cbiAgICAgICAgaWYgKHNwZWVkIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICBvYmoxLnZ4IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoxLnZ5IC09IChpbXB1bHNlICogb2JqMi5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgICAgICBvYmoyLnZ4ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueCk7XG4gICAgICAgICAgICBvYmoyLnZ5ICs9IChpbXB1bHNlICogb2JqMS5tYXNzICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJrZWQoKSB7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy50aW1lci50aW1lckRpc3BsYXkuaW5uZXJIVE1MO1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lJykpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoRGF0ZS5wYXJzZSh0aW1lKSA+IERhdGUucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWUnKSkpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gYmVzdFRpbWU7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFkZEJhbGxzKCk7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGVhdFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgICAgIHRoaXMuY2FyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXRUaW1lcigpO1xuICAgICAgICB0aGlzLnRpbWVyLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBcIjAwOjAwOjAwXCI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxpdmVzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gJ1lvdSBnb3QgYSBwYXJraW5nIHRpY2tldCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICAgIFxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGl2ZXM7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhcnRzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0c1tpXS5zdHlsZS5vcGFjaXR5ID0gaSA8IHRoaXMubGl2ZXMgPyAxIDogMC4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoZWF0XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgICAgIGJhbGwuYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FyLmNoZWNrQ29sbGlzaW9uV2l0aEJhbGwoYmFsbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhckNyYXNoZWQoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRpbWVyLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb3ZpbmdPYmoge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgYXR0cikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBhdHRyLnJhZGl1cztcbiAgICAgICAgdGhpcy54ID0gYXR0ci54O1xuICAgICAgICB0aGlzLnkgPSBhdHRyLnk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBhdHRyLmNvbG9yO1xuICAgICAgICB0aGlzLnZlbCA9IGF0dHIudmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYXR0ci5hbmdsZTtcbiAgICAgICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL25vX3BhcmtpbmcucG5nXCI7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZlbCAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52ZWwgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmltZyxcbiAgICAgICAgICAgIHRoaXMueCAtIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy55IC0gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAqIDIsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAqIDJcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IFt0aGlzLnZ4LCB0aGlzLnZ5XTtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy55IC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmcoYmFsbCkge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSBiYWxsLng7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIGJhbGwueTtcblxuICAgICAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgcmV0dXJuIGQgPCAodGhpcy5yYWRpdXMgKyBiYWxsLnJhZGl1cyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IodGltZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnRJbnRlcnZhbCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnNhdmVkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyRGlzcGxheSA9IHRpbWVyO1xuICAgICAgICB0aGlzLmdldFNob3dUaW1lID0gdGhpcy5nZXRTaG93VGltZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy50SW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5nZXRTaG93VGltZSwgMSk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlVGltZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRUaW1lID0gdGhpcy5kaWZmZXJlbmNlO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0VGltZXIoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50SW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnNhdmVkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFNob3dUaW1lKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkVGltZSkge1xuICAgICAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gKHRoaXMudXBkYXRlZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgKyB0aGlzLnNhdmVkVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IHRoaXMudXBkYXRlZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGhpcy5kaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIGxldCBtaWxsaXNlY29uZHMgPSBNYXRoLmZsb29yKCh0aGlzLmRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMCkgJSAxMDA7XG4gICAgICAgIC8vIGhvdXJzID0gKGhvdXJzIDwgMTApID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xuICAgICAgICBtaW51dGVzID0gKG1pbnV0ZXMgPCAxMCkgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgICAgICBzZWNvbmRzID0gKHNlY29uZHMgPCAxMCkgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuICAgICAgICBtaWxsaXNlY29uZHMgPSAobWlsbGlzZWNvbmRzIDwgMTAwKSA/IChtaWxsaXNlY29uZHMgPCAxMCkgPyBcIjBcIiArIG1pbGxpc2Vjb25kcyA6IFwiXCIgKyBtaWxsaXNlY29uZHMgOiBtaWxsaXNlY29uZHM7XG4gICAgICAgIC8vIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHttaW51dGVzfToke3NlY29uZHN9OiR7bWlsbGlzZWNvbmRzfWApO1xuICAgICAgICAvLyB0aGlzLnRpbWVyRGlzcGxheS5hcHBlbmRDaGlsZCh0eHQpO1xuICAgICAgICB0aGlzLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBgJHttaW51dGVzfToke3NlY29uZHN9OiR7bWlsbGlzZWNvbmRzfWA7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=