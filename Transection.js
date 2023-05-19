document.getElementById("DepositeButton").addEventListener("click", function(){
    // create deposited money record
    const DepositeField = document.getElementById("DepositeMoney");
    const DepositeMoney = parseFloat(DepositeField.value);

    const Predeposited = document.getElementById("Deposite");
    const Deposite = parseFloat(Predeposited.innerText);

    const TotalDeposite = Deposite + DepositeMoney;
    Predeposited.innerText = TotalDeposite;

    // add the amount in Total balance record
    const Totalbalance = document.getElementById("TotalBalance");
    const TotalBalance = parseFloat(Totalbalance.innerText);

    const BalanceAmount = TotalBalance + DepositeMoney;
    Totalbalance.innerText = BalanceAmount;

    DepositeField.value = "";
})

    // withdraw balance section
document.getElementById("WithdrawButton").addEventListener("click", function(){
    const Withdrawfield = document.getElementById("WithdrawMoney")
    const WithdrawMoney = parseFloat(Withdrawfield.value);

    const PreWithdraw = document.getElementById("Withdraw");
    const Withdraw = parseFloat(PreWithdraw.innerText);

    const Totalwithdraw = Withdraw + WithdrawMoney;
    PreWithdraw.innerText = Totalwithdraw;

    const Totalbalance = document.getElementById("TotalBalance");
    const TotalBalance = parseFloat(Totalbalance.innerText);
    const NewTotalBalance = TotalBalance - WithdrawMoney;
    Totalbalance.innerText = NewTotalBalance;

    if(TotalBalance <= WithdrawMoney){
        alert("You have no sufficient balance. Please Deposite Some money.")
    }

    Withdrawfield.value = "";
    
})