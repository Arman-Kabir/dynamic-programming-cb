/*
    *Write a function `canConstruct(target,wordBank)` that accepts a target string and an array of strings.

    *The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

    You may reuse elements of `wordBank` as many times as needed.

    canConstruct(abcdef,[ab,abc,cd,def,abcd]) -> true

    canConstruct(skateboard,[bo,rd,ate,t,ska,sk,boar]) -> false

    canConstruct('',[cat,dog,mouse]) -> true
*/

const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        console.log(word);

        if (target.indexOf(word) === 0) {
            console.log(target.indexOf(word), target, word);

            const suffix = target.slice(word.length);
            console.log(suffix);

            if (canConstruct(suffix, wordBank) === true) {
                return true;
            };
        }
    }
    return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
// ]));