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
var PopModuleLayer = (function (_super) {
    __extends(PopModuleLayer, _super);
    function PopModuleLayer() {
        var _this = _super.call(this) || this;
        // this.cover.add
        _this.cover = new fairygui.GGraph();
        _this.cover.touchable = true;
        _this.cover.graphics;
        // this.cover.displayObject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCoverTouch, this);
        _this.drawCover();
        App.EventCenter.addListener(egret.Event.RESIZE, _this.onStageResize, _this);
        return _this;
    }
    PopModuleLayer.prototype.onStageResize = function (e) {
        this.drawCover();
    };
    PopModuleLayer.prototype.drawCover = function () {
        this.cover.graphics.clear();
        this.cover.graphics.beginFill(0x000000, 0.2);
        this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
        this.cover.graphics.endFill();
    };
    PopModuleLayer.prototype.onCoverTouch = function (e) {
        var curModuleId = this.getCurModuleId();
        if (curModuleId > 0) {
            this.closeModule(curModuleId);
        }
    };
    PopModuleLayer.prototype.showModule = function (moduleId, data, parentModuleId) {
        var config = ModuleMgr.ins.getConfigVo(moduleId);
        if (config == null) {
            return;
        }
        var infoVo = new ModuleInfoVo(config);
        this.p_moduleList.push(infoVo);
        infoVo.preShowData = data;
        infoVo.layer = this;
        infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
        infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
        return infoVo;
    };
    PopModuleLayer.prototype.onCloseCpl = function (e) {
        _super.prototype.onCloseCpl.call(this, e);
        this.updateModuleVisible();
    };
    PopModuleLayer.prototype.onModuleAddToStage = function (e) {
        this.updateModuleVisible();
    };
    PopModuleLayer.prototype.updateModuleVisible = function () {
        if (this.p_moduleList.length > 0) {
            for (var i = 0; i < this.p_moduleList.length; i++) {
                if (i < this.p_moduleList.length - 2) {
                    this.p_moduleList[i].module.setVisible(false);
                }
                else {
                    this.p_moduleList[i].module.setVisible(true);
                }
            }
            var lastModule = this.p_moduleList[this.p_moduleList.length - 1];
        }
        else {
        }
        this.updateConver();
    };
    PopModuleLayer.prototype.updateConver = function () {
        for (var i = this.p_moduleList.length - 1; i >= 0; i--) {
            if (this.p_moduleList[i].configVo.showCover) {
                core.DisplayUtil.getInstance().addChildBelow(this.cover, this.p_moduleList[i].module.content);
                return;
            }
        }
        if (this.cover.parent) {
            this.cover.parent.removeChild(this.cover);
        }
    };
    return PopModuleLayer;
}(UILayer));
__reflect(PopModuleLayer.prototype, "PopModuleLayer");
//# sourceMappingURL=PopModuleLayer.js.map