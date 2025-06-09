// fee.js
function estimateTransactionFee(amountToSend) {
    const percentageFee = amountToSend * 0.015;
    let transactionFee = Math.max(10, Math.min(percentageFee, 70));
    const totalDebited = amountToSend + transactionFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));
