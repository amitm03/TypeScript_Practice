//1. Function definition
function test() {
    console.log("Function called");
}
//2. Calling function
test();
//3. Function with return value
function greet() {
    return "Hello World";
}
console.log(greet());
function caller() {
    var msg = greet();
    console.log(msg);
}
caller();
//4.Parametrised method
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
test_param(123, "This is a string");
//5.Optional parameters
function disp_details(id, name, mail_id) {
    console.log("ID :" + id);
    console.log("Name :", name);
    console.log("Email id :" + mail_id);
}
disp_details(123, "Amit");
disp_details(111, "Mona", "amit@test.com");
//6.Rest Parameter
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum of the numbers :" + sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//7. Default parameters
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount " + discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//8.Anonymous function
var msg = function () {
    return "Hello World2";
};
console.log(msg());
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//9. Function constructor
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(4, 3);
console.log(x);
//10. Recursion
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));
//11.Lambda function/fat arrow function
var foo = function (x) { return 10 + x; };
console.log(foo(100));
//12.Lambda statemtnt
var foo2 = function (x) {
    x = 10 + x;
    console.log(x);
};
foo2(120);
//13. Parameter type interface
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is string");
    }
};
func(12);
func("Amit");
//14.Optional parentheses for a single parameter
var display = function (x) {
    console.log("The function got " + x);
};
display(12);
//15.Optional braces for a single statement, Empty parentheses for no parameter
var disp = function () {
    console.log("Function invoked");
};
disp();
function disp1(x, y) {
    console.log(x);
    console.log(y);
}
disp1("abc");
disp1(1, "xyz");
