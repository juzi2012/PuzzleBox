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
    var UI_ChangePanel = (function (_super) {
        __extends(UI_ChangePanel, _super);
        function UI_ChangePanel() {
            return _super.call(this) || this;
        }
        UI_ChangePanel.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "ChangePanel"));
        };
        UI_ChangePanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_bg = (this.getChildAt(0));
            this.m_l1 = (this.getChildAt(1));
            this.m_n16 = (this.getChildAt(2));
            this.m_l2 = (this.getChildAt(3));
            this.m_n18 = (this.getChildAt(4));
            this.m_l3 = (this.getChildAt(5));
            this.m_n20 = (this.getChildAt(6));
            this.m_r1 = (this.getChildAt(7));
            this.m_r2 = (this.getChildAt(8));
            this.m_r3 = (this.getChildAt(9));
            this.m_info = (this.getChildAt(10));
            this.m_btn_ok = (this.getChildAt(11));
            this.m_n27 = (this.getChildAt(12));
            this.m_txt_star = (this.getChildAt(13));
            this.m_add1 = (this.getChildAt(14));
            this.m_add2 = (this.getChildAt(15));
            this.m_add3 = (this.getChildAt(16));
        };
        UI_ChangePanel.URL = "ui://7cac2uhfoxah1i";
        return UI_ChangePanel;
    }(fairygui.GComponent));
    game.UI_ChangePanel = UI_ChangePanel;
    __reflect(UI_ChangePanel.prototype, "game.UI_ChangePanel");
})(game || (game = {}));
//# sourceMappingURL=UI_ChangePanel.js.map