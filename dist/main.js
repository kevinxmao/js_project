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

    ctx.beginPath();
    ctx.arc(x - width / 2 * Math.cos(angle) + height / 2 * Math.sin(angle), y - width / 2 * Math.sin(angle) - height / 2 * Math.cos(angle), 2, 0, 2 * Math.PI);
    ctx.arc(x + width / 2 * Math.cos(angle) + height / 2 * Math.sin(angle), y + width / 2 * Math.sin(angle) - height / 2 * Math.cos(angle), 2, 0, 2 * Math.PI);
    ctx.fillStyle = randomColor;
    ctx.fill(); // ctx.fillStyle = 'blue';
    // ctx.fillRect(
    //   x - ((width / 2) * Math.cos(angle)) + ((height / 2) * Math.sin(angle)),
    //   y - ((width / 2) * Math.sin(angle)) - ((height / 2) * Math.cos(angle)),
    //   5,
    //   5
    // );
    // ctx.fillRect(
    //   x + ((width / 2) * Math.cos(angle)) + ((height / 2) * Math.sin(angle)),
    //   y + ((width / 2) * Math.sin(angle)) - ((height / 2) * Math.cos(angle)),
    //   5,
    //   5
    // );
    // ctx.fillRect(200, 30, 1000, 600);

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
  decceleration: 0.05,
  angularAcceleration: 0.04
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
    value: function start() {}
  }, {
    key: "levelUp",
    value: function levelUp() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm15Q2FyIiwiY2FyIiwiUGxheWVyQ2FyIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwieCIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJNYXRoIiwibWF4IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWxvb3AiLCJ5IiwiYW5nbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJjb3MiLCJzaW4iLCJQSSIsImZpbGxTdHlsZSIsInJhbmRvbUNvbG9yIiwiZmlsbCIsIm1vdmUiLCJkcmF3Q2FyIiwiYW5pbWF0aW9uSWQiLCJDQVJfQ09OU1RBTlRTIiwibWF4U3BlZWQiLCJtYXhSZXZlcnNlU3BlZWQiLCJhY2NlbGVyYXRpb24iLCJkZWNjZWxlcmF0aW9uIiwiYW5ndWxhckFjY2VsZXJhdGlvbiIsImR4IiwiZHkiLCJzcGVlZCIsInJldmVyc2VTcGVlZCIsIm9tZWdhIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJtaW4iLCJkaXJlY3Rpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsIkdhbWUiLCJydW5uaW5nIiwibGV2ZWwiLCJzaWR3YWxrIiwiaSIsImRyYXdJbWFnZSIsImJsdWVDYXIiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmaWxsUmVjdCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2hlY2tDb2xsaXNpb24iLCJhcnJhbmdlQ2FycyIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVB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ZDtBQUNBNUUsU0FBRyxDQUFDNkUsTUFBSixDQUFXLEdBQVgsRUFBZ0IsR0FBaEI7QUFDQTdFLFNBQUcsQ0FBQzhFLFdBQUosR0FBa0IsTUFBbEI7QUFDQTlFLFNBQUcsQ0FBQytFLE1BQUo7QUFDQSxXQUFLQyxjQUFMO0FBQ0EsV0FBS0MsV0FBTCxDQUFpQmpGLEdBQWpCO0FBQ0EsV0FBS1EsR0FBTCxDQUFTMEUsT0FBVCxDQUFpQmxGLEdBQWpCO0FBQ0g7QUFoRUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCB7IFBsYXllckNhciB9IGZyb20gXCIuL3NjcmlwdHMvY2FyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZ2FtZVwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBteUNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxcIik7XG5cbiAgICBjb25zdCBjYXIgPSBuZXcgUGxheWVyQ2FyKG15Q2FyKTtcblxuICAgIC8vIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGVkLWNhcicpO1xuICAgIC8vIGNvbnN0IHBsYXllckNhciA9IG5ldyBQbGF5ZXJDYXIoNDAsIDgwLCAxMDAsIDEwMCwgY2FyKTtcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUocGxheWVyQ2FyKTtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgICAgdmFyIHZlbmRvcnMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIl07XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgKyt4XG4gICAgICApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1sb29wKCkge1xuICAgICAgbGV0IHggPSBjYXIueDtcbiAgICAgIGxldCB5ID0gY2FyLnk7XG4gICAgICBsZXQgYW5nbGUgPSBjYXIuYW5nbGU7XG4gICAgICBsZXQgd2lkdGggPSAxNjtcbiAgICAgIGxldCBoZWlnaHQgPSAzMjtcblxuICAgICAgLy8gbGV0IHJhbmRvbUNvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhcbiAgICAgICAgeCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSxcbiAgICAgICAgeSAtICgod2lkdGggLyAyKSAqIE1hdGguc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICk7XG4gICAgICBjdHguYXJjKFxuICAgICAgICB4ICsgKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICAgICAgICB5ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAyICogTWF0aC5QSVxuICAgICAgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSByYW5kb21Db2xvcjtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgICAgLy8gY3R4LmZpbGxSZWN0KFxuICAgICAgLy8gICB4IC0gKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICAgICAgLy8gICB5IC0gKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgLy8gICA1LFxuICAgICAgLy8gICA1XG4gICAgICAvLyApO1xuICAgICAgLy8gY3R4LmZpbGxSZWN0KFxuICAgICAgLy8gICB4ICsgKCh3aWR0aCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBNYXRoLnNpbihhbmdsZSkpLFxuICAgICAgLy8gICB5ICsgKCh3aWR0aCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpLFxuICAgICAgLy8gICA1LFxuICAgICAgLy8gICA1XG4gICAgICAvLyApO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QoMjAwLCAzMCwgMTAwMCwgNjAwKTtcblxuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuXG4gICAgICAgIHdpbmRvdy5hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWxvb3ApO1xuICAgIH1cbiAgICBhbmltbG9vcCgpO1xuXG59KVxuXG4vLyBSZWN0YW5nbGUgTWF0aFxuXG4vKlxuVE9QIFJJR0hUIFZFUlRFWDpcblRvcF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5UT1AgTEVGVCBWRVJURVg6XG5Ub3BfTGVmdC54ID0gY2VudGVyLnggLSAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX0xlZnQueSA9IGNlbnRlci55IC0gKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cbkJPVFRPTSBMRUZUIFZFUlRFWDpcbkJvdF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIFJJR0hUIFZFUlRFWDpcbkJvdF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuQm90X1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG4qLyIsImV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuICBtYXhTcGVlZDogNCxcbiAgbWF4UmV2ZXJzZVNwZWVkOiAzLjUsXG4gIGFjY2VsZXJhdGlvbjogMC41LFxuICBkZWNjZWxlcmF0aW9uOiAwLjA1LFxuICBhbmd1bGFyQWNjZWxlcmF0aW9uOiAwLjA0XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDYXIge1xuICAgIGNvbnN0cnVjdG9yKGNhcikge1xuXG4gICAgICAgIC8vIGNhciBET00gZWxlbWVudFxuICAgICAgICB0aGlzLmNhciA9IGNhcjtcbiAgICAgICAgdGhpcy54ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcblxuICAgICAgICAvLyBtb3ZlIGJvb2xlYW5cbiAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmJyZWFrID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJrZXkgZG93blwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMS4yO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPCAwKSB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2VsZXJhdGUpXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgIGNvbnN0IHsgbWF4U3BlZWQsIGFjY2VsZXJhdGlvbiwgZGVjY2VsZXJhdGlvbiwgbWF4UmV2ZXJzZVNwZWVkLCBhbmd1bGFyQWNjZWxlcmF0aW9uIH0gPSBDQVJfQ09OU1RBTlRTO1xuXG4gICAgICBpZiAodGhpcy5hY2NlbGVyYXRlKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgKz0gYWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZXZlcnNlKSB7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkIC09IGRlY2NlbGVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3BlZWQgPSBNYXRoLm1pbihtYXhTcGVlZCwgTWF0aC5tYXgodGhpcy5zcGVlZCwgMCkpO1xuICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSBNYXRoLm1pbihtYXhSZXZlcnNlU3BlZWQsIE1hdGgubWF4KHRoaXMucmV2ZXJzZVNwZWVkLCAwKSk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc3BlZWQgPj0gdGhpcy5yZXZlcnNlU3BlZWQgPyAxIDogLTE7XG5cbiAgICAgIGlmICh0aGlzLnR1cm5SaWdodCAmJiAodGhpcy5zcGVlZCA+IDAuMSB8fCB0aGlzLnJldmVyc2VTcGVlZCA+IDAuMSkpIHtcbiAgICAgICAgdGhpcy5vbWVnYSA9IGRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHVybkxlZnQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSAtZGlyZWN0aW9uICogYW5ndWxhckFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmR4ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcbiAgICAgIHRoaXMuZHkgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqICh0aGlzLnNwZWVkIC0gdGhpcy5yZXZlcnNlU3BlZWQpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpXG5cbiAgICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgICAgdGhpcy55IC09IHRoaXMuZHk7XG5cbiAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy5vbWVnYTtcbiAgICAgIHRoaXMub21lZ2EgKj0gdGhpcy5vbWVnYTtcblxuICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMueCAtPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICB0aGlzLnggKz0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy55IC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICB0aGlzLnkgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdDYXIoKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weCkgcm90YXRlKCR7dGhpcy5hbmdsZSAqIDE4MCAvIE1hdGguUEl9ZGVnKWA7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FyKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmNhciA9IGNhcjtcbiAgICB9XG5cbiAgICBhcnJhbmdlQ2FycyhjdHgpIHtcbiAgICAgICAgY29uc3Qgc2lkd2FsayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRld2Fsay1taWRkbGUnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdHguY2FudmFzLmhlaWdodDsgaSArPSA0MCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzaWR3YWxrLCAwLCBpLCA0MCwgNDApXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdHguY2FudmFzLmhlaWdodDsgaSArPSA0MCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzaWR3YWxrLCA0MCwgaSwgNDAsIDQwKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdHguY2FudmFzLmhlaWdodDsgaSArPSA0MCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzaWR3YWxrLCBjdHguY2FudmFzLndpZHRoIC0gNDAsIGksIDQwLCA0MClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4LmNhbnZhcy5oZWlnaHQ7IGkgKz0gNDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc2lkd2FsaywgY3R4LmNhbnZhcy53aWR0aCAtIDgwLCBpLCA0MCwgNDApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBibHVlQ2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtY2FyJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmx1ZUNhciwgODUsIDgwLCA0MCwgODApXG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNhci5sb2NhdGlvbi54IDwgMTE0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyYXNoXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJrZWQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGxldmVsVXAoKSB7XG5cbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygyMDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKDIwMCwgNzAwKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAzNTApO1xuICAgICAgICBjdHgubGluZVRvKDQwMCwgMzUwKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjZmZmXCI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmFycmFuZ2VDYXJzKGN0eCk7XG4gICAgICAgIHRoaXMuY2FyLmFuaW1hdGUoY3R4KTtcbiAgICB9XG5cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=