var bug1; // Declare objects
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;
var bug7;
var bug8;
var bug9;
var bug10;

function setup() {
	createCanvas(600, 500);
	// object
	a = a + 1;
	for (var a = 0; a < 20; a++) {
		bug1 = new Jitter();
	}
	bug1 = new Jitter();
	bug2 = new Jitter();
	bug3 = new Jitter();
	bug4 = new Jitter();
	bug5 = new Jitter();
	bug6 = new Jitter();
	bug7 = new Jitter();
	bug8 = new Jitter();
	bug9 = new Jitter();
	bug10 = new Jitter();
}

function draw() {
	background(69, 127, 38);
	bug1.move();
	bug1.display();
	bug2.move();
	bug2.display();
	bug3.move();
	bug3.display();
	bug4.move();
	bug4.display();
	bug5.move();
	bug5.display();
	bug6.move();
	bug6.display();
	bug7.move();
	bug7.display();
	bug8.move();
	bug8.display();
	bug9.move();
	bug9.display();
	bug10.move();
	bug10.display();
}

// Jitter
function Jitter() {
	this.x = random(width);
	this.y = random(height);
	this.diameter = random(30, 50);
	this.speed = 3;

	this.move = function() {
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	};

	this.display = function() {
		rect(this.x, this.y, this.diameter, this.diameter);
	};
}
