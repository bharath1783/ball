const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var background ;
var snow =[];
function preload(){
  bgImg= loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);

if (frameCount% 50 ===0){
  for (var i=0;i<200;i++){
    snow.push(new createSnow(random(0,800),random(0,800)));
  }
}


}

function draw() {
  background(bgImg); 
  Engine.update(engine)
  for(var i =0;i<200;i++){
    snow[i].showDrop();
    snow[i].update()
  } 
  drawSprites();
}