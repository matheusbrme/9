var garden,rabbit,apple,orange;
var gardenImg,rabbitImg,appleimg;
var ss
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


ss = Math.round(random(1,3))

if (frameCount % 60 == 0){

 if(ss == 1){

 criarmaça()

 }else if(ss == 2){

 criarfolhalaranja()

 }else{

 criarfolhavermelho()

 }
}



  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
  
}

function criarmaça(){

apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.08
apple.velocityY = 3;
apple.lifetime = 150;

}  


function criarfolhalaranja(){

  orange= createSprite(random(50,350),40,10,10);
orange.addImage(orangeImg);
orange.scale = 0.06
orange.velocityY = 3;
orange.lifetime = 150;
  
  }
  function criarfolhavermelho(){

 red = createSprite(random(50,350),40,10,10);
 red.addImage(redImg);
 red.scale = 0.06
 red.velocityY = 3;
 red.lifetime = 150;
    
    }