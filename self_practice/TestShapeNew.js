"use strict";
exports.__esModule = true;
var circle = require("./CircleNewNew");
var triangle = require("./TriangleNewNew");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.classNewNew());
drawAllShapes(new triangle.TriangleNewNew());
