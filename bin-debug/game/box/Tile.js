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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(row, column) {
        var _this = _super.call(this) || this;
        _this.isEmpty = true;
        _this.isTemporary = false;
        _this.row = row;
        _this.column = column;
        _this.createNormal();
        return _this;
    }
    Tile.prototype.createNormal = function () {
        this.bg = Utils.createFairyGuiBitmapByName("tile_bg");
        this.bg.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.bg.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.bg.anchorOffsetX = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.bg.anchorOffsetY = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.addChild(this.bg);
    };
    Tile.prototype.addTemporary = function (color) {
        if (this.isTemporary == true)
            return;
        this.isTemporary = true;
        this.temporaryBox = this.createBox(color);
        this.temporaryBox.scaleX = this.temporaryBox.scaleY = 0.9;
        this.temporaryBox.alpha = 0.5;
        this.addChild(this.temporaryBox);
        if (this.officalBox != null) {
            this.officalBox.alpha = 0;
        }
    };
    Tile.prototype.clearTemporary = function () {
        if (this.temporaryBox != null) {
            if (this.temporaryBox.parent) {
                this.temporaryBox.parent.removeChild(this.temporaryBox);
            }
            core.ObjectPool.push(this.temporaryBox);
            this.temporaryBox = null;
        }
        this.isTemporary = false;
        if (this.officalBox != null) {
            this.officalBox.alpha = 1;
        }
    };
    Tile.prototype.addOfficial = function (color) {
        this.clearTemporary();
        this.isEmpty = false;
        this.color = color;
        this.officalBox = this.createBox(color);
        this.addChild(this.officalBox);
    };
    Tile.prototype.doDipsear = function () {
        this.clearTemporary();
        this.isEmpty = true;
        egret.Tween.get(this.officalBox).to({ scaleX: 0, scaleY: 0 }, 200).call(this.dispose, this);
    };
    Tile.prototype.dispose = function () {
        this.isEmpty = true;
        if (this.officalBox != null) {
            if (this.officalBox.parent != null)
                this.officalBox.parent.removeChild(this.officalBox);
            core.ObjectPool.push(this.officalBox);
            this.officalBox = null;
        }
    };
    Tile.prototype.createBox = function (color) {
        var boxSingleName;
        switch (color) {
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
        var box = BoxFactory.createSingleBox(boxSingleName, color);
        return box;
    };
    return Tile;
}(egret.DisplayObjectContainer));
__reflect(Tile.prototype, "Tile");
//# sourceMappingURL=Tile.js.map