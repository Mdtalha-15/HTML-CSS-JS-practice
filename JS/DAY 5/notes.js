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
 for (let i = 10; i <= 20; i++) {
   if (i % 2 !== 0) {
     console.log(i);
} 
}
for (let i = 1; i <= 10; i++) {
console.log(`5 × ${i} = ${5 * i}`);
}
for (let i = 10; i >= 1; i--) {
console.log(i);
}



for (let i = 1; i <= 5; i++) {
let row = "";
for (let j = 1; j <= 5; j++) {
row += (i * j) + "\t";
}
console.log(row);
}


for (let i = 1; i <= 5; i++) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "* ";
}
console.log(pattern);
}



for (let row = 1; row <= 4; row++) {
let line = "";
for (let col = 1; col <= 4; col++) {
line += `(${row},${col}) `;
}
console.log(line);
}


let cities = ["london", "paris", "tokyo","new york"]
for(let i =0; i < cities.length; i++){
  console.log(i, cities[i])
}

let teams = [
  ["PlayerA","PlayerB"],
  ["PlayerC","PlayerD"]
]
for(let i=0; i < teams.length; i++){
  for(let j=0; j < teams.length; j++){
    console.log(teams[i][j])
  }
}