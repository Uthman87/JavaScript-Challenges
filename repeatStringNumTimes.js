function repeatStringNumTimes(str, num){
    let repeatedString = '';
    while (num > 0) {
        repeatedString = repeatedString.concat(str);
        num--
    }
    return repeatedString;
}

console.log(repeatStringNumTimes("*", 0));