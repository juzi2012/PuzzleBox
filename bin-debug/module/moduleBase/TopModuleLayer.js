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
var TopModuleLayer = (function (_super) {
    __extends(TopModuleLayer, _super);
    function TopModuleLayer() {
        var _this = _super.call(this) || this;
        _this.cover = new egret.Sprite();
        _this.cover.touchEnabled = true;
        _this.drawCover();
        App.EventCenter.addListener(egret.Event.RESIZE, _this.onStageResize, _this);
        return _this;
    }
    TopModuleLayer.prototype.onStageResize = function (e) {
        this.drawCover();
    };
    TopModuleLayer.prototype.drawCover = function () {
        this.cover.graphics.clear();
        this.cover.graphics.beginFill(0x000000, 0.2);
        this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
        this.cover.graphics.endFill();
    };
    TopModuleLayer.prototype.onModuleAddToStage = function (e) {
        this.updateConver();
    };
    TopModuleLayer.prototype.onCloseCpl = function (e) {
        _super.prototype.onCloseCpl.call(this, e);
        this.updateConver();
    };
    TopModuleLayer.prototype.updateConver = function () {
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
    return TopModuleLayer;
}(UILayer));
__reflect(TopModuleLayer.prototype, "TopModuleLayer");
//# sourceMappingURL=TopModuleLayer.js.map