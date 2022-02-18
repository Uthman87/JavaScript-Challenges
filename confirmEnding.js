// function confirmEnding(str, target) {
//    if(str.substring(str.length - target.length) === target) {
//        return true;
//    }
//    return false;
// }

// function confirmEnding(str, target) {
//     if(str.slice(str.length - target.length) === target) {
//         return true;
//     }
//     return false;
// }


// function confirmEnding(str, target) {
//     return str.slice(str.length - target.length) === target;
// }


function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Congratulation", "on"));

// confirmEnding("Congratulation", "on")