var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
    createCanvas(1790,1000)

    bg = createSprite(895,485,1600,1000);
    bg.addImage(bgImg);
    bg.scale = 1.5


    bottomGround = createSprite(200,990,3150,20);
    //bottomGround.visible = false;

    topGround = createSprite(200,10,3150,20);
    //topGround.visible = false;
      
    
    balloon = createSprite(100,200,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.5;



}

function draw() {
  
  background("black");
        
         
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}