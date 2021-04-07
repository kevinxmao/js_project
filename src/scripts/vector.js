export class Vector {
    constructor(p1, p2) {
        this.x = p1.x - p2.x;
        this.y = p1.y - p2.y;
    }

    normalize() {
        return { x: this.x / this.length(), y: this.y / this.length() };
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}