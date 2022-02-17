
/////////////Income Function///////////
function incomeExpense(cash){
   const inputTex= document.getElementById(cash + '-input');
   const input = inputTex.value;
   const inputValue = parseFloat(input);
   return inputValue;
}


///////Expenses Function////////////
 function expenseCount(){
   const countingExpense = document.getElementById('total-expense');
   const expense = countingExpense.innerText;
   countingExpense.innerText = parseFloat(expense);
   countingExpense.innerText = incomeExpense('food') + incomeExpense('rent') + incomeExpense('clothes');
   const getExpense = countingExpense.innerText;
   return getExpense;
 }


///////Balance Counting Function////////////
 function balanceCount(){
   const balanceCounting = document.getElementById('balance');
   const balanceText = balanceCounting.innerText;
   balanceCounting.innerText = parseFloat(balanceText);
   balanceCounting.innerText = incomeExpense('income') - expenseCount();
   const getBalance = balanceCounting.innerText;
   return getBalance;
 }


///////Saving Counting Function/////////////
 function savingCounting(){
   const savingInput = document.getElementById('saving-input');
   const savingValue = savingInput.value;
   const saving = parseFloat(savingValue);
   const initialSave = incomeExpense('income') * saving;
   const totalSaving = initialSave / 100;
   const savingText = document.getElementById('save-amount');
   const savingCalculate = savingText.innerText;
   savingText.innerText = totalSaving;
   const getSaving = savingText.innerText;
   return getSaving;
 }
////////Remain Balance Counting Function///////////////////
 function remainBalanceCount(){
   const remainBalanceCost = document.getElementById('remain-balance');
   const remainBalance = remainBalanceCost.innerText;
   remainBalanceCost.innerText = balanceCount() - savingCounting();
   const getRamain = remainBalanceCost.innerText;
   return getRamain;   
 }


////Income And Expence Codes/////////////////
document.getElementById('calculation').addEventListener('click', function(){

   const incomeValue = incomeExpense('income');

   const foodCostValue = incomeExpense('food');

   const rentCostValue = incomeExpense('rent');

   const clothesCostValue = incomeExpense('clothes');

   const expenseResult = expenseCount();

   const balanceResult = balanceCount();    
})

////////Savings Codes//////////////////
document.getElementById('saving-calculation').addEventListener('click', function(){

   const savingResult = savingCounting();
   
   const getRemainResult = remainBalanceCount();
})


