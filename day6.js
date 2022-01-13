var numbers = [1, 2, 3, 2, 4, 5, 3];
// for(let i=0;i<numbers.length;i++){
//     for(let j=0;j<numbers.length;j++){
//         console.log(numbers[i]+" , "+numbers[j])
//         if(numbers[i]==numbers[j]){
//             console.log("Duplicate values "+numbers[i]+", "+numbers[j])
//         }else{
//             console.log("Distinct values "+numbers[i]+", "+numbers[j])
//         }
//     }
// }
var a1 = [2, 3, 4, 5];
var a2 = ['angular 8', 'React JS', 'Vue JS', 'EmberJS'];
var a3 = [];
var a4 = [];
var a5 = [2.5, 'Sumit', true, 'Angular 8'];
for (var i = 0; i < a1.length; i++) {
    console.log("a1[" + i + "]=" + a1[i]);
}
console.log("Array value is " + a1);
console.log("Array value is " + a1.join('$'));
console.log("Array value is " + a1.join(' '));
//foreach
a1.forEach(function (myvalue, i, s1) {
    console.log("Value is " + myvalue + ", Index is " + i);
    console.log(s1 + "----------");
});
//Rest PArameter
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
display(2, 11, 32);
display(2, 11, 32, 77, 88, 99, 100);
display();
function display1(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("Value of a is " + a);
    console.log(item);
}
display1("Sumit", 4, 5, 6, 7);
