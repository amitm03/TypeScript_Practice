//Push & Pop
var a = [];
console.log(a);
a.push(45);
console.log(a);
a.push(66, 78, 21);
console.log(a);
var temp = a.pop();
console.log(a);
console.log("Popped value is " + temp);
//Splice
a.splice(3, 1);
console.log(a);
a.splice(2, 2);
console.log(a);
a.splice(0, 2, 66, 90);
console.log(a);
a.splice(1, 2, 100);
console.log(1, 2, 100);
console.log(a);
var b = ['Angular 8', 'React JS', 'VueJS', 'JSP', 'Android', 'Core JAva', 'Spring boot'];
var str = b.slice(1, 6);
console.log("Original data :" + b);
console.log("Copies Data :" + str);
var str1 = b.slice(2);
console.log("Copied Data :" + str1);
