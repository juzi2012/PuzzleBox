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
var GameTop = (function (_super) {
    __extends(GameTop, _super);
    function GameTop() {
        var _this = _super.call(this) || this;
        _this.Cont = { val: 0 };
        return _this;
    }
    GameTop.prototype.initContent = function () {
        this.content = game.UI_TopUI.createInstance();
    };
    Object.defineProperty(GameTop.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    GameTop.prototype.preShow = function (data) {
        this.mContent.m_btn_restart.addClickListener(function () {
            ModuleMgr.ins.showModule(ModuleEnum.GameOver);
        }, this);
        App.EventCenter.addListener("nowscorechange", this.changeNowScore, this);
        App.EventCenter.addListener("gameover", this.gameRestart, this);
        GameModel.ins.maxScore = Number(egret.localStorage.getItem("puzzleBox_maxScore"));
        this.mContent.m_txt_score_max.text = GameModel.ins.maxScore.toString();
        this.preShowCpl();
    };
    GameTop.prototype.changeNowScore = function () {
        this.mContent.m_txt_score_max.text = GameModel.ins.maxScore.toString();
        var time = 12;
        var step = 1;
        if (GameModel.ins.nowScore - this.Cont.val > 30) {
            time = 8;
            step = 3;
        }
        else if (GameModel.ins.nowScore - this.Cont.val > 60) {
            time = 4;
            step = 8;
        }
        this.interval = egret.setInterval(this.onChange, this, time, step);
    };
    GameTop.prototype.onChange = function (step) {
        if (this.Cont.val + step > GameModel.ins.nowScore) {
            this.Cont.val = GameModel.ins.nowScore;
        }
        else {
            this.Cont.val += step;
        }
        if (this.Cont.val >= GameModel.ins.nowScore) {
            egret.clearInterval(this.interval);
        }
        this.mContent.m_txt_score.text = Number(this.Cont.val).toString();
    };
    GameTop.prototype.gameRestart = function () {
        this.mContent.m_txt_score.text = "0";
        this.Cont.val = 0;
    };
    return GameTop;
}(Module));
__reflect(GameTop.prototype, "GameTop");
//# sourceMappingURL=GameTop.js.map