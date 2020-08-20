var fixedRectangle,movingRectangle;
function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(200,200,50,80);
  movingRectangle=createSprite(400,200,80,30);
  movingRectangle.debug=true;
  fixedRectangle.debug=true;
  movingRectangle.shapeColor="green";
  fixedRectangle.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){
    movingRectangle.shapeColor="red";
    fixedRectangle.shapeColor="red";
  }
  else{
    movingRectangle.shapeColor="green";
    fixedRectangle.shapeColor="green";
  }
  drawSprites();
}