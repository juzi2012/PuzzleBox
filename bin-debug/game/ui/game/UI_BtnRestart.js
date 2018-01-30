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
    var UI_BtnRestart = (function (_super) {
        __extends(UI_BtnRestart, _super);
        function UI_BtnRestart() {
            return _super.call(this) || this;
        }
        UI_BtnRestart.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "BtnRestart"));
        };
        UI_BtnRestart.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getControllerAt(0);
            this.m_n1 = (this.getChildAt(0));
        };
        UI_BtnRestart.URL = "ui://7cac2uhfhlxd9";
        return UI_BtnRestart;
    }(fairygui.GButton));
    game.UI_BtnRestart = UI_BtnRestart;
    __reflect(UI_BtnRestart.prototype, "game.UI_BtnRestart");
})(game || (game = {}));
//# sourceMappingURL=UI_BtnRestart.js.map