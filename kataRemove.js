function removeExclamationMarks(s) {
    myString = s;
    myString = myString.replace(/\!/g,''); // Replace all instances of '!' with '' (aka 'nothing')
    return myString;
}

console.log(removeExclamationMarks("Hello World!")) // returns "Hello World"