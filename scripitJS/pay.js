// console.log("hello!");
// 1.get pay bill btn
document.getElementById("pay-bill-btn").addEventListener("click",function()
{
    // 2.get bank account 
    const bankAccount=getInputValue("pay-bill-bank");
    if(bankAccount==="Select bank")
    {
        alert("Please select a Bank");
        return;
    }
    // 3.get account number
    const accountNumber=getInputValue("pay-bill-number");

    if(accountNumber.length!=11)
    {
        alert("Invalid Account Number");
        return;
    }
    // 4.get amount
    const payAmount=getInputValue("pay-bill-amount");
    // 5.get balance
    const balance=getBalance();
    // 6.get current balance
    const currentBalance=balance-Number(payAmount);
    if(currentBalance<0)
    {
        alert("Invalid Amount");
        return;
    }
    // 7.get pin
    const payPin=getInputValue("pay-bill-pin");
    if(payPin==="1234")
    {
        alert("Payment Successful");
        // 8.set balance
        setBalance(currentBalance);
        // 9.transaction update
       
            // 1.get transaction history parent
            const history=document.getElementById("transactions-history-container");
            // 2.create Element
            const newElement=document.createElement("div");
            // 3.push transaction history into InnerHTML
            newElement.innerHTML=`
             <div id="transactions-card" class="py-4 bg-base-100">

            Add Pay money ${payAmount} from ${bankAccount} to ${accountNumber}  at ${new Date()}
          </div>
            
            `
            // 4.appendchild to parent
            history.append(newElement);

    }
    else
    {
        alert("Invalid PIN");
    }
})
