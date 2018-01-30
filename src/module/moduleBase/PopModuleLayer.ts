class PopModuleLayer extends UILayer {
	public constructor() {
		super();
		
		// this.cover.add
		this.cover = new fairygui.GGraph();
		this.cover.touchable = true;
		this.cover.graphics;
		// this.cover.displayObject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCoverTouch, this);
		this.drawCover();
		App.EventCenter.addListener(egret.Event.RESIZE,this.onStageResize,this);
	}

	protected onStageResize(e:core.EventData):void
	{
		this.drawCover();
	}

	protected cover:fairygui.GGraph;

	protected drawCover():void
	{
		this.cover.graphics.clear();
		this.cover.graphics.beginFill(0x000000, 0.2);
		this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
		this.cover.graphics.endFill();
	}

	protected onCoverTouch(e:egret.TouchEvent):void
	{
		var curModuleId:number = this.getCurModuleId();
		if(curModuleId > 0){
			this.closeModule(curModuleId);
		}
	}

	public showModule(moduleId:number, data?:any, parentModuleId?:number):ModuleInfoVo
	{
		var config:ModuleConfigVo = ModuleMgr.ins.getConfigVo(moduleId);
		if(config == null){
			return;
		}
		var infoVo:ModuleInfoVo = new ModuleInfoVo(config);
		this.p_moduleList.push(infoVo);
		infoVo.preShowData = data;
		infoVo.layer = this;
		infoVo.addEventListener(ModuleConsts.MODULE_ADD_TO_STAGE, this.onModuleAddToStage, this);
		infoVo.changeModuleState(ModuleConsts.STATE_SHOW);
		return infoVo;
	}

	protected onCloseCpl(e:egret.Event):void
	{
		super.onCloseCpl(e);
		this.updateModuleVisible();
	}

	protected onModuleAddToStage(e?:egret.Event):void
	{
		this.updateModuleVisible();
	}

	protected updateModuleVisible():void
	{
		if(this.p_moduleList.length > 0){
			for(var i:number = 0; i < this.p_moduleList.length; i++){
				if(i < this.p_moduleList.length - 2){
					this.p_moduleList[i].module.setVisible(false);
				}else{
					this.p_moduleList[i].module.setVisible(true);
				}
			}
			var lastModule:ModuleInfoVo = this.p_moduleList[this.p_moduleList.length - 1];
		}else{

		}
		this.updateConver();
	}

	protected updateConver():void
	{
		for(var i:number = this.p_moduleList.length - 1; i >= 0; i--){
			if(this.p_moduleList[i].configVo.showCover){
				core.DisplayUtil.getInstance().addChildBelow(this.cover, this.p_moduleList[i].module.content);
				return;
			}
		}
		if(this.cover.parent){
			this.cover.parent.removeChild(this.cover);
		}
	}
}