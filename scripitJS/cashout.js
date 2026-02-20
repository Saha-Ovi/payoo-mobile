// console.log("Hello There");

// 1.get the withdraw button
document.getElementById("cashout-btn").addEventListener("click",function(){

    // 2.get the agent number
    const cashoutNumberInput= document.getElementById("cashout-number");
    const cashoutNumber=cashoutNumberInput.value;
    if(cashoutNumber.length!=11)
    {
        alert("Invalid Number");
        return;
    }
    // console.log(cashoutNumber);
    // 3.get the amount 
    const cashoutAmountInput= document.getElementById("cashout-amount");
    const cashoutAmount=cashoutAmountInput.value;
    // console.log(cashoutAmount);
    // 4.get the balance
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    // console.log(balance);
    // 5.get the current balance
    const currentBalance=Number(balance)-Number(cashoutAmount);
    // console.log(currentBalance);
    if(currentBalance<0)
    {
        alert("invalid Amount");
        return;
    }
    // 6.get the pin
    const cashoutPinInput=document.getElementById("cashout-pin");
    const cashoutPin=cashoutPinInput.value;
    // console.log(cashoutPin);
    if(cashoutPin==="1234")
    {

        // 6.1. true:::successful and set balance
        alert("cashout successful");
        balanceElement.innerText=currentBalance;

    }
    else
        {
        // 6.2 false::: return
        alert("invalid PIN");
        return;

    }
})