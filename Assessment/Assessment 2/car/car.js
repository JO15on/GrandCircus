"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(fuelLevel) {
        if (fuelLevel === void 0) { fuelLevel = 100; }
        this.fuelLevel = fuelLevel;
        this.speed = 0;
        this.engineOn = false;
    }
    Car.prototype.accelerate = function () {
        if (this.fuelLevel >= 1) {
            this.fuelLevel -= 1;
            this.speed += 1;
        }
    };
    Car.prototype.brake = function () {
        if (this.speed >= 0) {
            this.speed -= 1;
        }
    };
    Car.prototype.turnCarOn = function () {
        this.engineOn = true;
    };
    Car.prototype.turnCarOff = function () {
        this.engineOn = false;
    };
    Car.prototype.refillFuel = function () {
        this.fuelLevel = 100;
    };
    return Car;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Plane));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Truck));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Submarine));
exports.default = Car;
