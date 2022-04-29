class Mover {
    constructor(x, y, m){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass)*10;
       
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    friction(mu){
        let diff = height - (this.pos.y + this.r + 1);

        if (diff < 1){
            //console.log('Friction Activated');
            // Get the direction of friction vector
            let frictVector = this.vel.copy();
            frictVector.normalize();
            frictVector.mult(-1);
            
            // Calculate the magnitude of friction vector
            //let mu = 0.05;
            let normal = this.mass;
            frictVector.setMag(mu * normal);

            // Apply the force
            this.applyForce(frictVector);

        }
    }
    
    drag(c){
        // Get the direction of drag force
        let dragVector = this.vel.copy();
        dragVector.normalize();
        dragVector.mult(-1);
        
        // Calculate the magnitude of drag force


        let speedSq = this.vel.magSq();
        dragVector.setMag(speedSq * c);
        // Apply the force
        this.applyForce(dragVector);

    }


    // Maintains the Mover inside the canvas
    edges(){
        if (this.pos.y >= height - this.r - 1){
            this.vel.y *= -1;
            this.pos.y = height - this.r - 1;
        }else if (this.pos.y <= 0  + this.r + 1){
            this.vel.y *= -1;
            this.pos.y = this.r + 1;
            
        }

        if (this.pos.x >= width  - this.r - 1){
            this.vel.x *= -1;
            this.pos.x = width - this.r - 1;
        } else if (this.pos.x <= 0 + this.r + 1){
            this.vel.x *= -1;
            this.pos.x = this.r + 1;
        }

        
    }

    update(){

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        
    }

    show(){
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.r*2);
        }
}