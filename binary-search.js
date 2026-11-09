
const arr = [2, 5, 8, 12, 16, 23, 38, 45];
const target = 16;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, target)); 



const arr1 = [1, 2, 2, 2, 3, 4, 5, 5, 6];
const target1 = 2;

function countOccurrences(arr, target) {
    let first = -1;
    let last = -1;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            first = mid;
            right = mid - 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    left = 0;
    right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            last = mid;
            left = mid + 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    if (first === -1) {
        return 0;
    }

    return last - first + 1;
}

console.log(countOccurrences(arr1, target1)); 
