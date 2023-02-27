
/*
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1)+fib(n-2);
}
// Classic recursive implementation time complexity - 2^n.

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// console.log(fib(50)); 


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

