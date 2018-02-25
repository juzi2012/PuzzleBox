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
    var UI_Alert = (function (_super) {
        __extends(UI_Alert, _super);
        function UI_Alert() {
            return _super.call(this) || this;
        }
        UI_Alert.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "Alert"));
        };
        UI_Alert.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_c1 = this.getControllerAt(0);
            this.m_n0 = (this.getChildAt(0));
            this.m_btn_ok = (this.getChildAt(1));
            this.m_btn_cancel = (this.getChildAt(2));
            this.m_txt_info = (this.getChildAt(3));
        };
        UI_Alert.URL = "ui://7cac2uhfoxah1w";
        return UI_Alert;
    }(fairygui.GComponent));
    game.UI_Alert = UI_Alert;
    __reflect(UI_Alert.prototype, "game.UI_Alert");
})(game || (game = {}));
//# sourceMappingURL=UI_Alert.js.map