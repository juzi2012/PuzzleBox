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
    var UI_Btn_star = (function (_super) {
        __extends(UI_Btn_star, _super);
        function UI_Btn_star() {
            return _super.call(this) || this;
        }
        UI_Btn_star.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "Btn_star"));
        };
        UI_Btn_star.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n1 = (this.getChildAt(0));
        };
        UI_Btn_star.URL = "ui://7cac2uhfrzcxx";
        return UI_Btn_star;
    }(fairygui.GButton));
    game.UI_Btn_star = UI_Btn_star;
    __reflect(UI_Btn_star.prototype, "game.UI_Btn_star");
})(game || (game = {}));
//# sourceMappingURL=UI_Btn_star.js.map