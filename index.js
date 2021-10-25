// Use the shorthand character class \d to count how many digits are in movie titles. 

// initialize string
let movieName = "2001: A Space Odyssey";

// store regex ina variable
let numRegex = /\d/g; 

let result = movieName.match(numRegex).length;

console.log(result)