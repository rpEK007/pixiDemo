PIXI.loader 
    .add([
        "/images/scene.png",
        "/images/curtain_1.png",
        "/images/curtain_2.png",
        "/images/pixi_logo.jpg",
        "/images/onOff.png",
        "/images/onOff.json",
        "/video/pandas.mp4"
    ])
    .load(setup);

elementsToAnimate = [];

function animateElements()  {
    elementsToAnimate.forEach(function (el) {
        el.animate();
    });
}

function signForAnimation(el) {
    elementsToAnimate.push(el);
}

function unsignFromAnimation(el) {
    elementsToAnimate.splice(elementsToAnimate.indexOf(el), 1);
}