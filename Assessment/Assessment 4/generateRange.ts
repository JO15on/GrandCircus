let range = function generateRange(rangeStart : number, rangeEnd : number) : number[] | undefined {
    if(rangeStart < rangeEnd){
        let array = [rangeStart, rangeEnd];
        let i = 0;
        while (array[i]) {
            array[i]++;
        } return array;
    } else if (rangeStart === rangeEnd){
        return [rangeStart];
    }
}

console.log(range(-5, 4));
console.log(range(4, 4));
console.log(range(3, 6));