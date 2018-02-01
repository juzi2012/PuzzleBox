class GameOverModule extends PopModuleView {
	public constructor() {
		super()
	}
	public initContent():void
    {
        this.content = game.UI_GameOverPanel.createInstance();
    }
    public get mContent():game.UI_GameOverPanel{
        return this.content as game.UI_GameOverPanel;
    }
    /**
     * 预显示
     */
    public preShow(data?: any): void {
        App.SoundUtils.stopSoundByID("bg");
        this.mContent.m_btn_restart.addClickListener(()=>{
            App.EventCenter.dispatch(GameEventConst.GAME_RESTART);
            App.SoundUtils.playSound("button",0);
            ModuleMgr.ins.closeModule(ModuleEnum.GameOver);
        },this);
        this.mContent.m_txt_now.text=GameModel.ins.score.toString();
        this.mContent.m_txt_max.text=GameModel.ins.maxScore.toString();
        this.preShowCpl();
    }
    public show(data?:any):void
    {        
        super.show(data);
    }
}