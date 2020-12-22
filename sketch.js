var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);

  weight=random(30,52);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color("80,80,80");

  bullet.velocityX = speed;

  thickness=random(22,83);

}

function draw() {
  background("black");  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if(damage>10)
    {
      wall.shapeColor = "red";
    }
    if(damage<10)
    {
      wallshapeColor = "green";
    }
  }
  

  drawSprites();
}