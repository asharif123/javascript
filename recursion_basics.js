// recursive sigma
function sigma(num) {
    if (num < 0) {
        return -1
    }

    else if (num == 0) {
        return 0
    }

    else if (num == 1) {
        return 1
    }

    else if (num > 1){
        var sum = 0
        for (i = 1; i <= num; i++) {
            sum = i + sigma(i-1)

        }
        return sum
    

    }
}

console.log(sigma(3))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, 
// truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(num) {
    if (num <= 0) {
        return 0
    }
    else if (num == 1) {
        return 1
    }

    else {
        var sum = 0
        for (i = 2; i <= num; i++) {
            sum = (i*factorial(i-1))
        }
    }
    return sum
}

console.log(factorial(-1))
console.log(factorial(1))
console.log(factorial(6.5))

function rBinarySearch(arr, value) {
    // BASE CONDITION: If starting index is greater than ending index return false.
// Compute the middle index.
// Compare the middle element with number x. If equal return true.
// If greater, call the same function with ending index = middle-1 and repeat step 1.
// If smaller, call the same function with starting index = middle+1 and repeat step 1.
    var mid = Math.floor(arr.length/2)
    // return mid
    // if starting index greater than ending index, return false
    if (arr[0] > arr[arr.length-1]) {
        return false
    }
    // if middle element is equal to value, return true
    else if (arr[mid] == value) {
        return true
    }
// return true if either starting or ending value is equal to target value
    else if (arr[0] == value || arr[arr.length-1] == value) {
        return true
    }
    // if middle element is greater than value, call from mid -1 and repeat base condition
    else if (arr[mid] > value && arr.length > 1) {
       return rBinarySearch(arr.slice(0,mid),value)

    }

    else if (arr[mid] < value && arr.length > 1) {
        return rBinarySearch(arr.slice(mid,arr.length),value)
    }

    else {
        return false
    }








    // var mid = Math.floor(arr.length/2);
    // // return mid
    // if(arr[mid] == value) {
    //     return true;
    // }
    // else if(value < arr[mid] && arr.length > 1) {
    //     return rBinarySearch(arr.slice(0, mid), value);
    // }
    // else if(value > arr[mid] && arr.length > 1) {
    //     return rBinarySearch(arr.slice(mid, arr.length), value)
    // } else {
    //     return false
    // }
}

console.log(rBinarySearch([1, 3, 5, 6], 4));
console.log(rBinarySearch([3, 4, 6, 5, 12], 5));
// console.log(Math.floor(5/2))