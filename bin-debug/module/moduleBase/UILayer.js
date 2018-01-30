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
 *
 * @author yuxuefeng
 *
 */
var UILayer = (function (_super) {
    __extends(UILayer, _super);
    function UILayer() {
        var _this = _super.call(this) || this;
        _this.p_moduleList = new Array();
        _this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        _this.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        _this.touchable = true;
        return _this;
    }
    UILayer.prototype.getCurModuleInfo = function () {
        if (this.p_moduleList.length > 0) {
            return this.p_moduleList[this.p_moduleList.length - 1];
        }
        return null;
    };
    UILayer.prototype.getCurModuleId = function () {
        var infoVo = this.getCurModuleInfo();
        if (infoVo) {
            return infoVo.moduleId;
        }
        else {
            return 0;
        }
    };
    UILayer.prototype.showModule = function (moduleId, data, parentModuleId) {
        var infoVo = this.getModuleInfoVo(moduleId);
        if (infoVo == null) {
            var config = ModuleMgr.ins.getConfigVo(moduleId);
            if (config == null) {
                return;
            }
            infoVo = new ModuleInfoVo(config);
            this.p_moduleList.push(infoVo);
            infoVo.layer = this;
            infoVo.preShowData = data;
            infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
            infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
        }
        else {
            infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
            if (infoVo.module.content.parent) {
                infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
            }
            else {
                this.onModuleAddToStage(null);
            }
        }
        return infoVo;
    };
    UILayer.prototype.onModuleAddToStage = function (e) {
    };
    UILayer.prototype.isShow = function (moduleId) {
        var infoVo = this.getModuleInfoVo(moduleId);
        if (infoVo) {
            return infoVo.isShow;
        }
        else {
            return false;
        }
    };
    UILayer.prototype.closeModule = function (moduleId, data) {
        var infoVo = this.getModuleInfoVo(moduleId);
        if (infoVo != null) {
            this.closeModuleByInfo(infoVo, data);
        }
    };
    UILayer.prototype.closeModuleByInfo = function (info, data) {
        if (info.isShow) {
            info.addEventListener(ModuleConsts.MODULE_CLOSE_CPL, this.onCloseCpl, this);
            info.preShowData = data;
            info.changeModuleState(ModuleConsts.STATE_CLOSE);
        }
    };
    UILayer.prototype.onCloseCpl = function (e) {
        var infoVo = e.currentTarget;
        infoVo.removeEventListener(ModuleConsts.MODULE_CLOSE_CPL, this.onCloseCpl, this);
        //从数组中删除info
        if (infoVo.configVo.disposeWhenClose) {
            var index = this.p_moduleList.lastIndexOf(infoVo);
            if (index >= 0) {
                this.p_moduleList.splice(index, 1);
            }
            infoVo.release();
        }
    };
    /**
     * 根据moduleId查找infovo
     * 倒序查找
     */
    UILayer.prototype.getModuleInfoVo = function (moduleId) {
        for (var i = this.p_moduleList.length - 1; i >= 0; i--) {
            if (this.p_moduleList[i].moduleId == moduleId) {
                return this.p_moduleList[i];
            }
        }
        return null;
    };
    UILayer.prototype.closeAll = function (excepIdArr) {
        for (var i = this.p_moduleList.length - 1; i >= 0; i--) {
            var infoVo = this.p_moduleList[i];
            if (excepIdArr && excepIdArr.indexOf(infoVo.moduleId) >= 0) {
                //不关闭的module
            }
            else {
                this.closeModuleByInfo(infoVo);
            }
        }
    };
    return UILayer;
}(fairygui.GComponent));
__reflect(UILayer.prototype, "UILayer");
//# sourceMappingURL=UILayer.js.map