import shape = require('./IShapeNew')

export class classNewNew implements shape.IShapeNew{
    draw(){
        console.log("Circle is drawing (external module)")
    }
}