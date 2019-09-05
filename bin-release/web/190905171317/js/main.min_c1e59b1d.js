var __reflect=this&&this.__reflect||function(t,e,r){t.__class__=e,r?r.push(e):r=[e],t.__types__=t.__types__?r.concat(t.__types__):r},__extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);r.prototype=e.prototype,t.prototype=new r},__awaiter=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))(function(n,o){function a(t){try{h(i.next(t))}catch(e){o(e)}}function s(t){try{h(i["throw"](t))}catch(e){o(e)}}function h(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(a,s)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function r(t){return function(e){return i([t,e])}}function i(r){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,o&&(a=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,o=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){h.label=r[1];break}if(6===r[0]&&h.label<a[1]){h.label=a[1],a=r;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(r);break}a[2]&&h.ops.pop(),h.trys.pop();continue}r=e.call(t,h)}catch(i){r=[6,i],o=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,o,a,s,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}});egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e,r=this;return __generator(this,function(i){switch(i.label){case 0:return this.stage.frameRate=50,[4,this.loadResource()];case 1:return i.sent(),t=new TestGameScene,this.addChild(t),t.start(),this.updateScene=[],this.updateScene.push(t),e=!1,egret.startTick(function(t){return r.updateScene.forEach(function(r,i){e=r.update(t)}),e},this),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return r.sent(),this.stage.removeChild(t),[3,4];case 3:return e=r.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,r=this.stage.stageHeight;t.width=e,t.height=r;var i=new egret.Shape;i.graphics.beginFill(0,.5),i.graphics.drawRect(0,0,e,172),i.graphics.endFill(),i.y=33,this.addChild(i);var n=this.createBitmapByName("egret_icon_png");this.addChild(n),n.x=26,n.y=33;var o=new egret.Shape;o.graphics.lineStyle(2,16777215),o.graphics.moveTo(0,0),o.graphics.lineTo(0,117),o.graphics.endFill(),o.x=172,o.y=61,this.addChild(o);var a=new egret.TextField;a.textColor=16777215,a.width=e-172,a.textAlign="center",a.text="Hello Egret",a.size=24,a.x=172,a.y=80,this.addChild(a);var s=new egret.TextField;this.addChild(s),s.alpha=0,s.width=e-172,s.textAlign=egret.HorizontalAlign.CENTER,s.size=24,s.textColor=16777215,s.x=172,s.y=135,this.textfield=s;var h=new egret.Sprite,c=new egret.Shape;c.graphics.beginFill(16737792,1),c.graphics.drawRect(50,50,100,100),c.graphics.endFill();var u=new egret.Shape;u.blendMode=egret.BlendMode.ADD,u.graphics.beginFill(6684876,1),u.graphics.drawRect(250,250,100,100),u.graphics.endFill(),h.addChild(c),h.addChild(u),this.addChild(h),h.width=600,h.height=600;var l=new egret.TextField;l.textFlow=new Array({text:"This is a hyperlink",style:{href:"event:将数据回传到事件监听器"}},{text:"\n This is just a text",style:{href:"https://www.baidu.com/"}}),l.touchEnabled=!0,l.addEventListener(egret.TextEvent.LINK,function(t){console.log(t.text)},this),l.x=10,l.y=90,this.addChild(l)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,r=RES.getRes(t);return e.texture=r,e},e.prototype.startAnimation=function(t){var e=this,r=new egret.HtmlTextParser,i=t.map(function(t){return r.parse(t)}),n=this.textfield,o=-1,a=function(){o++,o>=i.length&&(o=0);var t=i[o];n.textFlow=t;var r=egret.Tween.get(n);r.to({alpha:1},200),r.wait(2e3),r.to({alpha:0},200),r.call(a,e)};a()},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Monster=function(t){function e(e){var r=t.call(this,e)||this;return r.difangMosterCurrentState=0,r.gName="",r}return __extends(e,t),e.prototype.update=function(){this.difangMosterCurrentState<this.texTureArr.length-1?this.difangMosterCurrentState++:this.difangMosterCurrentState=0,this.texture=this.texTureArr[this.difangMosterCurrentState]},e}(egret.Bitmap);__reflect(Monster.prototype,"Monster");var TestGameScene=function(t){function e(){var e=t.call(this)||this;return e.daojishiT=500,e.preStemp=0,e}return __extends(e,t),e.prototype.start=function(){this.loadResource()},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){for(this.texTureArr=[],t=1;12>t;t++)this.texTureArr.push(RES.getRes("bbb_json#"+t));return this.startGame(),[2]})})},e.prototype.startGame=function(){this.sW=this.stage.stageWidth,this.sH=this.stage.stageHeight,this.graphics.beginFill(3355443),this.graphics.drawRect(0,0,this.sW,this.sH),this.graphics.endFill();var t=new egret.TextField;t.width=100,t.height=60,t.background=!1,t.border=!1,t.borderColor=0,t.textColor=16777215,t.size=50,t.x=(this.sW-t.width)/2,t.y=15,t.textAlign="center",t.text=this.daojishiT+"",this.addChild(t),this.daojishiLabel=t,this.t&&(this.t.stop(),this.t=null),this.t=new egret.Timer(1e3,0),this.t.addEventListener(egret.TimerEvent.TIMER,this.reCountDojishi,this),this.t.start(),this.difangMosterArr=[];for(var e=0;15>e;e++){var r=this.createDifangMonster();r.gName="dMonstor_"+e,this.difangMosterArr.push(r),this.addChild(r),r.x=this.sW-450+300*Math.random(),r.y=100+Math.random()*(this.sH-300)}},e.prototype.createDifangMonster=function(){var t=new Monster;return t.texTureArr=this.texTureArr,t.difangMosterCurrentState=Math.random()*t.texTureArr.length,t.texture=t.texTureArr[t.difangMosterCurrentState],t},e.prototype.update=function(t){return t-this.preStemp<120?!1:(this.preStemp=t,this.difangMosterArr.forEach(function(t,e){t.update()}),!0)},e.prototype.reCountDojishi=function(t){this.daojishiT>0?(this.daojishiT--,this.daojishiLabel.text=this.daojishiT+""):this.stopGame()},e.prototype.stopGame=function(){},e}(egret.Sprite);__reflect(TestGameScene.prototype,"TestGameScene");var ins;!function(t){function e(t,e){i[t]=e}function r(t){var e=i[t];return e?e:null}var i={};t.setIns=e,t.getIns=r}(ins||(ins={}));var tools;!function(t){var e=function(){function t(){this.sourceTime=0,this.sourceDate=null,this.sourceDateTime=0,this.sourceTime=egret.getTimer(),this.sourceDate=new Date,this.sourceDateTime=this.sourceDate.valueOf();var t=this,e=0;egret.lifecycle.addLifecycleListener(function(r){r.onUpdate=function(){e=egret.getTimer()-t.sourceTime,t.sourceDate.setTime(t.sourceDateTime+e)}})}return t.prototype.dateTime=function(){return this.sourceDate.toLocaleString()},t}();__reflect(e.prototype,"GlobelDate"),t.GD=new e}(tools||(tools={}));var tools;!function(t){var e=function(){function t(){}return Object.defineProperty(t,"instace",{get:function(){return 0==!!ins.getIns("ResourceManager")&&ins.setIns("ResourceManager",new t),ins.getIns("ResourceManager")},enumerable:!0,configurable:!0}),t}();t.ResourceManager=e,__reflect(e.prototype,"tools.ResourceManager")}(tools||(tools={}));