class Alert extends PopModuleView {
	public constructor() {
		super();
	}
	private msgVo:AlertMsgVo;
	public initContent():void
    {
        this.content = game.UI_Alert.createInstance();
    }
    public get mContent():game.UI_Alert{
        return this.content as game.UI_Alert;
    }
    /**
     * 预显示
     */
    public preShow(data?: any): void {
        App.SoundUtils.stopSoundByID("bg");
		this.msgVo = data as AlertMsgVo;
        this.mContent.m_txt_info.text=this.msgVo.content;
		this.mContent.m_btn_ok.addClickListener(this.onOkClick,this);
		if(this.msgVo.handleNo!=null){
			this.mContent.m_c1.setSelectedIndex(1);
			this.mContent.m_btn_cancel.addClickListener(this.onCancleClick,this);
		}else{
			this.mContent.m_c1.setSelectedIndex(0);
		}
        this.preShowCpl();
    }
    public show(data?:any):void
    {        
        super.show(data);
    }
	private onOkClick():void
	{
		ModuleMgr.ins.closeModule(ModuleEnum.GAME_Alert);
		this.msgVo.handleYes.method.apply(this.msgVo.handleYes.caller);
	}
	private onCancleClick():void
	{
		ModuleMgr.ins.closeModule(ModuleEnum.GAME_Alert);
		this.msgVo.handleNo.method.apply(this.msgVo.handleNo.caller);
	}
}