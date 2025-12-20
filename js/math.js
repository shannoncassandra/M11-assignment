//STEP 1
let number1 = prompt('Pick a number')
console.log(Math.abs(number1))

//STEP 2
let number2 = prompt('Pick a number that includes a decimal')
console.log(Math.ceil(number2))

//STEP 3
let number3 = prompt('Pick a number that includes a decimal')
console.log(Math.floor(number3))

//STEP 4
let number4 = prompt('List 5 numbers, separated by commas')
let array4 = number4.split(',')
let numberarray4 = array4.map(Number)
console.log(Math.max(...numberarray4), Math.min(...numberarray4))

//STEP 5
let number5 = prompt('Pick a number')
console.log(Math.sqrt(number5))