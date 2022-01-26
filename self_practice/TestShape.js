///<reference path="IShape.ts"/>
///<reference path="Circle.ts"/>
///<reference path="Triangle.ts"/>
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.CircleNew());
drawAllShapes(new Drawing.Triangle());
