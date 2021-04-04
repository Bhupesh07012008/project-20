var bgImg;
var cat,catimg1,catimg2;
var mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png");
    mouseimg2 = loadAnimation("images/mouse2.png");
    catimg3 = loadAnimation("images/cat3.png");
    mouseimg3 = loadAnimation("images/mouse3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation(catimg1);
    cat.scale = 1;

    mouse = createSprite(200,600);
    mouse.addAnimation(mouseimg1);
    mouse.scale = 0.5;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

       if(cat.x - mouse.x < (cat.width - mouse.width)/2)
       {
           cat.velocityX=0;
           cat.addAnimation(catimg3);
           cat.x=300;
           cat.scale=1;
           cat.changeAnimation(catimg4);
           mouse.addAnimation(mouseimg3);
           mouse.scale=0.5;
           mouse.changeAnimation(mouseimg4);

       }
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation(catimg2);
      cat.changeAnimation(catimg3);

      mouse.addAnimation(mouseimg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation(mouseimg4);
    }

}
