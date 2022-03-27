
// Creating a 2D map of Perlin noise

var inc = 0.01;
var start = 0;


function setup() {
  createCanvas(400, 400);
  // Chose 1 for high density screens (retina screens or others)
  pixelDensity(1);
  noiseDetail(8,0.2);
}

function draw() {
  var yoff = 0;
  loadPixels();

  for (var y = 0; y < width; y++){
    var xoff = start;

    for (var x = 0; x < width; x++){
    
      var index = (x + y * width) * 4
      var r = noise(xoff, yoff)*255;

      pixels[index+0] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;
      xoff += inc;
      }
    
    yoff += inc;

    }
  
  start += inc*2;

  updatePixels();
  
}
