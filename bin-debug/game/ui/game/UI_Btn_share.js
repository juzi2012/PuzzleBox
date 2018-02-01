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
    var UI_Btn_share = (function (_super) {
        __extends(UI_Btn_share, _super);
        function UI_Btn_share() {
            return _super.call(this) || this;
        }
        UI_Btn_share.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "Btn_share"));
        };
        UI_Btn_share.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n1 = (this.getChildAt(0));
        };
        UI_Btn_share.URL = "ui://7cac2uhfrzcxw";
        return UI_Btn_share;
    }(fairygui.GButton));
    game.UI_Btn_share = UI_Btn_share;
    __reflect(UI_Btn_share.prototype, "game.UI_Btn_share");
})(game || (game = {}));
//# sourceMappingURL=UI_Btn_share.js.map