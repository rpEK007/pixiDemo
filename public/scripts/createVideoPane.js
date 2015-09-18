function createVideoPane() {
	videoTexture = PIXI.Texture.fromVideo('/video/pandas.mp4');
	movieSprite = new PIXI.Sprite(videoTexture);

	movieSprite.width = renderer.width * 0.8;
	movieSprite.height = renderer.height * 0.8;

	movieSprite.anchor.x = 0.5;
	movieSprite.anchor.y = 0.5;

	movieSprite.position.x = renderer.width / 2;
	movieSprite.position.y = renderer.height / 2;

	stage.addChild(movieSprite);

	roundMask = new PIXI.Graphics();
	stage.addChild(roundMask);
	roundMask.position.x = renderer.width / 2;
	roundMask.position.y = renderer.height / 2;
	roundMask.lineStyle(0);

	radius = 10;
	count = 0;
	stage.mask = roundMask;
	finished = false;

	timer = setTimeout(function () {
		finished = true;
	}, 85000);
	movieSprite.interactive = true;
	movieSprite.buttonMode = true;
	finishMovie = function () {
		finished = true;
		clearTimeout(timer);
	};
	movieSprite
		.on('mouseup', finishMovie)
		.on('touchend', finishMovie);
	videoPaneAnimateEl = {
    	animate: function () {		    
		    count += 0.05;
			roundMask.clear();
		    roundMask.beginFill(0x9966FF);
			roundMask.drawCircle(0, 0, radius + Math.sin(count) * 15);
			roundMask.endFill();
			roundMask.x = renderer.width / 2 + Math.sin(count) * 10;
			roundMask.y = renderer.height / 2 + Math.cos(count) * 10;

    		if (radius < movieSprite.width / 2) {
    			if (videoTexture.baseTexture.hasLoaded) {
					radius += 10;
					stageBlur.blur -= 10;    				
    			}
    		} else if (!finished) {
    			stageBlur.blur = 0;
    			buttonSprite.texture = PIXI.Texture.fromFrame('off.png');
    		} else {
    			radius += 20;
    			if (radius > renderer.width) {
    				unsignFromAnimation(videoPaneAnimateEl);
    				videoTexture = null;
    				stage.removeChild(movieSprite);
    				stage.removeChild(roundMask);
    				stage.mask = null;
    				roundMask.destroy();
    				isClosing = true;
    			}
    		}
    	}
    };
	signForAnimation(videoPaneAnimateEl);
}