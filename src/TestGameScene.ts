//Demo 游戏
class Monster extends egret.Bitmap{
    public difangMosterCurrentState = 0;
    public texTureArr:egret.Texture[];
    public gName:string = "";
    constructor(value?:egret.Texture){
        super(value);
    }
    public update(){
            if(this.difangMosterCurrentState < this.texTureArr.length - 1)
                this.difangMosterCurrentState ++;
            else{
                this.difangMosterCurrentState = 0;
            }
        this.texture = this.texTureArr[this.difangMosterCurrentState];
    }
}

class TestGameScene extends egret.Sprite{
    private sW:number;
    private sH:number;
    private daojishiT:number = 500;
    private t:egret.Timer;
    private daojishiLabel:egret.TextField;
    private texTureArr:egret.Texture[];
    private difangMosterArr:Monster[];
    private preStemp:number = 0;
    constructor(){
        super();
    }

    //开始游戏
    public start(){
        this.loadResource();
    }

    private async loadResource(){
        this.texTureArr = [];
        for(let i = 1;i<12;i++){
            this.texTureArr.push(RES.getRes("bbb_json#"+i));
        }
        //当前场景额资源加载完毕后，开始游戏
        this.startGame()
    }

    private startGame(){
        this.sW = this.stage.stageWidth;
        this.sH = this.stage.stageHeight;
        //画背景
        this.graphics.beginFill(0x333333);
        this.graphics.drawRect(0,0,this.sW,this.sH);
        this.graphics.endFill()
        //title
        let daojishiLabel = new egret.TextField();
        daojishiLabel.width = 100;
        daojishiLabel.height = 60;
        daojishiLabel.background = false;
        daojishiLabel.border = false;
        daojishiLabel.borderColor = 0x000000;
        daojishiLabel.textColor = 0xffffff;
        daojishiLabel.size = 50;
        daojishiLabel.x = (this.sW - daojishiLabel.width)/2
        daojishiLabel.y = 15;
        daojishiLabel.textAlign = "center";
        daojishiLabel.text = this.daojishiT + "";
        this.addChild(daojishiLabel);
        this.daojishiLabel = daojishiLabel;
        //添加倒计时计时器
        if(this.t){
            this.t.stop();
            this.t = null;
        }
        this.t = new egret.Timer(1000,0);
        this.t.addEventListener(egret.TimerEvent.TIMER,this.reCountDojishi,this);
        this.t.start();

        //创建敌方monster
        this.difangMosterArr = [];
        for (let i=0;i<15;i++){
            let mon = this.createDifangMonster();
            mon.gName = "dMonstor_"+i;
            this.difangMosterArr.push(mon);
            this.addChild(mon);
            mon.x = this.sW - 450 + Math.random()*300;
            mon.y = 100 + Math.random()*(this.sH - 300);
        }
    }
    private createDifangMonster(){
        let bm = new Monster();
        bm.texTureArr = this.texTureArr;
        bm.difangMosterCurrentState = Math.random()*bm.texTureArr.length;
        bm.texture = bm.texTureArr[bm.difangMosterCurrentState];
        return bm;
    }

    //更新各个画布的状态
    public update(stemp:number){
        if(stemp - this.preStemp < 120){
            return false;//每隔80毫秒更新一次场景动画，  测试用
        }
        this.preStemp = stemp;
        this.difangMosterArr.forEach((v,i)=>{
            v.update();
        })
        return true;
    }

    private reCountDojishi(t:egret.Timer){
        if(this.daojishiT > 0){
            //更新倒计时
            this.daojishiT--;
            this.daojishiLabel.text = this.daojishiT + "";
        }else{
            //结束游戏
            this.stopGame()
        }
        
    }

    private stopGame(){

    }
}