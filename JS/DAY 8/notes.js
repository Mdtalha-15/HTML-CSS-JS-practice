// console.log(this)

const student = {
name: "ahmed",
eng: 75,
math: 99,
phy: 67,
getAvg() {
let avg = (this.eng + this.math + this.phy) / 3;
console.log(`${this.name} got avg marks = ${avg}`);
}
};
student.getAvg();






// console.log("hello first line")
// console.log("hello second line")
// try {
//     console.log(a)
// } catch (err) {
//     console.log("error found", err)
// }
// console.log("hello first line")
// console.log("hello first line")

// let maths = (a,b) => a * b;
// let result = maths(3, 4)
// console.log(result)

// setTimeout(() => {
//     console.log("hello")
// }, 2000)

// let id = setInterval(() => {
//     console.log("hi i am talha")
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
//     console.log("stopped....")
// }, 5000)