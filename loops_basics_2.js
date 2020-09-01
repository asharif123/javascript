// Print out all odd numbers from 1 to 20
for (i = 1; i < 21; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
var num = 0
for (i = 1; i <= 5; i++) {
    num += i
}
console.log(num)