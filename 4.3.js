//Function which generates a random number from 1 to 10
//Math.floor() allows you to have integer numbers
//Math.random generates random numbers from 0 to 1
//Math.random() * 10 multiplies the interval of random numbers by 10
//By adding + 1 we shift the interval /0 to 9/ to /0 to 10/
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < n; i++) {
    let nombreAleatoire = rand10();

    alert("Voici x nombre aléatoire", nombreAleatoire);

    console.log(nombreAleatoire);
}

// A function that generates random numbers in array form
// Initialize an array through a variable
// Create a loop and increment the array based on the value given in the multiRand(n) function
function multiRand(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(rand10());
    }
    return result;
}

let ChooseNumberGenerate = parseInt(prompt("Enter the number of the number at to generate"));

let numbers = multiRand(ChooseNumberGenerate);

console.log(`Voici ${ChooseNumberGenerate} nombres aléatoires :`, numbers);
