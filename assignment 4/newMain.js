"use strict"
//creating a canvas
let canvas = document.querySelector('canvas');
let painter = canvas.getContext('2d');

//setting up sizes
if(window.innerWidth > 700){
    var width = canvas.width = 700;
} else{ var width = canvas.width = window.innerWidth; };
let height = canvas.height = window.innerHeight;

//https://gist.github.com/Xordal/9bf24bc6cbc5a39f62cd
//used this code to make the border

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function invert(rgb) {
    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
    for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    //return rgbToHex(rgb[0], rgb[1], rgb[2]);
    return 'rgb('+rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

//function to generate a random number from x to y
function random(min, max){
    var num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}

//shape object and constructor made
class Shape{
    constructor(x, y, velX, velY, exists){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }
}
//Ball is a shape and inherits the constructor from Shape
class Ball extends Shape{
    constructor(x, y, velX, valY, exists, color, size){
        super(x, y, velX, valY, exists);
        this.color = color;
        this.size = size;
        this.InvertedColor = invert(color);
    }
    //making a draw function that draws itself
    draw(){
        painter.beginPath();
        painter.fillStyle = this.color;
        painter.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        painter.fill();
        painter.strokeStyle = this.InvertedColor;
        painter.stroke();
    }
    //update self code
    update(){
        //basically what all this does is checks if the circle has hit the borders of the canvas
        //and if so then it just reverses the x value and so it keeps the momentum and angle
        //if you make it something like `this.velX = -(this.velX - 0.1);` then it will resault in loss of momentum
        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
          }
        
          if((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
          }
        
          if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
          }
        
          if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
          }
        
          this.x += this.velX;
          this.y += this.velY;
        }
    //if something comes in contact with the ball and it still exists then it will change color 
    collisionDetect(){
        //selects the current ball and then gets all the values needed
        for(let CurrentBall of balls){
            if(!(this === CurrentBall)){
                //finds the "default" current value of the ball a.k.a position
                //then find the distance between all the other balls and itself
                let dx = this.x - CurrentBall.x;
                let dy = this.y - CurrentBall.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
            
                //if it comes in contact with another ball it will randomise it's own color again and again until it doesn't come in contact with it.
                if(distance < this.size + CurrentBall.size && CurrentBall.exists){
                    CurrentBall.color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
                }
            }
        }
    }
}

class Player{
    constructor(x , y, size, color, speed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
    }
    draw(){
        painter.beginPath();
        painter.strokeStyle = this.color;
        painter.lineWidth = 3;
        painter.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        painter.stroke();
    }
    setControls(){
        let cthis = this;
        //detects if they key is pressed and if so makes a certain variable true
        window.onkeydown = function(e){
            switch(e.keyCode){
                case 65:
                    cthis.moveLeft = true;
                    break;
                case 68:
                    cthis.moveRight = true;
                    break;
                case 87:
                    cthis.moveUp = true;
                    break;
                case 83:
                    cthis.moveDown = true;
                    break;
            }
        }
        //detects if you let go of the key or not
        window.onkeyup = function(e){
            switch(e.keyCode){
                case 65:
                    cthis.moveLeft = false;
                    break;
                case 68:
                    cthis.moveRight = false;
                    break;
                case 87:
                    cthis.moveUp = false;
                    break;
                case 83:
                    cthis.moveDown = false;
                    break;
            }
        }

        if(this.moveUp){this.y -= this.speed}
        if(this.moveDown){this.y += this.speed}
        if(this.moveLeft){this.x -= this.speed}
        if(this.moveRight){this.x += this.speed}
    }
    BorderCollision(){
        if((this.x + this.size) >= width) {
            this.x -= this.size;
        }

        if((this.x - this.size) <= 0) {
            this.x += this.size;
        }

        if((this.y + this.size) >= height) {
            this.y -= this.size;
        }

        if((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }
}

let time = 0;

setInterval(function(){SecondPassed();}, 1000)

let SecondPassed = function(){
    time ++;
}

let balls = [];

let User = new Player(
    random(0,width),
    random(0,height),
    5,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    4
)

let size = random(10,20);
let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(1,7),
    random(1,7),
    true,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
);
balls.push(ball);

function animation() {
    //all this does is it paints a layer of white on top of the canvas
    //created a very specific bug with my current code
    //because it paints a layer of white on top of everythinig that has the transparency of 0.25
    //so every 4th time this runs things will just dissapear but this also makes a really nice trail effect
    //balls have to be above a ceratin speed in order for this to work properly
    painter.fillStyle = 'rgba(255,255,255,0.25)';
    painter.fillRect(0,0,width,height);

    if(time >= 5 ){
        time = 0;
        let size = random(10,20);
        let ball = new Ball(
            // ball position always drawn at least one ball width
            // away from the adge of the canvas, to avoid drawing errors
            random(0 + size,width - size),
            random(0 + size,height - size),
            random(-7,7),
            random(-7,7),
            true,
            'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
            size
        );
        balls.push(ball);
        console.log(balls)
    }

    for(let currentBall of balls) {
        if(currentBall.exists) {
        currentBall.draw();
        currentBall.update();
        currentBall.collisionDetect();
        }
    }
    User.draw();
    User.setControls();
    User.BorderCollision();
    
    requestAnimationFrame(animation);
}
animation();