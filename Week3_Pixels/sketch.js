var img;

function preload() {
	img = loadImage("assets/bike.jpg");
}

function setup() {
	image(img, 0, 0);
	var d = pixelDensity();
	var halfImage = 4 * (img.width * d) *
		(img.height / 2 * d);
	loadPixels();
	for (var i = 0; i < halfImage; i++) {
		pixels[i + halfImage] = pixels[i];
	}
	updatePixels();
}
