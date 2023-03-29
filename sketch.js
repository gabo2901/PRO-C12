var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png");
}

function setup() {

  createCanvas(400, 400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.scale = 1.2;
  
  boy = createSprite(200, 300);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.8;
  

  // crear  left Boundary (límite izquierdo)
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false
  ////establecer visibilidad como false (falso) para límite izquierdo

  //crear right Boundary (límite derecho)
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false

  //establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX; 
  // boy moviéndose en el eje X con el mouse

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 

  //código para reiniciar el fondo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
