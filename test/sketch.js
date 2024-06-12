let x, y;
let previousX, previousY;
let visited = [];
let speedSlider;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 2;
  previousX = x;
  previousY = y;
  background(255);
  frameRate(1); // Set the initial frame rate to 1 frame per second

  // Draw the coordinate plane
  stroke(200);
  for (let i = 0; i < width; i += 20) {
    line(i, 0, i, height);
  }
  for (let i = 0; i < height; i += 20) {
    line(0, i, width, i);
  }

  // Draw the starting point
  stroke(255, 0, 0); // Red color for the starting point
  strokeWeight(13);
  point(x, y);
  visited.push({x: x, y: y});

  // Create the speed slider
  speedSlider = createSlider(1, 60, 1);
  speedSlider.position(10, height + 10);
}

function draw() {
  // Adjust the frame rate according to the slider value
  frameRate(speedSlider.value());

  // Draw the previous point as black if it was already visited
  if (visited.some(p => p.x === previousX && p.y === previousY)) {
    stroke(0);
  } else {
    stroke(0, 0, 255); // Blue color for the last point
  }
  strokeWeight(8);
  point(previousX, previousY);

  let direction = floor(random(4));

  previousX = x;
  previousY = y;

  switch (direction) {
    case 0:
      x += 20; // Move right
      break;
    case 1:
      x -= 20; // Move left
      break;
    case 2:
      y += 20; // Move down
      break;
    case 3:
      y -= 20; // Move up
      break;
  }

  // Constrain the point to stay within the canvas
  x = constrain(x, 0, width - 1);
  y = constrain(y, 0, height - 1);

  visited.push({x: x, y: y});

  // Draw the current point as blue
  stroke(0, 0, 255); // Blue color for the last point
  strokeWeight(8);
  point(x, y);
}
