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

const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        console.log(num);
        const remainder = targetSum - num;
        console.log(remainder);

        howSum(remainder,numbers);
    }
};

console.log(howSum(7, [5, 3, 4, 7]));

