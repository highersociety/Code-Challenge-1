// chai.js
// This function calculates the ingredients needed to make a given number of cups of Kenyan Chai.

function calculateChaiIngredients(numberOfCups) {
    // Ingredient measurements per cup
    const waterPerCup = 200; // in milliliters
    const milkPerCup = 50;   // in milliliters
    const teaLeavesPerCup = 1; // in tablespoons
    const sugarPerCup = 2;   // in teaspoons

    // Calculate total for each ingredient
    const water = waterPerCup * numberOfCups;
    const milk = milkPerCup * numberOfCups;
    const teaLeaves = teaLeavesPerCup * numberOfCups;
    const sugar = sugarPerCup * numberOfCups;

    // Output results to the console
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Prompt user for number of cups
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(input));

