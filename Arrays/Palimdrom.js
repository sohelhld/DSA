// //palimdrom Number

// let number = 12321;

// let reverseNumber = 0;

// while (number !== 0) {
//     let lastDigit = number % 10;
//     // console.log(lastDigit);

//     let newNumber = Math.floor(number / 10);
//     // console.log(newNumber * 10);
//     number = newNumber;

//     reverseNumber = reverseNumber * 10 + lastDigit;
//     console.log(reverseNumber);
// }

// 0=0*10 + 1 //1

let num = 10101;
let manupulatedNumber = num;

let reverseNumber = 0;

while (num !== 0) {
    let lastDigit = num % 10;
    // console.log(lastDigit);

    let newNumber = Math.floor(num / 10);
    // console.log(newNumber);
    num = newNumber;

    reverseNumber = reverseNumber * 10 + lastDigit;
}
console.log(reverseNumber);
console.log(manupulatedNumber);
if (reverseNumber === manupulatedNumber) {
    console.log("Palimdrom");
} else {
    console.log("Not Palimdrom");
}
