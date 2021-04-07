var carImage = new Image();
carImage.src = "";

function Vector(p1, p2) {
  this.x = p1.x - p2.x;
  this.y = p1.y - p2.y;

  this.normalize = function () {
    var norm = this;
    return { x: norm.x / norm.length(), y: norm.y / norm.length() };
  };
  this.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
}

var canvas = document.createElement("canvas");
var w = (canvas.width = 1600);
var h = (canvas.height = 1000);
var c = canvas.getContext("2d");
document.body.appendChild(canvas);

var rotateLeft = false;
var rotateRight = false;
var accelerate = false;
var decelerate = false;
var carBreak = false;

document.onkeydown = function (e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      rotateLeft = true;
      break;
    case 39:
      rotateRight = true;
      break;
    case 38:
      accelerate = true;
      car.speed += car.acceleration;
      break;
    case 40:
      decelerate = true;
      car.speed -= car.acceleration;
      break;
    case 32:
      carBreak = true;
      if (car.speed != 0) {
        car.speed -= 1.2;
        if (car.speed < 0) car.speed = 0;
      }
      break;
  }
};
document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 37:
      rotateLeft = false;
      break;
    case 39:
      rotateRight = false;
      break;
    case 38:
      accelerate = false;
      break;
    case 40:
      decelerate = false;
      break;
    case 32:
      carBreak = false;
      break;
  }
};
document.getElementById("stop").onmousedown = function () {
  console.log(animationId);
  window.cancelAnimationFrame(animationId);
};

function Wheel(pivot, x, y) {
  this.xPos = x;
  this.yPos = y;
}
function Car() {
  this.wheelRotationStep = 2;
  this.wheelMaxAngle = 45;
  this.wheelAngle = 40;
  this.width = 100;
  this.height = 200;
  this.x = 350;
  this.y = 60;
  this.pivot = { x: this.x + 50, y: this.y + 20 };
  this.frontPivot = { x: 0, y: 0 };
  this.rearPivot = { x: 0, y: 160 };
  this.rotation = 90;
  this.directionPivot = { x: this.frontPivot.x, y: this.frontPivot.y - 50 };
  this.rearPivotAbs = {
    x: 160 * Math.cos(((this.rotation + 90) * Math.PI) / 180) + this.pivot.x,
    y: 160 * Math.sin(((this.rotation + 90) * Math.PI) / 180) + this.pivot.y,
  };
  this.tempDirPivot = { x: 0, y: 0 };
  this.wheels = [];
  this.wheels.push(new Wheel(this.pivot, -50, 0));
  this.wheels.push(new Wheel(this.pivot, 50, 0));
  this.wheels.push(new Wheel(this.pivot, -50, 160));
  this.wheels.push(new Wheel(this.pivot, 50, 160));
  this.speed = 0;
  this.acceleration = 0.2;
  //console.log(this.directionPivot, this.frontPivot);
  this.direction = new Vector(this.directionPivot, this.frontPivot).normalize();
  this.updateDirection = function () {
    this.direction = new Vector(
      this.directionPivot,
      this.frontPivot
    ).normalize();
    this.direction.x *= this.speed;
    this.direction.y *= this.speed;

    //console.log('direction = '+this.direction);
  };
  this.drawWheels = function () {
    for (var i = 0; i < this.wheels.length; i++) {
      var o = this.wheels[i];
      if (rotateLeft) {
        if (this.wheelAngle > -this.wheelMaxAngle)
          this.wheelAngle = this.wheelAngle - this.wheelRotationStep;
      }
      if (rotateRight) {
        if (this.wheelAngle < this.wheelMaxAngle)
          this.wheelAngle = this.wheelAngle + this.wheelRotationStep;
      }
      c.save();
      /* Car Rotation */
      c.translate(this.pivot.x, this.pivot.y);
      c.rotate((this.rotation * Math.PI) / 180);
      /* Wheel Rotation */
      c.translate(o.xPos, o.yPos);
      if (i < 2) {
        /* Only front wheels are rotating */
        c.rotate((this.wheelAngle * Math.PI) / 180);
      }
      c.fillStyle = "red";
      c.fillRect(-6, -15, 12, 30);
      c.restore();
    }
    this.directionPivot.x =
      50 * Math.cos(((this.wheelAngle + this.rotation - 90) * Math.PI) / 180) +
      this.frontPivot.x;
    this.directionPivot.y =
      50 * Math.sin(((this.wheelAngle + this.rotation - 90) * Math.PI) / 180) +
      this.frontPivot.y;

    this.tempDirPivot.x =
      50 * Math.cos(((this.wheelAngle - 90) * Math.PI) / 180) +
      this.frontPivot.x;
    this.tempDirPivot.y =
      50 * Math.sin(((this.wheelAngle - 90) * Math.PI) / 180) +
      this.frontPivot.x;

    this.updateDirection();
  };
  this.drawCar = function () {
    this.drawWheels();
    c.save();
    c.translate(this.pivot.x, this.pivot.y);
    c.rotate((this.rotation * Math.PI) / 180);

    /*var d = lineDistance({x:this.directionPivot.x, y:this.directionPivot.y}, this.pivot);
    
    this.x = d * Math.cos((this.wheels[0].rotation-90)*Math.PI/180)+this.frontPivot.x;
    this.y = d * Math.sin((this.wheels[0].rotation-90)*Math.PI/180)+this.frontPivot.y;*/

    //c.fillStyle="rgba(126,126,126,.5)";
    //c.fillRect(-50,-20, this.width, this.height);
    c.drawImage(carImage, -50, -20);

    c.beginPath();

    c.moveTo(this.frontPivot.x - 50, this.frontPivot.y);
    c.lineTo(this.frontPivot.x + 50, this.frontPivot.y);
    c.moveTo(this.rearPivot.x - 50, this.rearPivot.y);
    c.lineTo(this.rearPivot.x + 50, this.rearPivot.y);
    c.moveTo(this.frontPivot.x, this.frontPivot.y);
    c.lineTo(this.rearPivot.x, this.rearPivot.y);

    c.moveTo(this.frontPivot.x, this.frontPivot.y);
    c.lineTo(this.tempDirPivot.x, this.tempDirPivot.y);
    c.strokeStyle = "#000";
    c.stroke();

    //c.fillStyle='#fff';
    //c.fillRect(this.directionPivot.x, this.directionPivot.y, 2, 2);
    c.restore();
  };
  this.move = function () {
    if (accelerate) car.speed += car.acceleration;
    else if (car.speed > 0) {
      car.speed -= car.acceleration;
    }
    if (decelerate) car.speed -= car.acceleration;
    else if (car.speed < 0) {
      car.speed += car.acceleration;
    }
    if (carBreak) {
      if (car.speed != 0) {
        car.speed -= 1.2;
        if (car.speed < 0) car.speed = 0;
      }
    }
    //console.clear();
    //console.log(this.direction);
    this.pivot.x += this.direction.x;
    this.pivot.y += this.direction.y;

    //console.clear();

    var v = new Vector(this.pivot, this.rearPivotAbs);
    var rotation = (Math.atan2(-v.y, v.x) * 180) / Math.PI;
    rotation += 180;
    rotation = 360 - rotation - 90;
    this.rotation = rotation;

    var rearPivotAbs = {
      x: 160 * Math.cos(((this.rotation + 90) * Math.PI) / 180) + this.pivot.x,
      y: 160 * Math.sin(((this.rotation + 90) * Math.PI) / 180) + this.pivot.y,
    };
    this.rearPivotAbs = rearPivotAbs;

    //console.log(this.pivot, rearPivotAbs, rotation);
    //console.log(rearPivotAbs);
  };
}

var car = new Car();

var gui = new dat.GUI();
gui.add(car, "rotation", 0, 360);
gui.add(car, "speed", 0, 1);
gui.add(car, "wheelAngle", -45, 45);
var loop = function () {
  c.fillStyle = "black";
  c.fillRect(0, 0, w, h);
  car.move();
  car.drawCar();
};

(function () {
  var lastTime = 0;
  var vendors = ["webkit", "moz"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();

(function animloop() {
  window.animationId = window.requestAnimationFrame(animloop);
  loop();
})();
