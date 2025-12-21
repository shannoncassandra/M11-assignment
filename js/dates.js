//STEP 1
let d1 = new Date().getMonth()
let monthDays = {0:31, 1:28, 2:31, 3:30, 4:31, 5:30, 6:31, 7:31, 8:30, 9:31, 10:30, 11:31}
console.log(monthDays[d1])

//STEP 2
let d2 = new Date().getMonth()
let monthName = {0:'January', 1:'February', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'December'}
console.log(monthName[d2])

//STEP 3
let d3 = new Date().getDay()
let isWeekend = {0:'Yes', 1:'No', 2:'No', 3:'No', 4:'No', 5:'Yes', 6:'Yes'}
console.log(isWeekend[d3])

//STEP 4
let d4 = new Date().getDay()-1
let dayOfWeek = {0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}
console.log(dayOfWeek[d4])

//STEP 5
let d5 = new Date().getDay()
let dayOfWeek5 = {0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}
let answer5 = (dayOfWeek5[d5])
let firstLetter = answer5[0]
console.log(firstLetter)