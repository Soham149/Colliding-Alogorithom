var moveingRect,Rect;

function setup() {
  createCanvas(1200,800);
  Rect = createSprite(200, 200, 50, 80);
  Rect.shapeColor = "red";
  moveingRect = createSprite(400,200,80,30);
  moveingRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  moveingRect.x = World.mouseX;
  moveingRect.y = World.mouseY;
  moveingRect.debug = true;
  Rect.debug = true;
  if (moveingRect.x - Rect.x < Rect.width/2 + moveingRect.width/2 && 
    Rect.x - moveingRect.x < Rect.width/2 + moveingRect.width/2 &&
    moveingRect.y - Rect.y < Rect.height/2 + moveingRect.height/2 &&
    Rect.y - moveingRect.y < Rect.height/2 + moveingRect.height/2 ){
    Rect.shapeColor = "green";
    moveingRect.shapeColor = "green";
  }
  else {
    moveingRect.shapeColor = "red";
    Rect.shapeColor = "red";
  }
  drawSprites();
}