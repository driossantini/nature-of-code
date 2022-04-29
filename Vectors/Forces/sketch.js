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

  jello = new Liquid(0, 2*width/3, width, height/3, dragC);

}

function draw() {
  background(0);
  
  jello.show();

  for (let mover of movers){
    if (mouseIsPressed && (mouseButton == LEFT)) {
      let wind = createVector(0.5, 0);
      mover.applyForce(wind);
    }

    if (mouseIsPressed && (mouseButton == CENTER)) {
      let antigravity = createVector(0, -1.1);
      mover.applyForce(antigravity);
    }

    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);

    mover.applyForce(weight);
    mover.friction(mu);
    mover.update();
    mover.edges();
    mover.show();
    jello.update(mover);
  }

}
