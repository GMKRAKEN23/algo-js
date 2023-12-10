function askTvSerie() {

    let name = prompt("donnez le nom de la série");
    let yearProduction = prompt("donnez l'année de production");


    let memberProduction = [];
    let actor;

    while ((actor = prompt("donnez le ou les membres de la production, dites stop")) !== "stop" || "STOP") {
        memberProduction.push(actor);
    }


    let serieTV = {
        name: name,
        yearProduction: yearProduction,
        memberProduction: memberProduction
    };

    return serieTV;
}

let seriePrefere = askTvSerie();
console.log("Série TV préférée :", JSON.stringify(seriePrefere, null, 2)); //the number two signification number space for imbrication