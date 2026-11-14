const customerName = "Zahra";
const customerAge = 23;
let availibleBalance = 100;

const burgerPrice = 10;
const pizzaPrice = 15;
const sandwichPrice = 8;
const pastaPrice = 12;
const exit = 0;

console.log("Item Number | Food Item | Price")

console.log(`1. Burger: ${burgerPrice}$`)
console.log(`2. Pizza: ${pizzaPrice}$`)
console.log(`3. Sandwich: ${sandwichPrice}$`)
console.log(`4. Pasta: ${pastaPrice}$`)
console.log(`5. Exit: ${exit}$`)

let choice = 3;
switch (choice) {
    case 1:
        console.log(`You selected Burger: ${burgerPrice}$`)
        break;
    case 2:
        console.log(`You selected Pizza: ${pizzaPrice}$`)
        break;
    case 3: 
        console.log(`You selected Sandwich: ${sandwichPrice}$`)
        break;
    case 4:
        console.log(`You selected Pasta: ${pastaPrice}$`)
        break; 
    case 5:
        console.log(`you selected nothing: ${exit}`) 
    break;  
}
