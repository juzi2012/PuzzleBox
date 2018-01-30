class ModuleConfigVo {
	public constructor() {
		
	}

	public moduleId:number;

	public layerKind:number;

	public moduleCls:any;

	public groupNames:string[];

	public m_isAutoSize:boolean;

	/**
	 * 是否根据窗口的大小变化而进行自适应
	 * ui层，scene层,popup层默认为true
	 * static层,top层默认为false
	 * 
	 * Module跟随场景拉伸
	 * PopupView居中
	 * 自定义自适应时，可以继承Module类的initAutoSize方法
	 */
	public get isAutoSize():boolean
	{
		return this.m_isAutoSize;
	}

	public setIsAutoSize(bool:boolean):ModuleConfigVo
	{
		this.m_isAutoSize = bool;
		return this;
	}

	private m_disposeWhenClose:boolean = true;


	/**
	 * close时是否dispose
	 * true:dispose	其他层默认值.popup层必须为true
	 * false:不dispose	static层默认值
	 * **/
	public get disposeWhenClose():boolean
	{
		return this.m_disposeWhenClose;
	}

	private m_showCover:boolean = false;

	/**
	 * 是否显示遮盖
	 */
	public get showCover():boolean
	{
		return this.m_showCover;
	}

	public setShowCover(bool:boolean):ModuleConfigVo
	{
		this.m_showCover = bool;
		return this;
	}

	public setDisposeWhenClose(bool:boolean):ModuleConfigVo
	{
		if(bool == false && this.layerKind == LayerEnum.POPUP){
			egret.error("popup层不能设置disposeWhenClose为false");
			return this;
		}
		this.m_disposeWhenClose = bool;
		return this;
	}
}