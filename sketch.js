/*var backgrimg,cat,mouse,catimg1,catimg2,catimg3,catimg4,mouseimg1,mouseimg2,mouseimg3,mouseimg4;
function preload() {
    backgrimg=loadImage("garden.png");
catimg1=loadAnimation("tomOne.png");
catimg2=loadAnimation("tomTwo.png");
catimg3=loadAnimation("tomThree.png");
catimg4=loadAnimation("tomFour.png");
mouseimg1=loadAnimation("jerryOne.png");
mouseimg2=loadAnimation("jerryTwo.png");
mouseimg3=loadAnimation("jerryThree.png");
mouseimg4=loadAnimation("jerryFour.png");
    }

function setup(){
    createCanvas(1000,800);
  

cat=createSprite(100,100,10,20,);
cat.addAnimation(catimg1);

mouse=createSprite(120,50,20,10);
mouse.addAnimation(mouseimg1);
}

function draw() {

    background(backgrimg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimage",catimg3);
        cat.changeAnimation("catlastimage");
    }
    drawSprites();
    text(mouseX+','+mouseY, 10,45);
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}
 


}*/
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
