var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
//wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

//bullet
  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = "brown"; 

//randoms
 //thickness  
   thickness = random(22, 83);
 //speed
   speed = random(223, 321);
 //weight 
   weight = random(30, 52);

}

function draw() {
  background(255,255,255);

//velocity of the bullet  
  bullet.velocityX = speed;
  
  var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;

 if(damage > 10){
    wall.shapeColor = "red";
 }  

 if(damage < 10){
    wall.shapeColor = "green"; 
 }
}
//console.log(damage);


  drawSprites();

}

function hasCollided(lbullet, lwall){
  bulletRightEdge =lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){
   return  true;
}

   return false;
}


