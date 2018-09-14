"use strict";

let Pizza =  function(price, size, ...ingredients){
	this.price = price;
	this.size = size;
	this.ingredients = ingredients;
}

let Pizza1 = new Pizza(3500, '12.5"',"peperoni","cheese");
let Pizza2 = new Pizza(2500, '15"', "ananas", "skinka", "cheese");
