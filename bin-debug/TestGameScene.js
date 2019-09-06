var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Demo 游戏
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(gName, _texTureArr, _difangmonsterConfig) {
        var _this = _super.call(this) || this;
        _this.difangMosterCurrentState = 0;
        _this.gName = "";
        _this.activeType = "move"; //默认的动作类型
        _this.gName = gName;
        _this.monsterbmp = new egret.Bitmap();
        _this.difangmonsterConfig = _difangmonsterConfig;
        Number();
        _this.currentActiveTextArr = _difangmonsterConfig[_this.activeType];
        _this.difangMosterCurrentState = _this.converNumberToInt(Math.random() * (_this.currentActiveTextArr.length - 1));
        _this.monsterbmp.texture = _texTureArr[_this.currentActiveTextArr[_this.difangMosterCurrentState]];
        _this.texTureArr = _texTureArr;
        _this.monsterbmp.x = -95;
        _this.monsterbmp.y = -87;
        _this.addChild(_this.monsterbmp);
        return _this;
    }
    Monster.prototype.converNumberToInt = function (n) {
        var str = n.toFixed(0);
        return parseInt(str);
    };
    Monster.prototype.update = function () {
        if (this.difangMosterCurrentState < this.difangmonsterConfig[this.activeType].length - 1)
            this.difangMosterCurrentState++;
        else {
            this.difangMosterCurrentState = 0;
        }
        this.monsterbmp.texture = this.texTureArr[this.currentActiveTextArr[this.difangMosterCurrentState]];
    };
    return Monster;
}(egret.Sprite));
__reflect(Monster.prototype, "Monster");
var SelfMonster = (function (_super) {
    __extends(SelfMonster, _super);
    function SelfMonster(gName, _texTureArr, _difangmonsterConfig) {
        var _this = _super.call(this, gName, _texTureArr, _difangmonsterConfig) || this;
        _this.activePinlvCount = 0;
        _this.activePinlvCount = _this.converNumberToInt(Math.random() * 8);
        return _this;
    }
    SelfMonster.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.activePinlvCount > 10) {
            this.activePinlvCount = 0;
            //攻击
            this.parent.dispatchEventWith("toActiveEvent", false, this);
        }
        else {
            this.activePinlvCount++;
        }
    };
    return SelfMonster;
}(Monster));
__reflect(SelfMonster.prototype, "SelfMonster");
var ZidanMonster = (function (_super) {
    __extends(ZidanMonster, _super);
    function ZidanMonster(gName, _texture) {
        var _this = _super.call(this) || this;
        _this.speed = 20; //每帧移动3像素
        _this.gName = gName;
        _this.bmp = new egret.Bitmap();
        _this.bmp.scaleX = _this.bmp.scaleY = 0.5;
        _this.bmp.anchorOffsetX = 82;
        _this.bmp.anchorOffsetY = 82;
        _this.addChild(_this.bmp);
        _this.bmp.texture = _texture;
        return _this;
    }
    ZidanMonster.prototype.update = function () {
        this.bmp.rotation += 5;
        var tx = this.targetMonster.x - this.x;
        var ty = this.targetMonster.y - this.y;
        var len = Math.sqrt(Math.pow(Math.abs(tx), 2) + Math.pow(Math.abs(ty), 2)); //获取当前子弹与目标的距离
        if (len < this.speed) {
            //已经发生碰撞
            this.parent.dispatchEventWith("hasHit", false, this);
        }
        else {
            //计算位移距离并移动
            var an = Math.atan2(ty, tx);
            var p = egret.Point.polar(this.speed, an);
            this.x += p.x;
            this.y += p.y;
        }
    };
    return ZidanMonster;
}(egret.Sprite));
__reflect(ZidanMonster.prototype, "ZidanMonster");
var TestGameScene = (function (_super) {
    __extends(TestGameScene, _super);
    function TestGameScene() {
        var _this = _super.call(this) || this;
        _this.daojishiT = 500;
        _this.preStemp = 0;
        return _this;
    }
    //开始游戏
    TestGameScene.prototype.start = function () {
        this.difangMosterArr = [];
        this.myMonsterArr = [];
        this.zidanMonsterArr = [];
        this.loadResource();
    };
    TestGameScene.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                loader = new egret.URLLoader();
                loader.addEventListener(egret.Event.COMPLETE, this.onMonsterConfigLoadend, this);
                loader.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                    console.log("配置文件加载失败");
                }, this);
                loader.load(new egret.URLRequest("./resource/assets/bbb_ani_config.json"));
                return [2 /*return*/];
            });
        });
    };
    TestGameScene.prototype.converNumberToInt = function (n) {
        var str = n.toFixed(0);
        return parseInt(str);
    };
    TestGameScene.prototype.onMonsterConfigLoadend = function (e) {
        var data = e.target.data;
        this.difangmonsterConfig = JSON.parse(data);
        this.texTureArr = [];
        for (var i = 1; i < 12; i++) {
            this.texTureArr.push(RES.getRes("bbb_json#" + i));
        }
        //当前场景额资源加载完毕后，开始游戏
        this.startGame();
    };
    TestGameScene.prototype.startGame = function () {
        this.sW = this.stage.stageWidth;
        this.sH = this.stage.stageHeight;
        //画背景
        this.graphics.beginFill(0x333333);
        this.graphics.drawRect(0, 0, this.sW, this.sH);
        this.graphics.endFill();
        //title
        var daojishiLabel = new egret.TextField();
        daojishiLabel.width = 100;
        daojishiLabel.height = 60;
        daojishiLabel.background = false;
        daojishiLabel.border = false;
        daojishiLabel.borderColor = 0x000000;
        daojishiLabel.textColor = 0xffffff;
        daojishiLabel.size = 50;
        daojishiLabel.x = (this.sW - daojishiLabel.width) / 2;
        daojishiLabel.y = 15;
        daojishiLabel.textAlign = "center";
        daojishiLabel.text = this.daojishiT + "";
        this.addChild(daojishiLabel);
        this.daojishiLabel = daojishiLabel;
        //添加倒计时计时器
        if (this.t) {
            this.t.stop();
            this.t = null;
        }
        this.t = new egret.Timer(1000, 0);
        this.t.addEventListener(egret.TimerEvent.TIMER, this.reCountDojishi, this);
        this.t.start();
        //创建敌方monster
        for (var i = 0; i < 15; i++) {
            var mon = this.createDifangMonster("dMonstor_" + i);
            this.difangMosterArr.push(mon);
            this.addChild(mon);
            mon.x = this.sW - 450 + Math.random() * 300;
            mon.y = 100 + Math.random() * (this.sH - 300);
        }
        //创建有方monster
        var offset = 250;
        for (var i = 0; i < 3; i++) {
            var mon = this.createMyMonster("mMonster" + i);
            this.myMonsterArr.push(mon);
            this.addChild(mon);
            mon.x = 150;
            mon.y = i * 150 + offset;
        }
        this.addEventListener("toActiveEvent", this.gongji, this);
        this.addEventListener("hasHit", this.pengzhuang, this);
    };
    TestGameScene.prototype.pengzhuang = function (e) {
        var target = e.data;
        var index = this.zidanMonsterArr.indexOf(target);
        if (index > -1) {
            this.zidanMonsterArr.splice(index, 1);
            this.removeChild(target);
        }
    };
    TestGameScene.prototype.gongji = function (e) {
        var target = e.data;
        console.log(target.gName, "发起了攻击");
        //创建子弹
        var zidan = new ZidanMonster("zidan1", RES.getRes("2_png"));
        zidan.x = target.x;
        zidan.y = target.y;
        var idx = this.converNumberToInt(Math.random() * (this.difangMosterArr.length - 1));
        zidan.targetMonster = this.difangMosterArr[idx];
        this.addChild(zidan);
        this.zidanMonsterArr.push(zidan);
    };
    TestGameScene.prototype.createMyMonster = function (gName) {
        var bm = new SelfMonster(gName, [RES.getRes("2_png")], { "active": [0], "move": [0] });
        return bm;
    };
    TestGameScene.prototype.createDifangMonster = function (gName) {
        var bm = new Monster(gName, this.texTureArr, this.difangmonsterConfig);
        return bm;
    };
    //更新各个画布的状态
    TestGameScene.prototype.update = function (stemp) {
        if (stemp - this.preStemp < 40) {
            return false; //每隔80毫秒更新一次场景动画，  测试用
        }
        this.zidanMonsterArr.forEach(function (v, i) {
            v.update();
        });
        if (stemp - this.preStemp < 120) {
            return true; //每隔80毫秒更新一次场景动画，  测试用
        }
        this.preStemp = stemp;
        this.difangMosterArr.forEach(function (v, i) {
            v.update();
        });
        this.myMonsterArr.forEach(function (v, i) {
            v.update();
        });
        return true;
    };
    TestGameScene.prototype.reCountDojishi = function (t) {
        if (this.daojishiT > 0) {
            //更新倒计时
            this.daojishiT--;
            this.daojishiLabel.text = this.daojishiT + "";
        }
        else {
            //结束游戏
            this.stopGame();
        }
    };
    TestGameScene.prototype.stopGame = function () {
    };
    return TestGameScene;
}(egret.Sprite));
__reflect(TestGameScene.prototype, "TestGameScene");
//# sourceMappingURL=TestGameScene.js.map