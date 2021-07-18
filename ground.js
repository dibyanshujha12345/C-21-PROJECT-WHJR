class Ground{
    constructor(x,y,w,h){
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
  
      var Ground_options={
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,w,h,Ground_options);
  World.add(world,this.body);
  
  
      
    }
  
    show(){
  
      var pos=this.body.position;
  
    rectMode(CENTER)
    stroke (255);
    fill ("yellow");
  
      rect(pos.x,pos.y,this.w,this.h);
  
    }
  }
  
  
  