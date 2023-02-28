
// 2-38m // Grid Traveller

/*
    **Q.->  Say that, u r a traveler on a 2D grid. u begin in the top-left corner and your goal is to travel
     to the bottom-right corner. u may only move down or right.

     * In how many ways can you travel to the goal on a grid with dimensions m * n?
     * Write a function `gridTraveler(m,n)` that calculates this.
*/

/* 
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// time com - O(2^n+m)  -- space com -- O(n+m)
// now, let's improve the time
*/


// memoized code
// memo obj in the parameter
const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    // memo checking obj -- are the args in the memo
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
    return memo[key];
};

// m=42 
// n = 3

// key = 4,23


console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));