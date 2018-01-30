var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleConfigVo = (function () {
    function ModuleConfigVo() {
        this.m_disposeWhenClose = true;
        this.m_showCover = false;
    }
    Object.defineProperty(ModuleConfigVo.prototype, "isAutoSize", {
        /**
         * 是否根据窗口的大小变化而进行自适应
         * ui层，scene层,popup层默认为true
         * static层,top层默认为false
         *
         * Module跟随场景拉伸
         * PopupView居中
         * 自定义自适应时，可以继承Module类的initAutoSize方法
         */
        get: function () {
            return this.m_isAutoSize;
        },
        enumerable: true,
        configurable: true
    });
    ModuleConfigVo.prototype.setIsAutoSize = function (bool) {
        this.m_isAutoSize = bool;
        return this;
    };
    Object.defineProperty(ModuleConfigVo.prototype, "disposeWhenClose", {
        /**
         * close时是否dispose
         * true:dispose	其他层默认值.popup层必须为true
         * false:不dispose	static层默认值
         * **/
        get: function () {
            return this.m_disposeWhenClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleConfigVo.prototype, "showCover", {
        /**
         * 是否显示遮盖
         */
        get: function () {
            return this.m_showCover;
        },
        enumerable: true,
        configurable: true
    });
    ModuleConfigVo.prototype.setShowCover = function (bool) {
        this.m_showCover = bool;
        return this;
    };
    ModuleConfigVo.prototype.setDisposeWhenClose = function (bool) {
        if (bool == false && this.layerKind == LayerEnum.POPUP) {
            egret.error("popup层不能设置disposeWhenClose为false");
            return this;
        }
        this.m_disposeWhenClose = bool;
        return this;
    };
    return ModuleConfigVo;
}());
__reflect(ModuleConfigVo.prototype, "ModuleConfigVo");
//# sourceMappingURL=ModuleConfigVo.js.map