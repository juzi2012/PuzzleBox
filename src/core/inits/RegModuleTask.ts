// TypeScript file
class RegModuleTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{
        if(DEBUG){
            this.checkHasSameId();
        }
        this.regModule(ModuleEnum.LOADING, LayerEnum.SCENE, GameLoadingModule, []);
        this.regModule(ModuleEnum.GAME_MENU, LayerEnum.SCENE, GameMenuModule, []);
        this.regModule(ModuleEnum.GAME, LayerEnum.SCENE, Game, []);
        this.regModule(ModuleEnum.GameOver, LayerEnum.POPUP, GameOverModule, []);
        this.regModule(ModuleEnum.GAME_TOP, LayerEnum.STATIC, GameTop, []);
        this.regModule(ModuleEnum.GAME_Alert, LayerEnum.POPUP, Alert, []);
        this.regModule(ModuleEnum.GAME_Change, LayerEnum.POPUP, BoxChangeModule, []);
    }

    private regModule(moduleId:ModuleEnum, layerKind:LayerEnum, moduleCls:any, groups:string[] = null):ModuleConfigVo
    {
        var config:ModuleConfigVo = new ModuleConfigVo();
        config.moduleId = moduleId;
        config.layerKind = layerKind;
        config.moduleCls = moduleCls;
        config.groupNames = groups;
        switch(layerKind){
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
    }

    //检查功能id是否有重复的内容
    private checkHasSameId():void{
        if(DEBUG){
            var valueList:number[] = [];
            for(var key in ModuleEnum){
                var keyNumber:number = Number(key);
                if(isNaN(keyNumber) == false){
                }else{
                    var value:number = Number(ModuleEnum[key]);
                    var index:number = valueList.indexOf(value);
                    if(index >= 0){
                        throw new Error(`重复的功能Id:${key}:${value}`);
                    }else{
                        valueList.push(value);
                    }
                }
            }
        }
    }
    
}