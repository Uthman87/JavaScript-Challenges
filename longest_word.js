// function findLongestWordLength(str) {
//     let wordArray = str.split(' ');
//     let longestWordLength = 0;
//     let longestWord = '';
//     for(word of wordArray) {
//         if(word.length > longestWordLength) {
//             longestWord = word;
//             longestWordLength = word.length;
//         }
//     }
//     return longestWord;
//   }

// function findLongestWordLength(str) {
//     let wordArray = str.split(' ');
//     let longestWordLength = 0;
//     let longestWord = '';
//     for(word of wordArray) {
//         if(word.length > longestWordLength) {
//             longestWord = word;
//             longestWordLength = word.length;
//         }
//     }
//     return longestWord;
//   }

// function findLongestWordLength(str) {
//   let longestWord = str.split(' ').reduce((longest, word) => {
//       return Math.max(longest, word.length);
//   }, 0);

//   return longestWord;
// }


function findLongestWordLength(str) {
    let words = str.split(' ');
    let longest = words.reduce((previous, word) => {
        if(word.length > previous) {
            previous = word.length 
        }
        return previous;
    }, 0);

    return longest;
}  

  console.log( findLongestWordLength("The quick brown fox jumped over the lazy dog"));
