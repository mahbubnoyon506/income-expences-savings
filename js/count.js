document.getElementById('calculation').addEventListener('click', function(){
    const incomeInput= document.getElementById('income-input');
    const income = incomeInput.value;
    const incomeValue = parseFloat(income);

    const foodInput = document.getElementById('food-input');
    const foodCost = foodInput.value;
    const foodCostValue = parseFloat(foodCost);

    const rentInput = document.getElementById('rent-input');
    const rentCost = rentInput.value;
    const rentCostValue = parseFloat(rentCost);

    const clothesInput = document.getElementById('clothes-input')
    const clothesCost = clothesInput.value;
    const clothesCostValue = parseFloat(clothesCost);

    const countingExpense = document.getElementById('total-expense');
    const expense = countingExpense.innerText;
    countingExpense.innerText = parseFloat(expense);
    countingExpense.innerText = foodCostValue + rentCostValue + clothesCostValue;


    const balanceCounting = document.getElementById('balance');
    const balanceText = balanceCounting.innerText;
    balanceCounting.innerText = parseFloat(balanceText);
    balanceCounting.innerText = incomeValue - countingExpense.innerText;
      
})



