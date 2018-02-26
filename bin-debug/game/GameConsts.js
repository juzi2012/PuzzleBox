var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConsts = (function () {
    function GameConsts() {
    }
    GameConsts.GAME_TILE_ROW = 9;
    GameConsts.GAME_TILE_COLUMN = 9;
    GameConsts.GAME_PADDING = 21;
    GameConsts.GAME_KUANG_SIDE = 11;
    GameConsts.GAME_TILE_WIDHT_AND_HEIGHT = 64;
    GameConsts.GAME_PADDING_TOP = 170;
    GameConsts.GAME_CLICK_AREA = 200;
    GameConsts.GAME_BOX_INIT1 = 80;
    GameConsts.GAME_BOX_INIT2 = 300;
    GameConsts.GAME_BOX_INIT3 = 500;
    GameConsts.GAME_BOX_INIT_NEW = 600;
    GameConsts.GAME_BOX_COLOR_NUM = 5;
    GameConsts.GAME_BOX_TYPE_NUM = 11;
    GameConsts.GAME_STAR_INIT = 3;
    GameConsts.GAME_LOCALSAVE_SOUND = "PuzzleBox_" + "GAME_LOCALSAVE_SOUND";
    GameConsts.GAME_LOCALSAVE_SCOREMAX = "PuzzleBox_" + "GAME_LOCALSAVE_SOUND";
    GameConsts.GAME_LOCALSAVE_STARS = "PuzzleBox_" + "GAME_LOCALSAVE_STARS";
    return GameConsts;
}());
__reflect(GameConsts.prototype, "GameConsts");
//# sourceMappingURL=GameConsts.js.map