class Renderer {
  constructor(){
  }

  renderCharacter(options){
    let img = new Image();
    img.src = options.source;
    img.onload = function() {
     options.ctx.drawImage(img,(options.innerWidth/2)-50,(options.innerHeight/2)-50 ,100,100);
    };
  }
}
