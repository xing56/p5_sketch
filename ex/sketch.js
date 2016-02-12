var max_distance;

function setup() {
	createCanvas(800, 600);
	noStroke();
	max_distance = dist(20, 20, width, height);
}

function draw() {
	background(98, 178, 163);
	fill(211, 180, 0);
	for (var i = 0; i <= width; i += random(10)) {
		for (var j = 0; j <= height; j += random(10)) {
			var size = dist(random(700), random(500), i, j);
			size = size / max_distance * random(10, 15);
			rect(i, j, size, size);
		}
	}
}
