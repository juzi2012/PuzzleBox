var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BoxFactory = (function () {
    function BoxFactory() {
    }
    BoxFactory.createPuzzleBox = function () {
        var type = 0; //App.MathUtils.random(1,GameConsts.GAME_BOX_TYPE_NUM);
        var sum = 0;
        var data = { "1": 30, "2": 50, "3": 60, "4": 40, "5": 30, "6": 60, "7": 50, "8": 30, "9": 30, "10": 20, "11": 60 };
        for (var i in data) {
            sum += Number(data[i]);
        }
        var t = App.MathUtils.random(0, sum - 1);
        for (var i in data) {
            t -= data[i];
            if (t < 0) {
                type = Number(i);
                break;
            }
        }
        var color = App.MathUtils.random(1, GameConsts.GAME_BOX_COLOR_NUM);
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
    BoxFactory.data = { "1": 30, "2": 50, "3": 60, "4": 40, "5": 30, "6": 60, "7": 50, "8": 30, "9": 30, "10": 20, "11": 60 };
    return BoxFactory;
}());
__reflect(BoxFactory.prototype, "BoxFactory");
//# sourceMappingURL=BoxFactory.js.map