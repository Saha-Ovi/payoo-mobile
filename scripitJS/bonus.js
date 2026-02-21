// console.log("hello");
// 1.get bonus btn
let bonusAmount = 0;
document
  .getElementById("bonus-money-btn")
  .addEventListener("click", function () {
    // 2.get balance
    const balance = getBalance();
    // 3.get coupon input
    const couponCode = getInputValue("bonus-coupon-number");
    if (couponCode === "os20" || couponCode === "OS20") {
      alert("Coupon Successful");
      bonusAmount = (balance * 20) / 100;
    } else {
      alert("Invalid Coupon");
    }

    // 4.get current balance
    const currentBalance = balance + bonusAmount;
    // 5.setBalance
    setBalance(currentBalance);
       // transaction section update
            // 1.get transaction history parent
            const history=document.getElementById("transactions-history-container");
            // 2.create Element
            const newElement=document.createElement("div");
            // 3.push transaction history into InnerHTML
            newElement.innerHTML=`
             <div id="transactions-card" class="py-4 bg-base-100">

            Add Bonus money ${bonusAmount}  at ${new Date()}
          </div>
            
            `
            // 4.appendchild to parent
            history.append(newElement);
  });
