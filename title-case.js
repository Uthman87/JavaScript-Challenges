function titleCase(str) {
    let strArray = str.split(' ');
    let newStrArr = [];
    for (word of strArray) {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        newStrArr.push(word);
    }
    return newStrArr.join(' ')
}
  
console.log(titleCase("sHoRt AnD sToUt"));