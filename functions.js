// const takeOrder = (size, drinkType) => {

//     console.log(`make coffee ${size} ${drinkType}`);
// }
// takeOrder("Large", "cappuccino");

// let orderCount = 0;

// const takeOrder = (topping1, topping2, topping3) => {
//     console.log(`Order number: ${orderCount}. Pizza with ${topping1, ${topping2}, ${topping3}`);
//     orderCount++
// }

// takeOrder("pineapple", "salami", "sweetcorn");


// let orderCount = 1;
// const takeOrder = (topping1, topping2, topping3) => {
//   console.log(`Order number: ${orderCount}. Pizza with ${topping1}, ${topping2} and ${topping3}`);
//   orderCount++;
// }
// takeOrder("pineapple", "ham", "cheese.");
// takeOrder("pepperoni", "salami", "ham");
// takeOrder("pineapple", "ham", "cheese.");



let correctpin = 1234;
let balance = 500;
let orderCount = 3
const cashWithdrawal = (pin, amount) => {

    if (pin==correctpin && amount<=balance) {
        console.log ("Take your cash.")
    }

    else if (pin!=correctpin || amount<=balance) {
        console.log ("No Money Today Mate.")
    }

    else if (pin==correctpin && amount!=balance) {
        console.log ("Not enough funds - try again")
    }

    else if (pin>3) {
        console.log ("CARD BLOCKED - CONTACT YOUR BANK")
    }

}
cashWithdrawal (1230, 300)