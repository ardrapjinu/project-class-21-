var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 bullet= createSprite(50, 200, 50, 20);
 wall=createSprite(1200,200,thickness,height/2);

 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83)

 bullet.velocityX = speed;

wall.shapeColor="red";
 bullet.shapeColor="white";
}

function draw() {
  background(0);  
  drawSprites();
}