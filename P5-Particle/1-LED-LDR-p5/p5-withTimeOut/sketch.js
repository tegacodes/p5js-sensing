var x = 0;
var counter = 0;
var timer2 = 0;

function setup() {
  createCanvas(200, 200);
  // timer = createP('timer 1');
  // timer2 = createP('timer 2');

  interval = setInterval(timeIt, 500);
}

function timeIt() {
  // timer.html(counter);
  counter++;
    background(random(255));
    console.log('interval!');
}

function draw() {

  stroke(255);
  line(x, 0, x, height);

  x = x + 3;
  if (x > width) {
    x = 0;
  }
}
