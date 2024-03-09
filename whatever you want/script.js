var player
var Background
var imageBackground
var person
var personalGame
var imageLoad

function preload(){
    Background = loadImage("../assets/background.jpeg")
    character_1 = loadImage("assets/11.png")
    imageLoad = loadAnimation("assets/3.png")
    animationLeft = loadAnimation("assets/1.png","assets/2.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    personalGame = createSprite(100, 100)
    //personalGame.addImage(character_1)
    player =createSprite(windowWidth/2,windowHeight/2,50,50);
    player.addAnimation("character_1",character_1)
    player.addAnimation("animationleft",animationLeft)
}

function draw(){
    background(Background)

    
    player.shapeColor = "blue"
   
   /* if (keyDown("W")){
        player.y = player.y - 3
    } else {
        player.addImage("character_1")
    }

    if (keyDown("S")){
        player.y = player.y + 3
    }*/

    if (keyWentDown("A")){
        player.velocityX = -3
        player.changeAnimation("animationLeft",animationLeft)
    } 
    if ( keyWentUp("A")){
       player.velocityX = 0
        player.changeAnimation("character_1",character_1)
    }
    

   /* if (keyDown("D")){
        player.x = player.x + 3
    }*/


   
   
    drawSprites()
}