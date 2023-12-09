// function named calcsurface which is used to calculate the surface of a rectangle with width and length parameters
function calcSurface(width, length) {
    return width * length;
}

// Displays 2 windows that ask the user to enter the length and width of a rectangle
let width = parseInt(prompt('what is the width of the rectangle :'));
let length = parseInt(prompt('what is the length of the rectangle :'));

// Calls the calcSurface function to return the result of the surface 
let resultat = calcSurface(width, length);

// Display the result in a window
alert("the surface of the rectangle is " + resultat);

