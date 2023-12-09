let tab = [1, 2, 3, 4, 5];

let min = tab[0];
let max = tab[0];

for (let i = 0; i < tab.length; i++) {

    if(tab[i] < min){
        min = tab[i];
    }

    if(tab[i]> max) {
        max = tab[i];
    }
}

console.log(min);