"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myVar;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._counter = 0;
        this.test = 1;
    }
    MyClass.prototype.get = function () {
        return this._counter;
    };
    MyClass.prototype.incr = function () {
        this._counter++;
        return true;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
