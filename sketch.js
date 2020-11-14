var car,wall,carImage,backgroundImage,wallImage;
var speed, weight; 

function preload()
{
	carImage = loadImage("car.gif");
	wallImage = loadImage("tree.gif");
	backgroundImage = loadImage("background.jpg");
}

function setup() {
  createCanvas(1600, 400);
	speed=random(55,90);
	weight=random(400,1500);

	car=createSprite(50, 250, 50,50);   
	car.velocityX = speed;
	car.addImage("carmoving",carImage);
	car.scale = 0.15;
	car.setCollider("circle",0,0,99);
	//car.shapeColor=color(255);

	wall=createSprite(1450,163,0,0);
	wall.scale = 1.25;
	wall.addImage("Tree",wallImage);	
}


function draw()
{
	background(backgroundImage);
	
	var deformation = (0.5 * weight * speed* speed) / 22500;

	if(car.collide(wall))
	{
		if(wall.x - car.x < (wall.width + car.width)/2)
		{
			if(deformation>180)
			{
				car.velocityX=0;
				textSize(40);
				text("Lethal damage",200,200);
				//car.shapeColor=color(255,0,0);
			}

			else if(deformation<180 && deformation>100)
			{
				car.velocityX=0;
				textSize(40);
				text("Average damage",200,200);
				//car.shapeColor=color(230,230,0);
			}

			else if(deformation<100)
			{
				car.velocityX=0;
				textSize(40);
				text("Good Condition",200,200);
				//car.shapeColor=color(0,255,0);
			}
		}
	}
	drawSprites();
}


