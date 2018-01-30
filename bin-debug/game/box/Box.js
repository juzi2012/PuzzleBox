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
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(type, color) {
        var _this = _super.call(this) || this;
        _this.style = [[1, 1, 1, 1, 1]];
        _this.style_w = 0;
        _this.style_h = 0;
        _this.score = 0;
        _this.boxSingleAry = [];
        _this.type = type;
        _this.color = color;
        _this.create();
        return _this;
    }
    Box.prototype.create = function () {
        switch (this.type) {
            case 1:
                this.style = [[1]];
                this.style_w = 1;
                this.style_h = 1;
                break;
            case 2:
                this.style = [[1], [1]];
                this.style_w = 1;
                this.style_h = 2;
                break;
            case 3:
                this.style = [[1, 1, 1]];
                this.style_w = 3;
                this.style_h = 1;
                break;
            case 4:
                this.style = [[1, 1], [1, 0]];
                this.style_w = 2;
                this.style_h = 2;
                break;
            case 5:
                this.style = [[1, 1], [1, 1]];
                this.style_w = 2;
                this.style_h = 2;
                break;
            case 6:
                this.style = [[1, 0], [1, 0], [1, 1]];
                this.style_w = 2;
                this.style_h = 3;
                break;
            case 7:
                this.style = [[1], [1], [1], [1]];
                this.style_w = 1;
                this.style_h = 4;
                break;
            case 8:
                this.style = [[1], [1], [1], [1], [1]];
                this.style_w = 1;
                this.style_h = 5;
                break;
            case 9:
                this.style = [[1, 0, 0], [1, 0, 0], [1, 1, 1]];
                this.style_w = 3;
                this.style_h = 3;
                break;
            case 10:
                this.style = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
                this.style_w = 4;
                this.style_h = 4;
                break;
        }
        for (var i = 0; i < this.style.length; i++) {
            for (var j = 0; j < this.style[i].length; j++) {
                if (this.style[i][j] != 0) {
                    var boxSingleName = "BoxSingleRed";
                    switch (this.color) {
                        case 1:
                            boxSingleName = "BoxSingleRed";
                            break;
                        case 2:
                            boxSingleName = "BoxSingleYellow";
                            break;
                        case 3:
                            boxSingleName = "BoxSingleBlue";
                            break;
                    }
                    var boxSingle = BoxFactory.createSingleBox(boxSingleName, this.color);
                    boxSingle.setPosXY(i, j);
                    boxSingle.scaleX = boxSingle.scaleY = 0.4;
                    boxSingle.x = (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4) * j;
                    boxSingle.y = (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4) * i;
                    this.addChild(boxSingle);
                    this.boxSingleAry.push(boxSingle);
                    this.score += 1;
                }
            }
        }
    };
    Box.prototype.doScale = function () {
        var len = this.boxSingleAry.length;
        for (var i = 0; i < len; i++) {
            var box = this.boxSingleAry[i];
            egret.Tween.get(box).to({ scaleX: 0.9, scaleY: 0.9, x: box.posy * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 1), y: box.posx * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 1) }, 50);
        }
    };
    Box.prototype.doNormal = function () {
        var len = this.boxSingleAry.length;
        for (var i = 0; i < len; i++) {
            var box = this.boxSingleAry[i];
            egret.Tween.get(box).to({ scaleX: 0.4, scaleY: 0.4, x: box.posy * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4), y: box.posx * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4) }, 100);
        }
    };
    Box.prototype.doDrop = function () {
        var len = this.boxSingleAry.length;
        for (var i = 0; i < len; i++) {
            var box = this.boxSingleAry[i];
            egret.Tween.get(box).to({ scaleX: 1, scaleY: 1, x: box.posy * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 1), y: box.posx * (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 1) }, 40);
        }
    };
    Box.prototype.setGray = function () {
        var ft = new egret.Filter();
        this.filters = [new egret.Filter()];
    };
    Box.prototype.dispose = function () {
        var len = this.boxSingleAry.length;
        for (var i = 0; i < len; i++) {
            var box = this.boxSingleAry[i];
            if (box.parent != null)
                box.parent.removeChild(box);
            core.ObjectPool.push(box);
            box = null;
        }
        this.score = 0;
        this.boxSingleAry = [];
    };
    return Box;
}(egret.DisplayObjectContainer));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map