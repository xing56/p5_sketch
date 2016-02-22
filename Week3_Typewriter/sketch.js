// assults your eyes
var testImage;

function preload() {
	testImage = loadImage("./assets/Typewriter1.jpg");
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

	image(testImage, 0, 0);
	stroke(0, 200, 100, 80);

	testImage.loadPixels();

	for (x = 0; x < 500; x++) {
		console.log(x);
		for (y = 0; y < 733; y++) {
			var redIn = testImage.pixels[(y * 500 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 500 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 500 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//redOut = blueIn * .5;
			//blueOut = greenIn;
			//greenOut = redIn;

			var x2 = x + floor(random(-20, 50));
			var y2 = y + floor(random(-20, 50));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 200);
			y2 = clamp(y2, 0, 200);

			// use the color from the random position
			redOut = testImage.pixels[(y2 * 300 + x2) * 4 + 0];
			greenOut = testImage.pixels[(y * 300 + x2) * 4 + 1];
			blueOut = testImage.pixels[(y * 300 + x2) * 4 + 2];


			testImage.pixels[(y * 300 + x) * 4 + 0] = redOut;
			testImage.pixels[(y * 300 + x) * 4 + 1] = greenOut;
			testImage.pixels[(y * 300 + x) * 4 + 2] = blueOut;
		}
	}
	testImage.updatePixels();

	image(testImage, 0, 0, 500, 733);


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
