class Mover {
    constructor(x,y){
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
       
    }

    update(){

        let mouse = createVector(mouseX, mouseY);

        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(0.1);
        

        this.vel.add(this.acc);
        this.vel.limit(2);
        
        this.pos.add(this.vel);
        
    }

    show(){
        stroke(255,100);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, 8);
    }
}