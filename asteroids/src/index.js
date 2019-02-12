const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 500;
canvasEl.height = 500;


console.log("Webpack is working!");


const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;