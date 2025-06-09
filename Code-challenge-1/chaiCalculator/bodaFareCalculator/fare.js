// fare.js
// This function estimates the total cost of a boda boda ride based on distance.

function calculateBodaFare(distanceInKm) {
    const baseFare = 50;         // Fixed cost for any ride
    const chargePerKm = 15;      // Cost per kilometer

    // Calculate charges
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;

    // Print the fare breakdown
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Prompt user for distance
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));
