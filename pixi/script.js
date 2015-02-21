var renderer = new PIXI.WebGLRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Stage();

var someTexture = PIXI.Texture.fromImage('image.png');
var sprite = new PIXI.Sprite(someTexture);

stage.addChild(sprite);

requestAnimationFrame(function animate() {
  renderer.render(stage);
  sprite.position.x = Math.sin(Date.now() * .001) * 100 + 100;
  sprite.position.y = Math.cos(Date.now() * .001) * 100 + 100;

  requestAnimationFrame(animate);
});

var tween;

window.onclick = function(){
    var tween = new TWEEN.Tween( { x: 0, y: 0 } )
        .to( { x: 400 }, 2000 )
        .easing( TWEEN.Easing.Elastic.InOut )
        .onUpdate( function () {
        	sprite.position.x = this.x;
        	sprite.position.y = this.y;
        })
     	.start();
    };


requestAnimationFrame( function animate(time){
	TWEEN.update(time);
	renderer.render(stage);
	requestAnimationFrame(animate);
});