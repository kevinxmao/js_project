export class MovingObj {
    constructor(ctx, attr) {
        this.ctx = ctx;
        this.radius = attr.radius;
        this.x = attr.x;
        this.y = attr.y;
        this.color = attr.color;
        this.vel = attr.vel;
        this.angle = attr.angle;
        this.mass = this.radius;
        this.img = new Image();
        this.img.onload = () => this.draw(ctx);
        this.img.src = "src/assets/images/no_parking.png";
        this.vx = this.vel * Math.cos(this.angle);
        this.vy = this.vel * Math.sin(this.angle);
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(
            this.img,
            this.x - this.radius,
            this.y - this.radius,
            this.radius * 2,
            this.radius * 2
        );
        ctx.restore();
    }

    move() {
        const [dx, dy] = [this.vx, this.vy];
        this.x += dx;
        this.y += dy;

        if (this.x > window.innerWidth) {
            this.x -= window.innerWidth;
        } else if (this.x < 0) {
            this.x += window.innerWidth;
        }

        if (this.y > window.innerHeight) {
            this.y -= window.innerHeight;
        } else if (this.y < 0) {
            this.y += window.innerHeight;
        }
    }

    isColliding(ball) {
        let dx = this.x - ball.x;
        let dy = this.y - ball.y;

        let d = Math.sqrt(dx * dx + dy * dy);

        return d < (this.radius + ball.radius);
    }

    animate() {
        this.move();
        this.draw(this.ctx);
    }
}