function setup() {
    var myCanvas = createCanvas(500, 500);
    myCanvas.parent('sketch-holder');

    angleMode(DEGREES); // lets use degrees instead of radians
    rectMode(CENTER); // lets our rectangles starts from center
    ctx = drawingContext; // this one is for using native Js canvas features
    x = width / 2; // x coordinate of center of canvas
    y = height / 2; // y coordinate of center of canvas


    const squareSideDotsCount = 30;
    
    const squareVertices = [];
    let startAngle = 45;
    for (let i = 0; i < 4; i += 1) {
      squareVertices.push({
        x: 400 * cos(startAngle),
        y: 400 * sin(startAngle),
      });
      startAngle += 360 / 4;
    }
      
    const square = [];
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < squareSideDotsCount; j += 1) {  
        const x = lerp(
          squareVertices[i].x,
          squareVertices[(i + 1) % squareVertices.length].x,
          j / squareSideDotsCount,
        );
        const y = lerp(
          squareVertices[i].y,
          squareVertices[(i + 1) % squareVertices.length].y,
          j / squareSideDotsCount,
        );
        square.push({ x, y });
      }
    }
    
    push();
    translate(x, y);
    for (let i = 0; i < square.length; i += 1) {
      push();
      noStroke();
      if (i % 2 === 0) {
          fill(0);
        } else {
          fill(255);
        }
      beginShape();
      vertex(square[i].x, square[i].y);
      vertex(0, 0);
      vertex(
          square[(i + 1) % square.length].x,
          square[(i + 1) % square.length].y,
        );
      endShape(CLOSE);
      pop();
    }
    pop();
  }


function draw() {
}
