// 直接给定数据
const i = 8; // 这里把20换成你想要的数字
// console.log(Math.sqrt(i))
// console.log(Math.sqrt(i-1))

function isPrime(x) {
    if (x < 2) return false;
    for (let j = 2; j <= Math.sqrt(x); j++) {
        if (x % j === 0) return false;
    }
    return true;
}

for (let n = i; n > 1; n--) {
    if (isPrime(n)) {
        console.log(n);
        break;
    }
}
// for(let n= i;n>1;n--){
//     if(isPrime(n)){
//         console.log(n);
//         break
//     }
// }