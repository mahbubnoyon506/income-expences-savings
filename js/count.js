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

document.getElementById('saving-calculation').addEventListener('click', function(){
   const savingInput = document.getElementById('saving-input');
   const savingValue = savingInput.value;
   const saving = parseFloat(savingValue);

   const incomeInput= document.getElementById('income-input'); //duplicate
   const income = incomeInput.value;
   const incomeValue = parseFloat(income);

   const initialSave = incomeValue * saving;
   const totalSaving = initialSave / 100;

   const savingText = document.getElementById('save-amount');
   const savingCalculate = savingText.innerText;
   savingText.innerText = totalSaving;
   
////////////////// duplicate
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
   const balanceCounting = document.getElementById('balance'); //duplicate
   const balanceText = balanceCounting.innerText;
   balanceCounting.innerText = parseFloat(balanceText);
   balanceCounting.innerText = incomeValue - countingExpense.innerText;

   const remainBalanceCost = document.getElementById('remain-balance');
   const remainBalance = remainBalanceCost.innerText;
   remainBalanceCost.innerText = balanceCounting.innerText - savingText.innerText;
   console.log(remainBalanceCost.innerText);
})


