// arrays + algos
// Print Values and Sum

// Print each array value and the sum so far
// 

var testArr = [6,3,5,1,2,4]
var sum = 0
for (i = 0; i < testArr.length; i++) {
    sum += testArr[i]
    console.log("Num", testArr[i], "Sum", sum)
}

for (i = 0; i < testArr.length; i++) {
    console.log(i*testArr[i])
}
