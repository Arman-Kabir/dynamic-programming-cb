
// Write a function `canSum(targetSum,numbers)` that takes in a targetSum and
// an array of numbers as arguments.
/*
    The function should return a boolean indicating whether or not it is possible to generate the
     targetSum using numbers from the array.

     U ay use an element of the array as many times as needed

     u may assume that all input numbers are non-negative

     *Let's understand the problem ---
        canSum(7,[5,3,4,7]) -> true
        
        canSum(7,[2,4]) -> false 
*/

// const canSum = (targetSum, numbers) => {
//     if (targetSum === 0) return true;

//     if (targetSum < 0) return false;

//     for (let num of numbers) {
//         console.log(num);
//         const remainder = targetSum - num;

//         if (canSum(remainder, numbers) === true) {
//             return true;
//         }
//     }
//     return false;

// };

// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 4])); // false
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false

/*
    canSum -- Time com -- O(n^m) ,, space -- O(m)
*/


// memoized canSum
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;

    if (targetSum < 0) return false;

    for (let num of numbers) {
        console.log(num);
        const remainder = targetSum - num;

        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;

};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14]));

// memoized canSum -- time com -- O(m*n) time,, space -- O(m) space
