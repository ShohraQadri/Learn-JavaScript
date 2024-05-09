function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}
printPattern(5);

let greeting = "Welcome";
for (let i = 1; i <= greeting.length; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += greeting[j] + " ";
    }
    console.log(pattern);
}

// *********************

let Name = "technology";

for (let i = 0; i < Name.length; i++) {
    let pattern = "";
    // for (let j = 0; j < Name.length - i - 1; j++) {
    //     pattern += " ";
    // }
    pattern = pattern.padEnd(Name.length - i - 1);
    pattern += Name.split("").splice(0, i + 1).join(" ");
    // for (let k = 0; k <= i; k++) {
    //     if (k === i) {
    //         pattern += Name[k];
    //     } else {
    //         pattern += Name[k] + " ";
    //     }
    // }
    console.log(pattern);
}
