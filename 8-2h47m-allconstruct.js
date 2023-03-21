/*
    *Write a function `allConstruct(target,wordBank)` that accepts a target string and an array of strings.

    *The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

    Each element of the 2D array should represent one combination that constructs the `target`.

    You may reuse elements of `wordBank` as many times as needed.

    allConstruct(abcdef,[ab,abc,cd,def,abcd]) 

    allConstruct(skateboard,[bo,rd,ate,t,ska,sk,boar]) 

    allConstruct('',[cat,dog,mouse]) 

    allConstruct('purple',[purp,p,ur,le,purpl])
    
    // allConstruct('hello',[cat,dog,mouse])
    
    // allConstruct('',[cat,dog,mouse])

*/
//non-optimized
// const allConstruct = (target, wordBank) => {
//     if (target === '') return [[]];
//     const result = [];
//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank);
//             const targetWays = suffixWays.map(way => [word, ...way]);
//             result.push(...targetWays);
//         }
//     }
//     return result;
// };

// optimized
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};

/**
 * m= target.length,  n = wordBank.length.....
 * O(n^m) time ----- O(m) space.
 */

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));