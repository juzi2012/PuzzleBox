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
var FloatScore = (function (_super) {
    __extends(FloatScore, _super);
    function FloatScore() {
        return _super.call(this) || this;
    }
    Object.defineProperty(FloatScore.prototype, "data", {
        set: function (value) {
            this.m_txt_score.text = value.toString();
            this.m_showmovie.play(this.playComplete, this);
        },
        enumerable: true,
        configurable: true
    });
    FloatScore.prototype.playComplete = function () {
        Utils.floatScore(this, new egret.Point(115, 75));
    };
    return FloatScore;
}(game.UI_FloatScore));
__reflect(FloatScore.prototype, "FloatScore");
//# sourceMappingURL=FloatScore.js.map