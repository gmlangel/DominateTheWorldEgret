//Demo 游戏
class Monster extends egret.Sprite{
    public difangMosterCurrentState = 0;
    public texTureArr:egret.Texture[];
    public gName:string = "";
    public monsterbmp:egret.Bitmap;
    public xuecao:egret.Shape;//血条
    public difangmonsterConfig:Object;//动作配置
    public activeType:string= "move";//默认的动作类型
    public currentActiveTextArr:number[];
    

    constructor(gName:string,_texTureArr:egret.Texture[],_difangmonsterConfig:Object){
        super();
        this.gName = gName;
        this.monsterbmp = new egret.Bitmap();
        this.difangmonsterConfig = _difangmonsterConfig;Number()
        this.currentActiveTextArr = _difangmonsterConfig[this.activeType]
        this.difangMosterCurrentState = this.converNumberToInt(Math.random()*(this.currentActiveTextArr.length - 1));
        this.monsterbmp.texture = _texTureArr[this.currentActiveTextArr[this.difangMosterCurrentState]];
        this.texTureArr = _texTureArr;
        this.monsterbmp.x = -95;
        this.monsterbmp.y = -87;
        this.addChild(this.monsterbmp);
    }

    public converNumberToInt(n:number){
        let str = n.toFixed(0);
        return parseInt(str);
    }

    public update(){
            if(this.difangMosterCurrentState < this.difangmonsterConfig[this.activeType].length - 1)
                this.difangMosterCurrentState ++;
            else{
                this.difangMosterCurrentState = 0;
            }
        this.monsterbmp.texture = this.texTureArr[this.currentActiveTextArr[this.difangMosterCurrentState]];
    }
}

class SelfMonster extends Monster{
    protected activePinlvCount:number = 0;
    constructor(gName:string,_texTureArr:egret.Texture[],_difangmonsterConfig:Object){
        super(gName,_texTureArr,_difangmonsterConfig);
        this.activePinlvCount = this.converNumberToInt(Math.random()*8);
    }
    public update(){
        super.update();
        if(this.activePinlvCount > 10){
            this.activePinlvCount = 0
            //攻击
            this.parent.dispatchEventWith("toActiveEvent",false,this);
        }else{
            this.activePinlvCount++;
        }
           
    }
}

class ZidanMonster extends egret.Sprite{
    public targetMonster:Monster;
    private bmp:egret.Bitmap;
    public gName:string;
    private speed:number = 20;//每帧移动3像素
    constructor(gName:string,_texture:egret.Texture){
        super();
        this.gName = gName;
        this.bmp = new egret.Bitmap();
        this.bmp.scaleX = this.bmp.scaleY = 0.5;
        this.bmp.anchorOffsetX = 82;
        this.bmp.anchorOffsetY = 82;
        this.addChild(this.bmp);
        this.bmp.texture = _texture;
        
    }

    public update(){
        this.bmp.rotation += 5;
        let tx = this.targetMonster.x - this.x;
        let ty = this.targetMonster.y - this.y;
        let len = Math.sqrt(Math.pow(Math.abs(tx),2) + Math.pow(Math.abs(ty),2));//获取当前子弹与目标的距离
        if(len < this.speed){
            //已经发生碰撞
            this.parent.dispatchEventWith("hasHit",false,this);
        }else{
            //计算位移距离并移动
            let an = Math.atan2(ty,tx);
            let p = egret.Point.polar(this.speed,an);
            this.x += p.x;
            this.y += p.y;
        }
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
    private difangmonsterConfig:Object;
    private myMonsterArr:SelfMonster[];
    private zidanMonsterArr:ZidanMonster[];
    constructor(){
        super();
    }

    //开始游戏
    public start(){
        this.difangMosterArr = [];
        this.myMonsterArr = [];
        this.zidanMonsterArr = [];
        this.loadResource();
    }

    private async loadResource(){
        let loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE,this.onMonsterConfigLoadend,this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR,(e:egret.IOErrorEvent)=>{
            console.log("配置文件加载失败");
        },this)
        loader.load(new egret.URLRequest("./resource/assets/bbb_ani_config.json"))
    }

    public converNumberToInt(n:number){
        let str = n.toFixed(0);
        return parseInt(str);
    }

    private onMonsterConfigLoadend(e:egret.Event){
        let data = <string>(<egret.URLLoader>e.target).data;
        this.difangmonsterConfig = JSON.parse(data);
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
        for (let i=0;i<15;i++){
            let mon = this.createDifangMonster("dMonstor_"+i);
            this.difangMosterArr.push(mon);
            this.addChild(mon);
            mon.x = this.sW - 450 + Math.random()*300;
            mon.y = 100 + Math.random()*(this.sH - 300);
        }

        //创建有方monster
        let offset = 250;
        for (let i=0;i<3;i++){
            let mon = this.createMyMonster("mMonster"+i);
            this.myMonsterArr.push(mon);
            this.addChild(mon);
            mon.x = 150;
            mon.y = i*150 + offset;
        }
        this.addEventListener("toActiveEvent",this.gongji,this);
        this.addEventListener("hasHit",this.pengzhuang,this)
    }

    private pengzhuang(e:egret.Event){
        let target = e.data as ZidanMonster;
        let index = this.zidanMonsterArr.indexOf(target);
        if(index > -1){
            this.zidanMonsterArr.splice(index,1);
            this.removeChild(target);
        }
    }

    private gongji(e:egret.Event){
        let target = e.data as SelfMonster;
        console.log(target.gName,"发起了攻击");
        //创建子弹
        let zidan = new ZidanMonster("zidan1",RES.getRes("2_png"));
        zidan.x = target.x;
        zidan.y = target.y;
        let idx = this.converNumberToInt(Math.random()*(this.difangMosterArr.length - 1))
        zidan.targetMonster = this.difangMosterArr[idx];
        this.addChild(zidan);
        this.zidanMonsterArr.push(zidan);
    }

    private createMyMonster(gName:string){
        let bm = new SelfMonster(gName,[RES.getRes("2_png")],{"active":[0],"move":[0]});
        return bm;
    }
    private createDifangMonster(gName:string){
        let bm = new Monster(gName,this.texTureArr,this.difangmonsterConfig);
        return bm;
    }

    //更新各个画布的状态
    public update(stemp:number){
        if(stemp - this.preStemp < 40){
            return false;//每隔80毫秒更新一次场景动画，  测试用
        }

        this.zidanMonsterArr.forEach((v,i)=>{
            v.update();
        })

        if(stemp - this.preStemp < 120){
            return true;//每隔80毫秒更新一次场景动画，  测试用
        }
        this.preStemp = stemp;
        this.difangMosterArr.forEach((v,i)=>{
            v.update();
        })

        this.myMonsterArr.forEach((v,i)=>{
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