"use strict"
//creating a canvas
let canvas = document.querySelector('canvas');
let painter = canvas.getContext('2d');

//setting up sizes
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

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
    }
    //making a draw function that draws itself
    draw(){
        painter.beginPath();
        painter.fillStyle = this.color;
        painter.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        painter.fill();
    }
    //update self code
    update(){
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
        for(j in balls.length){
            if(!(this === balls[j])){
                let dx = this.x - balls[j].x;
                let dy = this.y - balls[j].y;
            
            if(distance < this.size + balls[j].size && balls[j].exists){
                balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
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
}

let balls = [];
let User = new Player(
    random(0,width),
    random(0,height),
    5,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    4
    )


function loop() {
    painter.fillStyle = 'rgba(0,0,0,0.25)';
    painter.fillRect(0,0,width,height);

    while(balls.length < 25) {
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
    }

    for(var i = 0; i < balls.length; i++) {
        if(balls[i].exists) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
        }
    }
    User.draw();
    User.setControls();
    
    requestAnimationFrame(loop);
}
loop();