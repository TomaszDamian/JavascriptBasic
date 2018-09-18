1. 
Prototpe based programming og aðal pointið með því er að endurnýta kóða og í stað þess að copy-a allan kóðann fyrir hvert og eitt object og geyma það í minni þá er bara verið að segja objectinu að þetta er til annars staðar og að það ætti að nota það
t.d python hefur það sama en það er ekki hægt að búa til instance af einhverjum objecti.

2.
A) þegar þú sleppir að hafa prototype og ætlar svo að gera nýtt instance af clasanum þá allt í einum ertu að afrita allan þennan kóða yfir og geyma það í minninu.
B) þegar prototype er til staðar þá í stað þess að afrita fallið þá ertu bara að láta nýja instancið benda á það og erfa það.

3.
```javascript 
"use strict"

let SpaceShip = function(speed, life = 10){
	this.speed = speed;
	this.life = life;
}
SpaceShip.prototype.fly = function() {
	this.speed += 1;
}

let HealingSpaceShip = function(){}

HealingSpaceShip.prototype = Object.create(SpaceShip.prototype);

HealingSpaceShip.prototype.setLife = function(){
	life += 1;
}


let Dauntless = new SpaceShip(500);
let Evolution = new SpaceShip(250);
let Wildcat = new SpaceShip(100);
let Wildgrowth = new HealingSpaceShip(110);
let EvoNews = new HealingSpaceShip(600);
```
4.
```javascript 
"use strict"

class SpaceShip{
	constructor(speed, life = 10){
		this.speed = speed;
		this.life = life;
	}
	fly(){
		this.speed += 1;
	}
}

class HealingSpaceShip extends SpaceShip{
	constructor(speed, life = 10){ super(speed,life) }
	setLife(){
		this.life += 1;
	}
}

let Dauntless = new SpaceShip(500);
let Evolution = new SpaceShip(250);
let Wildcat = new SpaceShip(100);
let Wildgrowth = new HealingSpaceShip(110);
let EvoNews = new HealingSpaceShip(600);
```
