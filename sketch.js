var myTurtle;

function setup() {
	// create a place to draw use "SVG" to activate the SVG p5 plugin
	// createCanvas(6 * 72, 6 * 72, SVG);
	createCanvas(800, 800, SVG);
	noLoop();
	fill(0, 0, 0);
	stroke(200);
	strokeWeight(5);
	myTurtle = new Turtle();

	// use p5.dom.js to create a button and set it up to call "save()"
	var button = createButton("Save SVG");
	button.mousePressed(function() {
		save();
	});
}


function draw() {
	// clear the background
	//clear();
	//background(26, 82, 118);
	ellipse(406, 396, 405, 405);
	myTurtle.penUp();
	myTurtle.moveBackward(200);
	myTurtle.penDown();

	myTurtle.turnTo(10);
	myTurtle.moveForward(150);
	for (i = 0; i < 3; i++) {
		var rotate = 45;
		if (i % 2 == 1) {

		}

		// myTurtle.moveForward(i * 30);
		// myTurtle.turnRight(43);
		// //myTurtle.turnLeft(30);
		// myTurtle.turnRight(100);
		// myTurtle.penUp();
		// myTurtle.moveBackward(100);
		// myTurtle.penDown();


	}


}
