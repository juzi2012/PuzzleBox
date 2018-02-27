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
var BoxSingle = (function (_super) {
    __extends(BoxSingle, _super);
    function BoxSingle(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.createBitmap();
        return _this;
    }
    BoxSingle.prototype.createBitmap = function () {
        switch (this.color) {
            case 1:
                this.pic_name = "red";
                break;
            case 2:
                this.pic_name = "yellow";
                break;
            case 3:
                this.pic_name = "blue";
                break;
            case 4:
                this.pic_name = "green";
                break;
            case 5:
                this.pic_name = "purple";
                break;
        }
        this.pic = Utils.createFairyGuiBitmapByName(this.pic_name);
        this.pic.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.pic.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.pic.anchorOffsetX = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.pic.anchorOffsetY = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.grayPic = Utils.createFairyGuiBitmapByName("gray");
        this.grayPic.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.grayPic.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.grayPic.anchorOffsetX = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.grayPic.anchorOffsetY = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2;
        this.addChild(this.pic);
        this.addChild(this.grayPic);
        this.grayPic.visible = false;
    };
    BoxSingle.prototype.setPosXY = function (posx, posy) {
        this.posx = posx;
        this.posy = posy;
    };
    BoxSingle.prototype.setGray = function (value) {
        this.grayPic.visible = value;
    };
    return BoxSingle;
}(egret.DisplayObjectContainer));
__reflect(BoxSingle.prototype, "BoxSingle");
//# sourceMappingURL=BoxSingle.js.map