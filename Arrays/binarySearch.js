let arr = [1, 2, 3, 5, 6, 7, 8];
let k = 5;

let i = 0;
let j = arr.length - 1;

while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === k) {
        console.log(mid);
        break;
    } else if (arr[mid] < k) {
        i = mid + 1;
    } else if (arr[mid] > k) {
        j = mid - 1;
    }
}
