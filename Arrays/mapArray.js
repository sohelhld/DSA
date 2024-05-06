let arr = [1, 2, 3, 4, 5];

let ans = arr.map((elm, index) => {
    return elm * 2;
});

console.log(ans);

let filterArr = arr.filter((elm, index) => {
    return elm % 2 === 0;
});

console.log(filterArr);

let reduceArray = arr.reduce((acc, elm) => {
    acc = acc + elm;
    return acc;
}, 0);

console.log(reduceArray);
