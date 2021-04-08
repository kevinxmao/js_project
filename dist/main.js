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



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("main-game");
  var ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  var myCar = document.getElementById("local");
  var car = new _scripts_car__WEBPACK_IMPORTED_MODULE_2__["PlayerCar"](myCar); // const car = document.getElementById('striped-car');
  // const playerCar = new PlayerCar(40, 80, 100, 100, car);
  // const game = new Game(playerCar);

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
    var x = car.x;
    var y = car.y;
    var angle = car.angle;
    var width = 16;
    var height = 32; // let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // ctx.beginPath();
    // ctx.arc(
    //   x - ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
    //   y - ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
    //   1,
    //   0,
    //   2 * Math.PI
    // );
    // ctx.arc(
    //   x + ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
    //   y + ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
    //   1,
    //   0,
    //   2 * Math.PI
    // );
    // ctx.fillStyle = 'blue';
    // ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.fillRect(x - width / 2 * Math.cos(angle) - height / 2 * Math.sin(angle), y - width / 2 * Math.sin(angle) + height / 2 * Math.cos(angle), 1, 1);
    ctx.fillRect(x + width / 2 * Math.cos(angle) - height / 2 * Math.sin(angle), y + width / 2 * Math.sin(angle) + height / 2 * Math.cos(angle), 1, 1);
    car.move();
    car.drawCar();
    window.animationId = window.requestAnimationFrame(animloop);
  }

  animloop();
}); // Rectangle Math

/*
TOP RIGHT VERTEX:
Top_Right.x = center.x + ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Top_Right.y = center.y + ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))



TOP LEFT VERTEX:
Top_Left.x = center.x - ((width / 2) * cos(angle)) - ((height / 2) * sin(angle))
Top_Left.y = center.y - ((width / 2) * sin(angle)) + ((height / 2) * cos(angle))



BOTTOM LEFT VERTEX:
Bot_Left.x = center.x - ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Bot_Left.y = center.y - ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))



BOTTOM RIGHT VERTEX:
Bot_Right.x = center.x + ((width / 2) * cos(angle)) + ((height / 2) * sin(angle))
Bot_Right.y = center.y + ((width / 2) * sin(angle)) - ((height / 2) * cos(angle))
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
    this.dx = 0;
    this.dy = 0;
    this.speed = 0;
    this.reverseSpeed = 0;
    this.angle = 0;
    this.omega = 0; // move boolean

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

      this.dx = Math.sin(this.angle) * (this.speed - this.reverseSpeed);
      this.dy = Math.cos(this.angle) * (this.speed - this.reverseSpeed); // console.log(this.x)

      this.x += this.dx;
      this.y -= this.dy;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Game = /*#__PURE__*/function () {
  function Game(car) {
    _classCallCheck(this, Game);

    this.running = true;
    this.level = 1;
    this.car = car;
  }

  _createClass(Game, [{
    key: "arrangeCars",
    value: function arrangeCars(ctx) {
      var sidwalk = document.getElementById('sidewalk-middle');

      for (var i = 0; i < ctx.canvas.height; i += 40) {
        ctx.drawImage(sidwalk, 0, i, 40, 40);
      }

      for (var _i = 0; _i < ctx.canvas.height; _i += 40) {
        ctx.drawImage(sidwalk, 40, _i, 40, 40);
      }

      for (var _i2 = 0; _i2 < ctx.canvas.height; _i2 += 40) {
        ctx.drawImage(sidwalk, ctx.canvas.width - 40, _i2, 40, 40);
      }

      for (var _i3 = 0; _i3 < ctx.canvas.height; _i3 += 40) {
        ctx.drawImage(sidwalk, ctx.canvas.width - 80, _i3, 40, 40);
      }

      var blueCar = document.getElementById('blue-car');
      ctx.drawImage(blueCar, 85, 80, 40, 80);
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      if (this.car.location.x < 114) {
        console.log("crash");
      }
    }
  }, {
    key: "parked",
    value: function parked() {}
  }, {
    key: "start",
    value: function start() {} // levelUp() {
    // }

  }, {
    key: "restart",
    value: function restart() {}
  }, {
    key: "animate",
    value: function animate(ctx) {
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
  }]);

  return Game;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm15Q2FyIiwiY2FyIiwiUGxheWVyQ2FyIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwieCIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJNYXRoIiwibWF4IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWxvb3AiLCJ5IiwiYW5nbGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNvcyIsInNpbiIsIm1vdmUiLCJkcmF3Q2FyIiwiYW5pbWF0aW9uSWQiLCJDQVJfQ09OU1RBTlRTIiwibWF4U3BlZWQiLCJtYXhSZXZlcnNlU3BlZWQiLCJhY2NlbGVyYXRpb24iLCJkZWNjZWxlcmF0aW9uIiwiYW5ndWxhckFjY2VsZXJhdGlvbiIsImR4IiwiZHkiLCJzcGVlZCIsInJldmVyc2VTcGVlZCIsIm9tZWdhIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJtaW4iLCJkaXJlY3Rpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsIlBJIiwiR2FtZSIsInJ1bm5pbmciLCJsZXZlbCIsInNpZHdhbGsiLCJpIiwiZHJhd0ltYWdlIiwiYmx1ZUNhciIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2hlY2tDb2xsaXNpb24iLCJhcnJhbmdlQ2FycyIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSCxR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QWlCOUUsR0FBakI7QUFDQSxXQUFLUSxHQUFMLENBQVN1RSxPQUFULENBQWlCL0UsR0FBakI7QUFDSDtBQWhFTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyQ2FyIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1nYW1lXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGNvbnN0IG15Q2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhbFwiKTtcblxuICAgIGNvbnN0IGNhciA9IG5ldyBQbGF5ZXJDYXIobXlDYXIpO1xuXG4gICAgLy8gY29uc3QgY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZWQtY2FyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyQ2FyID0gbmV3IFBsYXllckNhcig0MCwgODAsIDEwMCwgMTAwLCBjYXIpO1xuICAgIC8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShwbGF5ZXJDYXIpO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgICB2YXIgdmVuZG9ycyA9IFtcIndlYmtpdFwiLCBcIm1velwiXTtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICArK3hcbiAgICAgICkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuXG4gICAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWxvb3AoKSB7XG4gICAgICBsZXQgeCA9IGNhci54O1xuICAgICAgbGV0IHkgPSBjYXIueTtcbiAgICAgIGxldCBhbmdsZSA9IGNhci5hbmdsZTtcbiAgICAgIGxldCB3aWR0aCA9IDE2O1xuICAgICAgbGV0IGhlaWdodCA9IDMyO1xuXG4gICAgICAvLyBsZXQgcmFuZG9tQ29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuXG4gICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAvLyBjdHguYXJjKFxuICAgICAgLy8gICB4IC0gKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICAgICAgLy8gICB5IC0gKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgLy8gICAxLFxuICAgICAgLy8gICAwLFxuICAgICAgLy8gICAyICogTWF0aC5QSVxuICAgICAgLy8gKTtcbiAgICAgIC8vIGN0eC5hcmMoXG4gICAgICAvLyAgIHggKyAoKHdpZHRoIC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIE1hdGguc2luKGFuZ2xlKSksXG4gICAgICAvLyAgIHkgKyAoKHdpZHRoIC8gMikgKiBNYXRoLnNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIE1hdGguY29zKGFuZ2xlKSksXG4gICAgICAvLyAgIDEsXG4gICAgICAvLyAgIDAsXG4gICAgICAvLyAgIDIgKiBNYXRoLlBJXG4gICAgICAvLyApO1xuICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICB4IC0gKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICAgICAgICB5IC0gKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgY3R4LmZpbGxSZWN0KFxuICB4ICsgKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICB5ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgICAxLFxuICAgICAgICAxXG4gICAgICApO1xuXG4gICAgICAgIGNhci5tb3ZlKCk7XG4gICAgICAgIGNhci5kcmF3Q2FyKCk7XG5cbiAgICAgICAgd2luZG93LmFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltbG9vcCk7XG4gICAgfVxuICAgIGFuaW1sb29wKCk7XG5cbn0pXG5cbi8vIFJlY3RhbmdsZSBNYXRoXG5cbi8qXG5UT1AgUklHSFQgVkVSVEVYOlxuVG9wX1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cblRPUCBMRUZUIFZFUlRFWDpcblRvcF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIExFRlQgVkVSVEVYOlxuQm90X0xlZnQueCA9IGNlbnRlci54IC0gKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcbkJvdF9MZWZ0LnkgPSBjZW50ZXIueSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gUklHSFQgVkVSVEVYOlxuQm90X1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcbiovIiwiZXhwb3J0IGNvbnN0IENBUl9DT05TVEFOVFMgPSB7XG4gIG1heFNwZWVkOiA0LFxuICBtYXhSZXZlcnNlU3BlZWQ6IDMuNSxcbiAgYWNjZWxlcmF0aW9uOiAwLjUsXG4gIGRlY2NlbGVyYXRpb246IDAuMixcbiAgYW5ndWxhckFjY2VsZXJhdGlvbjogMC4wNVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihjYXIpIHtcblxuICAgICAgICAvLyBjYXIgRE9NIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5vbWVnYSA9IDA7XG5cbiAgICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGRvd25cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2VsZXJhdGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5keCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLmR5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KVxuXG4gICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgIHRoaXMueSAtPSB0aGlzLmR5O1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IHRoaXMub21lZ2E7XG4gICAgICB0aGlzLm9tZWdhICo9IHRoaXMub21lZ2E7XG5cbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3Q2FyKCkge1xuICAgICAgdGhpcy5jYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMueH1weCwgJHt0aGlzLnl9cHgpIHJvdGF0ZSgke3RoaXMuYW5nbGUgKiAxODAgLyBNYXRoLlBJfWRlZylgO1xuICAgIH1cblxufSIsImltcG9ydCB7Q0FSX0NPTlNUQU5UUywgUGxheWVyQ2FyfSBmcm9tIFwiLi9jYXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhcikge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgfVxuXG4gICAgYXJyYW5nZUNhcnMoY3R4KSB7XG4gICAgICAgIGNvbnN0IHNpZHdhbGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZXdhbGstbWlkZGxlJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4LmNhbnZhcy5oZWlnaHQ7IGkgKz0gNDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2lkd2FsaywgMCwgaSwgNDAsIDQwKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4LmNhbnZhcy5oZWlnaHQ7IGkgKz0gNDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2lkd2FsaywgNDAsIGksIDQwLCA0MClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4LmNhbnZhcy5oZWlnaHQ7IGkgKz0gNDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2lkd2FsaywgY3R4LmNhbnZhcy53aWR0aCAtIDQwLCBpLCA0MCwgNDApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN0eC5jYW52YXMuaGVpZ2h0OyBpICs9IDQwKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNpZHdhbGssIGN0eC5jYW52YXMud2lkdGggLSA4MCwgaSwgNDAsIDQwKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmx1ZUNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLWNhcicpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJsdWVDYXIsIDg1LCA4MCwgNDAsIDgwKVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jYXIubG9jYXRpb24ueCA8IDExNCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmFzaFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFya2VkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyBsZXZlbFVwKCkge1xuXG4gICAgLy8gfVxuXG4gICAgcmVzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMjAwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbygyMDAsIDcwMCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgMzUwKTtcbiAgICAgICAgY3R4LmxpbmVUbyg0MDAsIDM1MCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmZlwiO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5hcnJhbmdlQ2FycyhjdHgpO1xuICAgICAgICB0aGlzLmNhci5hbmltYXRlKGN0eCk7XG4gICAgfVxuXG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9