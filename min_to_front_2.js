// var arr = [1,2,3,4,5]

// function reverse(arr) {
//     for (i = 0; i < arr.length/2; i++) {
//         var temp = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp
//     }
//     return arr
// }

// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions
// DO NOT MAKE NEW ARRAY, USE EXISTING ARRAY
// 

function filterRange(arr,min,max){
    var index = 0
    var count = 0
    // count returns number of times we need to pop values
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[index] = arr[i]
            index++
            
        }
        // if values are NOT in range, keep count of number of values that need to be removed!
        else {
            count++
        }
    }
    for (i = 0; i < count; i++) {
        arr.pop()
    }
    return arr
}
// 32,32,21,513
// 32,21,21,513
// 32,21,21

arr = [12,11,41,53,13,79]
min = 10
max = 30
console.log(filterRange(arr,min,max))

// function concat(first_arr,second_arr) {
//     for (i = 0; i < second_arr.length; i++) {
//         first_arr.push(second_arr[i])
//     }
//     return first_arr
// }

// // first_arr = ['a','b']
// // second_arr = [1,2]
// // console.log(concat(first_arr,second_arr))

// // arr = [1,2,3]
// // shift = 1
// // arr -> [3,1,2]
// arr = [1,2,3,4]
// k = -4

// // // [3,1,2]
// // // k=2, [2,3,1]
// // // k=3, [1,2,3]

// function rotate(arr, k) {
//     if (k % arr.length == 0)  {
//         return arr
//     }
//     // add temp to store the last value since that value is lost anytime we rotate
//     // condition for positive shift
//     // USE WHILE LOOP BECAUSE WE DON'T KNOW HOW MANY SHIFTS THERE WILL BE (DEPENDS ON THE SHIFT INPUTTED BY USER!)
//     while (k > 0) {
//         var temp = arr[arr.length-1]
//         for (i = arr.length - 1; i > 0; i--) {
//             arr[i] = arr[i-1]
    
//         }
//         arr[0] = temp
//         k--
//     }
//     // condition for negative shift
//     // [1,2,3], k = -1
//     // [2,3,1]
//     while (k < 0) {
//         // make a temp for first value since we end up losing that!
//         var temp = arr[0]
//         for (i=0; i < arr.length-1; i++) {
//             arr[i] = arr[i+1]
//         }
//         arr[arr.length-1] = temp
//         k++

//     }
//     return arr
//     }
  
// console.log(rotate(arr,k))





