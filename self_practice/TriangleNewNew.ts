import shape = require('./IShapeNew')
export class TriangleNewNew implements shape.IShapeNew{
    draw() {
        console.log("Triangle is drawn(external module)")
    }
}