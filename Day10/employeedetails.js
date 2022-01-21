"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, salary, r) {
        this.fname = f;
        this.lname = l;
        this.salary = salary;
        this.dept = new department_1.Department(r);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n            --------Employee DEtails-------\n            First name :: " + this.fname + "\n            Last name :: " + this.lname + "\n            Salary :: " + this.salary + "\n            Department :: " + this.dept.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
