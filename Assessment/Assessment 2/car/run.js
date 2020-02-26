"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = __importDefault(require("./car"));
var myCar = new car_1.default(60);
myCar.refillFuel();
myCar.turnCarOn();
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.turnCarOff();
console.log(myCar);
