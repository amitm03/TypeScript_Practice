interface IParent1{
    v1:number
}

interface IParent2{
    v2:number
}

interface Child extends IParent1,IParent2{

}

var IObj:Child={
    v1:12,
    v2:23
}

console.log("Value 1 :"+this.v1+", value 2:"+this.v2)