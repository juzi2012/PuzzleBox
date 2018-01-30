class ModuleInfoVo extends egret.EventDispatcher {
		
	public constructor(configVo:ModuleConfigVo) {
		super();

		this.moduleId = configVo.moduleId;
		this.configVo = configVo;
	}

	public moduleId:number;

	public configVo:ModuleConfigVo;

	public module:Module;

	public preShowData:any;

	public isShow:boolean;

	public layer:UILayer;

	private state:number = 0;

	private phase:number = 0;

	public changeModuleState(moduleState:number):void
	{
		if(this.state != moduleState){
			var oldState:number = this.state;
			this.state = moduleState;
			if(oldState == ModuleConsts.STATE_NULL){
				if(moduleState == ModuleConsts.STATE_SHOW){
					this.startShow();
				}
			}else if(oldState == ModuleConsts.STATE_SHOW){
				switch(this.phase){
					case ModuleConsts.PHASE_LOAD_ASSET:
					case ModuleConsts.PHASE_SERVER:
					case ModuleConsts.PHASE_PRE_SHOW:
					case ModuleConsts.PHASE_MODULE_FADE_IN:
						if(moduleState == ModuleConsts.STATE_CLOSE){
							//什么都不做，让module继续加载
						}else{
							this.removeAllListeners();
							this.preClose();
						}
						break;
					case ModuleConsts.PHASE_SHOW:
						this.removeAllListeners();
						this.preClose();
						break;
				}
			}else if(oldState == ModuleConsts.STATE_CLOSE){
				switch(this.phase){
					case ModuleConsts.PHASE_PRE_CLOSE:
						this.removeAllListeners();
						this.show();
						break;
					case ModuleConsts.PHASE_MODULE_FADE_OUT:
					case ModuleConsts.PHASE_CLOSE:
						if(this.module.content.parent == null){
							this.layer.addChild(this.module.content);
						}
						this.removeAllListeners();
						this.moduleFadeIn();
						break;
				}
			}
		}	
	}

	public startShow():void
	{
		this.state = ModuleConsts.STATE_SHOW;
		if(this.module == null){
			this.module = new this.configVo.moduleCls() as Module;
			this.module.moduleInfoVo = this;
			this.isShow = true;
			var groups: string[] = this.configVo.groupNames.slice();

			if (groups && groups.length > 0) {
				var loading: core.ILoadingUI = core.LoadingManager.getCurLoading();
				if (loading) {
					loading.show();
				}
				this.phase = ModuleConsts.PHASE_LOAD_ASSET;
				core.ResUtils.loadGroups(groups, this.onLoadProgress, this.onLoadFaild, this.onLoadComplete, this);
			} else {
				this.initAll();
			}
		}else{
			this.isShow = true;
			this.initAll();
		}
	}

	private initAll():void
	{
		this.module.initContentAll();
		this.moduleServerStart();
	}

	private moduleServerStart():void
	{
		if(this.state == ModuleConsts.STATE_SHOW){
			this.phase = ModuleConsts.PHASE_LOAD_ASSET;
			this.module.addEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this)
			this.module.moduleServerStart(this.preShowData);
		}
	}

	private onModuleServerCpl(e:egret.Event):void
	{
		this.module.removeEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this);
		this.preShow();
	}

	private preShow():void
	{
		if(this.state == ModuleConsts.STATE_SHOW){
			this.phase = ModuleConsts.PHASE_PRE_SHOW;
			this.module.addEventListener(ModuleConsts.MODULE_PRE_SHOW_CPL, this.onModulePreShowCpl, this);
			this.module.preShow(this.preShowData);
		}
	}

	private onModulePreShowCpl(e:egret.Event):void
	{
		//隐藏进度条
		let loading: core.ILoadingUI = core.LoadingManager.getCurLoading();
		if (loading) {
			loading.hide();
		}
		this.module.initAutoSize(this.layer, this.configVo.isAutoSize);
		this.layer.addChild(this.module.content);
		this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_ADD_TO_STAGE));
		this.moduleFadeIn();
	}

	public moduleFadeIn():void
	{
		if(this.state == ModuleConsts.STATE_SHOW){
			this.phase = ModuleConsts.PHASE_MODULE_FADE_IN;
			this.isShow = true;
			this.module.addEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
			this.module.moduleFadeIn();
		}
	}

	private onModuleFadeInCpl(e:egret.Event):void
	{
		this.module.removeEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
		this.show();
	}

	private show():void
	{
		if(this.state == ModuleConsts.STATE_SHOW){
			this.phase = ModuleConsts.PHASE_SHOW;
			this.module.show(this.preShowData);
		}
	}

	public preClose():void
	{
		this.phase = ModuleConsts.PHASE_PRE_CLOSE;
		this.module.addEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
		this.module.preClose(this.preShowData);
	}

	private onModulePreCloseCpl(e:egret.Event):void
	{
		this.isShow = false;
		this.module.removeEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
		this.moduleFadeOut();
	}

	private moduleFadeOut():void
	{
		this.phase = ModuleConsts.PHASE_MODULE_FADE_OUT;
		this.module.addEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
		this.module.moduleFadeOut();
	}

	private onModuleFadeOutCpl(e:egret.Event):void
	{
		this.module.removeEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
		this.doRelease();
	}

	private doRelease():void
	{
		this.phase = ModuleConsts.PHASE_CLOSE;
		if(this.configVo.disposeWhenClose){
			this.state = ModuleConsts.STATE_DISPOSE;
			this.module.release();
		}else{
			this.module.hide();
		}
		this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_CLOSE_CPL));
	}

	public release():void
	{
		this.removeAllListeners();
		this.module = null;
		this.layer = null;
	}

	public getHistoryData():any
	{
		if(this.module != null){
			return this.module.getHistoryData();
		}else{
			return null;
		}
	}

	private removeAllListeners():void
	{
		if(this.module){
			this.module.removeEventListener(ModuleConsts.MODULE_SERVER_CPL, this.onModuleServerCpl, this);
			this.module.removeEventListener(ModuleConsts.MODULE_PRE_SHOW_CPL, this.onModulePreShowCpl, this);
			this.module.removeEventListener(ModuleConsts.MODULE_FADE_IN_CPL, this.onModuleFadeInCpl, this);
			this.module.removeEventListener(ModuleConsts.MODULE_PRE_CLOSE_CPL, this.onModulePreCloseCpl, this);
			this.module.removeEventListener(ModuleConsts.MODULE_FADE_OUT_CPL, this.onModuleFadeOutCpl, this);
		}
	}

	/**
	 * 加载进度
	 */
	private onLoadProgress(data: core.GroupData): void {
		let loading: core.ILoadingUI = core.LoadingManager.getCurLoading();
		if (loading) {
			loading.setProgress(data);
		}
	}
	/**
	 * 加载失败
	 */
	private onLoadFaild(data: core.GroupData): void {
		egret.log(`资源组${data.curGroup}加载失败, 失败URL：${data.curResItem.url}`);
	}
	/**
	 * 加载完成
	 */
	private onLoadComplete(data: core.GroupData): void {
		for(var i:number = 0; i < this.configVo.groupNames.length; i++){
			var resKey = this.configVo.groupNames[i];
			var buf = RES.getRes(resKey);
			if (!buf){
				buf = RES.getRes(resKey + "_fui");
			}
			if(buf){
				fairygui.UIPackage.addPackage(this.configVo.groupNames[i]);
			}
		}
		this.initAll();
	}
}