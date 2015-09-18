function createLogo() {	
    logo = PIXI.Sprite.fromImage("/images/pixi_logo.jpg");

    curtain.addChild(logo);

	logo.rotationVelocity = 0;
    logo.interactive = true;
    logo.buttonMode = true;
    function growLogo() {
        logo.rotationVelocity = 0.07;
        logo.scale.set(0.75,0.75);
    }
    function stopLogoAnimation() {
    	logo.rotation = 0.2;
    	logo.rotationVelocity = 0;
        logo.scale.set(0.5,0.5);
    };
    function openCurtains() {
        isOpening = true;
        stopLogoAnimation();
        curtain.removeChild(logo);
    };

    logo
        .on('mouseover', growLogo)
        .on('mouseout', stopLogoAnimation)
        .on('mousedown', stopLogoAnimation)
        .on('mouseup', openCurtains)
        .on('touchend', openCurtains);

    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.set(0.5, 0.5);
    logo.position.x = initialWidth;
    logo.position.y = curtain_1.height/2;
    logo.rotation = 0.2;

    signForAnimation({
    	animate: function () {
			logo.rotation += logo.rotationVelocity;
    	}
    });
}

function showLogo() {
    curtain.addChild(logo);
}