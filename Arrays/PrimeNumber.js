let num = 3;

// console.log(isPrime(num));

var isPrime = (num) => {
    let Neededlenth = Math.floor(Math.sqrt(num));
    // console.log(Neededlenth);

    for (let i = 2; i <= Neededlenth; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

if (isPrime(num)) {
    console.log("Prime");
} else {
    console.log("Not prime");
}
