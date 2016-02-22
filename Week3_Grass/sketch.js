//var MAX_HEIGHT = 10;
//var MAX_LEAN = 3;

var inputImage;

function preload() {
	inputImage = loadImage("");
	//you can add heightSlider(p5.js)
	//heightSlider.changed(draw);
}


function setup() {
	createCanvas(600, 600);
	//noLoop(); moving controls

}

function draw() {
	background(0, 0, 0);

	for (y = 0; y < 360; y++) {
		for (x = 0; x < 640; x++) {
			var pixelIndex = (y * 640 + x) * 4;
			var red = inputImage.pixels[pixelIndex];
			if (random(255) < red) {
				if (random(100) > 95) {
					// if (random() > 0.99) {
					drawGrass(x, y);
				}
			}

		}
	}
}
}

function drawGrass(x, y) {
	stroke(0, 255, 0);
	var grassHeight = random(100); //you can change the number 풀양도조절
	var grassLean = random(-10, 10);

	line(x, y, x + 0, y - grassHeight);
	// line(10,10,20,20);
}
