class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.bind = Constraint.create(options);
        World.add(world, this.bind);
    }
    attach(body){
        this.bind.bodyA = body;
    }
    
    fly(){
        this.bind.bodyA = null;
    }

    display(){
        if(this.bind.bodyA){
            var pointA = this.bind.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0)
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}