class UIModuleLayer extends UILayer {
	public constructor() {
		super();
	}

	protected p_historyList:Array<HistoryModuleVo> = new Array<HistoryModuleVo>();

	public showModule(moduleId:number, data?:any, parentModuleId?:number):ModuleInfoVo
	{
		var curMiv:ModuleInfoVo = this.getCurModuleInfo();
		if(curMiv != null){
			this.addHistory(curMiv.moduleId, curMiv.preShowData, curMiv.getHistoryData())
			this.closeModuleByInfo(curMiv, null);
		}

		return super.showModule(moduleId, data, parentModuleId);
	}

	public closeModule(moduleId:number, data?:any):void
	{
		var curModuleId:number = this.getCurModuleId();
		var infoVo:ModuleInfoVo = this.getModuleInfoVo(moduleId);
		if(infoVo != null){
			this.closeModuleByInfo(infoVo, data);
		}

		//关闭的是当前界面时，返回上一个界面
		if(moduleId == curModuleId){
			if(this.p_historyList.length > 0){
				var historyVo:HistoryModuleVo = this.p_historyList.pop();
				this.showModule(historyVo.moduleId, historyVo.historyData ? historyVo.historyData : historyVo.data);
			}	
		}
	}

	public closeModuleByInfo(info:ModuleInfoVo, data?:any):void
	{
		super.closeModuleByInfo(info, data);
	}

	private addHistory(moduleId:number, data:any, historyData:any):void
	{
		this.p_historyList.push(new HistoryModuleVo(moduleId, data, historyData));
	}
}