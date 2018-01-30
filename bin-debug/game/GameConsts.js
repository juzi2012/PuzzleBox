var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConsts = (function () {
    function GameConsts() {
    }
    GameConsts.GAME_TILE_ROW = 8;
    GameConsts.GAME_TILE_COLUMN = 8;
    GameConsts.GAME_PADDING = 10;
    GameConsts.GAME_KUANG_SIDE = 10;
    GameConsts.GAME_TILE_WIDHT_AND_HEIGHT = 75;
    GameConsts.GAME_PADDING_TOP = 100;
    GameConsts.GAME_CLICK_AREA = 200;
    GameConsts.GAME_BOX_INIT1 = 80;
    GameConsts.GAME_BOX_INIT2 = 300;
    GameConsts.GAME_BOX_INIT3 = 500;
    GameConsts.GAME_BOX_INIT_NEW = 600;
    return GameConsts;
}());
__reflect(GameConsts.prototype, "GameConsts");
//# sourceMappingURL=GameConsts.js.map