var car1,car2,car3,wall;
var speed,weight;
function setup() {
  createCanvas(1600,800);
  wall = createSprite(1500, 300, 40, 900);
  car1 = createSprite(50, 200, 50, 50);
  car2 = createSprite(50, 400, 50, 50);
  car3 = createSprite(50, 600, 50, 50);
  speed= random(55,100)
  weight=random(400,1500)
}

function draw() {
  background(0); 
  wall.shapeColor=color("white");
  car1.velocityX=speed;
  if(wall.x-car1.x<(car1.width+wall.width)/2){
car1.velocityX=0;
var deformation=0.5*weight*speed*speed/22505
if(deformation>180){
car1.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
car1.shapeColor=color(230,230,0)
}
if(deformation<100){
  car1.shapeColor=color(0,255,0);
}

  } 
  wall.shapeColor=color("white");
  car2.velocityX=speed;
  if(wall.x-car2.x<(car2.width+wall.width)/2){
car2.velocityX=0;
var deformation=8*weight*speed*speed/22505
if(deformation>180){
car2.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
car2.shapeColor=color(230,230,0)
}
if(deformation<100){
  car2.shapeColor=color(0,255,0);
}

  } 
  wall.shapeColor=color("white");
  car3.velocityX=speed;
  if(wall.x-car3.x<(car3.width+wall.width)/2){
car3.velocityX=0;
var deformation=0.8*weight*speed*speed/22505
if(deformation>180){
car3.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
car3.shapeColor=color(230,230,0)
}
if(deformation<100){
  car3.shapeColor=color(0,255,0);
}

  } 
  drawSprites();
}