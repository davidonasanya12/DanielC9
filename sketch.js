var Box
function setup() {
  createCanvas(1000,1000);
  Box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  Box.velocityX=2
  drawSprites()

}




