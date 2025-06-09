// fee.js
// This function estimates the mobile money transaction fee based on a simplified 1.5% rule

function estimateTransactionFee(amountToSend) {
    const percentageFee = amountToSend * 0.015; // Calculate 1.5% of the amount

    // Enforce minimum and maximum fee rules
    let transactionFee = Math.max(10, Math.min(percentageFee, 70));

    // Total amount including transaction fee
    const totalDebited = amountToSend + transactionFee;

    // Display output to the user
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");
}

// Prompt user to enter amount
const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));
