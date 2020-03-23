let hero = new Pikachu(10,10,20);
function moveSelection(evt) {
    switch (evt.keyCode) {
    case 37 :
        hero.moveLeft();
        console.log(hero.x)
        break;
    case 38 :
        hero.moveUp();
        console.log(hero.y)
        break;
    case 39 :
        hero.moveRight();
        console.log(hero.x)
        break;
    case 40 :
        hero.moveDown();
        console.log(hero.y);
        break;
    }
    hero.reDraw = function () {
        ctx.clearRect(0, 0, 1000, 500);
        hero.draw();
    }
}
function Start() {
    hero.draw();
    window.addEventListener('keydown',moveSelection);
}