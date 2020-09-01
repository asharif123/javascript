// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function sum() {
    for (i = 1; i <= 255; i++) {
        console.log(i)
    }
    
}


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function get_even_1000() {
    var sum = 0
    for (i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    
    }
    console.log(sum)
    
}


// Write a function that returns the sum of all the odd numbers from 1 to 5000
function get_sum_5000() {
    var sum = 0
    for (i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum += i
        }
    }
    console.log(sum)
}

// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sum_array(array) {
    var total = 0
    for (i = 0; i < array.length; i++) {
        total += array[i]
    }
    console.log(total)
}

//  Given an array with multiple values, write a function that returns the maximum number in the array
function max(array) {
    var start = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] > start) {
            start = array[i]
        }
    }
    console.log(start)
}

// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y
function greater_than_Y(array,Y) {
    var total = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > Y) {
            total += 1
        }
    }
    console.log(total)
}




