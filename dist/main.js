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
        for (var i = 0; i < 5; i++) {
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
            Game.onCollision(this.balls[i], this.balls[j]);
          }
        }
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
      var _this = this;

      var ctx = this.ctx;
      ctx.fillStyle = "wheat";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.balls.forEach(function (ball) {
        ball.animate();
      });
      this.balls.forEach(function (ball) {
        if (_this.car.checkCollisionWithBall(ball)) {
          console.log("".concat(_this.car.vx, ", ").concat(_this.car.vy));
          Game.onCollision(ball, _this.car);
          console.log("".concat(_this.car.vx, ", ").concat(_this.car.vy));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Nhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibXlDYXIiLCJjYXIiLCJQbGF5ZXJDYXIiLCJnYW1lIiwiR2FtZSIsImFkZEJhbGxzIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwieCIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJNYXRoIiwibWF4IiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWxvb3AiLCJ5IiwiYW5nbGUiLCJtb3ZlIiwiZHJhd0NhciIsImFuaW1hdGUiLCJhbmltYXRpb25JZCIsIkNBUl9DT05TVEFOVFMiLCJtYXhTcGVlZCIsIm1heFJldmVyc2VTcGVlZCIsImFjY2VsZXJhdGlvbiIsImRlY2NlbGVyYXRpb24iLCJhbmd1bGFyQWNjZWxlcmF0aW9uIiwidngiLCJ2eSIsInNwZWVkIiwicmV2ZXJzZVNwZWVkIiwib21lZ2EiLCJtYXNzIiwiYWNjZWxlcmF0ZSIsInJldmVyc2UiLCJ0dXJuTGVmdCIsInR1cm5SaWdodCIsImUiLCJkZWZhdWx0UHJldmVudGVkIiwiY29kZSIsImJyZWFrIiwicHJldmVudERlZmF1bHQiLCJtaW4iLCJkaXJlY3Rpb24iLCJzaW4iLCJjb3MiLCJiYWxsIiwidWNYIiwidWNZIiwiY2xvc2VzdFgiLCJjbG9zZXN0WSIsImRpc3RhbmNlIiwic3FydCIsInJhZGl1cyIsInN0eWxlIiwidHJhbnNmb3JtIiwiUEkiLCJydW5uaW5nIiwibGV2ZWwiLCJiYWxscyIsImkiLCJhZGRCYWxsIiwidmVsIiwiY29sb3IiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJNb3ZpbmdPYmoiLCJwdXNoIiwiaiIsImlzQ29sbGlkaW5nIiwib25Db2xsaXNpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvckVhY2giLCJjaGVja0NvbGxpc2lvbldpdGhCYWxsIiwiY2hlY2tCYWxsQ29sbGlzaW9uIiwib2JqMSIsIm9iajIiLCJ2Q29sbGlzaW9uIiwidkNvbGxpc2lvbk5vcm0iLCJ2UmVsYXRpdmVWZWxvY2l0eSIsImltcHVsc2UiLCJzYXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInJlc3RvcmUiLCJkeCIsImR5IiwiZCIsImRyYXciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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VTtBQUNOLFdBQUtwQyxJQUFMO0FBQ0EsV0FBSzZFLElBQUwsQ0FBVSxLQUFLOUcsR0FBZjtBQUNIO0FBdkRMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgeyBQbGF5ZXJDYXIgfSBmcm9tIFwiLi9zY3JpcHRzL2NhclwiO1xuaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vc2NyaXB0cy9tb3Zpbmdfb2JqXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZ2FtZVwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBjb25zdCBteUNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxcIik7XG5cbiAgICBjb25zdCBjYXIgPSBuZXcgUGxheWVyQ2FyKG15Q2FyKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBjYXIpO1xuICAgIGdhbWUuYWRkQmFsbHMoKTtcblxuICAgIC8vIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGVkLWNhcicpO1xuICAgIC8vIGNvbnN0IHBsYXllckNhciA9IG5ldyBQbGF5ZXJDYXIoNDAsIDgwLCAxMDAsIDEwMCwgY2FyKTtcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUocGxheWVyQ2FyKTtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgICAgdmFyIHZlbmRvcnMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIl07XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgKyt4XG4gICAgICApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XG4gICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1sb29wKCkge1xuICAgICAgbGV0IHggPSBjYXIueDtcbiAgICAgIGxldCB5ID0gY2FyLnk7XG4gICAgICBsZXQgYW5nbGUgPSBjYXIuYW5nbGU7XG4gICAgICBsZXQgd2lkdGggPSAxNjtcbiAgICAgIGxldCBoZWlnaHQgPSAzMjtcblxuICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgICAgIC8vIGN0eC5maWxsUmVjdChcbiAgICAgIC8vICAgeCAtICgod2lkdGggLyAyKSAqIE1hdGguY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSxcbiAgICAgIC8vICAgeSAtICgod2lkdGggLyAyKSAqIE1hdGguc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSxcbiAgICAgIC8vICAgMSxcbiAgICAgIC8vICAgMVxuICAgICAgLy8gKTtcbiAgICAgIC8vIGN0eC5maWxsUmVjdChcbiAgICAgIC8vICAgeCArICgod2lkdGggLyAyKSAqIE1hdGguY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogTWF0aC5zaW4oYW5nbGUpKSxcbiAgICAgIC8vICAgeSArICgod2lkdGggLyAyKSAqIE1hdGguc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogTWF0aC5jb3MoYW5nbGUpKSxcbiAgICAgIC8vICAgMSxcbiAgICAgIC8vICAgMVxuICAgICAgLy8gKTtcblxuICAgICAgICBjYXIubW92ZSgpO1xuICAgICAgICBjYXIuZHJhd0NhcigpO1xuICAgICAgICBnYW1lLmFuaW1hdGUoKTtcbiAgICAgICAgd2luZG93LmFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltbG9vcCk7XG4gICAgfVxuICAgIGFuaW1sb29wKCk7XG5cbn0pXG5cbi8vIFJlY3RhbmdsZSBNYXRoXG5cbi8qXG5UT1AgUklHSFQgVkVSVEVYOlxuVG9wX1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcblxuXG5cblRPUCBMRUZUIFZFUlRFWDpcblRvcF9MZWZ0LnggPSBjZW50ZXIueCAtICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Ub3BfTGVmdC55ID0gY2VudGVyLnkgLSAoKHdpZHRoIC8gMikgKiBzaW4oYW5nbGUpKSAtICgoaGVpZ2h0IC8gMikgKiBjb3MoYW5nbGUpKVxuXG5cblxuQk9UVE9NIExFRlQgVkVSVEVYOlxuQm90X0xlZnQueCA9IGNlbnRlci54IC0gKCh3aWR0aCAvIDIpICogY29zKGFuZ2xlKSkgLSAoKGhlaWdodCAvIDIpICogc2luKGFuZ2xlKSlcbkJvdF9MZWZ0LnkgPSBjZW50ZXIueSAtICgod2lkdGggLyAyKSAqIHNpbihhbmdsZSkpICsgKChoZWlnaHQgLyAyKSAqIGNvcyhhbmdsZSkpXG5cblxuXG5CT1RUT00gUklHSFQgVkVSVEVYOlxuQm90X1JpZ2h0LnggPSBjZW50ZXIueCArICgod2lkdGggLyAyKSAqIGNvcyhhbmdsZSkpIC0gKChoZWlnaHQgLyAyKSAqIHNpbihhbmdsZSkpXG5Cb3RfUmlnaHQueSA9IGNlbnRlci55ICsgKCh3aWR0aCAvIDIpICogc2luKGFuZ2xlKSkgKyAoKGhlaWdodCAvIDIpICogY29zKGFuZ2xlKSlcbiovIiwiZXhwb3J0IGNvbnN0IENBUl9DT05TVEFOVFMgPSB7XG4gIG1heFNwZWVkOiA0LFxuICBtYXhSZXZlcnNlU3BlZWQ6IDMuNSxcbiAgYWNjZWxlcmF0aW9uOiAwLjUsXG4gIGRlY2NlbGVyYXRpb246IDAuMixcbiAgYW5ndWxhckFjY2VsZXJhdGlvbjogMC4wNVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihjYXIpIHtcblxuICAgICAgICAvLyBjYXIgRE9NIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5yZXZlcnNlU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5vbWVnYSA9IDA7XG4gICAgICAgIHRoaXMubWFzcyA9IDE7XG5cbiAgICAgICAgLy8gbW92ZSBib29sZWFuXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5MZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGRvd25cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjY2VsZXJhdGUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IDEuMjtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMCkgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hY2NlbGVyYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwia2V5dXBcIixcbiAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNwYWNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5icmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICBjb25zdCB7IG1heFNwZWVkLCBhY2NlbGVyYXRpb24sIGRlY2NlbGVyYXRpb24sIG1heFJldmVyc2VTcGVlZCwgYW5ndWxhckFjY2VsZXJhdGlvbiB9ID0gQ0FSX0NPTlNUQU5UUztcblxuICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0ZSkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IGFjY2VsZXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3BlZWQgLT0gZGVjY2VsZXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCArPSBhY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJldmVyc2VTcGVlZCAtPSBkZWNjZWxlcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4obWF4U3BlZWQsIE1hdGgubWF4KHRoaXMuc3BlZWQsIDApKTtcbiAgICAgIHRoaXMucmV2ZXJzZVNwZWVkID0gTWF0aC5taW4obWF4UmV2ZXJzZVNwZWVkLCBNYXRoLm1heCh0aGlzLnJldmVyc2VTcGVlZCwgMCkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNwZWVkID49IHRoaXMucmV2ZXJzZVNwZWVkID8gMSA6IC0xO1xuXG4gICAgICBpZiAodGhpcy50dXJuUmlnaHQgJiYgKHRoaXMuc3BlZWQgPiAwLjEgfHwgdGhpcy5yZXZlcnNlU3BlZWQgPiAwLjEpKSB7XG4gICAgICAgIHRoaXMub21lZ2EgPSBkaXJlY3Rpb24gKiBhbmd1bGFyQWNjZWxlcmF0aW9uO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5MZWZ0ICYmICh0aGlzLnNwZWVkID4gMC4xIHx8IHRoaXMucmV2ZXJzZVNwZWVkID4gMC4xKSkge1xuICAgICAgICB0aGlzLm9tZWdhID0gLWRpcmVjdGlvbiAqIGFuZ3VsYXJBY2NlbGVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9tZWdhID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy52eCA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogKHRoaXMuc3BlZWQgLSB0aGlzLnJldmVyc2VTcGVlZCk7XG4gICAgICB0aGlzLnZ5ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAodGhpcy5zcGVlZCAtIHRoaXMucmV2ZXJzZVNwZWVkKTtcblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy54KVxuXG4gICAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnZ5O1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IHRoaXMub21lZ2E7XG4gICAgICB0aGlzLm9tZWdhICo9IHRoaXMub21lZ2E7XG5cbiAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueSA8IDApIHtcbiAgICAgICAgdGhpcy55ICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbldpdGhCYWxsKGJhbGwpIHtcbiAgICAgICAgLy8gdW5yb3RhdGVkIGNpcmNsZVxuICAgICAgICBsZXQgdWNYID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC54IC0gdGhpcy54KSAtIE1hdGguc2luKHRoaXMuYW5nbGUpICogKGJhbGwueSAtIHRoaXMueSkgKyB0aGlzLng7XG4gICAgICAgIGxldCB1Y1kgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIChiYWxsLnggLSB0aGlzLngpICsgTWF0aC5jb3ModGhpcy5hbmdsZSkgKiAoYmFsbC55IC0gdGhpcy55KSArIHRoaXMueTtcblxuICAgICAgICBsZXQgY2xvc2VzdFg7XG4gICAgICAgIGxldCBjbG9zZXN0WTtcblxuICAgICAgICBpZiAodWNYIDwgdGhpcy54KSB7XG4gICAgICAgICAgY2xvc2VzdFggPSB0aGlzLng7XG4gICAgICAgIH0gZWxzZSBpZiAodWNYID4gdGhpcy54ICsgMTYpIHtcbiAgICAgICAgICBjbG9zZXN0WCA9IHRoaXMueCArIDE2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RYID0gdWNYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVjWSA8IHRoaXMueSkge1xuICAgICAgICAgIGNsb3Nlc3RZID0gdGhpcy55O1xuICAgICAgICB9IGVsc2UgaWYgKHVjWSA+IHRoaXMueSArIDMyKSB7XG4gICAgICAgICAgY2xvc2VzdFkgPSB0aGlzLnkgKyAxNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0WSA9IHVjWTtcbiAgICAgICAgfVxuXG4gICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHVjWCAtIGNsb3Nlc3RYKSAqICh1Y1ggLSBjbG9zZXN0WCkgKyAodWNZIC0gY2xvc2VzdFkpICogKHVjWSAtIGNsb3Nlc3RZKSk7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgPD0gYmFsbC5yYWRpdXM7XG4gICAgfSBcblxuICAgIGRyYXdDYXIoKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy54fXB4LCAke3RoaXMueX1weCkgcm90YXRlKCR7dGhpcy5hbmdsZSAqIDE4MCAvIE1hdGguUEl9ZGVnKWA7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDQVJfQ09OU1RBTlRTLCBQbGF5ZXJDYXJ9IGZyb20gXCIuL2NhclwiO1xuaW1wb3J0IHsgTW92aW5nT2JqIH0gZnJvbSBcIi4vbW92aW5nX29ialwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYXIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmNhciA9IGNhcjtcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEJhbGxzKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJhbGwoMzAsIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BhcmtpbmdTcG90KCkge1xuXG4gICAgfVxuXG4gICAgYWRkQmFsbChyYWRpdXMsIHZlbCkge1xuICAgICAgICBsZXQgY29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG5cbiAgICAgICAgbGV0IGF0dHIgPSB7cmFkaXVzLCB4LCB5LCBjb2xvciwgdmVsLCBhbmdsZX07XG4gICAgICAgIGNvbnNvbGUubG9nKGF0dHIpXG5cbiAgICAgICAgY29uc3QgYmFsbCA9IG5ldyBNb3ZpbmdPYmoodGhpcy5jdHgsIGF0dHIpO1xuICAgICAgICB0aGlzLmJhbGxzLnB1c2goYmFsbCk7XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYmFsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsc1tpXS5pc0NvbGxpZGluZyh0aGlzLmJhbGxzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lLm9uQ29sbGlzaW9uKHRoaXMuYmFsbHNbaV0sIHRoaXMuYmFsbHNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvbkNvbGxpc2lvbihvYmoxLCBvYmoyKSB7XG4gICAgICAgIGxldCB2Q29sbGlzaW9uID0geyB4OiBvYmoyLnggLSBvYmoxLngsIHk6IG9iajIueSAtIG9iajEueSB9O1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKG9iajIueCAtIG9iajEueCkgKiAob2JqMi54IC0gb2JqMS54KSArIChvYmoyLnkgLSBvYmoxLnkpICogKG9iajIueSAtIG9iajEueSkpO1xuICAgICAgICBsZXQgdkNvbGxpc2lvbk5vcm0gPSB7IHg6IHZDb2xsaXNpb24ueCAvIGRpc3RhbmNlLCB5OiB2Q29sbGlzaW9uLnkgLyBkaXN0YW5jZSB9O1xuXG4gICAgICAgIGxldCB2UmVsYXRpdmVWZWxvY2l0eSA9IHsgeDogb2JqMS52eCAtIG9iajIudngsIHk6IG9iajEudnkgLSBvYmoyLnZ5IH07XG4gICAgICAgIGxldCBzcGVlZCA9IHZSZWxhdGl2ZVZlbG9jaXR5LnggKiB2Q29sbGlzaW9uTm9ybS54ICsgdlJlbGF0aXZlVmVsb2NpdHkueSAqIHZDb2xsaXNpb25Ob3JtLnk7XG5cbiAgICAgICAgbGV0IGltcHVsc2UgPSAyICogc3BlZWQgLyAob2JqMS5tYXNzICsgb2JqMi5tYXNzKTtcblxuICAgICAgICBpZiAoc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIG9iajEudnggLT0gKGltcHVsc2UgKiBvYmoyLm1hc3MgKiB2Q29sbGlzaW9uTm9ybS54KTtcbiAgICAgICAgICAgIG9iajEudnkgLT0gKGltcHVsc2UgKiBvYmoyLm1hc3MgKiB2Q29sbGlzaW9uTm9ybS55KTtcbiAgICAgICAgICAgIG9iajIudnggKz0gKGltcHVsc2UgKiBvYmoxLm1hc3MgKiB2Q29sbGlzaW9uTm9ybS54KTtcbiAgICAgICAgICAgIG9iajIudnkgKz0gKGltcHVsc2UgKiBvYmoxLm1hc3MgKiB2Q29sbGlzaW9uTm9ybS55KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmtlZCgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgLy8gbGV2ZWxVcCgpIHtcblxuICAgIC8vIH1cblxuICAgIHJlc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hlYXRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgICAgICAgICAgYmFsbC5hbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXIuY2hlY2tDb2xsaXNpb25XaXRoQmFsbChiYWxsKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2FyLnZ4fSwgJHt0aGlzLmNhci52eX1gKVxuICAgICAgICAgICAgICAgIEdhbWUub25Db2xsaXNpb24oYmFsbCwgdGhpcy5jYXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2FyLnZ4fSwgJHt0aGlzLmNhci52eX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1vdmluZ09iaiB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBhdHRyKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGF0dHIucmFkaXVzO1xuICAgICAgICB0aGlzLnggPSBhdHRyLng7XG4gICAgICAgIHRoaXMueSA9IGF0dHIueTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGF0dHIuY29sb3I7XG4gICAgICAgIHRoaXMudmVsID0gYXR0ci52ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhdHRyLmFuZ2xlO1xuICAgICAgICB0aGlzLm1hc3MgPSB0aGlzLnJhZGl1cztcblxuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52ZWwgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudmVsICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IFt0aGlzLnZ4LCB0aGlzLnZ5XTtcbiAgICAgICAgdGhpcy54ICs9IGR4O1xuICAgICAgICB0aGlzLnkgKz0gZHk7XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy55IC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmcoYmFsbCkge1xuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSBiYWxsLng7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIGJhbGwueTtcblxuICAgICAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgcmV0dXJuIGQgPCAodGhpcy5yYWRpdXMgKyBiYWxsLnJhZGl1cyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmN0eCk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=