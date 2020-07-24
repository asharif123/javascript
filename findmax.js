// findmax 

function max(values) {
    if (values.length == 1) {
        return values[0]
    }
    else {
        var max = values[0]
        for (i = 1; i < values.length; i++) {
            if (max < values[i]) {
                max = values[i]
            }
        }
        return max
    }

}

var values = [5,4,3,5,14,-1,12,11,10]
console.log(max(values))