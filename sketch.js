var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1500, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(200, 95, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue")
	
	box1=createSprite(750,450,100,20);
	box1.shapeColor=color("red");

	box2=createSprite(710,415,20,50);
	box2.shapeColor=color("red");

	box3=createSprite(790,415,20,50);
	box3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(200 , 100 , 5 , {restitution:3});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,  );
 	World.add(world, ground);


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x;
	createEdgeSprites;
	packageSprite.collide(box1);
	packageSprite.collide(box2);
	packageSprite.collide(box3);
	packageSprite.collide(groundSprite);

 // packageSprite.bounceOff(groundSprite);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    helicopterSprite.velocityX=-2;
  }
  if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    helicopterSprite.velocityX=2;
  }
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    packageSprite.velocityY=2;
  }
}



