class HistoryModuleVo {

	public constructor(moduleId:number, param:any, historyParam:any) {
		this.moduleId = moduleId;
		this.data = param;
		this.historyData = historyParam;
	}

	public moduleId:number;

	public data:any;

	public historyData:any;
}
