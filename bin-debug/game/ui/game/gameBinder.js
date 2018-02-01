/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var gameBinder = (function () {
        function gameBinder() {
        }
        gameBinder.bindAll = function () {
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_GameOverPanel.URL, game.UI_GameOverPanel);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_BtnRestart.URL, game.UI_BtnRestart);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_TopUI.URL, game.UI_TopUI);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_FloatScore.URL, game.UI_FloatScore);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_Btn_pause.URL, game.UI_Btn_pause);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_Btn_rank.URL, game.UI_Btn_rank);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_Btn_share.URL, game.UI_Btn_share);
            fairygui.UIObjectFactory.setPackageItemExtension(game.UI_Btn_star.URL, game.UI_Btn_star);
        };
        return gameBinder;
    }());
    game.gameBinder = gameBinder;
    __reflect(gameBinder.prototype, "game.gameBinder");
})(game || (game = {}));
//# sourceMappingURL=gameBinder.js.map