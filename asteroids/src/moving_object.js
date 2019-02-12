function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObect.prototype.draw = function(ctx) {
  var c = document.getElementById("game-canvas");
  var 
  ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}


module.exports = MovingObject