//first version using "while" that repeat 100 times

let i = 0;

while (i < 100){
    console.log(i);
    i = i + 2 ;

    if(i === 98){
        console.log(i);
         i = i + 2;
    }
}

// second version using "for" that repeat 50 times (bonus)

for (let i = 2; i <= 100; i += 2){ //exercice 2.4
    console.log("numberpair" + i / 2);
    console.log("numberimpair" + (i+ 1) * 3);
}