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
    var MathUtils = (function (_super) {
        __extends(MathUtils, _super);
        function MathUtils() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MathUtils.prototype.ceil = function (value) {
            if (value % 1 == 0) {
                return value;
            }
            if (value > 0) {
                return (value + 1) << 0;
            }
            else {
                return value << 0;
            }
        };
        /**
         * 得到 [min,max] 范围内的随机数
         */
        MathUtils.prototype.random = function (min, max) {
            return Math.random() * (max - min + 1) + min << 0;
        };
        /**
         * 弧度制转换为角度值
         * @param radian 弧度制
         * @returns {number}
         */
        MathUtils.prototype.getAngle = function (radian) {
            return 180 * radian / Math.PI;
        };
        /**
         * 角度值转换为弧度制
         * @param angle
         */
        MathUtils.prototype.getRadian = function (angle) {
            return angle / 180 * Math.PI;
        };
        /**
         * 获取两点间弧度
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
            var xdis = p2X - p1X;
            var ydis = p2Y - p1Y;
            return Math.atan2(ydis, xdis);
        };
        /**
         * 获取两点间距离
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        MathUtils.prototype.getDistance = function (p1X, p1Y, p2X, p2Y) {
            var disX = p2X - p1X;
            var disY = p2Y - p1Y;
            var disQ = disX * disX + disY * disY;
            return Math.sqrt(disQ);
        };
        /**
         * 求1-100的和
         */
        MathUtils.prototype.getSum = function (startNum, endNum) {
            var sum = 0;
            for (var i = startNum; i <= endNum; i++) {
                sum += i;
            }
            return sum;
        };
        return MathUtils;
    }(core.BaseClass));
    core.MathUtils = MathUtils;
    __reflect(MathUtils.prototype, "core.MathUtils");
})(core || (core = {}));
//# sourceMappingURL=MathUtils.js.map