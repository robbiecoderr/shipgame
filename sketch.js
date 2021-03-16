var shipmoveMent
var shipS
var seaImage
function preload(){
shipmoveMent=loadAnimation("ship-1.png","ship-2.png","ship-1.png")
  seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  shipS=createSprite(200,200,10,10)
  shipS.addAnimation("robbie",shipmoveMent)
  shipS.scale=0.2
}

function draw() {
  background(seaImage);
  drawSprites()
 
}