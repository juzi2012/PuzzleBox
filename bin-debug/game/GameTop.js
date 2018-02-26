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
        var _this = this;
        this.mContent.m_btn_sound.selected = GameSetting.ins.soundOff;
        this.mContent.m_btn_pause.addClickListener(function () {
            App.SoundUtils.playSound("button", 0);
            _this.mContent.m_btnctrl.selectedIndex = (_this.mContent.m_btnctrl.selectedIndex == 0) ? 1 : 0;
        }, this);
        this.mContent.m_btnrefresh.addClickListener(function () {
            App.SoundUtils.playSound("button", 0);
            App.EventCenter.dispatch(GameEventConst.GAME_RESTART);
            _this.mContent.m_btnctrl.selectedIndex = 0;
        }, this);
        this.mContent.m_btn_sound.addClickListener(function () {
            App.SoundUtils.playSound("button", 0);
            GameSetting.ins.setSoundOnOff(_this.mContent.m_btn_sound.selected);
            _this.mContent.m_btnctrl.selectedIndex = 0;
        }, this);
        this.mContent.m_btn_home.addClickListener(function () {
            App.SoundUtils.playSound("button", 0);
            ModuleMgr.ins.closeModule(ModuleEnum.GAME_TOP);
            ModuleMgr.ins.closeModule(ModuleEnum.GAME);
            ModuleMgr.ins.showModule(ModuleEnum.GAME_MENU, []);
            _this.mContent.m_btnctrl.selectedIndex = 0;
        }, this);
        App.EventCenter.addListener(GameEventConst.GAME_SCORE_CHANGE, this.changeNowScore, this);
        App.EventCenter.addListener(GameEventConst.GAME_STAR_CHANGE, this.changeStar, this);
        App.EventCenter.addListener(GameEventConst.GAME_RESTART, this.gameRestart, this);
        GameModel.ins.maxScore = Number(egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_SCOREMAX));
        if (egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_STARS) == null) {
            GameModel.ins.star = GameConsts.GAME_STAR_INIT;
        }
        this.mContent.m_txt_star.text = GameModel.ins.star.toString();
        this.preShowCpl();
    };
    GameTop.prototype.changeNowScore = function () {
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
    GameTop.prototype.changeStar = function () {
        this.mContent.m_txt_star.text = GameModel.ins.starNum.toString();
    };
    GameTop.prototype.gameRestart = function () {
        this.mContent.m_txt_score.text = "0";
        this.Cont.val = 0;
    };
    return GameTop;
}(Module));
__reflect(GameTop.prototype, "GameTop");
//# sourceMappingURL=GameTop.js.map