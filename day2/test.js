const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function isPrime(x) {
        if (x < 2) return false;
        for (let j = 2; j <= Math.sqrt(x); j++) {
            if (x % j === 0) return false;
        }
        return true;
    }
    for (; i > 1; i--) {
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }
}()
