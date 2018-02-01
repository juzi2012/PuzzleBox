var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var RegModuleTask = (function () {
    function RegModuleTask() {
        this.exec();
    }
    RegModuleTask.prototype.exec = function () {
        if (true) {
            this.checkHasSameId();
        }
        this.regModule(ModuleEnum.LOADING, LayerEnum.SCENE, GameLoadingModule, []);
        this.regModule(ModuleEnum.GAME_MENU, LayerEnum.SCENE, GameMenuModule, []);
        this.regModule(ModuleEnum.GAME, LayerEnum.SCENE, Game, []);
        this.regModule(ModuleEnum.GameOver, LayerEnum.POPUP, GameOverModule, []);
        this.regModule(ModuleEnum.GAME_TOP, LayerEnum.STATIC, GameTop, []);
    };
    RegModuleTask.prototype.regModule = function (moduleId, layerKind, moduleCls, groups) {
        if (groups === void 0) { groups = null; }
        var config = new ModuleConfigVo();
        config.moduleId = moduleId;
        config.layerKind = layerKind;
        config.moduleCls = moduleCls;
        config.groupNames = groups;
        switch (layerKind) {
            case LayerEnum.SCENE:
                config.setIsAutoSize(true);
                break;
            case LayerEnum.UI:
                config.setIsAutoSize(true);
                break;
            case LayerEnum.STATIC:
                config.setIsAutoSize(false);
                config.setDisposeWhenClose(false);
                break;
            case LayerEnum.POPUP:
                config.setIsAutoSize(true);
                config.setShowCover(true);
                break;
            case LayerEnum.TOP:
                config.setIsAutoSize(false);
                break;
        }
        ModuleMgr.ins.regModule(config);
        return config;
    };
    //检查功能id是否有重复的内容
    RegModuleTask.prototype.checkHasSameId = function () {
        if (true) {
            var valueList = [];
            for (var key in ModuleEnum) {
                var keyNumber = Number(key);
                if (isNaN(keyNumber) == false) {
                }
                else {
                    var value = Number(ModuleEnum[key]);
                    var index = valueList.indexOf(value);
                    if (index >= 0) {
                        throw new Error("\u91CD\u590D\u7684\u529F\u80FDId:" + key + ":" + value);
                    }
                    else {
                        valueList.push(value);
                    }
                }
            }
        }
    };
    return RegModuleTask;
}());
__reflect(RegModuleTask.prototype, "RegModuleTask");
//# sourceMappingURL=RegModuleTask.js.map