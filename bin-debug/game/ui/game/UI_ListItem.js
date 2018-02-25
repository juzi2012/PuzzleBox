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
    var UI_ListItem = (function (_super) {
        __extends(UI_ListItem, _super);
        function UI_ListItem() {
            return _super.call(this) || this;
        }
        UI_ListItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "ListItem"));
        };
        UI_ListItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChildAt(0));
        };
        UI_ListItem.URL = "ui://7cac2uhfifkr23";
        return UI_ListItem;
    }(fairygui.GComponent));
    game.UI_ListItem = UI_ListItem;
    __reflect(UI_ListItem.prototype, "game.UI_ListItem");
})(game || (game = {}));
//# sourceMappingURL=UI_ListItem.js.map