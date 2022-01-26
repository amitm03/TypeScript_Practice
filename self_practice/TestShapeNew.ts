import shape = require("./IShapeNew")
import circle = require("./CircleNewNew")
import triangle = require("./TriangleNewNew")

function drawAllShapes(shapeToDraw:shape.IShapeNew){
    shapeToDraw.draw()
}

drawAllShapes(new circle.classNewNew())
drawAllShapes(new triangle.TriangleNewNew())