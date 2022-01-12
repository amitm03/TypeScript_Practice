var temp_new1 = function () {
    console.log("Anonymous function called");
};
temp_new1();
var temp_new2 = function (a, b) {
    return a + b;
};
console.log("Addition is " + temp_new2(2, 3));
var temp_new3 = function () {
    console.log("Fat arrow method called");
};
temp_new3();
var temp_new4 = function (a, b) {
    return a + b;
};
console.log("Addition is " + temp_new4(2, 3));
function add1(a, b) {
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Value of a+b is " + (a + b));
}
add1(8);
add1(2, 8);
