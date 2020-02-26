"use strict"

class BankAccount {
    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }

    addInterest(interestRate){
        balance = this.balance + (this.balance*interestRate);
    }
}

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate){
        super(balance, interestRate, fee);
        this.fee = fee;
    }

    applyFee(){
        this.balance = this.balance - this.fee;
    }
}