class Hero{
    constructor(x, y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 350, 200, options);
        this.width = 350
        this.height = 200
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(CENTER);
        rectMode(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }