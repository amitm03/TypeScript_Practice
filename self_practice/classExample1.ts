class Car{

    engine:string

    constructor(engine:string){
        this.engine=engine
    }

    disp():void{
        console.log("Engine is "+this.engine)
    }
}

var obj=new Car("Engine 1")

console.log("Reading attribute value , Engine as :"+obj.engine)

obj.disp();