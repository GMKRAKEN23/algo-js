let newArray = [1, 2, 3, 4, 5];

let averageNewArray = 0;

// first method

for (let i = 0; i < newArray.length; i++) {
    averageNewArray += newArray[i];
}

averageNewArray = averageNewArray / newArray.length;

console.log(averageNewArray);

// second method

let tab = [1, 2, 3, 4, 5];

let averageTab = 0;

for (let i = 0; i < tab.length; i++) {
    averageTab += tab[i] / 5;
}

console.log(averageTab);