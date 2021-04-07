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
    _classCallCheck(this, PlayerCar);

    this.car = car;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.pivot = {
      x: this.x + this.width / 2,
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
    this.break = true;
    this.turnLeft = false;
    this.turnRight = false;
    document.addEventListener("keydown", function (e) {
      if (e.defaultPrevented) {
        return;
      }

      switch (e.code) {
        case "ArrowLeft":
          this.turnLeft = true;
          break;

        case "ArrowRight":
          this.turnRight = true;
          break;

        case "ArrowUp":
          console.log(e.code);
          this.accelerate = true;
          console.log(this.accelerate);
          break;

        case "ArrowDown":
          this.decelerate = true;
          break;

        case " ":
          this.break = true;

          if (this.speed != 0) {
            this.speed -= 1.2;
            if (this.speed < 0) this.speed = 0;
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
        case "ArrowLeft":
          this.turnLeft = false;
          break;

        case "ArrowRight":
          this.turnRight = false;
          break;

        case "ArrowUp":
          this.accelerate = false;
          break;

        case "ArrowDown":
          this.decelerate = false;
          break;

        case " ":
          this.break = false;
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
      ctx.drawImage(this.car, 100, 100);
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
        console.log("hello");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiR2FtZSIsImN0eCIsImdldENvbnRleHQiLCJjYXIiLCJwbGF5ZXJDYXIiLCJQbGF5ZXJDYXIiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJ4IiwibGVuZ3RoIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhbmltbG9vcCIsImFuaW1hdGUiLCJhbmltYXRpb25JZCIsIkNBUl9DT05TVEFOVFMiLCJ3aWR0aCIsImhlaWdodCIsInkiLCJwaXZvdCIsImZyb250UGl2b3QiLCJyZWFyUGl2b3QiLCJyb3RhdGlvbiIsInR1cm5BbmdsZSIsIm1heFR1cm5BbmdsZSIsInR1cm5TdGVwIiwiZGlyZWN0aW9uUGl2b3QiLCJyZWFyUGl2b3RBYnMiLCJjb3MiLCJQSSIsInNpbiIsInRlbXBEaXJQaXZvdCIsInNwZWVkIiwiYWNjZWxlcmF0aW9uIiwiZGlyZWN0aW9uIiwiVmVjdG9yIiwibm9ybWFsaXplIiwiYWNjZWxlcmF0ZSIsImRlY2VsZXJhdGUiLCJicmVhayIsInR1cm5MZWZ0IiwidHVyblJpZ2h0IiwiZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlRGlyZWN0aW9uIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwicmVzdG9yZSIsInZlY3RvciIsImFuZ2xlIiwiYXRhbjIiLCJtb3ZlIiwiZHJhd0NhciIsInAxIiwicDIiLCJzcXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxrREFB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LENBQVA7QUFDSDtBQVpMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJDYXIgfSBmcm9tIFwiLi9zY3JpcHRzL2NhclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWdhbWVcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZWQtY2FyJyk7XG4gICAgY29uc3QgcGxheWVyQ2FyID0gbmV3IFBsYXllckNhcig4MCwgODAsIDEwMCwgMTAwLCBjYXIpO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgICB2YXIgdmVuZG9ycyA9IFtcIndlYmtpdFwiLCBcIm1velwiXTtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICArK3hcbiAgICAgICkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuXG4gICAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWxvb3AoKSB7XG4gICAgICAgIHBsYXllckNhci5hbmltYXRlKGN0eCk7XG4gICAgICB3aW5kb3cuYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcbiAgICB9XG4gICAgYW5pbWxvb3AoKTtcbn0pIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDYXIge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHgsIHksIGNhcikge1xuICAgICAgICB0aGlzLmNhciA9IGNhcjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5waXZvdCA9IHt4OiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgeTogdGhpcy55ICsgMjB9O1xuICAgICAgICB0aGlzLmZyb250UGl2b3QgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5yZWFyUGl2b3QgPSB7IHg6IDAsIHk6IDE2MCB9O1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgICAgdGhpcy50dXJuQW5nbGUgPSAwO1xuICAgICAgICB0aGlzLm1heFR1cm5BbmdsZSA9IDQ1O1xuICAgICAgICB0aGlzLnR1cm5TdGVwID0gOTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25QaXZvdCA9IHtcbiAgICAgICAgICB4OiB0aGlzLmZyb250UGl2b3QueCxcbiAgICAgICAgICB5OiB0aGlzLmZyb250UGl2b3QueSAtIDUwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlYXJQaXZvdEFicyA9IHtcbiAgICAgICAgICB4OlxuICAgICAgICAgICAgMTYwICogTWF0aC5jb3MoKCh0aGlzLnJvdGF0aW9uICsgOTApICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgICAgIHRoaXMucGl2b3QueCxcbiAgICAgICAgICB5OlxuICAgICAgICAgICAgMTYwICogTWF0aC5zaW4oKCh0aGlzLnJvdGF0aW9uICsgOTApICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgICAgIHRoaXMucGl2b3QueSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50ZW1wRGlyUGl2b3QgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMC4yO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IodGhpcy5kaXJlY3Rpb25QaXZvdCwgdGhpcy5mcm9udFBpdm90KS5ub3JtYWxpemUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnJlYWsgPSB0cnVlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAxLjI7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmRlY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50dXJuTGVmdCAmJiB0aGlzLnR1cm5BbmdsZSA+IC10aGlzLm1heFR1cm5BbmdsZSkge1xuICAgICAgICAgICAgdGhpcy50dXJuQW5nbGUgLT0gdGhpcy50dXJuU3RlcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR1cm5SaWdodCAmJiB0aGlzLnR1cm5BbmdsZSA8IHRoaXMubWF4VHVybkFuZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5BbmdsZSArPSB0aGlzLnR1cm5TdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25QaXZvdC54ID1cbiAgICAgICAgICA1MCAqXG4gICAgICAgICAgICBNYXRoLmNvcygoKHRoaXMudHVybkFuZ2xlICsgdGhpcy5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSArXG4gICAgICAgICAgdGhpcy5mcm9udFBpdm90Lng7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uUGl2b3QueSA9XG4gICAgICAgICAgNTAgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKCh0aGlzLnR1cm5BbmdsZSArIHRoaXMucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICAgIHRoaXMuZnJvbnRQaXZvdC55O1xuXG4gICAgICAgIHRoaXMudGVtcERpclBpdm90LnggPVxuICAgICAgICAgIDUwICogTWF0aC5jb3MoKCh0aGlzLnR1cm5BbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSArXG4gICAgICAgICAgdGhpcy5mcm9udFBpdm90Lng7XG4gICAgICAgIHRoaXMudGVtcERpclBpdm90LnkgPVxuICAgICAgICAgIDUwICogTWF0aC5zaW4oKCh0aGlzLnR1cm5BbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSArXG4gICAgICAgICAgdGhpcy5mcm9udFBpdm90Lng7XG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uUGl2b3QsIHRoaXMuZnJvbnRQaXZvdCkubm9ybWFsaXplKCk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnggKj0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSAqPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGRyYXdDYXIoY3R4KSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGlyZWN0aW9uKCk7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5waXZvdC54LCB0aGlzLnBpdm90LnkpO1xuICAgICAgICBjdHgucm90YXRlKCh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYXIsIDEwMCwgMTAwKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmZyb250UGl2b3QueCAtIDUwLCB0aGlzLmZyb250UGl2b3QueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5mcm9udFBpdm90LnggKyA1MCwgdGhpcy5mcm9udFBpdm90LnkpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMucmVhclBpdm90LnggLSA1MCwgdGhpcy5yZWFyUGl2b3QueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5yZWFyUGl2b3QueCArIDUwLCB0aGlzLnJlYXJQaXZvdC55KTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmZyb250UGl2b3QueCwgdGhpcy5mcm9udFBpdm90LnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMucmVhclBpdm90LngsIHRoaXMucmVhclBpdm90LnkpO1xuXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5mcm9udFBpdm90LngsIHRoaXMuZnJvbnRQaXZvdC55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnRlbXBEaXJQaXZvdC54LCB0aGlzLnRlbXBEaXJQaXZvdC55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjY2VsZXJhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgKz0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNlbGVyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkIC09IHRoaXMuYWNjZWxlcmF0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkICs9IHRoaXMuYWNjZWxlcmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWspIHtcbiAgICAgICAgICBpZiAodGhpcy5zcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waXZvdC54ICs9IHRoaXMuZGlyZWN0aW9uLng7XG4gICAgICAgIHRoaXMucGl2b3QueSArPSB0aGlzLmRpcmVjdGlvbi55O1xuXG4gICAgICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3IodGhpcy5waXZvdCwgdGhpcy5yZWFyUGl2b3RBYnMpO1xuICAgICAgICBsZXQgYW5nbGUgPSAoTWF0aC5hdGFuMigtdmVjdG9yLnksIHZlY3Rvci54KSAqIDE4MCkgLyBNYXRoLlBJO1xuICAgICAgICBhbmdsZSArPSAxODA7XG4gICAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGUgLSA5MDtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xuXG4gICAgICAgIHRoaXMucmVhclBpdm90QWJzID0ge1xuICAgICAgICAgIHg6XG4gICAgICAgICAgICAxNjAgKiBNYXRoLmNvcygoKHRoaXMucm90YXRpb24gKyA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICAgICAgdGhpcy5waXZvdC54LFxuICAgICAgICAgIHk6XG4gICAgICAgICAgICAxNjAgKiBNYXRoLnNpbigoKHRoaXMucm90YXRpb24gKyA5MCkgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICAgICAgdGhpcy5waXZvdC55LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXdDYXIoY3R4KTtcbiAgICB9XG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBhcnJhbmdlQ2FycygpIHtcbiAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHAxLCBwMikge1xuICAgICAgICB0aGlzLnggPSBwMS54IC0gcDIueDtcbiAgICAgICAgdGhpcy55ID0gcDEueSAtIHAyLnk7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnggLyB0aGlzLmxlbmd0aCgpLCB5OiB0aGlzLnkgLyB0aGlzLmxlbmd0aCgpIH07XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=