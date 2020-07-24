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