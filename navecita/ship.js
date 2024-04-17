function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 262;
  this.height = 300;
  this.rotation = 0;
  this.sparks = false;
}

Ship.prototype.draw = function (context) {
  var alien = new Image();
    alien.src = "alien.png";
    var sparks = new Image();
    sparks.src = "sparks.png";

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    
    context.drawImage(alien, -alien.width/2, -alien.height/2);

    if (this.sparks) {
        context.drawImage(sparks, -sparks.width/.6, -sparks.height/2);
    }
  context.restore();
};
