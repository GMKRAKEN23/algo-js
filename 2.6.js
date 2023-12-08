// Excercice 2.6

let day = prompt("Enter a between of 1 and 7");

if (day >= 1 && day <= 7) {
    if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thuesday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    } else if (day == 7) {
        console.log("Sunday");
    }
} else {
    console.log("Enter a day valide");
}
