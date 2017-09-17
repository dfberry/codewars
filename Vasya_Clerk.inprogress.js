/*
The new "Avengers" movie has just been released! There are a lot of people 
at the cinema box office standing in a huge line. Each of them has a 
single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket 
to every single person in this line.

Can Vasya sell a ticket to each person and give the change if 
he initially has no money and sells the tickets strictly in the 
order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give 
the change. Otherwise return NO.

###Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES 
tickets([25, 100])    
        // => NO. Vasya will not have enough money to give change to 100 dollars
*/
const assert = require("assert");

function tickets(peopleInLine){

  console.log(peopleInLine);

  if(!peopleInLine || peopleInLine.length<1) return 

  let till = { oneHundred:0, fifty:0, twentyfive:0};

  const ticket = 25;
  let canProcessAllTickets = "YES";

  for(let i = 0, max = peopleInLine.length; (canProcessAllTickets=='YES') && i < max; i++){

    console.log("-------------------loop " + (i+1).toString());
    console.log(till);
    console.log("customer gives " + peopleInLine[i]);

    // put money in till
    if(peopleInLine[i]==100) till.oneHundred += 100;
    if(peopleInLine[i]==50) till.fifty += 50;
    if(peopleInLine[i]==25) till.twentyfive += 25;


    function needThisDenomination(amountNeeded, denomination){
      let amount = (amountNeeded / denomination) >= 1;
      console.log("needThisDenomination " + denomination + " = " + amount);
      return amount;
    }
    function haveThisDenomination(amountNeeded, denomination){
      let amount = till[denomination] >= amountNeeded;
      console.log("haveThisDenomination " + denomination + " = " + amount);
      return amount;
    }
    


    // determine total cash back to customer
    let cashBackToCustomer = peopleInLine[i] - ticket;
    console.log("cashBackToCustomer = " + cashBackToCustomer);

    let cashInHand = 0;

    if(cashBackToCustomer!=0){

      console.log("cashBackToCustomer!=0");

      while (needThisDenomination(cashBackToCustomer-cashInHand,100) && haveThisDenomination(cashBackToCustomer-cashInHand,'oneHundred')){
        cashInHand += 100;
        till.oneHundred -= 100;
        console.log("100 " + cashInHand);
      }

      while (needThisDenomination(cashBackToCustomer-cashInHand,50) && haveThisDenomination(cashBackToCustomer-cashInHand,'fifty')){
        cashInHand += 50;
        till.fifty -= 50;
        console.log("50 " + cashInHand);
      }
      while (needThisDenomination(cashBackToCustomer-cashInHand,25) && haveThisDenomination(cashBackToCustomer-cashInHand,'twentyfive')){
        cashInHand += 25;
        till.twentyfive -= 25; 
        console.log("25 " + cashInHand);
      }
      if (cashInHand != cashBackToCustomer) {
        canProcessAllTickets = "NO";
        console.log("-------------------loop " + (i+1).toString() + " can't process " + cashInHand + " != " + cashBackToCustomer);
      }
      
    }
  }
  console.log(canProcessAllTickets + JSON.stringify(peopleInLine));
  return canProcessAllTickets;
}
//assert.equal("YES",tickets([ 25, 25, 50, 50 ])) ;
//assert.equal("YES",tickets([ 25, 100 ]));
//assert.equal("NO",tickets([ 50, 50, 50, 50, 50, 50, 50, 50, 50, 50 ]));
//assert.equal('YES', tickets([ 50, 100, 100 ]));
assert.equal('YES', tickets([25,25,25,25,50,100,50]));
