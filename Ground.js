class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:1,
          restitution:0.3,
          density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
     
     strokeWeight(2)
     stroke('white')
      fill('brown');
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };