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

// cost calkulat
document.getElementById('calculate-button').addEventListener('click', function () {

    const myMunthlyIncome = costCalculataion('monthly-income').value;
    const foodCost = costCalculataion('food-cost').value;
    const rentCost = costCalculataion('rent-cost').value;
    const clothesCost = costCalculataion('clothes-cost').value;

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const total = costCalculataion('total-cost');
    total.innerText = totalCost;

    const balanceTotal = parseFloat(myMunthlyIncome) - parseFloat(totalCost);
    console.log(balanceTotal);


    const finalBalance = costCalculataion('final-balance');
    finalBalance.innerText = balanceTotal;

})


function costCalculataion(calkulat) {
    return document.getElementById(calkulat);
}

// saving calculation
document.getElementById("saving-bnt").addEventListener('click', function () {

    const savingInput = document.getElementById('saving-input').value;

    const myMunthlyIncome = document.getElementById('monthly-income').value;

    const savingCalculation = parseFloat(myMunthlyIncome * savingInput / 100);

    const savingAmmount = document.getElementById('saving-ammount');
    savingAmmount.innerText = savingCalculation;
})
