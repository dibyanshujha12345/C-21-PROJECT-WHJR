
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball2;

var ground,left,right,more,oneMore;



function preload()
{
	
}

function setup() {
	createCanvas(1270, 600);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(634,590,1270,20);
	left =new Ground(700,590,10,250);
	right =new Ground(850,590,10,250);

	more =new Ground(950,590,10,250);
	oneMore =new Ground(1100,590,10,250);


	//Create the Bodies Here.
var ball_options = {
	isStatic : false,
	restitution : 0.8,
	friction:0,
	density:1.2
}

ball = Bodies.circle(200,100,15,ball_options);
World.add(world,ball);




rectMode(CENTER);	

ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,15);

  
    ground.show();
	left.show();
	right.show();
	more.show();
	oneMore.show();

  
  drawSprites();
 
}



function ballForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-3})
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		ballForce();
	}
}
