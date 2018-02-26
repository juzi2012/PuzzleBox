var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameEventConst = (function () {
    function GameEventConst() {
    }
    GameEventConst.GAME_OVER = "gameover";
    GameEventConst.GAME_RESTART = "gameover";
    GameEventConst.GAME_SCORE_CHANGE = "gamescorechange";
    GameEventConst.GAME_CHANGE_CLOSE = "gamechangeclose";
    GameEventConst.GAME_CHANGE = "gamechange";
    GameEventConst.GAME_STAR_CHANGE = "gamestarchange";
    return GameEventConst;
}());
__reflect(GameEventConst.prototype, "GameEventConst");
//# sourceMappingURL=GameEventConst.js.map