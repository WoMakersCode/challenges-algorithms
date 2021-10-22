"use strict";

// get string from user and store in variable
const text = prompt("please provide string");

// get character from user which will be find in given text.
const character = prompt("please provide character");

// create a function for finding the character how many times it's appear in given string.
const findCharInString = (string, character) => {
    // text variable splitted in array
    const textSplitted = string.split('');

    // apply filter on splitted to find how many time character found in text variable
    const charInString = textSplitted.filter(char => char === character);

    // return in number
    return charInString.length;
};

alert(`"${character}" appear ${findCharInString(text, character)} times , in "${text}"`);