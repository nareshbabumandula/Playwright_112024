class BankAccount{

  #balance; // Private property

  constructor(intialBalance){
     this.#balance = intialBalance;
  }

  // setter
  deposit(amount){
    if (amount>0) {
      this.#balance+=amount;
    } else {
      console.log("Deposit amount cannot be 0 or negative");
    }
  }
  
  // getter
  getBalance(){
    return this.#balance; // Access private property via a method (getBalance())
  }

  // setter
  withdrawl(amount){
    if (amount>0) {
      this.#balance-=amount;
    } else {
      console.log("Withdrawl amount cannot be 0 or negative");
    }
  }

}

const account = new BankAccount(1000);
account.deposit(330);
console.log(account.getBalance());
account.withdrawl(-3);
console.log(account.getBalance());
//console.log(account.#balance); //Property '#balance' is not accessible outside class 'BankAccount' because it has a private





