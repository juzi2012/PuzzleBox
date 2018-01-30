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
var GameOverModule = (function (_super) {
    __extends(GameOverModule, _super);
    function GameOverModule() {
        return _super.call(this) || this;
    }
    GameOverModule.prototype.initContent = function () {
        this.content = game.UI_GameOverPanel.createInstance();
    };
    Object.defineProperty(GameOverModule.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 预显示
     */
    GameOverModule.prototype.preShow = function (data) {
        this.mContent.m_btn_restart.addClickListener(function () {
            App.EventCenter.dispatch("gameover");
            ModuleMgr.ins.closeModule(ModuleEnum.GameOver);
        }, this);
        this.mContent.m_txt_now.text = GameModel.ins.score.toString();
        this.mContent.m_txt_max.text = GameModel.ins.maxScore.toString();
        this.preShowCpl();
    };
    GameOverModule.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
    };
    return GameOverModule;
}(PopModuleView));
__reflect(GameOverModule.prototype, "GameOverModule");
//# sourceMappingURL=GameOverModule.js.map