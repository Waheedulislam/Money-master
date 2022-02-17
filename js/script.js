document.getElementById('calculate-button').addEventListener('click', function () {
    const myMunthlyIncome = document.getElementById('monthly-income').value;

    const foodCost = document.getElementById('food-cost').value;
    // console.log(foodCost);
    const rentCost = document.getElementById('rent-cost').value;
    // console.log(rentCost);
    const clothesCost = document.getElementById('clothes-cost').value;
    // console.log(clothesCost);

    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    // const total = document.getElementById('total-cost').innerText;
    const total = document.getElementById('total-cost');
    total.innerText = totalCost;

    // const costTotal = document.getElementById('total-cost').innerText;

    const balanceTotal = parseFloat(myMunthlyIncome) - parseFloat(totalCost);
    console.log(balanceTotal);

    const finalBalance = document.getElementById('final-balance');
    finalBalance.innerText = balanceTotal;

})
