var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BoxFactory = (function () {
    function BoxFactory() {
    }
    BoxFactory.createPuzzleBox = function () {
        var type = App.MathUtils.random(1, 11);
        var color = App.MathUtils.random(1, 4);
        var box = new Box(type, color);
        return box;
    };
    BoxFactory.createSingleBox = function (boxSingleName, color) {
        var box = core.ObjectPool.pop(boxSingleName, color);
        box.x = 0;
        box.y = 0;
        box.scaleX = box.scaleY = 1;
        box.alpha = 1;
        return box;
    };
    return BoxFactory;
}());
__reflect(BoxFactory.prototype, "BoxFactory");
//# sourceMappingURL=BoxFactory.js.map