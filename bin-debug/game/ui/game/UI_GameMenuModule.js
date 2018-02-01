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
    var UI_GameMenuModule = (function (_super) {
        __extends(UI_GameMenuModule, _super);
        function UI_GameMenuModule() {
            return _super.call(this) || this;
        }
        UI_GameMenuModule.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "GameMenuModule"));
        };
        UI_GameMenuModule.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_btn_start = (this.getChildAt(0));
        };
        UI_GameMenuModule.URL = "ui://7cac2uhfrzcx1f";
        return UI_GameMenuModule;
    }(fairygui.GComponent));
    game.UI_GameMenuModule = UI_GameMenuModule;
    __reflect(UI_GameMenuModule.prototype, "game.UI_GameMenuModule");
})(game || (game = {}));
//# sourceMappingURL=UI_GameMenuModule.js.map