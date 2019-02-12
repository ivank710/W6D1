//version 1
Function.prototype.inherits = function (superClass) {
  //this = Subclass
  let Surrogate = function () {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

//version 2
Function.prototype.inherits = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
}