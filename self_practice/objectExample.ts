var person={
    firstname:"The",
    lastname:"Batman"
};

console.log(person.firstname)
console.log(person.lastname)

var person1 = {
    firstname:"Amit",
    lastname:"Mishra",
    sayHello:function(){

    }
}

person1.sayHello=function(){
    console.log("Hello "+person1.firstname)
}

person1.sayHello()

var person2 = {
    firstname:"Tom",
    lastname:"Hanks"
};

var invokeperson = function(obj:{
        firstname:string,
        lastname:string
    }){
        console.log("First name :"+obj.firstname)
        console.log("Last name :"+obj.lastname)
    }


invokeperson(person2)

var invokeperson2 = function(obj:{
    firstname:string,
    lastname:string
}){
    console.log("First name :"+obj.firstname)
    console.log("Last name :"+obj.lastname)
}

invokeperson2({firstname:"Amit",lastname:"Mishra"})
invokeperson2({firstname:"Test",lastname:"New"})

interface IPoint{
    x:number,y:number
}

function addPoints(p1:IPoint,p2:IPoint):IPoint{
    var x = p1.x+p2.x
    var y = p1.y+p2.y

    return {
        x:x,
        y:y
    }
}

var newPoint = addPoints({x:3,y:4},{x:5,y:1})

var newPoint2 = addPoints({x:1},{x:4,y:3})