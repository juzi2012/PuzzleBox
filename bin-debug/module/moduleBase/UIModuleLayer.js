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
var UIModuleLayer = (function (_super) {
    __extends(UIModuleLayer, _super);
    function UIModuleLayer() {
        var _this = _super.call(this) || this;
        _this.p_historyList = new Array();
        return _this;
    }
    UIModuleLayer.prototype.showModule = function (moduleId, data, parentModuleId) {
        var curMiv = this.getCurModuleInfo();
        if (curMiv != null) {
            this.addHistory(curMiv.moduleId, curMiv.preShowData, curMiv.getHistoryData());
            this.closeModuleByInfo(curMiv, null);
        }
        return _super.prototype.showModule.call(this, moduleId, data, parentModuleId);
    };
    UIModuleLayer.prototype.closeModule = function (moduleId, data) {
        var curModuleId = this.getCurModuleId();
        var infoVo = this.getModuleInfoVo(moduleId);
        if (infoVo != null) {
            this.closeModuleByInfo(infoVo, data);
        }
        //关闭的是当前界面时，返回上一个界面
        if (moduleId == curModuleId) {
            if (this.p_historyList.length > 0) {
                var historyVo = this.p_historyList.pop();
                this.showModule(historyVo.moduleId, historyVo.historyData ? historyVo.historyData : historyVo.data);
            }
        }
    };
    UIModuleLayer.prototype.closeModuleByInfo = function (info, data) {
        _super.prototype.closeModuleByInfo.call(this, info, data);
    };
    UIModuleLayer.prototype.addHistory = function (moduleId, data, historyData) {
        this.p_historyList.push(new HistoryModuleVo(moduleId, data, historyData));
    };
    return UIModuleLayer;
}(UILayer));
__reflect(UIModuleLayer.prototype, "UIModuleLayer");
//# sourceMappingURL=UIModuleLayer.js.map