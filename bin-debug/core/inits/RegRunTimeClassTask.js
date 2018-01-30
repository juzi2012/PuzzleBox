var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var RegRunTimeClassTask = (function () {
    function RegRunTimeClassTask() {
        this.exec();
    }
    RegRunTimeClassTask.prototype.exec = function () {
        fairygui.UIObjectFactory.setPackageItemExtension(game.UI_FloatScore.URL, FloatScore);
    };
    return RegRunTimeClassTask;
}());
__reflect(RegRunTimeClassTask.prototype, "RegRunTimeClassTask");
//# sourceMappingURL=RegRunTimeClassTask.js.map