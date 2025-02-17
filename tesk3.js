/**
 * Write a JavaScript function named calculateElectronicsBudget that takes in the 
 * number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(numOfLaptop, numOfTablets, numOfMobiles) {
    // console.log(numOfLaptop, numOfTablets, numOfMobiles);

    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalLaptopPrice = laptop * numOfLaptop;
    const totalTabletPrice = tablet * numOfTablets;
    const totalMobilePrice = mobile * numOfMobiles;
    const totalMoneyRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return totalMoneyRequired;
}

const totalMoney = calculateElectronicsBudget(2, 2, 2);
console.log(totalMoney);


