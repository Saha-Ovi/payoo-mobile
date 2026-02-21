// console.log("Hey!")

// get input value using id
function getInputValue(id)
{
    const input=document.getElementById(id);
    const value=input.value;
    // console.log(input,value);
    return value;
}

// get balance
function getBalance()
{
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    // console.log(Number(balance));
    return Number(balance);
}

// set balance
function setBalance(value)
{
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}

// show hidden

function showOnly(id)
{
    // 1.select Element
    const addMoney=document.getElementById("add-money");
    // console.log(addMoney);
    const cashOut=document.getElementById("cashout");
    // console.log(cashOut);

    const transferMoney=document.getElementById("transfer-money");
    const getBonus=document.getElementById("bonus-money");
    const payBill=document.getElementById("pay-bill-money");
    const transaction=document.getElementById("transactions-history");


    //2. hide all
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("pay-bill-money");
    transaction.classList.add("hidden");

    // 3. specific id element show
    const elementShow=document.getElementById(id);
    elementShow.classList.remove("hidden");
}