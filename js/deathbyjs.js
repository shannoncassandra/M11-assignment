//STEP 1
function alphaString() {
    let firstString = prompt('Type in any word')
    return firstString.split('').sort().join('')
}
console.log(alphaString())

//STEP 2
function upperWord() {
    let secondString = prompt('Type in any sentence')
    //Find a match at the beginning of the word, find a word character, perform a global match. Replace character with uppercase
    return secondString.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(upperWord())

//STEP 3
function countVowels() {
    let thirdString = prompt('Type in any string')
    // define which characters are vowels
    let vowels = 'aeiou'
    // set count equal to zero so it starts from the beginning
    let count = 0
    // for each character in the string, check if it is a vowel. If it is, add to count
    for (let i = 0; i < thirdString.length; i++) {
        if(vowels.includes(thirdString[i])) {
            count++
        }
    }
    //display the count
    return count
}
console.log(countVowels())

//STEP 4
function randomString() {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let specLength = prompt("How many characters do you want?")
    let randomChars = ''
    //for each number in specified lenght, generate a random number. Multiply by length and add to string
    for (let i = 0; i < specLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    randomChars += chars[randomIndex];
    }
    return randomChars
}
console.log(randomString())

//STEP 5
function longestCountry() {
    let countryList = prompt('List a few countries separated by commas')
    //split list, trim off the spaces
    let countries = countryList.split(',').map(c => c.trim())
    let longest = ''
    // count letters in each country, display the longest length
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
      longest = countries[i];
    }
  }
  return longest
}
console.log(longestCountry())

