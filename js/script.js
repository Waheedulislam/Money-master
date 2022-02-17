document.getElementById('calculate-button').addEventListener('click', function () {

    const myMunthlyIncome = costCalculataion('monthly-income').value;
    const foodCost = costCalculataion('food-cost').value;
    const rentCost = costCalculataion('rent-cost').value;
    const clothesCost = costCalculataion('clothes-cost').value;

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const total = costCalculataion('total-cost');
    total.innerText = totalCost;

    const balanceTotal = parseFloat(myMunthlyIncome) - parseFloat(totalCost);


    const finalBalance = costCalculataion('final-balance');
    finalBalance.innerText = balanceTotal;

})


function costCalculataion(calkulatExpans) {
    return document.getElementById(calkulatExpans);
}


// saving calculation
document.getElementById("saving-bnt").addEventListener('click', function () {

    const savingInput = finalCalculation('saving-input').value;

    const myMunthlyIncome = finalCalculation('monthly-income').value;

    const savingCalculation = parseFloat(myMunthlyIncome * savingInput / 100);

    const savingAmmount = finalCalculation('saving-ammount');
    savingAmmount.innerText = savingCalculation;


    // const remainBalance = document.getElementById('remaing-balance');
    // remainBalance.innerText = savingAmmount;

    // const finalBalance = document.getElementById('final-balance').innerText;

    // const remaingTotalBalance = parseFloat(finalBalance) - parseFloat(remainBalance);
    // console.log(remaingTotalBalance);
})

function finalCalculation(calculateFinal) {
    return document.getElementById(calculateFinal);
}
