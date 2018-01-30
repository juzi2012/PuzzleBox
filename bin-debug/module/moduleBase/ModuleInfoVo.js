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
var ModuleInfoVo = (function (_super) {
    __extends(ModuleInfoVo, _super);
    function ModuleInfoVo(configVo) {
        var _this = _super.call(this) || this;
        _this.state = 0;
        _this.phase = 0;
        _this.moduleId = configVo.moduleId;
        _this.configVo = configVo;
        return _this;
    }
    ModuleInfoVo.prototype.changeModuleState = function (moduleState) {
        if (this.state != moduleState) {
            var oldState = this.state;
            this.state = moduleState;
            if (oldState == ModuleConsts.STATE_NULL) {
                if (moduleState == ModuleConsts.STATE_SHOW) {
                    this.startShow();
                }
            }
            else if (oldState == ModuleConsts.STATE_SHOW) {
                switch (this.phase) {
                    case ModuleConsts.PHASE_LOAD_ASSET:
                    case ModuleConsts.PHASE_SERVER:
                    case ModuleConsts.PHASE_PRE_SHOW:
                    case ModuleConsts.PHASE_MODULE_FADE_IN:
                        if (moduleState == ModuleConsts.STATE_CLOSE) {
                            //什么都不做，让module继续加载
                        }
                        else {
                            this.removeAllListeners();
                            this.preClose();
                        }
                        break;
                    case ModuleConsts.PHASE_SHOW:
                        this.removeAllListeners();
                        this.preClose();
                        break;
                }
            }
            else if (oldState == ModuleConsts.STATE_CLOSE) {
                switch (this.phase) {
                    case ModuleConsts.PHASE_PRE_CLOSE:
                        this.removeAllListeners();
                        this.show();
                        break;
                    case ModuleConsts.PHASE_MODULE_FADE_OUT:
                    case ModuleConsts.PHASE_CLOSE:
                        if (this.module.content.parent == null) {
                            this.layer.addChild(this.module.content);
                        }
                        this.removeAllListeners();
                        this.moduleFadeIn();
                        break;
                }
            }
        }
    };
    ModuleInfoVo.prototype.startShow = function () {
        this.state = ModuleConsts.STATE_SHOW;
        if (this.module == null) {
            this.module = new this.configVo.moduleCls();
            this.module.moduleInfoVo = this;
            this.isShow = true;
            var groups = this.configVo.groupNames.slice();
            if (groups && groups.length > 0) {
                var loading = core.LoadingManager.getCurLoading();
                if (loading) {
                    loading.show();
                }
                this.phase = ModuleConsts.PHASE_LOAD_ASSET;
                core.ResUtils.loadGroups(groups, this.onLoadProgress, this.onLoadFaild, this.onLoadComplete, this);
            }
            else {
                this.initAll();
            }
        }
        else {
            this.isShow = true;
            this.initAll();
        }
    };
    ModuleInfoVo.prototype.initAll = function () {
        this.module.initContentAll();
        this.moduleServerStart();
    };
    ModuleInfoVo.prototype.moduleServerStart = function () {
        if (this.state == ModuleConsts.STATE_SHOW) {
            this.phase = ModuleConsts.PHASE_LOAD_ASSET;
            this.module.addEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this);
            this.module.moduleServerStart(this.preShowData);
        }
    };
    ModuleInfoVo.prototype.onModuleServerCpl = function (e) {
        this.module.removeEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this);
        this.preShow();
    };
    ModuleInfoVo.prototype.preShow = function () {
        if (this.state == ModuleConsts.STATE_SHOW) {
            this.phase = ModuleConsts.PHASE_PRE_SHOW;
            this.module.addEventListener(ModuleConsts.MODULE_PRE_SHOW_CPL, this.onModulePreShowCpl, this);
            this.module.preShow(this.preShowData);
        }
    };
    ModuleInfoVo.prototype.onModulePreShowCpl = function (e) {
        //隐藏进度条
        var loading = core.LoadingManager.getCurLoading();
        if (loading) {
            loading.hide();
        }
        this.module.initAutoSize(this.layer, this.configVo.isAutoSize);
        this.layer.addChild(this.module.content);
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_ADD_TO_STAGE));
        this.moduleFadeIn();
    };
    ModuleInfoVo.prototype.moduleFadeIn = function () {
        if (this.state == ModuleConsts.STATE_SHOW) {
            this.phase = ModuleConsts.PHASE_MODULE_FADE_IN;
            this.isShow = true;
            this.module.addEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
            this.module.moduleFadeIn();
        }
    };
    ModuleInfoVo.prototype.onModuleFadeInCpl = function (e) {
        this.module.removeEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
        this.show();
    };
    ModuleInfoVo.prototype.show = function () {
        if (this.state == ModuleConsts.STATE_SHOW) {
            this.phase = ModuleConsts.PHASE_SHOW;
            this.module.show(this.preShowData);
        }
    };
    ModuleInfoVo.prototype.preClose = function () {
        this.phase = ModuleConsts.PHASE_PRE_CLOSE;
        this.module.addEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
        this.module.preClose(this.preShowData);
    };
    ModuleInfoVo.prototype.onModulePreCloseCpl = function (e) {
        this.isShow = false;
        this.module.removeEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
        this.moduleFadeOut();
    };
    ModuleInfoVo.prototype.moduleFadeOut = function () {
        this.phase = ModuleConsts.PHASE_MODULE_FADE_OUT;
        this.module.addEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
        this.module.moduleFadeOut();
    };
    ModuleInfoVo.prototype.onModuleFadeOutCpl = function (e) {
        this.module.removeEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
        this.doRelease();
    };
    ModuleInfoVo.prototype.doRelease = function () {
        this.phase = ModuleConsts.PHASE_CLOSE;
        if (this.configVo.disposeWhenClose) {
            this.state = ModuleConsts.STATE_DISPOSE;
            this.module.release();
        }
        else {
            this.module.hide();
        }
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_CLOSE_CPL));
    };
    ModuleInfoVo.prototype.release = function () {
        this.removeAllListeners();
        this.module = null;
        this.layer = null;
    };
    ModuleInfoVo.prototype.getHistoryData = function () {
        if (this.module != null) {
            return this.module.getHistoryData();
        }
        else {
            return null;
        }
    };
    ModuleInfoVo.prototype.removeAllListeners = function () {
        if (this.module) {
            this.module.removeEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this);
            this.module.removeEventListener(ModuleConsts.MODULE_PRE_SHOW_CPL, this.onModulePreShowCpl, this);
            this.module.removeEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
            this.module.removeEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
            this.module.removeEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
        }
    };
    /**
     * 加载进度
     */
    ModuleInfoVo.prototype.onLoadProgress = function (data) {
        var loading = core.LoadingManager.getCurLoading();
        if (loading) {
            loading.setProgress(data);
        }
    };
    /**
     * 加载失败
     */
    ModuleInfoVo.prototype.onLoadFaild = function (data) {
        egret.log("\u8D44\u6E90\u7EC4" + data.curGroup + "\u52A0\u8F7D\u5931\u8D25, \u5931\u8D25URL\uFF1A" + data.curResItem.url);
    };
    /**
     * 加载完成
     */
    ModuleInfoVo.prototype.onLoadComplete = function (data) {
        for (var i = 0; i < this.configVo.groupNames.length; i++) {
            var resKey = this.configVo.groupNames[i];
            var buf = RES.getRes(resKey);
            if (!buf) {
                buf = RES.getRes(resKey + "_fui");
            }
            if (buf) {
                fairygui.UIPackage.addPackage(this.configVo.groupNames[i]);
            }
        }
        this.initAll();
    };
    return ModuleInfoVo;
}(egret.EventDispatcher));
__reflect(ModuleInfoVo.prototype, "ModuleInfoVo");
//# sourceMappingURL=ModuleInfoVo.js.map