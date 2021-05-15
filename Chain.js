class Chain {
constructor(BodyA,BodyB){
   var cOpts = {
       bodyA : BodyA,
       bodyB : BodyB,
       stiffness : 0.5,
       lenght : 10
   } 
    this.chain= Constraint.create(cOpts)
    World.add(world,this.chain)

}
display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}

}
