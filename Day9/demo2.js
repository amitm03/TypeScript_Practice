"use strict";
exports.__esModule = true;
var demo1_1 = require("./demo1");
var Obj = new demo1_1.MyClass("Bruce", "Wayne", 9);
Obj.display();
var res = (0, demo1_1.add)(2, 3);
console.log("Result is " + res);
console.log("Pi value is " + demo1_1.pi);
