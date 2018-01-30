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
var core;
(function (core) {
    /**
     *
     * @author yuxuefeng
     *
     */
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation() {
            var _this = _super.call(this) || this;
            _this.touchEnabled = false;
            _this.touchChildren = false;
            _this.loop = core.FrameEventCenter.getInstance();
            return _this;
        }
        Animation.prototype.play = function () {
            this.loop.addFrameEventListener(this.onRenderLoop, this);
        };
        Animation.prototype.stop = function () {
            this.loop.removeFrameEventListener(this.onRenderLoop, this);
        };
        Animation.prototype.onRenderLoop = function (offset) {
            if (this.parent == null) {
                this.stop();
            }
        };
        return Animation;
    }(core.Component));
    core.Animation = Animation;
    __reflect(Animation.prototype, "core.Animation");
})(core || (core = {}));
//# sourceMappingURL=Animation.js.map