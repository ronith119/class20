var moveingRectangle,fixedRectangle;


function setup() {
  createCanvas(800,400);
  moveingRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle=createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
   moveingRectangle.x=mouseX;
   moveingRectangle.y=mouseY;
   if(moveingRectangle.x-fixedRectangle.x<moveingRectangle.width/2+fixedRectangle.width/2 &&
    fixedRectangle.x-moveingRectangle.x<moveingRectangle.width/2+fixedRectangle.width/2 && 
    moveingRectangle.y-fixedRectangle.y<moveingRectangle.height/2+fixedRectangle.height/2 &&
    fixedRectangle.y-moveingRectangle.y<moveingRectangle.height/2+fixedRectangle.height/2){
      moveingRectangle.shapeColor="red";
      fixedRectangle.shapeColor="red";
    }else{
      moveingRectangle.shapeColor="green";
      fixedRectangle.shapeColor="green";

    }
  drawSprites();
}