
let sum = 0;

while(true){

    let userNumber = prompt("Saissisez un nombre ou tapez stop");

    let stockedNumber = parseInt(userNumber);

    if(userNumber === "stop" || userNumber === "STOP"){
        break;
    }

    if (!isNaN(stockedNumber)) {
        sum += stockedNumber;
    } else {
        alert("Veuillez entrer un nombre valide.");
    }
}

console.log(sum);