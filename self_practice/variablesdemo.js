var name1 = "Amit";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name :" + name1);
console.log("Score 1 :" + score1);
console.log("Score 2 :" + score2);
console.log("Score sum :" + sum);
//Type assertion
var str = '1';
var str2 = str;
console.log(typeof (str2));
var num = 2;
console.log("Value of num :" + num);
// num="12"
console.log(num);
//scopes
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num:" + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num :" + obj.num_val);
