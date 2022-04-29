class Liquid {
    constructor(x, y, w, h, c){
        // Location of upper left corner
        this.pos  = createVector(x, y);
        this.h = h;
        this.w = w;
        this.c = c;
    }

    contains(mover){

        let mpos = mover.pos;

        return mpos.y > this.pos.y && mpos.y < this.pos.y + this.h && mpos.x > this.pos.x && mpos.x < this.pos.x + this.w
        }


    dragForce(mover){
        // Get the direction of drag force
        let dragVector = mover.vel.copy();
        dragVector.normalize();
        dragVector.mult(-1);
        
        // Calculate the magnitude of drag force    
        let speedSq = mover.vel.magSq();
        dragVector.setMag(speedSq * this.c);
        
        return dragVector
        
    }

    show(){
        noStroke();
        fill(120);
        rect(this.pos.x, this.pos.y, this.w, this.h);

    }

    update(mover){
        

        if (this.contains(mover)){
            mover.applyForce(this.dragForce(mover));
        }
        
    }
}
