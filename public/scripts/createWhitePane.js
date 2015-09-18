function createWhitePane() {
	pane = new PIXI.Graphics();
	pane.lineStyle(0);
	
	stage.addChildAt(pane, 0);

	buttonSprite = new PIXI.Sprite.fromFrame("off.png");	

	buttonSprite.interactive = true;
	buttonSprite.buttonMode = true;
	function startMovie() {
    	buttonSprite.texture = PIXI.Texture.fromFrame('on.png');
        setTimeout(function () {
			toBlur = true;
        }, 500);
    }
    buttonSprite
    	.on('mouseup', startMovie)
    	.on('touchend', startMovie);

	stage.addChildAt(buttonSprite, 1);

	resizeWhitePane();
}

function resizeWhitePane() {
	pane.clear();
    pane.beginFill(0xFFFFFF);
	pane.drawRect(0, 0, renderer.width * 0.8, renderer.height * 0.8);
	pane.endFill();

	pane.position.x = renderer.width / 2 - pane.width / 2;
	pane.position.y = renderer.height / 2 - pane.height / 2;

	buttonSprite.anchor.x = 0.5;
	buttonSprite.anchor.y = 0.5;

	buttonSprite.position.x = renderer.width / 2;
	buttonSprite.position.y = renderer.height / 2;
};