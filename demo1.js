console.log("Welcome to Angular Module...");
console.log('Hello World');
var a = 10;
console.log(a);
console.log("value of a is " + a);
var b;
console.log("Value of b is " + b);
var str;
console.log("value of string is " + str);
str = 's';
console.log("value of string is " + str);
var c;
console.log("Value of c is " + c);
c = 2.5;
console.log("Value of c is " + c);
c = 'Amit';
console.log("Value of c is " + c);
c = true;
console.log("Value of c is " + c);
c = 3;
console.log("Value of c is " + c);
var a1, b1;
console.log(a1 + " " + b1);
var a$b;
console.log(a$b);
var temp = c;
console.log(temp);
var temp2 = c;
console.log(temp2);
function greet(person, date) {
    console.log("Hello " + person + ",today is " + date.toString() + "!");
}
greet("Maddison", new Date());
var obj = { x: 0 };
// obj.foo();
// obj();
obj.bar = 100;
obj = "hello";
var n = obj;
var myName = "Alice";
console.log(myName);
var myName2 = "In Wonderland";
console.log(myName2);
function greet1(name) {
    return "Hello , " + name.toUpperCase() + " !! ";
}
// greet1(12);
console.log(greet1("Amit"));
function getFavoriteNumber() {
    return 3;
}
console.log(getFavoriteNumber());
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log("The coordinate of x value is " + pt.x);
    console.log("The coordinate of y value is " + pt.y);
}
printCoord({ x: 3, y: 4 });
function printName(obj) {
    console.log("The first value is " + obj.first);
    console.log("The last value is " + obj.last);
}
printName({ first: "Bob" });
// printName({first:"Alice",last:"Alisson"})
function printId(id) {
    console.log("Your ID is " + id);
    if (typeof id === "string") {
        console.log(id.toUpperCase);
    }
    else {
        console.log(id);
    }
}
printId(101);
printId("202");
printId({ myID: 22342 });
