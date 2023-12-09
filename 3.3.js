// first method

let tab = [1, 2, 3];

let copyTab = [];

for(let i = 0; i < tab.length; i++){
    copyTab.push(tab[i]);
}

console.log(copyTab);

// second method 

let array = ['5', '7', 'Orange', 1, 2, 3];

let copyArray = 0;

copyArray = array.slice(); 

console.log(copyArray);