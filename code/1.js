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