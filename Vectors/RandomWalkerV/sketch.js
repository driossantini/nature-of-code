let walker;
let walker2;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200,200);
  walker2 = new Walker(100,100);
}

function draw() {
  background(0);
  walker.update();
  walker.show();
  walker2.update();
  walker2.show();




}
