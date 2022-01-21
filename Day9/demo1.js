"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(f, l, id) {
        this.fname = f;
        this.lname = l;
        this.id = id;
    }
    MyClass.prototype.display = function () {
        console.log("\n            First name :: " + this.fname + "\n            Last name :: " + this.lname + "\n            id :: " + this.id + "\n            ");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
function add(a, b) {
    return a + b;
}
exports.add = add;
exports.pi = 3.14;
