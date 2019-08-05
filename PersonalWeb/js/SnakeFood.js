class SnakeFood {
    constructor(obj, x, y, scl) {
        this.x = x;
        this.y = y;
        this.obj = obj;
        this.scl = scl;
    }

    show() {
        this.obj.fill(2, 55, 136);
        this.obj.rect(this.x, this.y, this.scl, this.scl);
        this.obj.fill(212, 0, 120);
        this.obj.ellipse(this.x + this.scl / 2, this.y + this.scl / 2, this.scl);
        this.obj.fill(45,226,230)
        this.obj.triangle(this.x, this.y + this.scl / 2, this.x + this.scl, this.y + this.scl / 2, this.x + this.scl /2, this.y);
        this.obj.triangle(this.x, this.y + this.scl / 2, this.x + this.scl, this.y + this.scl / 2, this.x + this.scl /2, this.y + this.scl);

    }
}