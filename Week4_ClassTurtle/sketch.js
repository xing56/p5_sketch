var myTurtle;

function setup() {
	createCanvas(600, 600);
	noFill();
	stroke(255);
	background(50);
	noLoop();

	myTurtle = new Turtle();

}

function draw() {
	myTurtle.penUp();
	myTurtle.moveBackward(200);
	myTurtle.penDown();

	for (var i = 0; i < 50; i++) {
		myTurtle.moveForward(400);
		myTurtle.turnRight(170);

	}
}
