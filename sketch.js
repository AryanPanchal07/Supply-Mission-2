var helicopterIMG, helicopterSprite, packageSprite,packageIMG, packOptions;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3; 
var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.gif")
	packageIMG=loadImage("package.png")
	PSound=loadSound("helicopter.mp3")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	
        packOptions={
          restitution:0.6, 
          isStatic:true,
          friction:0
        }
        
        packageSprite=createSprite(width/2, 200, 10,10);	
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite((width/2)-40, 170, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box(300, 610, 20, 100);
	box2 = new Box(500, 610, 20, 100);
	box3 = new Box(400, 650, 200, 20);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(packageSprite.x ,  packageSprite.y, 5,packOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	
 	PSound.loop(); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);    
  }
}



