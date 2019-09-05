//全局时间
module tools {
	class GlobelDate{
		private sourceTime:number = 0;
		private sourceDate:Date = null;
		private sourceDateTime:number = 0;
		constructor(){
			this.sourceTime = egret.getTimer();
			this.sourceDate = new Date();
			this.sourceDateTime = this.sourceDate.valueOf();
			let self = this;
			let offset = 0;
			egret.lifecycle.addLifecycleListener((context)=>{
				context.onUpdate = ()=>{
					//更新时间
					offset = egret.getTimer()-self.sourceTime;
					self.sourceDate.setTime(self.sourceDateTime + offset);
				}
			})
		}
		//返回当前的UTC时间毫秒值
		public dateTime(){
			return this.sourceDate.toLocaleString();
		}
	}
	export var GD:GlobelDate = new GlobelDate();
}