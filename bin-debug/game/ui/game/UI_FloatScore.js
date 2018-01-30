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
    var UI_FloatScore = (function (_super) {
        __extends(UI_FloatScore, _super);
        function UI_FloatScore() {
            return _super.call(this) || this;
        }
        UI_FloatScore.createInstance = function () {
            return (fairygui.UIPackage.createObject("game", "FloatScore"));
        };
        UI_FloatScore.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_txt_score = (this.getChildAt(0));
            this.m_showmovie = this.getTransitionAt(0);
        };
        UI_FloatScore.URL = "ui://7cac2uhfrzcxm";
        return UI_FloatScore;
    }(fairygui.GComponent));
    game.UI_FloatScore = UI_FloatScore;
    __reflect(UI_FloatScore.prototype, "game.UI_FloatScore");
})(game || (game = {}));
//# sourceMappingURL=UI_FloatScore.js.map