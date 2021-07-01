class Drops {
    constructor(x, y) {
        var options = {
            restitution: 0.2,
            friction: 0.2
        }

        this.drops = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        World.add(world, this.drops);
    }

    updateY() {
        if (this.drops.position.y > height) {
            Matter.Body.setPosition(this.drops, { x: random(0, width), y: random(0, 400) });
        }


    }
    display() {
        ellipseMode(CENTER);
        fill("lightblue");
        ellipse(this.drops.position.x, this.drops.position.y, this.radius, this.radius);
    }
}