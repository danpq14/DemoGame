function Pikachu(x,y,speed) {
    this.x=x;
    this.y=y;
    this.speed = speed;
    this.draw =function () {
        let c=document.getElementById('mygame');
        let ctx=c.getContext('2d');
        let img = new Image();
        img.src = 'unnamed.jpg';
        ctx.drawImage(img,0,0);
    };
    this.moveRight = function () {
        this.x += this.speed;
    };
    this.moveLeft = function () {
        this.x -= this.speed;
    };
    this.moveUp = function () {
        this.y -= this.speed;
    };
    this.moveDown = function () {
        this.y += this.speed;
    };
    // this.moveSelection = function (evt) {
    //     switch (evt.keyCode) {
    //         case 37 :
    //             this.moveLeft();
    //             console.log(this.x)
    //             break;
    //         case 38 :
    //             this.moveUp();
    //             break;
    //         case 39 :
    //             this.moveRight();
    //             break;
    //         case 40 :
    //             this.moveDown();
    //             break;
    //     }
    // }
    this.reDraw = function () {
        ctx.clearRect(0, 0, 1000, 500);
        this.draw();
    }
}