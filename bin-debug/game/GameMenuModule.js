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
var GameMenuModule = (function (_super) {
    __extends(GameMenuModule, _super);
    function GameMenuModule() {
        return _super.call(this) || this;
    }
    GameMenuModule.prototype.initContent = function () {
        this.content = new fairygui.GComponent();
    };
    Object.defineProperty(GameMenuModule.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 预显示
     */
    GameMenuModule.prototype.preShow = function (data) {
        var gamebg = Utils.createBitmapByName("menubg");
        gamebg.width = App.StageUtils.getWidth();
        gamebg.height = App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(gamebg);
        this.gamemenu = game.UI_GameMenuModule.createInstance();
        this.gamemenu.width = App.StageUtils.getWidth();
        this.gamemenu.height = App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(this.gamemenu.displayObject);
        this.gamemenu.m_btn_start.addClickListener(this.startGame, this);
        this.preShowCpl();
    };
    GameMenuModule.prototype.startGame = function () {
        App.SoundUtils.playSound("button", 0);
        ModuleMgr.ins.showModule(ModuleEnum.GAME_TOP, []);
        ModuleMgr.ins.showModule(ModuleEnum.GAME, []);
    };
    GameMenuModule.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
    };
    return GameMenuModule;
}(Module));
__reflect(GameMenuModule.prototype, "GameMenuModule");
//# sourceMappingURL=GameMenuModule.js.map