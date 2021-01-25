// # First n vowels
// ​
// Write a function that returns a string with the first n vowels of a string.
// Return "invalid" if the n is exceeds the number of vowels in a string.
// Vowels are: a, e, i, o, u.

function getFirstNVowels(str, count) {
    // go through letters and check if they are vowel
    // if they are a vowel and the result does not exceed the count, add them to the result

    // if count > result's length and there is no more letters -> invalid
    const strArray = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const resultArray = [];

    for (let i = 0; i < strArray.length; i++) {
        const char = strArray[i];

        // Check if it is a vowel
        if (vowels.includes(char)) {
            // it is a vowel!
            resultArray.push(char);
        }

    }

    // Remove the extra vowels
    if (resultArray.length >= count) {
        return resultArray.slice(0, count).join('');
    }

    return 'invalid';
}

console.log(getFirstNVowels("sharpening skills", 3)); // -> "aei"
console.log(getFirstNVowels("major league", 5)); // -> "aoeau"
console.log(getFirstNVowels("crabby patty", 2)); // -> "aa"
console.log(getFirstNVowels("shrimp", 1)); // -> "i"
console.log(getFirstNVowels("shrimpy", 2)); // -> "invalid"
console.log(getFirstNVowels("hostess", 5)); // -> "invalid"

// Note: here we do some extra work, that we need to undo later with slice