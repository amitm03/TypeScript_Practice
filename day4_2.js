function add1() {
    console.log("1. Function without argument & without return type");
}
add1();
function add2(a, b) {
    console.log("2. Function with argument & without return type");
    console.log("Addition is " + (a + b));
}
add2(2, 3);
function add3() {
    console.log("3. Function without argument & with return type");
    return (10 + 2);
}
var temp1 = add3();
console.log(temp1);
function add4(a, b) {
    console.log("4. Function with argument & with return type");
    return (a + b);
}
var temp3 = add4(8, 9);
console.log("Addition is =>" + add4(4, 5));
console.log("Temp1 value is " + temp3);
