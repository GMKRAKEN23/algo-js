let numberPreferUser = prompt("entrez le numéro préférer de l'utilisateur");

while (parseInt(numberPreferUser) != 42){
    if (parseInt(numberPreferUser) != 42){
        numberPreferUser = prompt("redonne un chiffre");
    }
}

console.log(parseInt(numberPreferUser));