// console.log("successfully");

// 1.get add money btn
document.getElementById("add-money-btn").addEventListener("click", function () {
  // 2.get select a bank
  const bankAccount = getInputValue("add-money-bank");
  if (bankAccount === "Select bank") {
    alert("Please select a Bank");
    return;
  }
  // console.log(bankAccount);
  // 3.get account number
  const accountNumber = getInputValue("add-money-number");
  if (accountNumber.length != 11) {
    alert("Invalid account Number");
    return;
  }
  // 4.get amount
  const addAmount = getInputValue("add-money-amount");
  // 5.get balance
  const balance = getBalance();
  // 6.get current Balance
  const currentBalance = balance + Number(addAmount);
  // 7.get pin
  const addPin = getInputValue("add-money-pin");
  if (addPin === "1234") {
    alert(`Add money From ${bankAccount} at ${new Date()}`);
    setBalance(currentBalance);
    
    // transaction history
    // 1.get the transaction parent
    const history = document.getElementById("transactions-history-container");
    // 2. create new element
    const newElement = document.createElement("div");
    // 3. element inner html set
    newElement.innerHTML = `
    <div class="bg-base-100 p-4" id="transaction-card">
            Add money From ${bankAccount} at ${new Date()} 
          </div>
          `;

    // 4.append element
    history.append(newElement);
  } else {
    alert("Invalid PIN");
    return;
  }
});
