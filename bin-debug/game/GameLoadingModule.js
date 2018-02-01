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
var GameLoadingModule = (function (_super) {
    __extends(GameLoadingModule, _super);
    function GameLoadingModule() {
        return _super.call(this) || this;
    }
    GameLoadingModule.prototype.initContent = function () {
        this.content = new fairygui.GComponent();
    };
    Object.defineProperty(GameLoadingModule.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 预显示
     */
    GameLoadingModule.prototype.preShow = function (data) {
        var bg = Utils.createBitmapByName("menubg");
        bg.width = App.StageUtils.getWidth();
        bg.height = App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(bg);
        this.loadingBar = Loading.UI_LoadingBar.createInstance();
        this.loadingBar.x = App.StageUtils.getWidth() / 2 - this.loadingBar.width / 2;
        this.loadingBar.y = App.StageUtils.getHeight() - 200;
        this.mContent.displayListContainer.addChild(this.loadingBar.displayObject);
        this.preShowCpl();
    };
    GameLoadingModule.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        RES.loadGroup("game", 0, this);
    };
    GameLoadingModule.prototype.onProgress = function (current, total) {
        this.loadingBar.max = total;
        this.loadingBar.value = current;
        if (current == total) {
            this.startGame();
        }
    };
    GameLoadingModule.prototype.startGame = function () {
        fairygui.UIPackage.addPackage("game");
        ModuleMgr.ins.showModule(ModuleEnum.GAME_MENU, []);
    };
    return GameLoadingModule;
}(Module));
__reflect(GameLoadingModule.prototype, "GameLoadingModule", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=GameLoadingModule.js.map