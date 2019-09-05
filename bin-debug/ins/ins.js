// TypeScript file
/**
 *
 * 单例工具
*/
var ins;
(function (ins) {
    var __insManager = {};
    function setIns(key, obj) {
        __insManager[key] = obj;
    }
    ins.setIns = setIns;
    function getIns(key) {
        var res = __insManager[key];
        if (!!res) {
            return res;
        }
        else {
            return null;
        }
    }
    ins.getIns = getIns;
})(ins || (ins = {}));
//# sourceMappingURL=ins.js.map