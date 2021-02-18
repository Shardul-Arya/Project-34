class Monster{
    constructor(x, y, radius) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.width = radius
        this.height = radius
        this.image = loadImage("Monster-01.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //ellipseMode(CENTER);
        //ellipse(0, 0, this.radius*2);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*3, this.height*3);
        pop();
      }
  }