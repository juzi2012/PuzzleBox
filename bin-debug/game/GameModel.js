var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        this.nowScore = 0;
        this.maxScore = 0;
        this.scoreSign = 0; //分数飘动特效的时候，临时记录的分数
    }
    Object.defineProperty(GameModel, "ins", {
        get: function () {
            if (GameModel.s_instance == null) {
                GameModel.s_instance = new GameModel();
            }
            return GameModel.s_instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "score", {
        get: function () {
            return this.nowScore;
        },
        set: function (value) {
            this.nowScore = value;
            if (this.nowScore > this.maxScore) {
                this.maxScore = this.nowScore;
                egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SCOREMAX, this.maxScore.toString());
            }
            App.EventCenter.dispatch(GameEventConst.GAME_SCORE_CHANGE);
        },
        enumerable: true,
        configurable: true
    });
    GameModel.prototype.restart = function () {
        this.nowScore = 0;
    };
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map