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
        _this.randomType = -1;
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
        if (this.wenhao != null) {
            this.setChildIndex(this.wenhao, this.numChildren - 1);
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
        if (this.wenhao != null) {
            this.setChildIndex(this.wenhao, this.numChildren - 1);
        }
    };
    //添加随机奖励或者惩罚
    Tile.prototype.addRandom = function (randomType) {
        this.randomType = randomType;
        if (this.wenhao == null) {
            this.wenhao = Utils.createFairyGuiBitmapByName("wenhao");
            this.wenhao.anchorOffsetX = this.wenhao.width / 2;
            this.wenhao.anchorOffsetY = this.wenhao.height / 2;
            this.wenhao.scaleX = this.wenhao.scaleY = 1.4;
            this.addChild(this.wenhao);
            egret.Tween.get(this.wenhao).to({ scaleX: 1, scaleY: 1 }, 200);
        }
    };
    Tile.prototype.doDipsear = function () {
        this.clearTemporary();
        if (this.wenhao != null) {
            App.DisplayUtils.removeFromParent(this.wenhao);
            this.wenhao = null;
            /*if(this.randomType==0){//-
                let score:FloatScore = FloatScore.createInstance() as FloatScore;
                score.data=-10;
                this.addChild(score.displayObject)
                Utils.floatScoreAndDispose(score,new egret.Point(0,-100));
            }else if(this.randomType==1){//+
                let score:FloatScore = FloatScore.createInstance() as FloatScore;
                score.data=10;
                this.addChild(score.displayObject)
                Utils.floatScoreAndDispose(score,new egret.Point(0,-100));
            }*/
            this.randomType = -1;
        }
        this.isEmpty = true;
        egret.Tween.get(this.officalBox).to({ scaleX: 0, scaleY: 0 }, 200).call(this.dispose, this);
    };
    Tile.prototype.dispose = function () {
        if (this.wenhao != null) {
            App.DisplayUtils.removeFromParent(this.wenhao);
            this.wenhao = null;
            this.randomType = -1;
        }
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
            case 4:
                boxSingleName = "BoxSingleGreen";
                break;
            case 5:
                boxSingleName = "BoxSinglePurple";
                break;
        }
        var box = BoxFactory.createSingleBox(boxSingleName, color);
        return box;
    };
    return Tile;
}(egret.DisplayObjectContainer));
__reflect(Tile.prototype, "Tile");
//# sourceMappingURL=Tile.js.map