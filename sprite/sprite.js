function sprite () {
    this.width = 7200; 
    this.height = 900; 
    this.x = 0;
    this.y = 0;
    this.radius = 1200; //***esta medida es lo que mide el ancho de un sprite (un frame del spritesheet)***
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    //this.totalSpriteFrames = 6; //***este es el numero total de frames en mi spritesheet***
  }
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = 4; //funciona para controlar los fps, si es 4 son 15fps
    var numberOfFrames = 6; //*** El numero de frames que tiene mi spritesheet***

  update = function () {

    tickCount += 1;
  
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      frameIndex += 1; 
    } if (frameIndex >= numberOfFrames){
      frameIndex = 0; 
    }
}; 


  sprite.prototype.draw = function (context) {
    var nyanImage = new Image();
    nyanImage.src = "nyan_sprite.png";
    update();
    context.save();
    context.translate(this.x, this.y);
    
    context.drawImage(nyanImage, 
        frameIndex * this.width / numberOfFrames,
        0,
        this.width / numberOfFrames,
        this.height,
        0,
        0,
        this.width / numberOfFrames,
        this.height);
     
    context.restore();
    
  };

  sprite.prototype.getBounds = function () {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  };

