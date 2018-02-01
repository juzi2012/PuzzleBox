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
    var UI_BtnStart = (function (_super) {
        __extends(UI_BtnStart, _super);
        function UI_BtnStart() {
            return _super.call(this) || this;
        }
        UI_BtnStart.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "BtnStart"));
        };
        UI_BtnStart.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n1 = (this.getChildAt(0));
        };
        UI_BtnStart.URL = "ui://7cac2uhfrzcx19";
        return UI_BtnStart;
    }(fairygui.GButton));
    game.UI_BtnStart = UI_BtnStart;
    __reflect(UI_BtnStart.prototype, "game.UI_BtnStart");
})(game || (game = {}));
//# sourceMappingURL=UI_BtnStart.js.map