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
var PopModuleView = (function (_super) {
    __extends(PopModuleView, _super);
    function PopModuleView() {
        return _super.call(this) || this;
    }
    PopModuleView.prototype.init = function () {
        this.moduleFadeInType = ModuleConsts.MODULE_FADE_IN_TYPE_1;
        this.moduleFadeOutType = ModuleConsts.MODULE_FADE_OUT_TYPE_1;
    };
    /**
     * 初始化模块自适应
     * @param layer 该模块添加的图层
     * @param isConfigVoAutoSize 模块配置是否自适应
     */
    PopModuleView.prototype.initAutoSize = function (layer, isConfigVoAutoSize) {
        if (this.content && isConfigVoAutoSize) {
            this.content.x = layer.width / 2 - this.content.width / 2;
            this.content.y = layer.height / 2 - this.content.height / 2;
            this.content.addRelation(layer, fairygui.RelationType.Center_Center);
        }
    };
    PopModuleView.prototype.moduleFadeIn = function (startDelay) {
        switch (this.moduleFadeInType) {
            case ModuleConsts.MODULE_FADE_IN_TYPE_1:
                var aim = new core.Vector2D(this.content.x, this.content.y);
                var startScale = 0.5;
                this.content.x = this.content.x + this.content.width / 2 * startScale;
                this.content.y = this.content.y + this.content.height / 2 * startScale;
                this.content.scaleX = this.content.scaleY = startScale;
                this.content.alpha = 0;
                var tween = egret.Tween.get(this.content);
                tween.to({ x: aim.x, y: aim.y, scaleX: 1, scaleY: 1, alpha: 1 }, PopModuleView.TWEEN_DURATION, egret.Ease.quintOut);
                tween.call(this.moduleFadeInCpl, this);
                break;
            case ModuleConsts.MODULE_FADE_IN_TYPE_2:
                var aim = new core.Vector2D(this.content.x, this.content.y);
                this.content.y = LayerCenter.stageHeight / 2 + 50;
                this.content.alpha = 0;
                tween = egret.Tween.get(this.content);
                tween.to({ y: aim.y, alpha: 1 }, PopModuleView.TWEEN_DURATION, egret.Ease.quintOut);
                tween.call(this.moduleFadeInCpl, this);
                break;
            default:
                this.moduleFadeInCpl();
                break;
        }
    };
    PopModuleView.prototype.moduleFadeInCpl = function () {
        _super.prototype.moduleFadeInCpl.call(this);
    };
    PopModuleView.prototype.moduleFadeOut = function () {
        switch (this.moduleFadeOutType) {
            case ModuleConsts.MODULE_FADE_OUT_TYPE_1:
                var endScale = 0.5;
                var aimX = this.content.x + this.content.width / 2 * endScale;
                var aimY = this.content.y + this.content.height / 2 * endScale;
                var tween = egret.Tween.get(this.content);
                tween.to({ x: aimX, y: aimY, scaleX: endScale, scaleY: endScale, alpha: 0.5 }, PopModuleView.TWEEN_DURATION, egret.Ease.quintIn);
                tween.call(this.moduleFadeOutCpl, this);
                break;
            case ModuleConsts.MODULE_FADE_OUT_TYPE_2:
                aimY = LayerCenter.stageHeight / 2 + 50;
                tween = egret.Tween.get(this.content);
                tween.to({ y: aimY, alpha: 0 }, PopModuleView.TWEEN_DURATION, egret.Ease.quintIn);
                tween.call(this.moduleFadeOutCpl, this);
                break;
            default:
                this.moduleFadeOutCpl();
                break;
        }
    };
    PopModuleView.prototype.moduleFadeOutCpl = function () {
        _super.prototype.moduleFadeOutCpl.call(this);
    };
    PopModuleView.TWEEN_DURATION = 200;
    return PopModuleView;
}(Module));
__reflect(PopModuleView.prototype, "PopModuleView");
//# sourceMappingURL=PopModuleView.js.map