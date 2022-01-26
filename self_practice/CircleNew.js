///<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    var CircleNew = /** @class */ (function () {
        function CircleNew() {
        }
        CircleNew.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return CircleNew;
    }());
    Drawing.CircleNew = CircleNew;
})(Drawing || (Drawing = {}));
