/*
 Notes:
   *Video 2.4 Drag Force - Time 7:15 
   *https://www.youtube.com/watch?v=DxFDgOYEoy8

  * Try the exercises about the liquid object

*/

let movers = [];
let mu = 0.05;
let dragC = 0.2;

function setup() {
  createCanvas(400, 400);

  for (let i=0; i<10; i++){
    movers[i] = new Mover(random(width), 25, random(1,8));
  }

}

function draw() {
  background(0);
  
  fill(18,231,255,125);
  noStroke();
  rect(0, height/2, width, height/2);
 
  for (let mover of movers){
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }


    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);

    if (mover.pos.y > height/2){
      mover.drag(dragC);
    }

    mover.applyForce(weight);
    mover.friction(mu);
    mover.update();
    mover.edges();
    mover.show();
  }

}
