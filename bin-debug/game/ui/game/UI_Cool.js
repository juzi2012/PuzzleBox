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
    var UI_Cool = (function (_super) {
        __extends(UI_Cool, _super);
        function UI_Cool() {
            return _super.call(this) || this;
        }
        UI_Cool.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "Cool"));
        };
        UI_Cool.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_t0 = this.getTransitionAt(0);
        };
        UI_Cool.URL = "ui://7cac2uhfrzcx11";
        return UI_Cool;
    }(fairygui.GComponent));
    game.UI_Cool = UI_Cool;
    __reflect(UI_Cool.prototype, "game.UI_Cool");
})(game || (game = {}));
//# sourceMappingURL=UI_Cool.js.map