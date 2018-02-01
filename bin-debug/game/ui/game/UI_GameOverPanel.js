/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
var game;
(function (game) {
    var UI_GameOverPanel = (function (_super) {
        __extends(UI_GameOverPanel, _super);
        function UI_GameOverPanel() {
            return _super.call(this) || this;
        }
        UI_GameOverPanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "GameOverPanel"));
        };
        UI_GameOverPanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_btn_restart = (this.getChildAt(1));
            this.m_txt_now = (this.getChildAt(2));
            this.m_n8 = (this.getChildAt(3));
            this.m_n9 = (this.getChildAt(4));
            this.m_n10 = (this.getChildAt(5));
            this.m_n11 = (this.getChildAt(6));
            this.m_txt_max = (this.getChildAt(7));
            this.m_n13 = (this.getChildAt(8));
        };
        UI_GameOverPanel.URL = "ui://7cac2uhfhlxd8";
        return UI_GameOverPanel;
    }(fairygui.GComponent));
    game.UI_GameOverPanel = UI_GameOverPanel;
    __reflect(UI_GameOverPanel.prototype, "game.UI_GameOverPanel");
})(game || (game = {}));
//# sourceMappingURL=UI_GameOverPanel.js.map