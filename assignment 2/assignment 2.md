1.
```javascript 
let me = {
	"name":"Tomasz",
	"numbers":[7839127,7889177]
};
console.log(me.numbers[0]);
```
2.
```javascript
let family = {
"parents":
	{
		"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
		"mothers":[{"name":"Rakel"},{"name":"Sara"}]
	}
};

window.console.log(family.parents.fathers[1].name);
```
3.
```javascript
let breakfast = {
	name:"The Lumberjack",
	price:9.95,
	ingredients:["eggs", "sausage", "toast", "hashbrown", "pancakes"]
};
```
4.
```javascript
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary : function showBalance(){
        return "Welcome! \nYour balance is currently $" + this.balance + " and your interest rate is 1%."

    }
};

console.log(savingsAccount.printAccountSummary());
```
5.
```javascript 
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donut){
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
```
6.
```javascript
"use strict";

let Pizza =  function(price, size, ...ingredients){
	this.price = price;
	this.size = size;
	this.ingredients = ingredients;
}

let Pizza1 = new Pizza(3500, '12.5"',"peperoni","cheese");
let Pizza2 = new Pizza(2500, '15"', "ananas", "skinka", "cheese");
```
