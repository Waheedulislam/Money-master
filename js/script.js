// document.getElementById('calculate-button').addEventListener('click', function () {
//     const myMunthlyIncome = document.getElementById('monthly-income').value;

//     const foodCost = calculataion('food-cost').value;
//     const rentCost = calculataion('food-cost').value;
//     const clothesCost = calculataion('clothes-cost').value;

//     const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

//     const total = document.getElementById('total-cost');
//     // const total = calculataion('total-cost');
//     total.innerText = totalCost;

//     const balanceTotal = parseFloat(myMunthlyIncome) - parseFloat(totalCost);
//     console.log(balanceTotal);

//     const finalBalance = document.getElementById('final-balance');
//     finalBalance.innerText = balanceTotal;

// })
document.getElementById('calculate-button').addEventListener('click', function () {

    const myMunthlyIncome = calculataion('monthly-income').value;
    const foodCost = calculataion('food-cost').value;
    const rentCost = calculataion('rent-cost').value;
    const clothesCost = calculataion('clothes-cost').value;

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const total = calculataion('total-cost');
    total.innerText = totalCost;

    const balanceTotal = parseFloat(myMunthlyIncome) - parseFloat(totalCost);
    console.log(balanceTotal);


    const finalBalance = calculataion('final-balance');
    finalBalance.innerText = balanceTotal;

})


function calculataion(calkulat) {
    return document.getElementById(calkulat);
}
