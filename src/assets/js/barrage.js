export default class Barrage{
    //代表可以最多显示在视屏上的活跃弹幕数量
    static number=100;
    barrageBox=[];
    x=[];
    y=[];
    speed=[];
    fontSize=[];
    color=[];
    active=[];
    currentTime=[];
    canvas;
    context;
    paused=true;
    constructor(canvas){
        this.canvas=canvas;
        this.context=this.canvas.getContext("2d");
    }
    
    init(){
        for(let i=0;i<Barrage.number;i++){
            this.x[i]=this.canvas.width;
            this.barrageBox[i]="";
            this.currentTime[i]=0;
            //默认每帧跑3px
            this.speed[i]=3;
            this.color[i]="#ffffff";
            this.fontSize[i]="24px";
            let barrageY=(1+i)*36;
            while(barrageY>this.canvas.height){
                barrageY-=this.canvas.height;
                if(barrageY<36){
                    barrageY=36;
                }
            }
            this.y[i]=barrageY;
            this.active[i]=false;
        }
    }
    draw(){
        this.context.clearRect(0,0,this.canvas.width,
            this.canvas.height);
        for(let i=0;i<Barrage.number;i++){
            if(this.active[i]){
                let barrage=this.barrageBox[i];
                let barrageWidth=this.context.measureText(barrage).width;
                let color=this.color[i];
                let fontSize=this.fontSize[i];
                let speed=this.speed[i];
                if(this.paused){
                    speed=0;
                }
                this.x[i]-=speed;
                this.context.font=fontSize+" Arial";
                this.context.fillStyle=color;
                this.context.fillText(barrage,this.x[i],this.y[i]);
                if(this.x[i]+barrageWidth<0){
                    this.active[i]=false;
                    this.x[i]=this.canvas.width;
                }
            }
        }
    }
    launch(){
        this.draw();
        window.requestAnimationFrame(()=>{
            this.launch();
        });
    }
    add(barrageObj){
        for(let i=0;i<Barrage.number;i++){
            if(!this.active[i]){
                this.active[i]=true;
                this.fontSize[i]=barrageObj.fontSize;
                this.color[i]=barrageObj.color;
                this.barrageBox[i]=barrageObj.barrage;
                this.currentTime[i]=barrageObj.currentTime;
                this.speed[i]=2+barrageObj.barrage.length/6;
                return;
            }
        }
    }
    timeUpdate(currentTime,box,paused){
        this.paused=paused;
        for(let i=0;i<box.length;i++){
            if(currentTime==box[i].currentTime){
                let j=i;
                if(i>100){
                    j=Math.floor(Math.random()*100);
                }
                this.active[j]=true;
                this.fontSize[j]=box[i].fontSize;
                this.color[j]=box[i].color;
                this.barrageBox[j]=box[i].barrage;
                this.currentTime[j]=box[i].currentTime;
                this.speed[j]=2+box[i].barrage.length/6;
                j++;
            }
        }
    }
    seeked(){
        for(let i=0;i<Barrage.number;i++){
            this.active[i]=false;
        }
    }
}