//sum - version 1
function sum() {
  let nums = Array.from(arguments);
  let result = 0;

  nums.forEach(el => {
    result += el;
  });

  return result;
}

//sum - version 2
function sum(...arr) {
  let result = 0;

  arr.forEach(el => {
    result += el;
  });

  return result;
}

//myBind - version 1
Function.prototype.myBind = function (ctx, ...args) {
  return () => {
    this.apply(ctx, args);
  }
}

//myBind - version2
Function.prototype.myBind = function (ctx) {
  let that = this;
  return function (...args) {
    that.apply(ctx, args);
  }
}

//myBind - final version
Function.prototype.myBind = function (ctx, ...args) {
  let bindTimeArgs = args;
  let that = this;
  return function (...callTimeArgs) {
    let args = bindTimeArgs.concat(callTimeArgs);
    that.apply(ctx, args);
  }
}

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce(function (a, b) { return a + b; }, 0);
    } else {
      return _curriedSum;
    }
  }
}


Function.prototype.curry = function (numArgs) {
  let store = [];
  let that = this;

  return function _curry(passedArgs) {
    store.push(passedArgs);

    if(store.length === numArgs) {
      //return that(...store);
      return that.apply(that, store);
    } else {
      return _curry;
    }
  }

}