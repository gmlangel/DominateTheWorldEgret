var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tools;
(function (tools) {
    /*
    资源管理器
    */
    var ResourceManager = (function () {
        function ResourceManager() {
        }
        Object.defineProperty(ResourceManager, "instace", {
            get: function () {
                if (!!ins.getIns("ResourceManager") == false)
                    ins.setIns("ResourceManager", new ResourceManager());
                return ins.getIns("ResourceManager");
            },
            enumerable: true,
            configurable: true
        });
        return ResourceManager;
    }());
    tools.ResourceManager = ResourceManager;
    __reflect(ResourceManager.prototype, "tools.ResourceManager");
})(tools || (tools = {}));
//# sourceMappingURL=ResourceManager.js.map