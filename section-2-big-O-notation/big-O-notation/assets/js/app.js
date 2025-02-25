// how to run a sum up code

// first way, with a sum array 
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total
// }

// the second way
function addUpTo(n) {
    return n * (n + 1) / 2;
}


const t1 = performance.now();
console.log(addUpTo(100000000))
const t2 = performance.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`)