var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Utils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Utils.createFairyGuiBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var img = fairygui.UIPackage.createObject("game", name);
        result.texture = img.texture;
        return result;
    };
    Utils.floatScore = function (tar, endPos) {
        egret.Tween.get(tar).to({ x: endPos.x - tar.width / 2, y: endPos.y - tar.height / 2 }, 300).call(function () { tar.visible = false; GameModel.ins.score = GameModel.ins.scoreSign; }, this);
    };
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map