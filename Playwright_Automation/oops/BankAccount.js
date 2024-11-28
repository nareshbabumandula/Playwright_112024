class BankAccount{

  #balance; // Private property

  constructor(intialBalance){
     this.#balance = intialBalance;
  }

  // setter
  deposit(amount){
    this.#balance+=amount;
  }

  // getter
  getBalance(){
    return this.#balance; // Access private property via a method (getBalance())
  }

}

const account = new BankAccount(1000);
account.deposit(100);
console.log(account.getBalance());
//console.log(account.#balance); //Property '#balance' is not accessible outside class 'BankAccount' because it has a private





