class boy{
    constructor(bodyA, pointB){
        var options = {
      wqb    
            bodyB:bodyB
            stiffness: 0.04,
            length: 10
        }
        this.img1 = loadImage("sprites/boy.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.boy);
    }

        display(){
        image(this.img1, 180, 40);
    
        text(mouseX, 50,50);
        text(mouseY, 50,60);
        if(this.sling.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<200){
            strokeWeight(4);
            image(this.img3,pointA.x-35, pointA.y-10,30, 15);
            line(pointA.x-30, pointA.y,165 , 70);
            line(pointA.x-10, pointA.y,205 , 70);
        }
        else{
            strokeWeight(4);
            image(this.img3,pointA.x+15, pointA.y-10,30, 15);
            line(pointA.x+10, pointA.y,165 , 70);
            line(pointA.x+20, pointA.y,205 , 70);  
        }
        }
    }
    
}