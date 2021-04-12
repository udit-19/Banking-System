function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var enterSName = document.getElementById("enterSName").value;
   var findSenderBankAccount = enterSName + "BankBalance";
   var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
   if (enterAmount > enterSAmount) {
      alert("Insufficient Balance.")
   }
   else {
      var findUserBankAccount = enterName + "BankBalance";

      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
      document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Are you sure you want to do transaction of Rs ${enterAmount}?`)
      alert(`Successful Transaction !!  
       Rs ${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`RBI - Rs ${enterAmount} debited from the sender with Email-id ${enterSName}@email.com
       to recepient with Email-id ${enterName}@email.com on ${Date()}. Available balance is Rs ${myAccountBalance}. Call 1800-102-976 if transaction not done.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}