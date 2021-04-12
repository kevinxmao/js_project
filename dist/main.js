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
Top_Right.x = x + ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Top_Right.y = y + ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))



TOP LEFT VERTEX:
Top_Left.x = x - ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Top_Left.y = y - ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))



BOTTOM LEFT VERTEX:
Bot_Left.x = x - ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Bot_Left.y = y - ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))



BOTTOM RIGHT VERTEX:
Bot_Right.x = x + ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Bot_Right.y = y + ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))
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
    this.reverse = false;
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
          _this.accelerate = true;
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

      e.preventDefault();
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
      this.reverse = false;
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
      this.vy = Math.cos(this.angle) * (this.speed - this.reverseSpeed);
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
    this.img = new Image();
    this.img.src = "src/assets/images/parking.png";
  }

  _createClass(Game, [{
    key: "addBalls",
    value: function addBalls() {
      if (this.level === 1) {
        for (var i = 0; i < 15; i++) {
          this.addBall(30, 5);
        }
      }
    }
  }, {
    key: "drawParkingSpot",
    value: function drawParkingSpot() {
      var skirt = 60;
      var innerBox = 300;
      var x = Math.floor(Math.random() * (window.innerWidth - skirt));
      var y = Math.floor(Math.random() * (window.innerHeight - skirt));

      while (x > window.innerWidth / 2 - innerBox / 2 && x < window.innerWidth / 2 + innerBox / 2) {
        x = Math.floor(Math.random() * (window.innerWidth - skirt));
      }

      while (y > window.innerHeight / 2 - innerBox / 2 && y < window.innerHeight / 2 + innerBox / 2) {
        y = Math.floor(Math.random() * (window.innerHeight - skirt));
      }

      this.pX = x;
      this.pY = y;
    }
  }, {
    key: "animateParkingSpot",
    value: function animateParkingSpot() {
      this.ctx.fillStyle = '#0071cc';
      this.ctx.fillRect(this.pX, this.pY, 60, 60);
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

      if (localStorage.getItem('park-it-time') === null) {
        localStorage.setItem('park-it-time', time);
      }

      if (new Date("1970-01-01 ".concat(time)) < new Date("1970-01-01 ".concat(localStorage.getItem('park-it-time')))) {
        localStorage.removeItem('park-it-time');
        localStorage.setItem('park-it-time', time);
      }

      var bestTime = localStorage.getItem('park-it-time');
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
    this.vy = this.vel * Math.sin(this.angle);
  }

  _createClass(MovingObj, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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
      }

      var minutes = Math.floor(this.difference % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(this.difference % (1000 * 60) / 1000);
      var milliseconds = Math.floor(this.difference % (1000 * 60) / 10) % 100;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      milliseconds = milliseconds < 100 ? milliseconds < 10 ? "0" + milliseconds : "" + milliseconds : milliseconds;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QnRuIiwicXVlcnlTZWxlY3RvciIsInJlc3RhcnRCdG4iLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJ0aW1lckVsZSIsInRpbWVyIiwiVGltZXIiLCJjYXIiLCJQbGF5ZXJDYXIiLCJnYW1lIiwiR2FtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYW5pbWxvb3AiLCJnYW1lT3ZlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uSWQiLCJyZXN0YXJ0IiwiY2hlY2tQYXJrZWQiLCJwYXJrZWQiLCJtb3ZlIiwiZHJhd0NhciIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ2aXNpYmlsaXR5Iiwic3RhcnQiLCJDQVJfQ09OU1RBTlRTIiwibWF4U3BlZWQiLCJtYXhSZXZlcnNlU3BlZWQiLCJhY2NlbGVyYXRpb24iLCJkZWNjZWxlcmF0aW9uIiwiYW5ndWxhckFjY2VsZXJhdGlvbiIsIngiLCJ5IiwidngiLCJ2eSIsInNwZWVkIiwicmV2ZXJzZVNwZWVkIiwiYW5nbGUiLCJvbWVnYSIsIm1hc3MiLCJhY2NlbGVyYXRlIiwicmV2ZXJzZSIsInR1cm5MZWZ0IiwidHVyblJpZ2h0IiwiZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwiYnJlYWsiLCJwcmV2ZW50RGVmYXVsdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJkaXJlY3Rpb24iLCJzaW4iLCJjb3MiLCJiYWxsIiwidWNYIiwidWNZIiwiY2xvc2VzdFgiLCJjbG9zZXN0WSIsImRpc3RhbmNlIiwic3FydCIsInJhZGl1cyIsIlBJIiwicnVubmluZyIsImxldmVsIiwiYmFsbHMiLCJsaXZlcyIsImhlYXJ0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwicFgiLCJwWSIsImltZyIsIkltYWdlIiwic3JjIiwiaSIsImFkZEJhbGwiLCJza2lydCIsImlubmVyQm94IiwiZmxvb3IiLCJyYW5kb20iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInVwZGF0ZUhlYXJ0cyIsInJlc2V0IiwidmVsIiwiY29sb3IiLCJhdHRyIiwiTW92aW5nT2JqIiwicHVzaCIsImxlbmd0aCIsImoiLCJpc0NvbGxpZGluZyIsIm9uQ29sbGlzaW9uIiwiYWRkQmFsbHMiLCJEYXRlIiwiZ2V0VGltZSIsInNldFRpbWVvdXQiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiY29uZGl0aW9ucyIsImluY2x1ZGVzIiwidGltZXJEaXNwbGF5IiwiaW5uZXJIVE1MIiwic2V0SXRlbSIsImJlc3RUaW1lIiwic3RhcnRUaW1lciIsImRyYXdQYXJraW5nU3BvdCIsInJlc2V0VGltZXIiLCJhbmltYXRlUGFya2luZ1Nwb3QiLCJmb3JFYWNoIiwiY2hlY2tDb2xsaXNpb25XaXRoQmFsbCIsImNhckNyYXNoZWQiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJvYmoxIiwib2JqMiIsInZDb2xsaXNpb24iLCJ2Q29sbGlzaW9uTm9ybSIsInZSZWxhdGl2ZVZlbG9jaXR5IiwiaW1wdWxzZSIsIm9ubG9hZCIsImRyYXciLCJzYXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiY2xpcCIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJkeCIsImR5IiwiZCIsInN0YXJ0VGltZSIsInRJbnRlcnZhbCIsInVwZGF0ZWRUaW1lIiwic2F2ZWRUaW1lIiwiZGlmZmVyZW5jZSIsInBhdXNlZCIsImdldFNob3dUaW1lIiwiYmluZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFU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SVUsT0FBTyxHQUFHaEcsSUFBSSxDQUFDK0IsS0FBTCxDQUFZLEtBQUsyRCxVQUFMLElBQW1CLE9BQU8sRUFBUCxHQUFZLEVBQS9CLENBQUQsSUFBd0MsT0FBTyxFQUEvQyxDQUFYLENBQWQ7QUFDQSxVQUFJTyxPQUFPLEdBQUdqRyxJQUFJLENBQUMrQixLQUFMLENBQVksS0FBSzJELFVBQUwsSUFBbUIsT0FBTyxFQUExQixDQUFELEdBQWtDLElBQTdDLENBQWQ7QUFDQSxVQUFJUSxZQUFZLEdBQUdsRyxJQUFJLENBQUMrQixLQUFMLENBQVksS0FBSzJELFVBQUwsSUFBbUIsT0FBTyxFQUExQixDQUFELEdBQWtDLEVBQTdDLElBQW1ELEdBQXRFO0FBRUFNLGFBQU8sR0FBSUEsT0FBTyxHQUFHLEVBQVgsR0FBaUIsTUFBTUEsT0FBdkIsR0FBaUNBLE9BQTNDO0FBQ0FDLGFBQU8sR0FBSUEsT0FBTyxHQUFHLEVBQVgsR0FBaUIsTUFBTUEsT0FBdkIsR0FBaUNBLE9BQTNDO0FBQ0FDLGtCQUFZLEdBQUlBLFlBQVksR0FBRyxHQUFoQixHQUF3QkEsWUFBWSxHQUFHLEVBQWhCLEdBQXNCLE1BQU1BLFlBQTVCLEdBQTJDLEtBQUtBLFlBQXZFLEdBQXNGQSxZQUFyRztBQUVBLFdBQUsxQyxZQUFMLENBQWtCQyxTQUFsQixhQUFpQ3VDLE9BQWpDLGNBQTRDQyxPQUE1QyxjQUF1REMsWUFBdkQ7QUFDSDtBQTVETDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyQ2FyIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJcIjtcbi8vIGltcG9ydCB7IE1vdmluZ09iaiB9IGZyb20gXCIuL3NjcmlwdHMvbW92aW5nX29ialwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9zY3JpcHRzL3RpbWVyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnN0YXJ0XCIpO1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5yZXN0YXJ0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZ2FtZVwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBteUNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxcIik7XG4gICAgY29uc3QgdGltZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXIgc3BhbicpXG5cbiAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcih0aW1lckVsZSk7XG4gICAgY29uc3QgY2FyID0gbmV3IFBsYXllckNhcihteUNhcik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgY2FyLCB0aW1lcik7XG5cbiAgICBteUNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7d2luZG93LmlubmVyV2lkdGggLyAyfXB4LCAke3dpbmRvdy5pbm5lckhlaWdodCAvIDJ9cHgpIHJvdGF0ZSgkezB9ZGVnKWA7XG4gICAgbXlDYXIuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG5cbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFyay1pdC10aW1lJykpIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGFyay1pdC10aW1lJyk7XG5cbiAgICBmdW5jdGlvbiBhbmltbG9vcCgpIHtcbiAgICAgICAgaWYgKGdhbWUuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh3aW5kb3cuYW5pbWF0aW9uSWQpO1xuICAgICAgICAgIGdhbWUucmVzdGFydCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnYW1lLmNoZWNrUGFya2VkKCkpIHtcbiAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUod2luZG93LmFuaW1hdGlvbklkKTtcbiAgICAgICAgICBnYW1lLnBhcmtlZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuICAgICAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgICAgICB3aW5kb3cuYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVzdGFydEJ0biA9IHJlc3RhcnRCdG47XG5cbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9KTtcblxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgYW5pbWxvb3AoKTtcbiAgICB9KTtcbn0pXG5cbi8vIFJlY3RhbmdsZSBNYXRoXG5cbi8qXG5UT1AgUklHSFQgVkVSVEVYOlxuVG9wX1JpZ2h0LnggPSB4ICsgKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcblRvcF9SaWdodC55ID0geSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5UT1AgTEVGVCBWRVJURVg6XG5Ub3BfTGVmdC54ID0geCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfTGVmdC55ID0geSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gTEVGVCBWRVJURVg6XG5Cb3RfTGVmdC54ID0geCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfTGVmdC55ID0geSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gUklHSFQgVkVSVEVYOlxuQm90X1JpZ2h0LnggPSB4ICsgKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcbkJvdF9SaWdodC55ID0geSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG4qLyIsImV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuICBtYXhTcGVlZDogNCxcbiAgbWF4UmV2ZXJzZVNwZWVkOiAzLjUsXG4gIGFjY2VsZXJhdGlvbjogMC41LFxuICBkZWNjZWxlcmF0aW9uOiAwLjIsXG4gIGFuZ3VsYXJBY2NlbGVyYXRpb246IDAuMDVcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3IoY2FyKSB7XG5cbiAgICAgICAgLy8gY2FyIERPTSBlbGVtZW50XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgICB0aGlzLm1hc3MgPSAxO1xuXG4gICAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlBXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIktleURcIjpcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlXXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMS4yO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPCAwKSB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlBXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJLZXlEXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICB0aGlzLnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICB0aGlzLnkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgdGhpcy52eCA9IDA7XG4gICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSAwO1xuICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIHRoaXMubWFzcyA9IDE7XG5cbiAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcblxuICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9cHgsICR7d2luZG93LmlubmVySGVpZ2h0IC8gMn1weCkgcm90YXRlKCR7MH1kZWcpYDtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICB9XG5cbiAgICByZW5kZXJDcmFzaCgpIHtcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy52eCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLnZ5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgICB0aGlzLnkgLT0gdGhpcy52eTtcblxuICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLm9tZWdhO1xuICAgICAgdGhpcy5vbWVnYSAqPSB0aGlzLm9tZWdhO1xuXG4gICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdGhpcy54IC09IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgIHRoaXMueCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICB0aGlzLnkgLT0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgIHRoaXMueSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25XaXRoQmFsbChiYWxsKSB7XG4gICAgICAgIC8vIHVucm90YXRlZCBjaXJjbGVcbiAgICAgICAgbGV0IHVjWCA9IE1hdGguY29zKHRoaXMuYW5nbGUpICogKGJhbGwueCAtIHRoaXMueCkgLSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIChiYWxsLnkgLSB0aGlzLnkpICsgdGhpcy54O1xuICAgICAgICBsZXQgdWNZID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiAoYmFsbC54IC0gdGhpcy54KSArIE1hdGguY29zKHRoaXMuYW5nbGUpICogKGJhbGwueSAtIHRoaXMueSkgKyB0aGlzLnk7XG5cbiAgICAgICAgbGV0IGNsb3Nlc3RYO1xuICAgICAgICBsZXQgY2xvc2VzdFk7XG5cbiAgICAgICAgaWYgKHVjWCA8IHRoaXMueCkge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdGhpcy54O1xuICAgICAgICB9IGVsc2UgaWYgKHVjWCA+IHRoaXMueCArIDE2KSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB0aGlzLnggKyAxNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHVjWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1Y1kgPCB0aGlzLnkpIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHRoaXMueTtcbiAgICAgICAgfSBlbHNlIGlmICh1Y1kgPiB0aGlzLnkgKyAzMikge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdGhpcy55ICsgMTY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB1Y1k7XG4gICAgICAgIH1cblxuICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh1Y1ggLSBjbG9zZXN0WCkgKiAodWNYIC0gY2xvc2VzdFgpICsgKHVjWSAtIGNsb3Nlc3RZKSAqICh1Y1kgLSBjbG9zZXN0WSkpO1xuICAgICAgcmV0dXJuIGRpc3RhbmNlIDw9IGJhbGwucmFkaXVzO1xuICAgIH0gXG5cbiAgICBkcmF3Q2FyKCkge1xuICAgICAgdGhpcy5jYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMueH1weCwgJHt0aGlzLnl9cHgpIHJvdGF0ZSgke3RoaXMuYW5nbGUgKiAxODAgLyBNYXRoLlBJfWRlZylgO1xuICAgIH1cblxufSIsImltcG9ydCB7Q0FSX0NPTlNUQU5UUywgUGxheWVyQ2FyfSBmcm9tIFwiLi9jYXJcIjtcbmltcG9ydCB7IE1vdmluZ09iaiB9IGZyb20gXCIuL21vdmluZ19vYmpcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FyLCB0aW1lcikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLnRpbWVyID0gdGltZXI7XG4gICAgICAgIHRoaXMuYmFsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDU7XG4gICAgICAgIHRoaXMuaGVhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5saXZlcyBsaVwiKTtcbiAgICAgICAgdGhpcy50aW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wWCA9IDA7XG4gICAgICAgIHRoaXMucFkgPSAwO1xuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwic3JjL2Fzc2V0cy9pbWFnZXMvcGFya2luZy5wbmdcIjtcbiAgICB9XG5cbiAgICBhZGRCYWxscygpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmFsbCgzMCwgNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3UGFya2luZ1Nwb3QoKSB7XG4gICAgICAgIGNvbnN0IHNraXJ0ID0gNjA7XG4gICAgICAgIGNvbnN0IGlubmVyQm94ID0gMzAwO1xuXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHdpbmRvdy5pbm5lcldpZHRoIC0gc2tpcnQpKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAod2luZG93LmlubmVySGVpZ2h0IC0gc2tpcnQpKTtcblxuICAgICAgICB3aGlsZSAoKHggPiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBpbm5lckJveCAvIDIpICYmICh4IDwgd2luZG93LmlubmVyV2lkdGggLyAyICsgaW5uZXJCb3ggLyAyKSkge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh3aW5kb3cuaW5uZXJXaWR0aCAtIHNraXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoKHkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gaW5uZXJCb3ggLyAyKSAmJiAoeSA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyBpbm5lckJveCAvIDIpKSB7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHdpbmRvdy5pbm5lckhlaWdodCAtIHNraXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBYID0geDtcbiAgICAgICAgdGhpcy5wWSA9IHk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVBhcmtpbmdTcG90KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzAwNzFjYyc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucFgsIHRoaXMucFksIDYwLCA2MCk7XG4gICAgfVxuXG4gICAgY2FyQ3Jhc2hlZCgpIHtcbiAgICAgICAgLS10aGlzLmxpdmVzO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlYXJ0cygpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgYWRkQmFsbChyYWRpdXMsIHZlbCkge1xuICAgICAgICAvLyBsZXQgY29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgY29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcblxuICAgICAgICBsZXQgYXR0ciA9IHtyYWRpdXMsIHgsIHksIGNvbG9yLCB2ZWwsIGFuZ2xlfTtcblxuICAgICAgICBjb25zdCBiYWxsID0gbmV3IE1vdmluZ09iaih0aGlzLmN0eCwgYXR0cik7XG4gICAgICAgIHRoaXMuYmFsbHMucHVzaChiYWxsKTtcbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5iYWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxzW2ldLmlzQ29sbGlkaW5nKHRoaXMuYmFsbHNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUub25Db2xsaXNpb24odGhpcy5iYWxsc1tpXSwgdGhpcy5iYWxsc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYmFsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRCYWxscygpO1xuICAgICAgICB0aGlzLmNhci5yZXNldCgpO1xuICAgICAgICB0aGlzLnRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FyLmNhci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25Db2xsaXNpb24ob2JqMSwgb2JqMikge1xuICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHsgeDogb2JqMi54IC0gb2JqMS54LCB5OiBvYmoyLnkgLSBvYmoxLnkgfTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChvYmoyLnggLSBvYmoxLngpICogKG9iajIueCAtIG9iajEueCkgKyAob2JqMi55IC0gb2JqMS55KSAqIChvYmoyLnkgLSBvYmoxLnkpKTtcbiAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0geyB4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2UgfTtcblxuICAgICAgICBsZXQgdlJlbGF0aXZlVmVsb2NpdHkgPSB7IHg6IG9iajEudnggLSBvYmoyLnZ4LCB5OiBvYmoxLnZ5IC0gb2JqMi52eSB9O1xuICAgICAgICBsZXQgc3BlZWQgPSB2UmVsYXRpdmVWZWxvY2l0eS54ICogdkNvbGxpc2lvbk5vcm0ueCArIHZSZWxhdGl2ZVZlbG9jaXR5LnkgKiB2Q29sbGlzaW9uTm9ybS55O1xuXG4gICAgICAgIGxldCBpbXB1bHNlID0gMiAqIHNwZWVkIC8gKG9iajEubWFzcyArIG9iajIubWFzcyk7XG5cbiAgICAgICAgaWYgKHNwZWVkIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqMS52eCAtPSAoaW1wdWxzZSAqIG9iajIubWFzcyAqIHZDb2xsaXNpb25Ob3JtLngpO1xuICAgICAgICAgICAgb2JqMS52eSAtPSAoaW1wdWxzZSAqIG9iajIubWFzcyAqIHZDb2xsaXNpb25Ob3JtLnkpO1xuICAgICAgICAgICAgb2JqMi52eCArPSAoaW1wdWxzZSAqIG9iajEubWFzcyAqIHZDb2xsaXNpb25Ob3JtLngpO1xuICAgICAgICAgICAgb2JqMi52eSArPSAoaW1wdWxzZSAqIG9iajEubWFzcyAqIHZDb2xsaXNpb25Ob3JtLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tQYXJrZWQoKSB7XG4gICAgICAgIGNvbnN0IGNhciA9IHRoaXMuY2FyO1xuICAgICAgICBjb25zdCB3aWR0aCA9IDE2O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAzMjtcbiAgICAgICAgbGV0IHggPSBbXG4gICAgICAgICAgICBjYXIueCArICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpICsgKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpICsgKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpIC0gKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueCArICgod2lkdGggLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpIC0gKCgzMiAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSlcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgeSA9IFtcbiAgICAgICAgICAgIGNhci55ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoY2FyLmFuZ2xlKSksXG4gICAgICAgICAgICBjYXIueSAtICgod2lkdGggLyAyKSAqIE1hdGguc2luKGNhci5hbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIE1hdGguY29zKGNhci5hbmdsZSkpLFxuICAgICAgICAgICAgY2FyLnkgLSAoKHdpZHRoIC8gMikgKiBNYXRoLnNpbihjYXIuYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhjYXIuYW5nbGUpKSxcbiAgICAgICAgICAgIGNhci55ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oY2FyLmFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoY2FyLmFuZ2xlKSlcbiAgICAgICAgXVxuXG4gICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4oLi4ueCk7XG4gICAgICAgIGxldCBtYXhYID0gTWF0aC5tYXgoLi4ueCk7XG4gICAgICAgIGxldCBtaW5ZID0gTWF0aC5taW4oLi4ueSk7XG4gICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgoLi4ueSk7XG5cbiAgICAgICAgbGV0IGNvbmRpdGlvbnMgPSBbXG4gICAgICAgICAgICAobWluWCA+IHRoaXMucFggJiYgbWluWCA8IHRoaXMucFggKyA2MCksXG4gICAgICAgICAgICAobWF4WCA+IHRoaXMucFggJiYgbWF4WCA8IHRoaXMucFggKyA2MCksXG4gICAgICAgICAgICAobWluWSA+IHRoaXMucFkgJiYgbWluWSA8IHRoaXMucFkgKyA2MCksXG4gICAgICAgICAgICAobWF4WSA+IHRoaXMucFkgJiYgbWF4WSA8IHRoaXMucFkgKyA2MClcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgcGFya2VkID0gIWNvbmRpdGlvbnMuaW5jbHVkZXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcGFya2VkO1xuICAgIH1cblxuICAgIHBhcmtlZCgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnRpbWVyLnRpbWVyRGlzcGxheS5pbm5lckhUTUw7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFyay1pdC10aW1lJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJrLWl0LXRpbWUnLCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG5ldyBEYXRlKGAxOTcwLTAxLTAxICR7dGltZX1gKSA8IG5ldyBEYXRlKGAxOTcwLTAxLTAxICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhcmstaXQtdGltZScpfWApKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGFyay1pdC10aW1lJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyay1pdC10aW1lJywgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFyay1pdC10aW1lJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luLWxvc2Ugc3BhblwiKS5pbm5lckhUTUwgPSBgWW91ciBiZXN0IHRpbWU6ICR7YmVzdFRpbWV9YDtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQmFsbHMoKTtcbiAgICAgICAgdGhpcy50aW1lci5zdGFydFRpbWVyKCk7XG4gICAgICAgIHRoaXMudGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXIuY2FyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICB0aGlzLmRyYXdQYXJraW5nU3BvdCgpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGVhdFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgICAgIHRoaXMuY2FyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXRUaW1lcigpO1xuICAgICAgICB0aGlzLnRpbWVyLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBcIjAwOjAwOjAwXCI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmxpdmVzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lndpbi1sb3NlIHNwYW5cIikuaW5uZXJIVE1MID0gJ1lvdSBnb3QgYSBwYXJraW5nIHRpY2tldCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpdmVzID0gNTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWFydHMoKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICAgIFxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGl2ZXM7XG4gICAgfVxuXG4gICAgdXBkYXRlSGVhcnRzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0c1tpXS5zdHlsZS5vcGFjaXR5ID0gaSA8IHRoaXMubGl2ZXMgPyAxIDogMC4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoZWF0XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVBhcmtpbmdTcG90KCk7XG4gICAgICAgIHRoaXMuYmFsbHMuZm9yRWFjaChiYWxsID0+IHtcbiAgICAgICAgICAgIGJhbGwuYW5pbWF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FyLmNoZWNrQ29sbGlzaW9uV2l0aEJhbGwoYmFsbCkgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAtIHRoaXMudGltZSA+IDE1MDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhckNyYXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb3ZpbmdPYmoge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgYXR0cikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBhdHRyLnJhZGl1cztcbiAgICAgICAgdGhpcy54ID0gYXR0ci54O1xuICAgICAgICB0aGlzLnkgPSBhdHRyLnk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBhdHRyLmNvbG9yO1xuICAgICAgICB0aGlzLnZlbCA9IGF0dHIudmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYXR0ci5hbmdsZTtcbiAgICAgICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLm9ubG9hZCA9ICgpID0+IHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcInNyYy9hc3NldHMvaW1hZ2VzL25vX3BhcmtpbmcucG5nXCI7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZlbCAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52ZWwgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuaW1nLFxuICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLnkgLSB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzICogMixcbiAgICAgICAgICAgIHRoaXMucmFkaXVzICogMlxuICAgICAgICApO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gW3RoaXMudngsIHRoaXMudnldO1xuICAgICAgICB0aGlzLnggKz0gZHg7XG4gICAgICAgIHRoaXMueSArPSBkeTtcblxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnkgLT0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZyhiYWxsKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMueCAtIGJhbGwueDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gYmFsbC55O1xuXG4gICAgICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICByZXR1cm4gZCA8ICh0aGlzLnJhZGl1cyArIGJhbGwucmFkaXVzKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRpbWVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lcikge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgICAgIHRoaXMudEludGVydmFsID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuc2F2ZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gMDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXJEaXNwbGF5ID0gdGltZXI7XG4gICAgICAgIHRoaXMuZ2V0U2hvd1RpbWUgPSB0aGlzLmdldFNob3dUaW1lLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLnRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLmdldFNob3dUaW1lLCAxKTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2VUaW1lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpZmZlcmVuY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50SW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5zYXZlZFRpbWUgPSB0aGlzLmRpZmZlcmVuY2U7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuc2F2ZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0U2hvd1RpbWUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZlcmVuY2UgPSAodGhpcy51cGRhdGVkVGltZSAtIHRoaXMuc3RhcnRUaW1lKSArIHRoaXMuc2F2ZWRUaW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gdGhpcy51cGRhdGVkVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aGlzLmRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aGlzLmRpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgbGV0IG1pbGxpc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwKSAlIDEwMDtcbiAgICAgICAgXG4gICAgICAgIG1pbnV0ZXMgPSAobWludXRlcyA8IDEwKSA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIHNlY29uZHMgPSAoc2Vjb25kcyA8IDEwKSA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHM7XG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IChtaWxsaXNlY29uZHMgPCAxMDApID8gKG1pbGxpc2Vjb25kcyA8IDEwKSA/IFwiMFwiICsgbWlsbGlzZWNvbmRzIDogXCJcIiArIG1pbGxpc2Vjb25kcyA6IG1pbGxpc2Vjb25kcztcblxuICAgICAgICB0aGlzLnRpbWVyRGlzcGxheS5pbm5lckhUTUwgPSBgJHttaW51dGVzfToke3NlY29uZHN9OiR7bWlsbGlzZWNvbmRzfWA7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=