"use strict";
exports.__esModule = true;
var check = function checkNumber(numberToCheck, numberRange) {
    if (numberToCheck < numberRange.high && numberToCheck > numberRange.low) {
        return true;
    }
    else {
        return false;
    }
};
console.log(check(5, { low: 1, high: 10 }));
console.log(check(15, { low: 1, high: 10 }));
