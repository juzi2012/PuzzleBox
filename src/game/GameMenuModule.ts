class GameMenuModule extends Module {
	public constructor() {
		super()
	}
    private gamemenu:game.UI_GameMenuModule;
	public initContent():void
    {
        this.content = new fairygui.GComponent();
    }
    public get mContent():fairygui.GComponent{
        return this.content as fairygui.GComponent;
    }
    /**
     * 预显示
     */
    public preShow(data?: any): void {
        let gamebg:egret.Bitmap = Utils.createBitmapByName("menubg");
        gamebg.width=App.StageUtils.getWidth();
        gamebg.height=App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(gamebg);

        this.gamemenu = game.UI_GameMenuModule.createInstance() as game.UI_GameMenuModule;
		this.gamemenu.width = App.StageUtils.getWidth();
		this.gamemenu.height = App.StageUtils.getHeight();
		this.mContent.displayListContainer.addChild(this.gamemenu.displayObject);
        
        this.gamemenu.m_btn_start.addClickListener(this.startGame,this);

        this.preShowCpl();
    }
    private startGame(){
        App.SoundUtils.playSound("button",0);
        ModuleMgr.ins.showModule(ModuleEnum.GAME_TOP,[]);
        ModuleMgr.ins.showModule(ModuleEnum.GAME,[]);
    }
    public show(data?:any):void
    {        
        super.show(data);
    }
}