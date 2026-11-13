
//section 1
//question 1
let userInput = "   HeLLo JaVaScRiPt   "
let cleanInput = userInput.trim().toLowerCase()
console.log(userInput)
console.log(cleanInput)

//question 2
let email = "   ISMAILBHAI@GMAIL.COM  "
let formattedEmail = email.trim().toLowerCase()

console.log(email)
console.log(formattedEmail)

//section 2
//question 1
let sentence = "JavaScript is awesome and JavaScript is fun"

console.log(sentence.indexOf("awesome"))
console.log(sentence.indexOf("JavaScript"))
console.log(sentence.indexOf("Python"))

//question 2
let message = "Welcome to coding class"

if(message.indexOf("coding") !== -1){
    console.log("Found : coding")
} else {
    console.log("Coding not found")
}

//section 3
//question 1
let rawData = " MESSY iNpuT "
let processedData = rawData.trim().toLowerCase()

console.log(rawData)
console.log(processedData)

//question 2
let password = " MyP@ssw0rd123 "
let securePassword = password.trim().toUpperCase().slice(0,8)

console.log(securePassword)

//section 4
//question 1
let fullName = "Alexander Hamilton"
let firstName = fullName.slice(0,9)
let lastName = fullName.slice(10)

console.log(`FULL NAME : ${fullName}`)
console.log(`first name : ${firstName}`)
console.log(`last name : ${lastName}`)

//question 2
let phone = "9876543210"
let areaCode = phone.slice(0,3)
let lastFour = phone.slice(-4)

console.log(`"Area code : ${areaCode}, Last four : ${lastFour} `)

//section 5
//question 1
let announcement = "The event will happen on Monday and Monday only"
let updatedAnnouncement = announcement.replace("Monday", "Friday")

console.log(announcement)
console.log(updatedAnnouncement)

//question 2
let template = "Hello NAME, welcome to our website"
let personalizedMessage = template.replace("NAME" , "Alice")

alert(personalizedMessage)