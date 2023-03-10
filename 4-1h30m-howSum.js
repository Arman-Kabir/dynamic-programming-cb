// Write a function `howSum(targetSum,numbers)` that takes in a targetSum and an array of numbers
//  as arguments.
/*
    The function should return an array containing any combination of elements that add ip to 
    exactly the targetSum.If there is no combination that adds up to the targetSUm,
     then return null

     *If there are multiple combinations possible, u may return any single one.

     *similar to canSum,

     howSum(8,[2,3,5]) -> [3,5]
     howSum(7,[5,3,4,7]) -> [3,4]
     howSum(7,[2,4]) -> null
     howSum(0,[1,2,3]) ->[]
*/

/*
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        console.log(num);
        const remainder = targetSum - num;
        console.log(remainder);

        const remainderResult = howSum(remainder, numbers);

        if (remainderResult !== null) {
            return [ ...remainderResult, num ];
        }
    }
    return null;
};
*/

/* m = targetSum
    n = numbers.length

    Brute Force
    time:O(n^m * m)
    space: O(m)

*/
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2,3]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300, [7,14]));

// memoized howSum
const howSum = (targetSum, numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        console.log(num);
        const remainder = targetSum - num;
        console.log(remainder);

        const remainderResult = howSum(remainder, numbers,memo);

        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
/*
    memoized:
    time: O(n*m*m)
    space:O(m^2)
*/

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2,3]));
console.log(howSum(7,[2,4]));
console.log(howSum(8,[2,3,5]));
console.log(howSum(300, [7,14]));

