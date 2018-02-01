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
    var UI_Good = (function (_super) {
        __extends(UI_Good, _super);
        function UI_Good() {
            return _super.call(this) || this;
        }
        UI_Good.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "Good"));
        };
        UI_Good.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
            this.m_t0 = this.getTransitionAt(0);
        };
        UI_Good.URL = "ui://7cac2uhfrzcx10";
        return UI_Good;
    }(fairygui.GComponent));
    game.UI_Good = UI_Good;
    __reflect(UI_Good.prototype, "game.UI_Good");
})(game || (game = {}));
//# sourceMappingURL=UI_Good.js.map