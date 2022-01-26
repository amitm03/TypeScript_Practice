class Root{
    str:string;
}

class Child extends Root{

}

class Leaf extends Child{

}

var obj3 = new Leaf()
obj3.str="Batman"
console.log(obj3.str)