function letLoop(){
    for (let i=0; i<3; i++) {    // notice we use let to define i
        console.log(i);          // this will log 0, 1, 2
    }
    // console.log(i);              //  this will give us a ReferenceError because i is not defined outside the loop
}  

// letLoop()

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}