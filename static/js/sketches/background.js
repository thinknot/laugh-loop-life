function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.class('backgroundsketch');

    // Using only one value with color() generates a grayscale value.
    c = color(65); // Update 'c' with grayscale value
    fill(c); // Use updated 'c' as fill color
}

function draw() {
}

function mouseMoved() {
	ellipse(mouseX, mouseY, 80, 80);
}