function hello(){
    console.log("Hello World")
}

// hello()

function greet(){
    console.log("welcome to javascript")
}

// greet()
// greet()
// greet()

function introduction() {
console.log("My name is JavaScript");
console.log("I was created in 1995");
console.log("I run in browsers");
}

// introduction()


//functions with arguments
function myself(name, age){
    console.log(`my name is ${name} and my age is ${age}`)
}

// myself("talha", 20)


function greetUser(name) {
console.log("Hello, " + name + "!");
}

// greetUser("talha")
// greetUser("ahmed")
// greetUser("khalid")

function addNumbers(a, b) {
let sum = a + b;
console.log("Sum is: " + sum);
}

addNumbers(4,8)
addNumbers(5,9)
addNumbers(-3,6)

//return keyword

function sum(a, b) {
    return a + b;
}

let result = sum(-6, 8);
console.log(result);

