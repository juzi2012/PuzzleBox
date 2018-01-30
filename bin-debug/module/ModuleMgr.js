var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleMgr = (function () {
    function ModuleMgr() {
        this.m_configLib = new Object();
    }
    Object.defineProperty(ModuleMgr, "ins", {
        get: function () {
            if (ModuleMgr.s_instance == null) {
                ModuleMgr.s_instance = new ModuleMgr();
            }
            return ModuleMgr.s_instance;
        },
        enumerable: true,
        configurable: true
    });
    ModuleMgr.prototype.getStaticLayer = function () {
        return LayerCenter.Instance.getLayer(LayerEnum.STATIC);
    };
    ModuleMgr.prototype.regModule = function (config) {
        this.m_configLib[config.moduleId] = config;
    };
    ModuleMgr.prototype.getConfigVo = function (moduleId) {
        var config = this.m_configLib[moduleId];
        if (config == null) {
            egret.log("未注册的moduleId:", moduleId);
            return;
        }
        return config;
    };
    /**
     *
     */
    ModuleMgr.prototype.showModule = function (moduleId, data, parentModuleId) {
        var config = this.getConfigVo(moduleId);
        if (config == null) {
            return;
        }
        var layer = LayerCenter.Instance.getLayer(config.layerKind);
        var infoVo = layer.showModule(moduleId, data, parentModuleId);
        return infoVo;
    };
    ModuleMgr.prototype.isShow = function (moduleId) {
        var config = this.m_configLib[moduleId];
        if (config) {
            var layer = LayerCenter.Instance.getLayer(config.layerKind);
            return layer.isShow(moduleId);
        }
        return false;
    };
    ModuleMgr.prototype.closeModule = function (moduleId, data) {
        var config = this.getConfigVo(moduleId);
        if (config == null) {
            return;
        }
        var layer = LayerCenter.Instance.getLayer(config.layerKind);
        layer.closeModule(moduleId, data);
    };
    ModuleMgr.prototype.loadSkins = function (skins) {
        // egret.getDefinitionByName()
    };
    return ModuleMgr;
}());
__reflect(ModuleMgr.prototype, "ModuleMgr");
//# sourceMappingURL=ModuleMgr.js.map