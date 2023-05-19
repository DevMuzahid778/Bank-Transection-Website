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