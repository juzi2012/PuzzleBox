var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HistoryModuleVo = (function () {
    function HistoryModuleVo(moduleId, param, historyParam) {
        this.moduleId = moduleId;
        this.data = param;
        this.historyData = historyParam;
    }
    return HistoryModuleVo;
}());
__reflect(HistoryModuleVo.prototype, "HistoryModuleVo");
//# sourceMappingURL=HistoryModuleVo.js.map