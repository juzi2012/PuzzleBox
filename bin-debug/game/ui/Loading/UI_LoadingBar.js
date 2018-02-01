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
var Loading;
(function (Loading) {
    var UI_LoadingBar = (function (_super) {
        __extends(UI_LoadingBar, _super);
        function UI_LoadingBar() {
            return _super.call(this) || this;
        }
        UI_LoadingBar.createInstance = function () {
            return (fairygui.UIPackage.createObject("Loading", "LoadingBar"));
        };
        UI_LoadingBar.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_bar = (this.getChildAt(0));
            this.m_n1 = (this.getChildAt(1));
            this.m_title = (this.getChildAt(2));
        };
        UI_LoadingBar.URL = "ui://0lf0k2bwrzcx3";
        return UI_LoadingBar;
    }(fairygui.GProgressBar));
    Loading.UI_LoadingBar = UI_LoadingBar;
    __reflect(UI_LoadingBar.prototype, "Loading.UI_LoadingBar");
})(Loading || (Loading = {}));
//# sourceMappingURL=UI_LoadingBar.js.map