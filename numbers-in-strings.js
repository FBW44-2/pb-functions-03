// # Numbers in Strings
// ​
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// - can you try solving this challenge without regex?
// - can you try solving this challenge without includes?

// go through each string in the list of strings
// go through each char in each string
// check if char is a number
//  - yes: add the entire string to the filtered array

function getStringsWithNumbers(arr) {
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        // console.log(str);

        for (let j = 0; j < str.length; j++) {
            const char = str[j];

            // console.log(parseInt(char, 10));
            // console.log(Number(char));

            console.log(char.trim().length); // 0 for the empty space

            // if (char >= 0) {
            // console.log(char >= 0); // boolean

            // 1.Use parseInt()
            // 2. Use Number()
            // if (parseInt(char, 10) || parseInt(char, 10) === 0) { // 0
            // Check for empty space
            if (char.trim().length !== 0) {
                // Check is char a number
                if (Number(char) || Number(char) === 0) { // 0
                    console.log('In the if', char, Number(char));
                    filteredArray.push(str);
                    break;
                }
            }
        }
    }

    return filteredArray;
}

// console.log(getStringsWithNumbers(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]

// console.log(getStringsWithNumbers(["abc", "abc0"])); // ➞ ["abc0"]

// console.log(getStringsWithNumbers(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]

// console.log(getStringsWithNumbers(["this is a test", "test1"])); // ➞ ["test1"]

// console.log(getStringsWithNumbers(['abc', 'abc10'])); // ➞ ['abc10']

// console.log(getStringsWithNumbers(['abc', 'ab10c', 'a10bc', 'bcd'])); // ➞['ab10c', 'a10bc']

// console.log(getStringsWithNumbers(['1', 'a', ' ', 'b'])); // ➞ ['1']

// console.log(getStringsWithNumbers(['rct', 'ABC', 'Test', 'xYz'])); // ➞ []

// console.log(getStringsWithNumbers(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])); // ➞ ['10xYZ', 'xy2K77', 'Z1K2W0']

// console.log(getStringsWithNumbers(['-/>', '10bc', 'abc '])); // ➞ ['10bc']