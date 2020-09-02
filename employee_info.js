// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

function student_info(students) {
    for (i = 0; i < students.length; i++) {
        console.log("Name", students[i]["name"])
        console.log("Cohort", students[i]["cohort"])
    }
}

students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.
function student_manager_info(array) {
    employees = array["employees"]
    managers = array["managers"]
    for (i = 0; i < array.length; i++) {
        console.log(array[i]['last_name'], array[i]['first_name'], (array[i]['last_name'].length + array[i]['frst_name'].length ))
    }
}