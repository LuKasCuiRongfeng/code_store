export default class Tanchishe{
    foodStyle="yellow"
    foodSize=10
    snakeStyle="black"
    snakeSize=10
    canvas
    context
    speed=1
    direction=[1,2,3,4]//左37、上38、右39、下40
    currentDirection=1
    snakeX=0
    snakeY=250
    constructor(){}
    init(canvas){
        this.canvas=canvas;
        this.context=this.canvas.getContext("2d");
        this.context.fillStyle=this.foodStyle;
        this.context.fillRect(~~(Math.random()*500),~~(Math.random()*500),this.foodSize,this.foodSize);
        this.context.fillStyle=this.snakeStyle;
        this.context.fillRect(this.snakeX,this.snakeY,30,10);
    }
    changeDirection(){

    }
    drawFood(){
        this.context.fillStyle=this.foodStyle;
        this.context.fillRect(~~(Math.random()*500),~~(Math.random()*500),this.foodSize,this.foodSize);
    }
    drawSnake(){
        switch(this.currentDirection){
            case 1:
                this.snakeX+=1;break;
            case 2:
                this.snakeY+=1;break;
            case 3:
                this.snakeX-=1;break;
            case 4:
                this.snakeY-=1;break;
            default: this.snakeX+=1;     
        }

    }
    draw(){
        this.drawFood();
    }
    launchGame(){
        this.draw();
        window.requestAnimationFrame((time)=>{
            this.launchGame();
        })
    }
}