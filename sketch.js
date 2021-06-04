var city,backgroundimg;
var ninja,ninjaRun,ninjaJump;
var edges;

function preload(){
backgroundimg=loadImage("ninjabackground.jpg")
  ninjaRun=loadAnimation("ninjaRun1.png","ninjaRun2.png","ninjaRun3.png","ninjaRun4.png","ninjaRun5.png","ninjaRun6.png","ninjaRun7.png")
  ninjaJump=loadAnimation("ninjaJump1.png","ninjaJump2.png","ninjaJump3.png","ninjaJump4.png","ninjaJump5.png")
}



function setup() {
  createCanvas(1000,430);
  edges=createEdgeSprites();
  
 city=createSprite(0,70,1200,430);
 city.addImage("city",backgroundimg)
 city.scale=0.9
 city.velocityX=-2
 
 ninja=createSprite(80,330,40,100)
 ninja.addAnimation("ninjaRunning",ninjaRun)
 ninja.scale=0.8
}

function draw() {
 background(255);
  
 if(city.x<520){
   city.x=750
 }
 if(keyDown("space")){
   ninja.addAnimation("jumping",ninjaJump)
   ninja.changeAnimation("jumping",ninjaJump)
   ninja.velocityY=-10
   ninja.scale=0.8
 }
 ninja.velocityY=ninja.velocityY+0.8
ninja.collide(edges)
  drawSprites();
 
}

