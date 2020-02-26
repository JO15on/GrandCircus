var range = function generateRange(rangeStart, rangeEnd) {
    if (rangeStart < rangeEnd) {
        var array = [rangeStart, rangeEnd];
        var i = 0;
        while (array[i]) {
            array[i]++;
        }
        return array;
    }
    else if (rangeStart === rangeEnd) {
        return [rangeStart];
    }
};
console.log(range(-5, 4));
console.log(range(4, 4));
console.log(range(3, 6));
