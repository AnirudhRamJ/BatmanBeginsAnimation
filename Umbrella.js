class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.ManImage = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.batmanImage = loadImage("Walking Frame/batman.png");

    }

    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if (frameCount < 200) {
            image(this.ManImage, pos.x, pos.y + 70, 300, 300);
        }

        else {
            image(this.batmanImage, pos.x, pos.y + 70, 300, 300);
        }
    }
}
