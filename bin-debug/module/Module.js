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
/**
 *  此为模块入口 除release()外都为底层自动调用
 *
 * @author yuxuefeng
 *
 */
var Module = (function (_super) {
    __extends(Module, _super);
    function Module() {
        var _this = _super.call(this) || this;
        /**
         * 是否已经被删除
         */
        _this.isDisposed = false;
        return _this;
    }
    Object.defineProperty(Module.prototype, "moduleId", {
        get: function () {
            if (ModuleInfoVo != null) {
                return this.moduleInfoVo.moduleId;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.initContent = function () {
    };
    /**
     * 初始化skin
     * 加载完素材后调用
     */
    Module.prototype.initContentAll = function () {
        this.initContent();
        this.init();
    };
    Module.prototype.init = function () {
    };
    Module.prototype.addChildDisplayObj = function (obj) {
        if (this.content && this.content.displayObject && this.content.displayObject instanceof egret.DisplayObjectContainer) {
            this.content.displayObject.addChild(obj);
        }
        else {
            egret.error(this + ".content\u4E0D\u5B58\u5728\uFF0C\u6DFB\u52A0displayObj\u5931\u8D25");
        }
    };
    /**
     * 初始化模块自适应
     * @param layer 该模块添加的图层
     * @param isConfigVoAutoSize 模块配置是否自适应
     */
    Module.prototype.initAutoSize = function (layer, isConfigVoAutoSize) {
        if (this.content && isConfigVoAutoSize) {
            this.content.setSize(layer.width, layer.height);
            this.content.addRelation(layer, fairygui.RelationType.Size);
        }
    };
    Module.prototype.moduleServerStart = function (data) {
        this.moduleServerCpl();
    };
    Module.prototype.moduleServerCpl = function () {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_SERVER_CPL));
    };
    /**
     * 预显示
     */
    Module.prototype.preShow = function (data) {
        this.preShowCpl();
    };
    Module.prototype.preShowCpl = function () {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_PRE_SHOW_CPL));
    };
    /**
     * 显示
     */
    Module.prototype.show = function (data) {
    };
    Module.prototype.preClose = function (data) {
        this.preCloseCpl();
    };
    Module.prototype.preCloseCpl = function () {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_PRE_CLOSE_CPL));
    };
    /**
     * 隐藏
     */
    Module.prototype.hide = function () {
        if (this.content.parent) {
            this.content.parent.removeChild(this.content);
        }
    };
    Module.prototype.releaseContent = function () {
    };
    /**
     * 释放资源
     */
    Module.prototype.release = function () {
        if (this.isDisposed == false) {
            this.hide();
            this.releaseContent();
            this.isDisposed = true;
        }
    };
    /**
     * 离开这个界面时，有参数要记录时使用，
     * 返回这个界面时，会作为初始参数传进来
     */
    Module.prototype.getHistoryData = function () {
        return null;
    };
    Module.prototype.moduleFadeIn = function (startDelay) {
        this.moduleFadeInCpl();
    };
    Module.prototype.moduleFadeInCpl = function () {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_FADE_IN_CPL));
    };
    Module.prototype.moduleFadeOut = function () {
        this.moduleFadeOutCpl();
    };
    Module.prototype.moduleFadeOutCpl = function () {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_FADE_OUT_CPL));
    };
    Module.prototype.setVisible = function (bool) {
        this.content.visible = bool;
    };
    return Module;
}(egret.EventDispatcher));
__reflect(Module.prototype, "Module");
//# sourceMappingURL=Module.js.map