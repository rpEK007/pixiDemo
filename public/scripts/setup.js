function setup() {
    createStageAndRenderer();
    createCurtain();
    createScene();
    createLogo();

    animate();

    window.onresize = function () {
        renderer.resize(window.innerWidth, window.innerHeight);
        resizeWhitePane();
    };
};