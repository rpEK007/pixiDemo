function createStageAndRenderer() {
	stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    renderer.view.style.position = "absolute"
    renderer.view.style.display = "block";
    renderer.resize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.view);

    toBlur = false;
	stageBlur = new PIXI.filters.BlurFilter();
	stage.filters = [stageBlur];
	stageBlur.blur = 0;

    signForAnimation({
    	animate: function () {
		    if (toBlur) {
		        stageBlur.blur += 0.5;
		        if (stageBlur.blur > 80) {
		        	toBlur = false;
		        	createVideoPane();
		        }
		    }
    	}
    });
}