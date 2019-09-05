var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//全局时间
var tools;
(function (tools) {
    var GlobelDate = (function () {
        function GlobelDate() {
            this.sourceTime = 0;
            this.sourceDate = null;
            this.sourceDateTime = 0;
            this.sourceTime = egret.getTimer();
            this.sourceDate = new Date();
            this.sourceDateTime = this.sourceDate.valueOf();
            var self = this;
            var offset = 0;
            egret.lifecycle.addLifecycleListener(function (context) {
                context.onUpdate = function () {
                    //更新时间
                    offset = egret.getTimer() - self.sourceTime;
                    self.sourceDate.setTime(self.sourceDateTime + offset);
                };
            });
        }
        //返回当前的UTC时间毫秒值
        GlobelDate.prototype.dateTime = function () {
            return this.sourceDate.toLocaleString();
        };
        return GlobelDate;
    }());
    __reflect(GlobelDate.prototype, "GlobelDate");
    tools.GD = new GlobelDate();
})(tools || (tools = {}));
//# sourceMappingURL=GlobelDate.js.map