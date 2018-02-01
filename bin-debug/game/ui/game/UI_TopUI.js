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
    var UI_TopUI = (function (_super) {
        __extends(UI_TopUI, _super);
        function UI_TopUI() {
            return _super.call(this) || this;
        }
        UI_TopUI.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "TopUI"));
        };
        UI_TopUI.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_btnctrl = this.getControllerAt(0);
            this.m_txt_score = (this.getChildAt(0));
            this.m_btn_home = (this.getChildAt(1));
            this.m_btn_sound = (this.getChildAt(2));
            this.m_btnrefresh = (this.getChildAt(3));
            this.m_btn_pause = (this.getChildAt(4));
        };
        UI_TopUI.URL = "ui://7cac2uhfhlxda";
        return UI_TopUI;
    }(fairygui.GComponent));
    game.UI_TopUI = UI_TopUI;
    __reflect(UI_TopUI.prototype, "game.UI_TopUI");
})(game || (game = {}));
//# sourceMappingURL=UI_TopUI.js.map