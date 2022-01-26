class Circle extends Shape{
    disp():void{
        console.log("Area of the circle is "+this.Area)
    }
}

var obj1 = new Circle(223)
obj1.disp()