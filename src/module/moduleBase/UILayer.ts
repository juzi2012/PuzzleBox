
	/**
	 *
	 * @author yuxuefeng
	 *
	 */
class UILayer extends fairygui.GComponent {
	constructor() {
		super();
		
		this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
		this.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
		this.touchable = true;
	}

	protected p_moduleList:Array<ModuleInfoVo> = new Array<ModuleInfoVo>();

	public getCurModuleInfo():ModuleInfoVo
	{
		if(this.p_moduleList.length > 0){
			return this.p_moduleList[this.p_moduleList.length - 1];
		}
		return null;
	}

	public getCurModuleId():number
	{
		var infoVo:ModuleInfoVo = this.getCurModuleInfo();
		if(infoVo){
			return infoVo.moduleId;
		}else{
			return 0;
		}
	}

	public showModule(moduleId:number, data?:any, parentModuleId?:number):ModuleInfoVo
	{
		var infoVo:ModuleInfoVo = this.getModuleInfoVo(moduleId);
		if(infoVo == null){
			var config:ModuleConfigVo = ModuleMgr.ins.getConfigVo(moduleId);
			if(config == null){
				return;
			}
			infoVo = new ModuleInfoVo(config);
			this.p_moduleList.push(infoVo);
			infoVo.layer = this;
			infoVo.preShowData = data;
			infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
			infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
		}else{
			infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
			if(infoVo.module.content.parent){
				infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
			}else{
				this.onModuleAddToStage(null);
			}
		}
		return infoVo;
	}

	protected onModuleAddToStage(e?:egret.Event):void
	{

	}

	public isShow(moduleId:number):boolean
	{
		var infoVo:ModuleInfoVo = this.getModuleInfoVo(moduleId);
		if(infoVo){
			return infoVo.isShow;
		}else{
			return false;
		}
	}

	public closeModule(moduleId:number, data?:any):void
	{
		var infoVo:ModuleInfoVo = this.getModuleInfoVo(moduleId);
		if(infoVo != null){
			this.closeModuleByInfo(infoVo, data);
		}
	}

	public closeModuleByInfo(info:ModuleInfoVo, data?:any):void
	{
		if(info.isShow){
			info.addEventListener(ModuleConsts.MODULE_CLOSE_CPL, this.onCloseCpl, this);
			info.preShowData = data;
			info.changeModuleState(ModuleConsts.STATE_CLOSE);
		}
	}

	protected onCloseCpl(e:egret.Event):void
	{
		var infoVo:ModuleInfoVo = e.currentTarget as ModuleInfoVo;
		infoVo.removeEventListener(ModuleConsts.MODULE_CLOSE_CPL, this.onCloseCpl, this);
		//从数组中删除info
		if(infoVo.configVo.disposeWhenClose){
			var index:number = this.p_moduleList.lastIndexOf(infoVo);
			if(index >= 0){
				this.p_moduleList.splice(index, 1);
			}
			infoVo.release();
		}
	}

	/**
	 * 根据moduleId查找infovo
	 * 倒序查找
	 */
	protected getModuleInfoVo(moduleId:number):ModuleInfoVo
	{
		for(var i:number = this.p_moduleList.length - 1; i >= 0; i--){
			if(this.p_moduleList[i].moduleId == moduleId){
				return this.p_moduleList[i];
			}
		}
		return null;
	}

	public closeAll(excepIdArr?:Array<number>):void
	{
		for(var i:number = this.p_moduleList.length - 1; i >= 0; i--){
			var infoVo:ModuleInfoVo = this.p_moduleList[i];
			if(excepIdArr && excepIdArr.indexOf(infoVo.moduleId) >= 0){
				//不关闭的module
			}else{
				this.closeModuleByInfo(infoVo);
			}
		}
	}
}