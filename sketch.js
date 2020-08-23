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

wall.shapeColor="grey";
 bullet.shapeColor="white";
}

function draw() {
  background(0);  
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(bullet.collide(wall)){
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor = "green";
    }
    else{
      wall.shapeColor = "red";
    }
  }
  fill ("white");
  text("damage"+damage,800,200);
  drawSprites();
}