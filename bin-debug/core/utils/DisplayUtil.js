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
    var DisplayUtil = (function (_super) {
        __extends(DisplayUtil, _super);
        /**
         * 构造函数
         */
        function DisplayUtil() {
            return _super.call(this) || this;
        }
        /**
         * 创建一个Bitmap
         * @param resName resource.json中配置的name
         * @returns {egret.Bitmap}
         */
        DisplayUtil.prototype.createBitmap = function (resName) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(resName);
            result.texture = texture;
            return result;
        };
        /**
         * 创建一张Gui的图片
         * @param resName
         * @returns {egret.Bitmap}
         */
        /*public createEuiImage(resName:string):eui.Image {
            var result:eui.Image = new eui.Image();
            var texture:egret.Texture = RES.getRes(resName);
            result.source = texture;
            return result;
        }*/
        /**
         * 从父级移除child
         * @param child
         */
        DisplayUtil.prototype.removeFromParent = function (child) {
            if (child.parent == null)
                return;
            child.parent.removeChild(child);
        };
        DisplayUtil.prototype.addChildAbove = function (newObj, aimObj) {
            if (newObj.parent == aimObj.parent) {
                if (newObj.parent.getChildIndex(newObj) < aimObj.parent.getChildIndex(aimObj)) {
                    aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
                }
                else {
                    aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) + 1);
                }
            }
            else {
                aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) + 1);
            }
        };
        DisplayUtil.prototype.addChildBelow = function (newObj, aimObj) {
            if (newObj.parent == aimObj.parent) {
                if (newObj.parent.getChildIndex(newObj) < aimObj.parent.getChildIndex(aimObj)) {
                    aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) - 1);
                }
                else {
                    aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
                }
            }
            else {
                aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
            }
        };
        return DisplayUtil;
    }(core.BaseClass));
    core.DisplayUtil = DisplayUtil;
    __reflect(DisplayUtil.prototype, "core.DisplayUtil");
})(core || (core = {}));
//# sourceMappingURL=DisplayUtil.js.map