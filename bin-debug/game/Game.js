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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.clickarea1 = new egret.Bitmap();
        _this.clickarea2 = new egret.Bitmap();
        _this.clickarea3 = new egret.Bitmap();
        _this.nowMoveRaw = -1;
        _this.nowMoveColumn = -1;
        _this.dropAble = false;
        _this.gameover = false;
        _this.touchCon = 0;
        _this.scale = 1; //在做自适应的时候，全局的缩放比例
        _this.touchStatus = false;
        _this._distance = new egret.Point();
        return _this;
    }
    Game.prototype.initContent = function () {
        this.content = new fairygui.GComponent();
    };
    Object.defineProperty(Game.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.preShow = function (data) {
        _super.prototype.preShow.call(this, data);
        var gamebg = Utils.createBitmapByName("gamebg");
        gamebg.width = App.StageUtils.getWidth();
        gamebg.height = App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(gamebg);
        this.map = new Map();
        this.map.x = GameConsts.GAME_PADDING;
        // this.map.y=(App.StageUtils.getHeight()-App.StageUtils.getWidth())/2;//GameConsts.GAME_PADDING_TOP + GameConsts.GAME_PADDING;
        this.map.y = GameConsts.GAME_PADDING_TOP;
        if (App.StageUtils.getHeight() - this.map.y - this.map.height < GameConsts.GAME_CLICK_AREA) {
            this.map.y = App.StageUtils.getHeight() - GameConsts.GAME_CLICK_AREA - this.map.height;
        }
        this.mContent.displayListContainer.addChild(this.map);
        App.EventCenter.addListener("gameover", this.reStartGame, this);
        this.createClickBox(1);
        this.createClickBox(2);
        this.createClickBox(3);
        this.createStartThreeBox();
        this.floatScore = FloatScore.createInstance();
        this.mContent.displayListContainer.addChild(this.floatScore.displayObject);
        this.floatScore.visible = false;
        this.mContent.displayListContainer.setChildIndex(this.floatScore.displayObject, this.mContent.displayListContainer.numChildren - 1);
    };
    Game.prototype.reStartGame = function () {
        GameModel.ins.restart();
        this.touchStatus = false;
        this.nowMoveRaw = -1;
        this.nowMoveColumn = -1;
        this.dropAble = false;
        this.gameover = false;
        this.map.dispose();
        for (var i = 0; i < this.boxAry.length; i++) {
            var box = this.boxAry[i];
            box.dispose();
            var type = App.MathUtils.random(1, GameConsts.GAME_BOX_TYPE_NUM);
            var color = App.MathUtils.random(1, GameConsts.GAME_BOX_COLOR_NUM);
            box.type = type;
            box.color = color;
            box.create();
            box.x = -GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * box.pos - (box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4;
            box.y = App.StageUtils.getStage().stageHeight - GameConsts.GAME_CLICK_AREA / 2 - (box.style_h / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4;
        }
        this.box = null;
    };
    Game.prototype.createStartThreeBox = function () {
        this.boxAry = [];
        for (var i = 1; i < 4; i++) {
            var box = BoxFactory.createPuzzleBox();
            box.pos = i;
            box.x = -GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * box.pos - (box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4;
            box.y = App.StageUtils.getStage().stageHeight - GameConsts.GAME_CLICK_AREA / 2 - (box.style_h / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4;
            this.mContent.displayListContainer.addChild(box);
            this.boxAry.push(box);
        }
    };
    Game.prototype.addBox = function () {
        for (var i = 0; i < this.boxAry.length; i++) {
            if (this.boxAry[i] != this.box) {
                if (this.boxAry[i].pos > this.box.pos) {
                    this.boxAry[i].pos -= 1;
                }
            }
        }
        if (this.box != null) {
            this.box.dispose();
            var type = App.MathUtils.random(1, 11);
            var color = App.MathUtils.random(1, 4);
            this.box.type = type;
            this.box.color = color;
            this.box.create();
            this.box.pos = 3;
            this.box.x = GameConsts.GAME_BOX_INIT_NEW;
            this.box.y = App.StageUtils.getStage().stageHeight;
            this.box.alpha = 0;
        }
        for (var i = 0; i < this.boxAry.length; i++) {
            egret.Tween.get(this.boxAry[i]).to({ x: -GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * this.boxAry[i].pos - (this.boxAry[i].style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4, y: App.StageUtils.getStage().stageHeight - GameConsts.GAME_CLICK_AREA / 2 - (this.boxAry[i].style_h / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4, alpha: 1 }, 400);
        }
    };
    Game.prototype.startDrag = function (evt) {
        this.touchCon++;
        if (this.touchCon > 1)
            return;
        if (this.gameover == true)
            return;
        this.box = this.getClickBox(evt.target);
        this.touchStatus = true;
        egret.Tween.get(this.box).to({ x: -GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * this.box.pos - (this.box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT, y: this.map.y + this.map.height - (this.box.style_h) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT }, 50);
        this._distance.x = evt.stageX - (-GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * this.box.pos - (this.box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        this._distance.y = evt.stageY - (this.map.y + this.map.height - (this.box.style_h) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        egret.setTimeout(this.box.doScale, this.box, 30);
    };
    Game.prototype.getClickBox = function (shape) {
        var pos;
        switch (shape) {
            case this.clickarea1:
                pos = 1;
                break;
            case this.clickarea2:
                pos = 2;
                break;
            case this.clickarea3:
                pos = 3;
                break;
        }
        for (var i = 0; i < this.boxAry.length; i++) {
            if (this.boxAry[i].pos == pos) {
                return this.boxAry[i];
            }
        }
    };
    ///拖拽过程中不断检测是否可以放置
    Game.prototype.mouseMove = function (evt) {
        if (this.touchStatus) {
            this.box.x = evt.stageX - this._distance.x;
            this.box.y = evt.stageY - this._distance.y;
            var pt = this.map.globalToLocal(this.box.x, this.box.y);
            var column = Math.floor(pt.x / GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
            var raw = Math.floor(pt.y / GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
            if (this.nowMoveRaw != raw || this.nowMoveColumn != column) {
                this.nowMoveRaw = raw;
                this.nowMoveColumn = column;
                this.map.clearTemporary();
                if (raw < GameConsts.GAME_TILE_ROW && column < GameConsts.GAME_TILE_COLUMN && raw > -1 && column > -1) {
                    this.dropAble = this.map.checkPos(raw, column, this.box.style, this.box.color);
                }
                else {
                    this.dropAble = false;
                }
            }
        }
    };
    //释放后,不能放置，自动弹回,可以放置，即可放置
    Game.prototype.doDrop = function (evt) {
        this.touchCon = 0;
        if (this.box == null || this.gameover == true || this.touchStatus == false)
            return;
        this.touchStatus = false;
        if (this.dropAble == false) {
            this.map.clearTemporary();
            egret.Tween.get(this.box).to({ x: -GameConsts.GAME_CLICK_AREA / 2 + (GameConsts.GAME_CLICK_AREA + 10) * this.box.pos - (this.box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4, y: App.StageUtils.getStage().stageHeight - GameConsts.GAME_CLICK_AREA / 2 - (this.box.style_h / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.4 }, 100);
            this.box.doNormal();
        }
        else {
            this.dropAble = false;
            var targetTile = this.map.getTileByRawAndColumn(this.nowMoveRaw, this.nowMoveColumn);
            var targetPos = this.map.localToGlobal(targetTile.x, targetTile.y);
            egret.Tween.get(this.box).to({ x: targetPos.x, y: targetPos.y }, 50).call(this.onDropDown, this);
            this.box.doDrop();
        }
    };
    Game.prototype.onDropDown = function () {
        this.dropEndPos = new egret.Point(this.box.x, this.box.y);
        this.map.addOfficial(this.nowMoveRaw, this.nowMoveColumn, this.box.style, this.box.color);
        this.nowMoveRaw = -1;
        this.nowMoveColumn = -1;
        egret.setTimeout(this.checkDrop, this, 50);
        this.dropAble = false;
    };
    Game.prototype.checkDrop = function () {
        var result = this.map.checkLine();
        var score = 0;
        if (result[2] > 0) {
            var addScore = App.MathUtils.getSum(0, result[2]) * 10;
            this.floatScore.visible = true;
            this.mContent.displayListContainer.setChildIndex(this.floatScore.displayObject, this.mContent.displayListContainer.numChildren - 1);
            this.floatScore.x = result[0] - this.floatScore.width / 2;
            this.floatScore.y = result[1] - this.floatScore.height / 2;
            this.floatScore.data = addScore;
            score = GameModel.ins.nowScore + addScore;
            GameModel.ins.scoreSign = score;
            if (result[2] > 2) {
                App.ShockUtils.shock(1, this.mContent.displayObject, 5);
            }
        }
        else {
            score = GameModel.ins.nowScore + this.box.score;
            GameModel.ins.score = score;
        }
        this.addBox();
        var canGoOn = false;
        for (var i = 0; i < this.boxAry.length; i++) {
            if (this.map.checkCanGoOn(this.boxAry[i]) == true) {
                canGoOn = true;
                break;
            }
        }
        if (canGoOn == false) {
            this.gameover = true;
            egret.setTimeout(this.gameOver, this, 1000);
        }
    };
    Game.prototype.gameOver = function () {
        this.gameover = true;
        ModuleMgr.ins.showModule(ModuleEnum.GameOver, []);
    };
    Game.prototype.createClickBox = function (pos) {
        var w = GameConsts.GAME_CLICK_AREA;
        var h = GameConsts.GAME_CLICK_AREA - 30;
        this["clickarea" + pos] = Utils.createFairyGuiBitmapByName("red");
        this["clickarea" + pos].width = w;
        this["clickarea" + pos].height = h;
        this["clickarea" + pos].anchorOffsetX = w / 2;
        this["clickarea" + pos].anchorOffsetY = h / 2;
        this["clickarea" + pos].alpha = 0;
        this["clickarea" + pos].touchEnabled = true;
        this["clickarea" + pos].x = -w / 2 + (w + 10) * pos;
        this["clickarea" + pos].y = App.StageUtils.getStage().stageHeight - GameConsts.GAME_CLICK_AREA / 2;
        this["clickarea" + pos].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startDrag, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END, this.doDrop, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.mContent.displayListContainer.addChild(this["clickarea" + pos]);
    };
    return Game;
}(Module));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map