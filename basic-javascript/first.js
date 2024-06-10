let myNum = '30';
// console.log(typeof myNum);

let valueInNumber = Number(myNum);
// console.log(typeof valueInNumber);
let IslogedIn = 0;
let BooleanIsLogedIn = Boolean(IslogedIn)
// console.log(BooleanIsLogedIn);
let newString = "    Shohra    "
// console.log(newString.length);
// console.log(newString.trim().length);
// console.log(newString.toUpperCase());

const url = "http:shohraQadri30%.youtube.com";
// console.log(url.replace("30%", "khan"));
// console.log(url.includes('Qadri'));
// const myName = "shohra"
// console.log(myName.length);

// const myName = 35525
// console.log(myName.split("").length);


let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arrr.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
// console.log("sum === ", sum);
let result1 = 0;
for (i = 0; i < arrr.length; i++) {

    result1 += arrr[i]
}
// console.log("result1 === ", result1);


// ************

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.reduce(myFunc));

// function myFunc(total, num) {
//     return total + num;
// }



// const name = "my name is shohra qadri"
// let result = name.charAt(0).toUpperCase() + name.slice(0, length);

// print the result
// console.log(result); 

const myArr = [1, 2, 3, 4, 5,]
myArr.push(6, 7, 8)
// console.log(myArr);
const newArr = myArr.slice(0, -2)
// console.log(newArr);

const arr1 = [1, 2, 3, 4, 5, 8, 4, 2, 4, 9];
// const arr2 = [6, 7, 8, 9, 10];

// const result = arr1.concat(arr2);
const result = arr1.sort()
// console.log(result.reverse());

//*******************lore

// function example() {
//     const x = 1;
//     if (true) {
//         const x = 2; // Same variable, re-declaration allowed
//         console.log(x); // 2
//     }
//     console.log(x); // 2
// }
// example();
function example() {

    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 10; // This reassigns the outer 'x'
        let y = 20; // This creates a new 'y' with block scope
        const z = 30; // This creates a new 'z' with block scope

        // console.log(x, y, z); // 10 20 30
    }

    // console.log(x, y, z); // 10 2  3

}

// example();

// function example() {
//     const x = 1;
//     if (true) {
//         let x = 2; // Different variable (block-scoped)
//         console.log(x); // 
//     }
//     console.log(x);
// }
// example();


// function one() {
//     const name = "shohra"
//     function two() {
//         const lastname = "qadri"
//         // console.log(name);
//     }
//     // console.log(lastname);
//     two()
// }
// one()

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
// const currentDate = new Date()
// console.log(currentDate);
// const month = monthNames[currentDate.get()]
// console.log("month === ", month);

// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString(); // or any locale you prefer
// console.log(formattedDate);

// const currentDate = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth() + 1; // Months are zero-indexed
// const year = currentDate.getFullYear();
// const formattedDate = `${month}/${day}/${year}`;
// console.log(formattedDate);

const myDetails = {
    name: "shohra",
    location: "Pilibhit",

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to Paavu!`);
        console.log(this);
    }
}
myDetails.welcomeMessage()
myDetails.name = "Qadri"
myDetails.welcomeMessage()