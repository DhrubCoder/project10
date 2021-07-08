var ship,shipRunning;
var water,waterImage;
var plane,planeFly;
var boat,boatRun;

function preload (){
  waterImage=loadImage("sea.png");
  shipRunning=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
planeFly=loadImage("heli.gif");
boatRun=loadImage("boat.gif");
}




function setup(){
   createCanvas(450,400);

//create sprite of water
water=createSprite(600,200);
water.addImage("water1",waterImage);
water.velocityX=-3;
water.scale = 0.3;

  ship=createSprite(330,200,10,10);
  ship.addAnimation("ship",shipRunning);
ship.scale=0.2;

//create plane sprite
plane=createSprite(250,60);
plane.addImage("planeFly",planeFly);
plane.scale=1.3;

//create boat
boat=createSprite(110,200);
boat.addImage("boat1",boatRun);
boat.scale=0.3;

}



function draw(){
  background("lightgrey");

if(water.x < 0){
  water.x=water.width/8
}


drawSprites();

}