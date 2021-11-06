//cria as variaveis
var t_rex,t_rexRunning;
var canvas;
var ground, ground_img, invisibleGround;
var cloud, cloud_img;
var cacto, cacto_img01,cacto_img02,cacto_img03,cacto_img04,cacto_img05,cacto_img06;
//carrega toda as midias
function preload(){
   t_rexRunning = loadAnimation("trex3.png","trex4.png");
   ground_img = loadImage("ground2.png");

   cloud_img = loadImage("cloud.png");
   cacto_img01 = loadImage("obstacle1.png");
   cacto_img02 = loadImage("obstacle2.png");
   cacto_img03 = loadImage("obstacle3.png");
   cacto_img04 = loadImage("obstacle4.png");
   cacto_img05 = loadImage("obstacle5.png");
   cacto_img06 = loadImage("obstacle6.png");
}

//configuração do jogo
function setup(){
    canvas = createCanvas(600,200);

    t_rex = createSprite(50,150,20,30);
    t_rex.addAnimation("run",t_rexRunning);
    t_rex.scale = 0.5;

    ground = createSprite(300,180,600,20);
    ground.addImage("solo", ground_img);
    ground.velocityX = -2;

    invisibleGround = createSprite(300,190,600,10);
    invisibleGround.visible = false;

}


function draw(){
    background("white");

    //pulo do trex
    if (keyDown("space") && t_rex.y >=145) {
        t_rex.velocityY = -10;
    }
    load_obstacles ();
    gravity();

    //reiniciando o solo
    if(ground.x < 0){
        ground.x = ground.width/2;
    }

    //console.log(frameCount);
    
    //colisão do trex com o solo
    t_rex.collide(invisibleGround);
    
    var sorteio = Math.round(random(1,6));
    //console.log(sorteio);
    spawnClouds();
    drawSprites();
}

//funções

function gravity() {
    t_rex.velocityY = t_rex.velocityY+0.5;
}

function spawnClouds(){
    if(frameCount%55 === 0){
        cloud = createSprite(600,100,20,10);
        cloud.addImage(cloud_img);
        cloud.velocityX = -1.5;
        cloud.y = random(20,100);
        cloud.scale = random(0.2,2);
        cloud.lifetime = 450;       
        cloud.depth = 0;     
    }

}
function load_obstacles () {
if (frameCount%65 === 0) {
    cactus = createSprite(600,170,5,50);       
    cactus.scale = 0.4
    var randomcactus = Math.round(random(1,6));
 switch (randomcactus){
 case 1:  cactus.addImage(cacto_img01);
   break;
 case 2:  cactus.addImage(cacto_img02);
   break;
 case 3:  cactus.addImage(cacto_img03);
   break;
 case 4: cactus.addImage(cacto_img04);
   break;
 case 5: cactus.addImage(cacto_img05);
   break;
 case 6: cactus.addImage(cacto_img06);
   break;
}
   
 cactus.velocityX = -2
 cactus.depth = 0
 cactus.lifetime = 300

}    
}