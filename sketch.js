var canvas;
var music;
var surface1 ;
var surface2 ;
var surface3 ;
var surface4 ;
var block ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,595,160,30);
    surface1.shapeColor = rgb(0, 0, 255);
    surface2=createSprite(300,595,160,30);
    surface2.shapeColor = rgb(255,255,0);
    surface3=createSprite(490,595,160,30);
    surface3.shapeColor = rgb(153,0,76);
    surface4=createSprite(690,595,160,30);
    surface4.shapeColor = rgb(0,128,0)  ;
    block=createSprite(400,300,30,30);
    block.shapeColor = rgb(255, 255, 255)  ;
   


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    block.x=World.mouseX
    block.y=World.mouseY
    //create edgeSprite
    if(block.isTouching (surface1)){
        block.bounceOff(surface1)
        block.shapeColor= rgb(0, 0, 255);
        music.play();
    }
    else{block.shapeColor=rgb(255, 255, 255) 

    }
    
    if(block.isTouching (surface2)){
        block.bounceOff(surface2)
        block.shapeColor= rgb(255,255,0);
        music.play();
    }
    
    
    
    if(block.isTouching (surface3)){
        block.bounceOff(surface3)
        block.shapeColor= rgb(153,0,76);
        music.play();
         
    }
    

    if(block.isTouching (surface4)){
        block.bounceOff(surface4)
        block.shapeColor= rgb(0,128,0)  ;
        music.play();
    }
    
   
     
     drawSprites();
}
