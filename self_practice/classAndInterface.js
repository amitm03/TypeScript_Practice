var AgriLoan = /** @class */ (function () {
    function AgriLoan(interset, rebate) {
        this.interest = interset;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj7 = new AgriLoan(10, 1);
console.log("Interest is " + obj7.interest + ", Rebate is " + obj7.rebate);
