// assults your eyes
var nextX, nextY;
var testImage;

function preload() {
	testImage = loadImage("Typewriter1.jpg");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(500, 733);
	testImage.loadPixels();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	stroke(255, 0, 0);
	fill(255, 255, 255);

	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 733; x++) {
		console.log(x);
		for (y = 0; y < 500; y++) {
			var redIn = testImage.pixels[(y * 733 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 733 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 733 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//redOut = blueIn * .5;
			//blueOut = greenIn;
			//greenOut = redIn;

			// choose random position for the sample
			var x2 = x + floor(random(-10, 50));
			var y2 = y + floor(random(-10, 50));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 733);
			y2 = clamp(y2, 0, 733);

			// use the color from the random position
			redOut = testImage.pixels[(y2 * 733 + x2) * 4 + 0];
			greenOut = testImage.pixels[(y * 733 + x2) * 4 + 1];
			blueOut = testImage.pixels[(y * 733 + x2) * 4 + 2];


			testImage.pixels[(y * 733 + x) * 4 + 0] = redOut;
			testImage.pixels[(y * 733 + x) * 4 + 1] = greenOut;
			testImage.pixels[(y * 733 + x) * 4 + 2] = blueOut;
		}
	}
	testImage.updatePixels();

	image(testImage, 0, 0, 733, 500);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

}


// download the image
//function mouseReleased() {
//console.log("save");
//save();
}
