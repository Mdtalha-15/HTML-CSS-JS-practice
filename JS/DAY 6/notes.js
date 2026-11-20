console.log("HELLO WORLD")

//CRUD (create, read, update, delete)

// create
// let student = {
// name: "talha",
// age: 20,
// grade: "O"
// };

// console.log(student)

// read

// dot notation
let student = { name: "talha", age: 40, city: "madrid" };
console.log(student.name);
console.log(student.age);


//update
student["city"] = "hyderabad"
console.log(student)

//add
student.grade = "A+"
console.log(student)


//delete 
delete student.age
console.log(student)

//object of objects
