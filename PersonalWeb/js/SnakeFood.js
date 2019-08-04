class SnakeFood {
    constructor(obj, x, y, scl) {
        this.x = x;
        this.y = y;
        this.obj = obj;
        this.scl = scl;
    }

    show() {
        this.obj.fill(255,0,0);
        this.obj.rect(this.x, this.y, this.scl, this.scl);
    }
}