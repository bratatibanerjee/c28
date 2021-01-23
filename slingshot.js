class Slingshot{
constructor(bodya,pointb){ 
    var options={
        bodyA:bodya,
        pointB:pointb,
        length:10,
        stiffness:0.04
    }
this.Sling=Constraint.create(options)
World.add(world,this.Sling);
this.pointB=pointb;
}
fly(){
    this.Sling.bodyA=null
}
display(){
    if(this.Sling.bodyA){
    var pointA=this.Sling.bodyA.position
    var pointB=this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}