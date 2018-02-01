class GameLoadingModule extends Module implements RES.PromiseTaskReporter{
	public constructor() {
		super();
	}
	private loadingBar:Loading.UI_LoadingBar
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
		let bg = Utils.createBitmapByName("menubg")
		bg.width=App.StageUtils.getWidth();
        bg.height=App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(bg);
		this.loadingBar = Loading.UI_LoadingBar.createInstance() as Loading.UI_LoadingBar;
		this.loadingBar.x = App.StageUtils.getWidth()/2-this.loadingBar.width/2;
		this.loadingBar.y = App.StageUtils.getHeight()-200;
		this.mContent.displayListContainer.addChild(this.loadingBar.displayObject);
        this.preShowCpl();
    }
    public show(data?:any):void
    {        
        super.show(data);
		RES.loadGroup("game", 0, this);
    }
	public onProgress(current: number, total: number): void {
		this.loadingBar.max=total;
		this.loadingBar.value=current;
		if(current==total){
			this.startGame();
		}
	}
	private startGame():void
    {
        fairygui.UIPackage.addPackage("game");
        ModuleMgr.ins.showModule(ModuleEnum.GAME_MENU,[]);
    }
}