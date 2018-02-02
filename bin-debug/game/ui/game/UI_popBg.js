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
    var UI_popBg = (function (_super) {
        __extends(UI_popBg, _super);
        function UI_popBg() {
            return _super.call(this) || this;
        }
        UI_popBg.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "popBg"));
        };
        UI_popBg.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n3 = (this.getChildAt(0));
            this.m_n4 = (this.getChildAt(1));
            this.m_btn_close = (this.getChildAt(2));
            this.m_title = (this.getChildAt(3));
        };
        UI_popBg.URL = "ui://7cac2uhfoxah1l";
        return UI_popBg;
    }(fairygui.GComponent));
    game.UI_popBg = UI_popBg;
    __reflect(UI_popBg.prototype, "game.UI_popBg");
})(game || (game = {}));
//# sourceMappingURL=UI_popBg.js.map