//STEP 1
let username1 = prompt('What is your name?')
alert(`Your name is ${username1.length} letters long!`)

//STEP 2
let username2 = prompt('What is your name?')
let number2 = prompt('Pick a number')
alert(`The letter ${username2.charAt(number2)} shows up in position ${number2} of your name!`)

//STEP 3
let firstname3 = prompt('What is your first name?')
let lastname3 = prompt('What is your last name?')
alert(`Your name is ${firstname3.concat(' ', lastname3)}!`)

//STEP 4
foxydog = "The quick brown fox jumps over the lazy dog"
alert(`The word fox first shows up at index ${foxydog.indexOf('fox')} of the string!`)

//STEP 5
foxyfox = "The quick brown fox jumps over the lazy fox"
alert(`The last instance of the word fox shows up at index ${foxyfox.lastIndexOf('fox')} of the string!`)

//STEP 6
anotherfox = "The quick brown fox jumped over the lazy dog"
let username6 = prompt('What is your full name?')
alert(anotherfox.replace('the lazy dog', username6))

//STEP 7
fox7 = "The quick brown fox jumps over the lazy dog"
foxword = prompt('Give me a word')
alert(fox7.search(foxword))

//STEP 8
old_string = "The quick brown fox jumps over the lazy dog"
new_string = old_string.slice(30)
alert(new_string.toUpperCase())

//STEP 9
fox9 = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
alert(fox9.trim().toLowerCase())

//STEP 10
fox10 = "the quick brown fox jumps over the lazy dog"
alert(fox10.charAt(0).toUpperCase() + fox10.slice(1))
