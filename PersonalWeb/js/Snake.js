class Snake {
    constructor(obj, x, y, scl) {
        this.x = x;
        this.y = y;
        this.obj = obj;
        this.scl = scl;
        this.x_vel = 1;
        this.y_vel = 0;
        this.size = 1;
        this.tail = [this.size];
    }

    
    dir(x, y) {
        this.x_vel = x;
        this.y_vel = y;
    }

    show() {
        this.obj.fill(255);
        for(var i = 0; i < this.tail.length; i++){
            this.obj.rect(this.tail[i].x,this.tail[i].y,this.scl,this.scl);
        }   
    }

    update() {
        if(this.size === this.tail.length){
            for(var i = 0; i < this.size -1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }

        this.tail[this.size-1] = this.obj.createVector(this.x, this.y);
        this.x += this.x_vel * this.scl;
        this.y += this.y_vel * this.scl;
    }

    death(){
        for(var i = 0; i < this.size -1; i++){
            var pos = this.tail[i];
            var d = this.obj.dist(this.x,this.y, pos.x,pos.y);
            if(d === 0){
                this.size = 1;
                this.tail = [];
                return true;
            }
        }
        return false;
    }
}
