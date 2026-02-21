// console.log("Hey!");

// 1.get the transfer mooney btn
document.getElementById("transfer-money-btn").addEventListener("click",function(){
    // 2.get account Number
    const accountNumber=getInputValue("transfer-money-number");
    if(accountNumber.length!=11)
    {
        alert("Invalid Account Number");
        return;
    }
    // 3.get amount
    const transferAmount=getInputValue("transfer-money-amount");
    // 4.get balance
    const balance=getBalance();
    // 5.get current balance
    const currentBalance=balance-Number(transferAmount);
    if(currentBalance<0)
    {
        alert("Invalid Balance");
        return;
    }
    // 6.get pin
    const transferPin=getInputValue("transfer-money-pin");
    // 6.1. true::transfaction::set balance
        if(transferPin==="1234")
        {
            setBalance(currentBalance);

            // transaction section update
            // 1.get transaction history parent
            const history=document.getElementById("transactions-history-container");
            // 2.create Element
            const newElement=document.createElement("div");
            // 3.push transaction history into InnerHTML
            newElement.innerHTML=`
             <div id="transactions-card" class="py-4 bg-base-100">

            send money ${transferAmount} to ${accountNumber} at ${new Date()}
          </div>
            
            `
            // 4.appendchild to parent
            history.append(newElement);
        }
    
        // 6.2::false::invalid pin
        else{
            alert("Invalid PIN");
            return;
        }

})
