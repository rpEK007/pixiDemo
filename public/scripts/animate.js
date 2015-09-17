function animate() {
    stage.width = innerWidth;
    stage.height = innerHeight;
    
    curtain.width = innerWidth;
    curtain.height = innerHeight - scene.height;
    
    scene.position.y = curtain.height;
    scene.width = curtain.width;

    animateElements();

    requestAnimationFrame(animate);
    renderer.render(stage);
}