// console.log("Hello There");

// Way 1 using reuseable function
// 1.get the withdraw button
document.getElementById("cashout-btn").addEventListener("click", function () {
  // 2.get the agent number
  const cashoutNumber = getInputValue("cashout-number");
  //  console.log(cashoutNumber);
  if (cashoutNumber.length != 11) {
    alert("Agent Number is Invalid");
    return;
  }
  // 3.get the amount
  const cashoutAmount = getInputValue("cashout-amount");
  //  console.log(cashoutAmount);

  // 4.get the balance
  // const balanceElement=document.getElementById("balance");
  // const balance=balanceElement.innerText;
  const balance = getBalance();

  // 5.get the current balance
  const currentBalance = balance - Number(cashoutAmount);
  if (currentBalance < 0) {
    alert("Invalid Balance");
    return;
  }
  // 6. get the pin
  const cashoutPin = getInputValue("cashout-pin");
  // console.log(cashoutPin);
  if (cashoutPin === "1234") {
    alert("Payment Successful");
    // balanceElement.innerText=currentBalance;
    setBalance(currentBalance);

    // transaction history
    // 1.get the transaction parent
    const history = document.getElementById("transactions-history-container");
    // 2. create new element
    const newElement = document.createElement("div");
    // 3. element inner html set
    newElement.innerHTML = `
    <div class="bg-base-100 p-4" id="transaction-card">
            cashout money ${cashoutAmount} Taka to ${cashoutNumber} at ${new Date()} 
          </div>
          `;

    // 4.append element
    history.append(newElement);
  } else {
    alert("Invalid PIN");
    return;
  }
});

// way 2 ->Long  way but better for knowledge

// // 1.get the withdraw button
// document.getElementById("cashout-btn").addEventListener("click",function(){

//     // 2.get the agent number
//     const cashoutNumberInput= document.getElementById("cashout-number");
//     const cashoutNumber=cashoutNumberInput.value;
//     if(cashoutNumber.length!=11)
//     {
//         alert("Invalid Number");
//         return;
//     }
//     // console.log(cashoutNumber);

//     // 3.get the amount
//     const cashoutAmountInput= document.getElementById("cashout-amount");
//     const cashoutAmount=cashoutAmountInput.value;
//     // console.log(cashoutAmount);
//     // 4.get the balance
//     const balanceElement=document.getElementById("balance");
//     const balance=balanceElement.innerText;
//     // console.log(balance);
//     // 5.get the current balance
//     const currentBalance=Number(balance)-Number(cashoutAmount);
//     // console.log(currentBalance);
//     if(currentBalance<0)
//     {
//         alert("invalid Amount");
//         return;
//     }
//     // 6.get the pin
//     const cashoutPinInput=document.getElementById("cashout-pin");
//     const cashoutPin=cashoutPinInput.value;
//     // console.log(cashoutPin);
//     if(cashoutPin==="1234")
//     {

//         // 6.1. true:::successful and set balance
//         alert("cashout successful");
//         balanceElement.innerText=currentBalance;

//     }
//     else
//         {
//         // 6.2 false::: return
//         alert("invalid PIN");
//         return;

//     }
// })
