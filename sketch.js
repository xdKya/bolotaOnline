var ball, position;
var database;

function setup() {
  createCanvas(500, 500);

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "green";
}

function draw() {
  background("white");

  if (keyDown("right")) {
    ball.x += 5;
  }
  if (keyDown("left")) {
    ball.x -= 5;
  }
  if (keyDown("up")) {
    ball.y -= 5;
  }
  if (keyDown("down")) {
    ball.y += 5;
  }
  drawSprites();
}
