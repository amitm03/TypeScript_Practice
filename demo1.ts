console.log("Welcome to Angular Module...");
console.log('Hello World');

var a:number=10;
console.log(a);
console.log(`value of a is ${a}`);

var b:number;
console.log("Value of b is "+b);

var str:string;
console.log("value of string is "+str);
str='s';
console.log("value of string is "+str);

var c:any;
console.log("Value of c is "+c)
c=2.5
console.log("Value of c is "+c)
c='Amit'
console.log("Value of c is "+c)
c=true
console.log("Value of c is "+c)
c=3
console.log("Value of c is "+c)

var a1,b1;
console.log(a1+" "+b1);
var a$b;
console.log(a$b);
var temp=(<string> c);
console.log(temp);
var temp2 = (c as string);
console.log(temp2);

function greet(person:string,date:Date){
    console.log(`Hello ${person},today is ${date.toString()}!`)
}

greet("Maddison",new Date());

let obj:any={x:0};
// obj.foo();
// obj();
obj.bar=100;
obj="hello";
const n:number=obj;


let myName:string ="Alice";
console.log(myName);

let myName2="In Wonderland";
console.log(myName2);

function greet1(name:string){
    return "Hello , "+name.toUpperCase()+" !! ";
}

// greet1(12);
console.log(greet1("Amit"));

function getFavoriteNumber():number{
    return 3;
}

console.log(getFavoriteNumber());

const names=["Alice","Bob","Eve"];
names.forEach((s)=>{
    console.log(s.toUpperCase());
})

function printCoord(pt:{x:number,y:number}){
    console.log("The coordinate of x value is "+pt.x);
    console.log("The coordinate of y value is "+pt.y);
}

printCoord({x:3,y:4})

function printName(obj:{first:string;last?:string}){
    console.log("The first value is "+obj.first);
    console.log("The last value is "+obj.last);
}

printName({first:"Bob"})
// printName({first:"Alice",last:"Alisson"})

function printId(id:number|string){
    console.log("Your ID is "+id);

    if(typeof id==="string"){
        console.log(id.toUpperCase)
    }else{
        console.log(id)
    }
}
printId(101)
printId("202")
// printId({myID:22342})


function welcomePeople(x:string[]|string){
    if(Array.isArray(x)){
        console.log("Hello ,"+x.join(" and "));
    }else{
        console.log("Welcome lone traveller "+x)
    }
}

function getFirstThree(x:number[]|string){
    return x.slice(0,3);
}