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
/* harmony import */ var _scripts_moving_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moving_obj */ "./src/scripts/moving_obj.js");




document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("main-game");
  var ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  var myCar = document.getElementById("local");
  var car = new _scripts_car__WEBPACK_IMPORTED_MODULE_2__["PlayerCar"](myCar);
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["Game"](ctx, car);
  game.addBalls(); // const car = document.getElementById('striped-car');
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
    var height = 32; // ctx.fillStyle = 'blue';
    // ctx.fillRect(
    //   x - ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
    //   y - ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
    //   1,
    //   1
    // );
    // ctx.fillRect(
    //   x + ((width / 2) * Math.cos(angle)) - ((height / 2) * Math.sin(angle)),
    //   y + ((width / 2) * Math.sin(angle)) + ((height / 2) * Math.cos(angle)),
    //   1,
    //   1
    // );

    car.move();
    car.drawCar();
    game.animate();
    window.animationId = window.requestAnimationFrame(animloop);
  }

  animloop();
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
/* harmony import */ var _moving_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_obj */ "./src/scripts/moving_obj.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(ctx, car) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.running = true;
    this.level = 1;
    this.car = car;
    this.balls = [];
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
      console.log(attr);
      var ball = new _moving_obj__WEBPACK_IMPORTED_MODULE_1__["MovingObj"](this.ctx, attr);
      this.balls.push(ball);
    }
  }, {
    key: "checkBallCollision",
    value: function checkBallCollision() {
      for (var i = 0; i < this.balls.length; i++) {
        for (var j = i + 1; j < this.balls.length; j++) {
          if (this.balls[i].isColliding(this.balls[j])) {
            this.onBallCollision(this.balls[i], this.balls[j]);
          }
        }
      }
    }
  }, {
    key: "onBallCollision",
    value: function onBallCollision(obj1, obj2) {
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

      if (speed < 0) {
        return;
      } else {
        // debugger;
        obj1.vx -= speed * vCollisionNorm.x;
        obj1.vy -= speed * vCollisionNorm.y;
        obj2.vx += speed * vCollisionNorm.x;
        obj2.vy += speed * vCollisionNorm.y;
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
    value: function animate() {
      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.balls.forEach(function (ball) {
        ball.animate();
      });
      this.checkBallCollision();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJjYXIiLCJQbGF5ZXJDYXIiLCJnYW1lIiwiR2FtZSIsImFkZEJhbGxzIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwieCIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJNYXRoIiwibWF4IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWxvb3AiLCJ5IiwiYW5nbGUiLCJtb3ZlIiwiZHJhd0NhciIsImFuaW1hdGUiLCJhbmltYXRpb25JZCIsIkNBUl9DT05TVEFOVFMiLCJtYXhTcGVlZCIsIm1heFJldmVyc2VTcGVlZCIsImFjY2VsZXJhdGlvbiIsImRlY2NlbGVyYXRpb24iLCJhbmd1bGFyQWNjZWxlcmF0aW9uIiwiZHgiLCJkeSIsInNwZWVkIiwicmV2ZXJzZVNwZWVkIiwib21lZ2EiLCJhY2NlbGVyYXRlIiwicmV2ZXJzZSIsInR1cm5MZWZ0IiwidHVyblJpZ2h0IiwiZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwiYnJlYWsiLCJwcmV2ZW50RGVmYXVsdCIsIm1pbiIsImRpcmVjdGlvbiIsInNpbiIsImNvcyIsInN0eWxlIiwidHJhbnNmb3JtIiwiUEkiLCJydW5uaW5nIiwibGV2ZWwiLCJiYWxscyIsImkiLCJhZGRCYWxsIiwicmFkaXVzIiwidmVsIiwiY29sb3IiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJiYWxsIiwiTW92aW5nT2JqIiwicHVzaCIsImoiLCJpc0NvbGxpZGluZyIsIm9uQmFsbENvbGxpc2lvbiIsIm9iajEiLCJvYmoyIiwidkNvbGxpc2lvbiIsImRpc3RhbmNlIiwic3FydCIsInZDb2xsaXNpb25Ob3JtIiwidlJlbGF0aXZlVmVsb2NpdHkiLCJ2eCIsInZ5IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb3JFYWNoIiwiY2hlY2tCYWxsQ29sbGlzaW9uIiwic2F2ZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJyZXN0b3JlIiwiZCIsImRyYXciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyQ2FyIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJcIjtcbmltcG9ydCB7IE1vdmluZ09iaiB9IGZyb20gXCIuL3NjcmlwdHMvbW92aW5nX29ialwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWdhbWVcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgbXlDYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2FsXCIpO1xuXG4gICAgY29uc3QgY2FyID0gbmV3IFBsYXllckNhcihteUNhcik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgY2FyKTtcbiAgICBnYW1lLmFkZEJhbGxzKCk7XG5cbiAgICAvLyBjb25zdCBjYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyaXBlZC1jYXInKTtcbiAgICAvLyBjb25zdCBwbGF5ZXJDYXIgPSBuZXcgUGxheWVyQ2FyKDQwLCA4MCwgMTAwLCAxMDAsIGNhcik7XG4gICAgLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHBsYXllckNhcik7XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICAgIHZhciB2ZW5kb3JzID0gW1wid2Via2l0XCIsIFwibW96XCJdO1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgICsreFxuICAgICAgKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH07XG5cbiAgICAgIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBhbmltbG9vcCgpIHtcbiAgICAgIGxldCB4ID0gY2FyLng7XG4gICAgICBsZXQgeSA9IGNhci55O1xuICAgICAgbGV0IGFuZ2xlID0gY2FyLmFuZ2xlO1xuICAgICAgbGV0IHdpZHRoID0gMTY7XG4gICAgICBsZXQgaGVpZ2h0ID0gMzI7XG5cbiAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAvLyBjdHguZmlsbFJlY3QoXG4gICAgICAvLyAgIHggLSAoKHdpZHRoIC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIE1hdGguc2luKGFuZ2xlKSksXG4gICAgICAvLyAgIHkgLSAoKHdpZHRoIC8gMikgKiBNYXRoLnNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIE1hdGguY29zKGFuZ2xlKSksXG4gICAgICAvLyAgIDEsXG4gICAgICAvLyAgIDFcbiAgICAgIC8vICk7XG4gICAgICAvLyBjdHguZmlsbFJlY3QoXG4gICAgICAvLyAgIHggKyAoKHdpZHRoIC8gMikgKiBNYXRoLmNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIE1hdGguc2luKGFuZ2xlKSksXG4gICAgICAvLyAgIHkgKyAoKHdpZHRoIC8gMikgKiBNYXRoLnNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIE1hdGguY29zKGFuZ2xlKSksXG4gICAgICAvLyAgIDEsXG4gICAgICAvLyAgIDFcbiAgICAgIC8vICk7XG5cbiAgICAgICAgY2FyLm1vdmUoKTtcbiAgICAgICAgY2FyLmRyYXdDYXIoKTtcbiAgICAgICAgZ2FtZS5hbmltYXRlKCk7XG4gICAgICAgIHdpbmRvdy5hbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWxvb3ApO1xuICAgIH1cbiAgICBhbmltbG9vcCgpO1xuXG59KVxuXG4vLyBSZWN0YW5nbGUgTWF0aFxuXG4vKlxuVE9QIFJJR0hUIFZFUlRFWDpcblRvcF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5UT1AgTEVGVCBWRVJURVg6XG5Ub3BfTGVmdC54ID0gY2VudGVyLnggLSAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuVG9wX0xlZnQueSA9IGNlbnRlci55IC0gKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cbkJPVFRPTSBMRUZUIFZFUlRFWDpcbkJvdF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSArICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIFJJR0hUIFZFUlRFWDpcbkJvdF9SaWdodC54ID0gY2VudGVyLnggKyAoKHdpZHRoIC8gMikgKiBjb3MoYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBzaW4oYW5nbGUpKVxuQm90X1JpZ2h0LnkgPSBjZW50ZXIueSArICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG4qLyIsImV4cG9ydCBjb25zdCBDQVJfQ09OU1RBTlRTID0ge1xuICBtYXhTcGVlZDogNCxcbiAgbWF4UmV2ZXJzZVNwZWVkOiAzLjUsXG4gIGFjY2VsZXJhdGlvbjogMC41LFxuICBkZWNjZWxlcmF0aW9uOiAwLjIsXG4gIGFuZ3VsYXJBY2NlbGVyYXRpb246IDAuMDVcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3IoY2FyKSB7XG5cbiAgICAgICAgLy8gY2FyIERPTSBlbGVtZW50XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuZHggPSAwO1xuICAgICAgICB0aGlzLmR5ID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMub21lZ2EgPSAwO1xuXG4gICAgICAgIC8vIG1vdmUgYm9vbGVhblxuICAgICAgICB0aGlzLmFjY2VsZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleSBkb3duXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAxLjI7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWNjZWxlcmF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleXVwXCIsXG4gICAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgY29uc3QgeyBtYXhTcGVlZCwgYWNjZWxlcmF0aW9uLCBkZWNjZWxlcmF0aW9uLCBtYXhSZXZlcnNlU3BlZWQsIGFuZ3VsYXJBY2NlbGVyYXRpb24gfSA9IENBUl9DT05TVEFOVFM7XG5cbiAgICAgIGlmICh0aGlzLmFjY2VsZXJhdGUpIHtcbiAgICAgICAgdGhpcy5zcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwZWVkIC09IGRlY2NlbGVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgKz0gYWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zcGVlZCA9IE1hdGgubWluKG1heFNwZWVkLCBNYXRoLm1heCh0aGlzLnNwZWVkLCAwKSk7XG4gICAgICB0aGlzLnJldmVyc2VTcGVlZCA9IE1hdGgubWluKG1heFJldmVyc2VTcGVlZCwgTWF0aC5tYXgodGhpcy5yZXZlcnNlU3BlZWQsIDApKTtcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5zcGVlZCA+PSB0aGlzLnJldmVyc2VTcGVlZCA/IDEgOiAtMTtcblxuICAgICAgaWYgKHRoaXMudHVyblJpZ2h0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gZGlyZWN0aW9uICogYW5ndWxhckFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50dXJuTGVmdCAmJiAodGhpcy5zcGVlZCA+IDAuMSB8fCB0aGlzLnJldmVyc2VTcGVlZCA+IDAuMSkpIHtcbiAgICAgICAgdGhpcy5vbWVnYSA9IC1kaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbWVnYSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHggPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqICh0aGlzLnNwZWVkIC0gdGhpcy5yZXZlcnNlU3BlZWQpO1xuICAgICAgdGhpcy5keSA9IE1hdGguY29zKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueClcblxuICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICB0aGlzLnkgLT0gdGhpcy5keTtcblxuICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLm9tZWdhO1xuICAgICAgdGhpcy5vbWVnYSAqPSB0aGlzLm9tZWdhO1xuXG4gICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdGhpcy54IC09IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgIHRoaXMueCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICB0aGlzLnkgLT0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgIHRoaXMueSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NhcigpIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4KSByb3RhdGUoJHt0aGlzLmFuZ2xlICogMTgwIC8gTWF0aC5QSX1kZWcpYDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0NBUl9DT05TVEFOVFMsIFBsYXllckNhcn0gZnJvbSBcIi4vY2FyXCI7XG5pbXBvcnQgeyBNb3ZpbmdPYmogfSBmcm9tIFwiLi9tb3Zpbmdfb2JqXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhcikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuY2FyID0gY2FyO1xuICAgICAgICB0aGlzLmJhbGxzID0gW107XG4gICAgfVxuXG4gICAgYWRkQmFsbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJhbGwoMzAsIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BhcmtpbmdTcG90KCkge1xuXG4gICAgfVxuXG4gICAgYWRkQmFsbChyYWRpdXMsIHZlbCkge1xuICAgICAgICBsZXQgY29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cbiAgICAgICAgbGV0IGF0dHIgPSB7cmFkaXVzLCB4LCB5LCBjb2xvciwgdmVsLCBhbmdsZX07XG4gICAgICAgIGNvbnNvbGUubG9nKGF0dHIpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IG5ldyBNb3ZpbmdPYmoodGhpcy5jdHgsIGF0dHIpO1xuICAgICAgICB0aGlzLmJhbGxzLnB1c2goYmFsbCk7XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYmFsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsc1tpXS5pc0NvbGxpZGluZyh0aGlzLmJhbGxzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmFsbENvbGxpc2lvbih0aGlzLmJhbGxzW2ldLCB0aGlzLmJhbGxzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJhbGxDb2xsaXNpb24ob2JqMSwgb2JqMikge1xuICAgICAgICBsZXQgdkNvbGxpc2lvbiA9IHsgeDogb2JqMi54IC0gb2JqMS54LCB5OiBvYmoyLnkgLSBvYmoxLnkgfTtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChvYmoyLnggLSBvYmoxLngpICogKG9iajIueCAtIG9iajEueCkgKyAob2JqMi55IC0gb2JqMS55KSAqIChvYmoyLnkgLSBvYmoxLnkpKTtcbiAgICAgICAgbGV0IHZDb2xsaXNpb25Ob3JtID0geyB4OiB2Q29sbGlzaW9uLnggLyBkaXN0YW5jZSwgeTogdkNvbGxpc2lvbi55IC8gZGlzdGFuY2UgfTtcblxuICAgICAgICBsZXQgdlJlbGF0aXZlVmVsb2NpdHkgPSB7IHg6IG9iajEudnggLSBvYmoyLnZ4LCB5OiBvYmoxLnZ5IC0gb2JqMi52eSB9O1xuICAgICAgICBsZXQgc3BlZWQgPSB2UmVsYXRpdmVWZWxvY2l0eS54ICogdkNvbGxpc2lvbk5vcm0ueCArIHZSZWxhdGl2ZVZlbG9jaXR5LnkgKiB2Q29sbGlzaW9uTm9ybS55O1xuXG4gICAgICAgIGlmIChzcGVlZCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgb2JqMS52eCAtPSAoc3BlZWQgKiB2Q29sbGlzaW9uTm9ybS54KTtcbiAgICAgICAgICAgIG9iajEudnkgLT0gKHNwZWVkICogdkNvbGxpc2lvbk5vcm0ueSk7XG4gICAgICAgICAgICBvYmoyLnZ4ICs9IChzcGVlZCAqIHZDb2xsaXNpb25Ob3JtLngpO1xuICAgICAgICAgICAgb2JqMi52eSArPSAoc3BlZWQgKiB2Q29sbGlzaW9uTm9ybS55KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmtlZCgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gbGV2ZWxVcCgpIHtcblxuICAgIC8vIH1cblxuICAgIHJlc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hlYXRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgYmFsbC5hbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTW92aW5nT2JqIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGF0dHIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucmFkaXVzID0gYXR0ci5yYWRpdXM7XG4gICAgICAgIHRoaXMueCA9IGF0dHIueDtcbiAgICAgICAgdGhpcy55ID0gYXR0ci55O1xuICAgICAgICB0aGlzLmNvbG9yID0gYXR0ci5jb2xvcjtcbiAgICAgICAgdGhpcy52ZWwgPSBhdHRyLnZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGF0dHIuYW5nbGU7XG5cbiAgICAgICAgdGhpcy52eCA9IHRoaXMudmVsICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnZlbCAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBbdGhpcy52eCwgdGhpcy52eV07XG4gICAgICAgIHRoaXMueCArPSBkeDtcbiAgICAgICAgdGhpcy55ICs9IGR5O1xuXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy54IC09IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGlkaW5nKGJhbGwpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gYmFsbC54O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSBiYWxsLnk7XG5cbiAgICAgICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIHJldHVybiBkIDwgKHRoaXMucmFkaXVzICsgYmFsbC5yYWRpdXMpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9