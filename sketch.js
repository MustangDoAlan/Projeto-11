var corredor,corredorImg,trilha,trilhaImg
function preload(){
  //imagens pré-carregadas
  corredorImg = loadAnimation("Runner-1.png","Runner-2.png");
  trilhaImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  trilha = createSprite(200,200);
  trilha.addImage(trilhaImg);
  trilha.scale = 1.2
  trilha.velocityY = 3
  
  corredor = createSprite(200,370)
  corredor.addAnimation("correndo",corredorImg);
  corredor.scale = 0.07

  blocoE = createSprite(0,0,100,800);
  blocoE.visible=false;
  blocoD = createSprite(410,0,100,800);
  blocoD.visible=false;

  
}

function draw() {
  background(0);
  if(trilha.y> 400) {
    trilha.y = 200
  }

corredor.x = World.mouseX;
edges = createEdgeSprites();
corredor.collide(edges);
corredor.collide(blocoE);
corredor.collide(blocoD);


 drawSprites();
}
