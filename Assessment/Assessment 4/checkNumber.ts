import { NumberRange } from './NumberRange'

let check = function checkNumber(numberToCheck : number, numberRange : NumberRange ) : boolean {
    if(numberToCheck < numberRange.high && numberToCheck > numberRange.low) {
        return true;
    } else {
        return false;
    }
}

console.log(check(5, {low: 1, high: 10}));
console.log(check(15, {low: 1, high: 10}));