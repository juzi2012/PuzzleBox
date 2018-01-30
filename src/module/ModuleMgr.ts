class ModuleMgr {
	private static s_instance: ModuleMgr;
	public constructor() {
	}
	public static get ins(): ModuleMgr {
		if (ModuleMgr.s_instance == null) {
			ModuleMgr.s_instance = new ModuleMgr();
		}
		return ModuleMgr.s_instance;
	}

	private m_configLib:Object = new Object();

	public getStaticLayer():StaticModuleLayer
	{
		return LayerCenter.Instance.getLayer(LayerEnum.STATIC) as StaticModuleLayer;
	}

	public regModule(config:ModuleConfigVo):void
	{
		this.m_configLib[config.moduleId] = config;
	}

	public getConfigVo(moduleId:ModuleEnum):ModuleConfigVo
	{
		var config:ModuleConfigVo = this.m_configLib[moduleId] as ModuleConfigVo;
		if(config == null){
			egret.log("未注册的moduleId:", moduleId);
			return;
		}
		return config;
	}

	private config:ModuleConfigVo;

	/**
	 * 
	 */
	public showModule(moduleId:number, data?:any, parentModuleId?:number):ModuleInfoVo
	{
		var config:ModuleConfigVo = this.getConfigVo(moduleId);
		if(config == null){
			return;
		}
		var layer:UILayer = LayerCenter.Instance.getLayer(config.layerKind);
		var infoVo:ModuleInfoVo = layer.showModule(moduleId, data, parentModuleId);
		return infoVo;
	}

	public isShow(moduleId:number):boolean
	{
		var config:ModuleConfigVo = this.m_configLib[moduleId] as ModuleConfigVo;
		if(config){
			var layer:UILayer = LayerCenter.Instance.getLayer(config.layerKind);
			return layer.isShow(moduleId);
		}
		return false;
	}

	public closeModule(moduleId:number, data?:any):void
	{
		var config:ModuleConfigVo = this.getConfigVo(moduleId);
		if(config == null){
			return;
		}
		var layer:UILayer = LayerCenter.Instance.getLayer(config.layerKind);
		layer.closeModule(moduleId, data);
	}

	public loadSkins(skins):void
	{
		// egret.getDefinitionByName()
	}
}