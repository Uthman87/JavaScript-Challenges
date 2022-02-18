function largestOfFour(arr) {
    let maxNumber = 0;
    let largestNumbers = [];
    
    for(let nArr of arr) {
        maxNumber = nArr.reduce((accumulator, current) => {
            return Math.max(accumulator, current);
        });

        largestNumbers.push(maxNumber);
    }

    return largestNumbers;
}
  
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

