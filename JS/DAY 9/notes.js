console.log("hello world")


// higher order function
// function repeat3Function(callbackFn, repeatCount) {

//   for (let i = 1; i <= repeatCount; i++) {
//     callbackFn();
//   }

// }

// repeat3Function(() => {
//   console.log("hello");
// }, 10);



// normal way of accessing and performing function on every element
const elemLowercase = (elem) => {
    return elem.toLowerCase()
}

fruits = ["MANGO", "PINEAPPLE", "APPLE", "STRAWBERRY"]

let newFruits = []

for( i=0; i < fruits.length; i++){
    const newElem = elemLowercase(fruits[i])
    newFruits.push(newElem)
}

// console.log(newFruits)

//.forEach()
names = ["SIRAJ", "VIRAT", "PATIDAR", "PADIKKAL","BHUVI"]

names.forEach((elem)=>{
    console.log("HELLO ", elem)
})


// let fruits = ["orange", "pineapple", "apple"];

// fruits.forEach((elem, index)=>{

//     console.log(index, "=>" ,elem)

// })

