var r = 0;
var g = 0;
var b = 0;

var inc = 3;

function setup() {
  createCanvas(400, 400);

  x = 200
  y = 200
  background(51);
}

function draw() {

  console.log(r);
  console.log(g);
  console.log(b);

  stroke(r,g,b,10);
  strokeWeight(5);
  point(x, y);

  var w = floor(random(4));

  switch(w) {
    case 0:
      x += 1;
      r += random(inc);
      break;

    case 1:
      x -= 1;
      g += random(inc);
      break;

    case 2:
      y += 1;
      b += random(inc);
      break;

    case 3:
      y -= 1;
      break;

  } 


  r = r % 256
  g = g % 256
  b = b % 256




  
}
