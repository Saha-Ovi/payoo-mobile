// console.log("hello there");

// 1.first take where the event is happened

document.getElementById("login-btn").addEventListener("click",function(){
  
    // 2. get mobile number
    const numberInput=document.getElementById("input-number");
    const contactNumber=numberInput.value;
    console.log(contactNumber);
    // 3.get the 4 digit pin
    const pinInput=document.getElementById("input-pin");
    const pinNumber=pinInput.value;
    console.log(pinNumber);
    // 4. validate mobile and pin

    if(contactNumber==="01234567890" && pinNumber==="1234")
        {
        // 4.1. true::: alert-> login::move to home page
        alert("Login Successful");

        // replace will not store history

        // window.location.replace("/home.html")

        // assign will store history and can do backtrack

        window.location.assign("/home.html")
    }
    else
    {
        // 4.2 false:::alert->invalid :: return
        alert("Login Failed");
        return;
    }
})