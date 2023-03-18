/*
 P.Write a function `bestSum(targetSum,numbers)` that takes in a targetSum and an array of numbers as arguments 

 *The function should return an array containing shortest combination of numbers that add up to exactly the targetSUm.

 *If there is a tie for the shortest combination, u may return any one of the shortest

 bestSum(7,[5,3,4,7]) 
 bestSum(8,[2,3,5]) 

 */

const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    // console.log(targetSum,numbers);

    let shortestCombination = null;

    for (let num of numbers) {
        console.log(num);
        const remainder = targetSum - num;
        // console.log(remainder);
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            // if the combination is shorted than the current "shortest", update it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
};
/*
    Iterative bestSum - > 
    m = target Sum
    n = numbers.length

    Brute Force
    time: O(n^m*m)
    space: O(m*m) or O(m^2)
*/

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

