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
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["Game"](canvas);
  var ctx = canvas.getContext("2d");
  var car = document.getElementById('striped-car');
  var playerCar = new _scripts_car__WEBPACK_IMPORTED_MODULE_2__["PlayerCar"](80, 80, 100, 100, car);

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
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    playerCar.animate(ctx);
    window.animationId = window.requestAnimationFrame(animloop);
  }

  animloop();
});

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
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/scripts/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CAR_CONSTANTS = {};
var PlayerCar = /*#__PURE__*/function () {
  function PlayerCar(width, height, x, y, car) {
    var _this = this;

    _classCallCheck(this, PlayerCar);

    this.car = car;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.pivot = {
      x: this.x + 50,
      y: this.y + 20
    };
    this.frontPivot = {
      x: 0,
      y: 0
    };
    this.rearPivot = {
      x: 0,
      y: 160
    };
    this.rotation = 0;
    this.turnAngle = 0;
    this.maxTurnAngle = 45;
    this.turnStep = 9;
    this.directionPivot = {
      x: this.frontPivot.x,
      y: this.frontPivot.y - 50
    };
    this.rearPivotAbs = {
      x: 160 * Math.cos((this.rotation + 90) * Math.PI / 180) + this.pivot.x,
      y: 160 * Math.sin((this.rotation + 90) * Math.PI / 180) + this.pivot.y
    };
    this.tempDirPivot = {
      x: 0,
      y: 0
    };
    this.speed = 0;
    this.acceleration = 0.2;
    this.direction = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.directionPivot, this.frontPivot).normalize(); // move boolean

    this.accelerate = false;
    this.decelerate = false;
    this.break = false;
    this.turnLeft = false;
    this.turnRight = false;
    document.addEventListener("keydown", function (e) {
      if (e.defaultPrevented) {
        return;
      }

      console.log(e);

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
          _this.decelerate = true;
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
          _this.decelerate = false;
          break;

        case "Space":
          _this.break = false;
          break;
      }

      e.preventDefault();
    });
  }

  _createClass(PlayerCar, [{
    key: "updateDirection",
    value: function updateDirection() {
      if (this.turnLeft && this.turnAngle > -this.maxTurnAngle) {
        this.turnAngle -= this.turnStep;
      }

      if (this.turnRight && this.turnAngle < this.maxTurnAngle) {
        this.turnAngle += this.turnStep;
      }

      this.directionPivot.x = 50 * Math.cos((this.turnAngle + this.rotation - 90) * Math.PI / 180) + this.frontPivot.x;
      this.directionPivot.y = 50 * Math.sin((this.turnAngle + this.rotation - 90) * Math.PI / 180) + this.frontPivot.y;
      this.tempDirPivot.x = 50 * Math.cos((this.turnAngle - 90) * Math.PI / 180) + this.frontPivot.x;
      this.tempDirPivot.y = 50 * Math.sin((this.turnAngle - 90) * Math.PI / 180) + this.frontPivot.x;
      this.direction = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.directionPivot, this.frontPivot).normalize();
      this.direction.x *= this.speed;
      this.direction.y *= this.speed;
    }
  }, {
    key: "drawCar",
    value: function drawCar(ctx) {
      this.updateDirection();
      ctx.save();
      ctx.translate(this.pivot.x, this.pivot.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.drawImage(this.car, 100, 100, 80, 80);
      ctx.beginPath();
      ctx.moveTo(this.frontPivot.x - 50, this.frontPivot.y);
      ctx.lineTo(this.frontPivot.x + 50, this.frontPivot.y);
      ctx.moveTo(this.rearPivot.x - 50, this.rearPivot.y);
      ctx.lineTo(this.rearPivot.x + 50, this.rearPivot.y);
      ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
      ctx.lineTo(this.rearPivot.x, this.rearPivot.y);
      ctx.moveTo(this.frontPivot.x, this.frontPivot.y);
      ctx.lineTo(this.tempDirPivot.x, this.tempDirPivot.y);
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      if (this.accelerate) {
        this.speed += this.acceleration;
        console.log(this.speed);
      } else if (this.speed > 0) {
        this.speed -= this.acceleration;
      }

      if (this.decelerate) {
        this.speed -= this.acceleration;
      } else if (this.speed < 0) {
        this.speed += this.acceleration;
      }

      if (this.break) {
        if (this.speed != 0) {
          this.speed -= 1.2;
          if (this.speed < 0) this.speed = 0;
        }
      }

      console.log(this.speed);
      this.pivot.x += this.direction.x;
      this.pivot.y += this.direction.y;
      var vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.pivot, this.rearPivotAbs);
      var angle = Math.atan2(-vector.y, vector.x) * 180 / Math.PI;
      angle += 180;
      angle = 360 - angle - 90;
      this.rotation = angle;
      this.rearPivotAbs = {
        x: 160 * Math.cos((this.rotation + 90) * Math.PI / 180) + this.pivot.x,
        y: 160 * Math.sin((this.rotation + 90) * Math.PI / 180) + this.pivot.y
      };
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.move();
      this.drawCar(ctx);
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
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, [{
    key: "arrangeCars",
    value: function arrangeCars() {}
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/scripts/vector.js":
/*!*******************************!*\
  !*** ./src/scripts/vector.js ***!
  \*******************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector(p1, p2) {
    _classCallCheck(this, Vector);

    this.x = p1.x - p2.x;
    this.y = p1.y - p2.y;
  }

  _createClass(Vector, [{
    key: "normalize",
    value: function normalize() {
      return {
        x: this.x / this.length(),
        y: this.y / this.length()
      };
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }]);

  return Vector;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiR2FtZSIsImN0eCIsImdldENvbnRleHQiLCJjYXIiLCJwbGF5ZXJDYXIiLCJQbGF5ZXJDYXIiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJ4IiwibGVuZ3RoIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhbmltbG9vcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIiwiYW5pbWF0aW9uSWQiLCJDQVJfQ09OU1RBTlRTIiwieSIsInBpdm90IiwiZnJvbnRQaXZvdCIsInJlYXJQaXZvdCIsInJvdGF0aW9uIiwidHVybkFuZ2xlIiwibWF4VHVybkFuZ2xlIiwidHVyblN0ZXAiLCJkaXJlY3Rpb25QaXZvdCIsInJlYXJQaXZvdEFicyIsImNvcyIsIlBJIiwic2luIiwidGVtcERpclBpdm90Iiwic3BlZWQiLCJhY2NlbGVyYXRpb24iLCJkaXJlY3Rpb24iLCJWZWN0b3IiLCJub3JtYWxpemUiLCJhY2NlbGVyYXRlIiwiZGVjZWxlcmF0ZSIsImJyZWFrIiwidHVybkxlZnQiLCJ0dXJuUmlnaHQiLCJlIiwiZGVmYXVsdFByZXZlbnRlZCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVEaXJlY3Rpb24iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJyZXN0b3JlIiwidmVjdG9yIiwiYW5nbGUiLCJhdGFuMiIsIm1vdmUiLCJkcmF3Q2FyIiwicDEiLCJwMiIsInNxcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsTUFB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QUFDSDs7QUFKTDtBQUFBO0FBQUEsV0FNSSxxQkFBWTtBQUNSLGFBQU87QUFBRXhCLFNBQUMsRUFBRSxLQUFLQSxDQUFMLEdBQVMsS0FBS0MsTUFBTCxFQUFkO0FBQTZCdUIsU0FBQyxFQUFFLEtBQUtBLENBQUwsR0FBUyxLQUFLdkIsTUFBTDtBQUF6QyxPQUFQO0FBQ0g7QUFSTDtBQUFBO0FBQUEsV0FVSSxrQkFBUztBQUNMLGFBQU9VLElBQUksQ0FBQzZELElBQUwsQ0FBVSxLQUFLeEUsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS3dCLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBQ0g7QUFaTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyQ2FyIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1nYW1lXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGVkLWNhcicpO1xuICAgIGNvbnN0IHBsYXllckNhciA9IG5ldyBQbGF5ZXJDYXIoODAsIDgwLCAxMDAsIDEwMCwgY2FyKTtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgICAgdmFyIHZlbmRvcnMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIl07XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgKyt4XG4gICAgICApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1sb29wKCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGxheWVyQ2FyLmFuaW1hdGUoY3R4KTtcbiAgICAgIHdpbmRvdy5hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWxvb3ApO1xuICAgIH1cbiAgICBhbmltbG9vcCgpO1xufSkiLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IENBUl9DT05TVEFOVFMgPSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgeCwgeSwgY2FyKSB7XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnBpdm90ID0ge3g6IHRoaXMueCArIDUwLCB5OiB0aGlzLnkgKyAyMH07XG4gICAgICAgIHRoaXMuZnJvbnRQaXZvdCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICB0aGlzLnJlYXJQaXZvdCA9IHsgeDogMCwgeTogMTYwIH07XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgICB0aGlzLnR1cm5BbmdsZSA9IDA7XG4gICAgICAgIHRoaXMubWF4VHVybkFuZ2xlID0gNDU7XG4gICAgICAgIHRoaXMudHVyblN0ZXAgPSA5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvblBpdm90ID0ge1xuICAgICAgICAgIHg6IHRoaXMuZnJvbnRQaXZvdC54LFxuICAgICAgICAgIHk6IHRoaXMuZnJvbnRQaXZvdC55IC0gNTAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVhclBpdm90QWJzID0ge1xuICAgICAgICAgIHg6XG4gICAgICAgICAgICAxNjAgKiBNYXRoLmNvcygoKHRoaXMucm90YXRpb24gKyA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICAgICAgdGhpcy5waXZvdC54LFxuICAgICAgICAgIHk6XG4gICAgICAgICAgICAxNjAgKiBNYXRoLnNpbigoKHRoaXMucm90YXRpb24gKyA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICAgICAgdGhpcy5waXZvdC55LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRlbXBEaXJQaXZvdCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwLjI7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvblBpdm90LCB0aGlzLmZyb250UGl2b3QpLm5vcm1hbGl6ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleSBkb3duXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAxLjI7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEaXJlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cm5MZWZ0ICYmIHRoaXMudHVybkFuZ2xlID4gLXRoaXMubWF4VHVybkFuZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5BbmdsZSAtPSB0aGlzLnR1cm5TdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHVyblJpZ2h0ICYmIHRoaXMudHVybkFuZ2xlIDwgdGhpcy5tYXhUdXJuQW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMudHVybkFuZ2xlICs9IHRoaXMudHVyblN0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpcmVjdGlvblBpdm90LnggPVxuICAgICAgICAgIDUwICpcbiAgICAgICAgICAgIE1hdGguY29zKCgodGhpcy50dXJuQW5nbGUgKyB0aGlzLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgICB0aGlzLmZyb250UGl2b3QueDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25QaXZvdC55ID1cbiAgICAgICAgICA1MCAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKHRoaXMudHVybkFuZ2xlICsgdGhpcy5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSArXG4gICAgICAgICAgdGhpcy5mcm9udFBpdm90Lnk7XG5cbiAgICAgICAgdGhpcy50ZW1wRGlyUGl2b3QueCA9XG4gICAgICAgICAgNTAgKiBNYXRoLmNvcygoKHRoaXMudHVybkFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgICB0aGlzLmZyb250UGl2b3QueDtcbiAgICAgICAgdGhpcy50ZW1wRGlyUGl2b3QueSA9XG4gICAgICAgICAgNTAgKiBNYXRoLnNpbigoKHRoaXMudHVybkFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgICB0aGlzLmZyb250UGl2b3QueDtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IodGhpcy5kaXJlY3Rpb25QaXZvdCwgdGhpcy5mcm9udFBpdm90KS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCAqPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi55ICo9IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgZHJhd0NhcihjdHgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEaXJlY3Rpb24oKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBpdm90LngsIHRoaXMucGl2b3QueSk7XG4gICAgICAgIGN0eC5yb3RhdGUoKHRoaXMucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhciwgMTAwLCAxMDAsIDgwLCA4MCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5mcm9udFBpdm90LnggLSA1MCwgdGhpcy5mcm9udFBpdm90LnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZnJvbnRQaXZvdC54ICsgNTAsIHRoaXMuZnJvbnRQaXZvdC55KTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnJlYXJQaXZvdC54IC0gNTAsIHRoaXMucmVhclBpdm90LnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMucmVhclBpdm90LnggKyA1MCwgdGhpcy5yZWFyUGl2b3QueSk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5mcm9udFBpdm90LngsIHRoaXMuZnJvbnRQaXZvdC55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnJlYXJQaXZvdC54LCB0aGlzLnJlYXJQaXZvdC55KTtcblxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZnJvbnRQaXZvdC54LCB0aGlzLmZyb250UGl2b3QueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy50ZW1wRGlyUGl2b3QueCwgdGhpcy50ZW1wRGlyUGl2b3QueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IHRoaXMuYWNjZWxlcmF0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWVkID4gMCkge1xuICAgICAgICB0aGlzLnNwZWVkIC09IHRoaXMuYWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kZWNlbGVyYXRlKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgKz0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJyZWFrKSB7XG4gICAgICAgIGlmICh0aGlzLnNwZWVkICE9IDApIHtcbiAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuICAgICAgdGhpcy5waXZvdC54ICs9IHRoaXMuZGlyZWN0aW9uLng7XG4gICAgICB0aGlzLnBpdm90LnkgKz0gdGhpcy5kaXJlY3Rpb24ueTtcblxuICAgICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLnBpdm90LCB0aGlzLnJlYXJQaXZvdEFicyk7XG4gICAgICBsZXQgYW5nbGUgPSAoTWF0aC5hdGFuMigtdmVjdG9yLnksIHZlY3Rvci54KSAqIDE4MCkgLyBNYXRoLlBJO1xuICAgICAgYW5nbGUgKz0gMTgwO1xuICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZSAtIDkwO1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xuXG4gICAgICB0aGlzLnJlYXJQaXZvdEFicyA9IHtcbiAgICAgICAgeDpcbiAgICAgICAgICAxNjAgKiBNYXRoLmNvcygoKHRoaXMucm90YXRpb24gKyA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgKyB0aGlzLnBpdm90LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgMTYwICogTWF0aC5zaW4oKCh0aGlzLnJvdGF0aW9uICsgOTApICogTWF0aC5QSSkgLyAxODApICsgdGhpcy5waXZvdC55LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgdGhpcy5kcmF3Q2FyKGN0eCk7XG4gICAgfVxufSIsImltcG9ydCB7Q0FSX0NPTlNUQU5UUywgUGxheWVyQ2FyfSBmcm9tIFwiLi9jYXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYXJyYW5nZUNhcnMoKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwMSwgcDIpIHtcbiAgICAgICAgdGhpcy54ID0gcDEueCAtIHAyLng7XG4gICAgICAgIHRoaXMueSA9IHAxLnkgLSBwMi55O1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54IC8gdGhpcy5sZW5ndGgoKSwgeTogdGhpcy55IC8gdGhpcy5sZW5ndGgoKSB9O1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9