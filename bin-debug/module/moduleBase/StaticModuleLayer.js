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
var StaticModuleLayer = (function (_super) {
    __extends(StaticModuleLayer, _super);
    function StaticModuleLayer() {
        var _this = _super.call(this) || this;
        _this.cover = new egret.Sprite();
        _this.cover.touchEnabled = true;
        _this.drawCover();
        return _this;
    }
    StaticModuleLayer.prototype.drawCover = function () {
        this.cover.graphics.clear();
        this.cover.graphics.beginFill(0x000000, 0.2);
        this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
        this.cover.graphics.endFill();
    };
    return StaticModuleLayer;
}(UILayer));
__reflect(StaticModuleLayer.prototype, "StaticModuleLayer");
//# sourceMappingURL=StaticModuleLayer.js.map