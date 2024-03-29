/**
 Write a function `countConstruct(target,wordBank)` that accepts a target string and an array of strings.

    *The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

    You may reuse elements of `wordBank` as many times as needed.

    countConstruct(abcdef,[ab,abc,cd,def,abcd]) -> true

    countConstruct(skateboard,[bo,rd,ate,t,ska,sk,boar]) -> false

    countConstruct('',[cat,dog,mouse]) -> true
    
    countConstruct('purple',[purp,p,ur,le,purpl]) -> true
    
*/

const countConstruct = (target, wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        //    console.log(word); 
        // console.log(target.indexOf(word));

        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank,memo);
            totalCount +=numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

/*
    Brute Force - O(n^m*m) time,O(m^2) space.... Memoized - O(n*m^2) time,M(m^2) space
*/

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
]));