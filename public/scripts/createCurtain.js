function createCurtain() {
    curtain = new PIXI.Container();

    curtain_1 = PIXI.Sprite.fromImage("/images/curtain_1.png");
    curtain_2 = PIXI.Sprite.fromImage("/images/curtain_2.png");
	
    stage.addChild(curtain);

    curtain.addChild(curtain_1);
    curtain.addChild(curtain_2);

    isOpening = false;
    isClosing = false;

    initialWidth = curtain_1.width;
    curtain_2.anchor.x = 1;
    curtain_2.position.x=initialWidth*2;
    
    createWhitePane();

    signForAnimation({
    	animate: function () {
		    if (isOpening) {
		        curtain_1.width -=2;
		        curtain_2.width -=2;
		        if (curtain_2.width <= 50) {
		            isOpening = false;
		        }
		    } else if (isClosing) {
		    	curtain_1.width +=2;
		        curtain_2.width +=2;
		        if (curtain_2.width >= initialWidth) {
		            isClosing = false;
		            showLogo();
		        }
		    }
    	}
    });
}