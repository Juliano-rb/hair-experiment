class char{
    constructor(x,y, ctx){
        this.x=x;
        this.y=y;

        this.img = new Image();
        this.img.src = "aurora.png";
        this.ctx = ctx;

        this.speed = 0.4;
    }

    update(x,y){
        this.x = this.x + x*this.speed;
        this.y = this.y + y*this.speed;
    }

    draw(){
        this.ctx.drawImage(this.img,this.x,this.y);
    }
}
