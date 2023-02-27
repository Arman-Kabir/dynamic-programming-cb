/*
// Classic recursive implementation
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1)+fib(n-2);
}
// Classic recursive implementation time complexity - 2^n.

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// console.log(fib(50));  // that has an exponential time complexity

*/



// The pattern of overlapping subproblems is known as dynamic programming.
// Classic recursive implementation has an exponential time complexity.
// TO optimize it we need to do memoization. Memoization is actually one of the overarching
//  strategies we can use to solve any dynamic programming problems.

// *****Using memoization I'm looking to do is store some duplicate subproblems.. That way ,
//  I can just get those results later on. For this, we need to use some sort of a fast access
//  data structure usually like hash map . That is Object in JS


// ***** Js object, keys in the obj will be argument to fn, value will be the return value
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n <= 2) return 1;
    memo[n] = fib(n - 1,memo) + fib(n - 2,memo);
    return memo[n];
}

console.log(fib(10));
console.log(fib(10));
console.log(fib(10));
console.log(fib(50));

// fib memoized complexity -- O(n),, space com -- O(n)




/*

const foo = (n) => {
    if (n <= 1) return;
    foo(n - 1);
}
// Time complexity of recursive foo is O(n) , space complexity - O(n)
// ***** When we analyze the space complexity of our recursive functions, we should include
//  any of the additional stack space that our function calls take up .
// ***When we make a recursive call,we add that to the call stack, and those must be tracked by our computer.


const bar = (n) => {
    if (n <= 1) return;
    bar(n - 2);
}
*/
// time com -- O(n/2),,, space com - O(n)
// According to Big-O we can remove any multiplicative constants when we have a time complexity.
// So, N over two is the same as one half times n. this simplifies nicely - O(n) time complexity.

/*
const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n - 1);

};
// time com - O(2^n) ,,, space com -- O(n)



const lib = (n) => {
    if (n <= 1) return;
    lib(n - 2);
    lib(n - 2);

};
// time com -- O(2^n/2) =>O(2^n) ... space com -- O(n/2)=>O(n)

*/

// fib(50)~~2^50 steps
// equals to -- 1,125,899,906,842,624 -> quite literally a quadrillion steps