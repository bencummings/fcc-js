"use strict";

const checkCashRegister = (orderTotal, cashProvided, cashInRegister) => {

  let changeDue = (cashProvided * 100) - (orderTotal * 100);
  let registerTotal = 0;

  for (let i = 0, j = cashInRegister.length; i < j; i++) {
    registerTotal += cashInRegister[i][1] * 100;
  }

  if (registerTotal >= changeDue) {

    if (registerTotal === changeDue) {
      return {
        "change": cashInRegister,
        "status": "CLOSED"
      };
    }

    const cashReturned = [];

    for (let i = cashInRegister.length - 1; i >= 0; i--) {

      const denominationName = cashInRegister[i][0];
      let denominationAmount;
      let denominationInRegister = cashInRegister[i][1] * 100;
      const denominationReturned = [denominationName, 0];

      switch (denominationName) {
        case "ONE HUNDRED":
          denominationAmount = 10000;
          break;
        case "TWENTY":
          denominationAmount = 2000;
          break;
        case "TEN":
          denominationAmount = 1000;
          break;
        case "FIVE":
          denominationAmount = 500;
          break;
        case "ONE":
          denominationAmount = 100;
          break;
        case "QUARTER":
          denominationAmount = 25;
          break;
        case "DIME":
          denominationAmount = 10;
          break;
        case "NICKEL":
          denominationAmount = 5;
          break;
        case "PENNY":
          denominationAmount = 1;
      }

      while (denominationInRegister > 0 && changeDue >= denominationAmount) {
        changeDue -= denominationAmount;
        denominationInRegister -= denominationAmount;
        denominationReturned[1] += denominationAmount / 100;
      }

      if (denominationReturned[1] > 0) {
        cashReturned.push(denominationReturned);
      }

    }

    if (changeDue === 0) {
      return {
        "change": cashReturned,
        "status": "OPEN"
      };
    }

  }

  return {
    "change": [],
    "status": "INSUFFICIENT_FUNDS"
  };

};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);