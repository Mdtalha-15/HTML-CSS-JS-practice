// for (let i=1; i<=3; i++){
//     console.log("Outer :",i )
//     for (let j=1; j<=3; j++){
//         console.log("inner :", j)
//     }
// }
// for (let i = 20; i <= 40 ; i++) {
//        console.log(i);
//     console.log("hello world")
// }
//  print odd numbers from 1-10
//  for (let i = 10; i <= 20; i++) {
//    if (i % 2 !== 0) {
//      console.log(i);
// } 
// }
// for (let i = 1; i <= 10; i++) {
// console.log(`5 × ${i} = ${5 * i}`);
// }
// for (let i = 10; i >= 1; i--) {
// console.log(i);
// }



// for (let i = 1; i <= 5; i++) {
// let row = "";
// for (let j = 1; j <= 5; j++) {
// row += (i * j) + "\t";
// }
// console.log(row);
// }



// let cities = ["london", "paris", "tokyo","new york"]
// for(let i =0; i < cities.length; i++){
//   console.log(i, cities[i])
// }

// let teams = [
//   ["PlayerA","PlayerB"],
//   ["PlayerC","PlayerD"]
// ]
// for(let i=0; i < teams.length; i++){
//   for(let j=0; j < teams.length; j++){
//     console.log(teams[i][j])
//   }
// }


// let userChoice;
// let balance = 500;

// do {
//   userChoice = prompt(`
// 1. Add money (deposit) \n
// 2. remove money (withdraw) \n
// 3. check balance \n
// 4. exit`);

//   if (userChoice == "3") {
//     // console.log(balance);
//     alert(`your balance is ${balance}`)
//   } else if (userChoice == "2") {
//     console.log("user chose to withdraw amount");

//     let removeAmout = prompt("enter withdraw amount ");

//     balance = balance - removeAmout;

//     console.log(`${removeAmout} removed from bank, new balance is ${balance}`);
//   } else if (userChoice == "1") {
//     console.log("user chose to deposite money");

//     let depositeAmount = Number(prompt("enter the deposite amount: "));

//     balance = balance + depositeAmount;

//     console.log(
//       `${depositeAmount} is added to your balance, new balance is ${balance}`,
//     );
//   }
// } while (userChoice !== "4");

// console.log("user chose exit, remove your card, bye...");


// for (let i = 1; i <= 5; i++) {
// let row = "";
// for (let j = 1; j <= 5; j++) {
// row += (i * j) + "\t";
// }
// console.log(row);
// }



for (let row = 1; row <= 4; row++) {
let line = "";
for (let col = 1; col <= 4; col++) {
line += `(${row},${col}) `;
}
console.log(line);
}


for (let i = 1; i <= 5; i++) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "* ";
}
console.log(pattern);
}

for (let i = 5; i >= 1; i--) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "* ";
}
console.log(pattern);
}

