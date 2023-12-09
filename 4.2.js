//Function which generates a random number from 1 to 10
//Math.floor() allows you to have integer numbers
//Math.random generates random numbers from 0 to 1
//Math.random() * 10 multiplies the interval of random numbers by 10
//By adding + 1 we shift the interval /0 to 9/ to /0 to 10/
function rand10() {
    return Math.floor(Math.random() * 10) + 1; 
}
  
for (let i = 0; i < 5; i++) {
    let nombreAleatoire = rand10();
  
    alert("Voici 5 nombre aléatoire", nombreAleatoire);
    console.log(nombreAleatoire);
}