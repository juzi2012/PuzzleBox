class GameTop extends Module {
	private Cont:any={val:0};
	private interval:any;

	public constructor() {
		super();
	}
	public initContent():void
    {
        this.content = game.UI_TopUI.createInstance();
    }
    public get mContent():game.UI_TopUI{
        return this.content as game.UI_TopUI;
    }
	public preShow(data?: any): void {
		this.mContent.m_btn_sound.selected = GameSetting.ins.soundOff;
		this.mContent.m_btn_pause.addClickListener(()=>{
			App.SoundUtils.playSound("button",0);
			this.mContent.m_btnctrl.selectedIndex=(this.mContent.m_btnctrl.selectedIndex==0)?1:0;
        },this);
		this.mContent.m_btnrefresh.addClickListener(()=>{
			App.SoundUtils.playSound("button",0);
			App.EventCenter.dispatch(GameEventConst.GAME_RESTART);
			this.mContent.m_btnctrl.selectedIndex=0;
		},this);
		this.mContent.m_btn_sound.addClickListener(()=>{
			App.SoundUtils.playSound("button",0);
			GameSetting.ins.setSoundOnOff(this.mContent.m_btn_sound.selected);
			this.mContent.m_btnctrl.selectedIndex=0;
		},this);
		this.mContent.m_btn_home.addClickListener(()=>{
			App.SoundUtils.playSound("button",0);
			ModuleMgr.ins.closeModule(ModuleEnum.GAME_TOP);
			ModuleMgr.ins.closeModule(ModuleEnum.GAME);
			ModuleMgr.ins.showModule(ModuleEnum.GAME_MENU,[]);
			this.mContent.m_btnctrl.selectedIndex=0;
		},this);
		App.EventCenter.addListener(GameEventConst.GAME_SCORE_CHANGE,this.changeNowScore,this);
		App.EventCenter.addListener(GameEventConst.GAME_STAR_CHANGE,this.changeStar,this);
		App.EventCenter.addListener(GameEventConst.GAME_RESTART,this.gameRestart,this);
		GameModel.ins.maxScore = Number(egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_SCOREMAX));
		if(egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_STARS)==null){
			GameModel.ins.star=GameConsts.GAME_STAR_INIT;
		}
		this.mContent.m_txt_star.text=GameModel.ins.star.toString();
		this.preShowCpl();
	}
	private changeNowScore():void
	{
		let time:number=12;
		let step:number=1;
		if(GameModel.ins.nowScore-this.Cont.val>30){
			time=8;
			step = 3;
		}else if(GameModel.ins.nowScore-this.Cont.val>60){
			time=4;
			step = 8;
		}
		this.interval = egret.setInterval(this.onChange,this,time,step);
	}
	private onChange(step:number):void
	{
		if(this.Cont.val+step>GameModel.ins.nowScore){
			this.Cont.val=GameModel.ins.nowScore;
		}else{
			this.Cont.val+=step;
		}
		if(this.Cont.val>=GameModel.ins.nowScore){
			egret.clearInterval(this.interval);
		}
		this.mContent.m_txt_score.text = Number(this.Cont.val).toString();
	}
	private changeStar():void
	{
		this.mContent.m_txt_star.text=GameModel.ins.starNum.toString();
	}
	private gameRestart():void
	{
		this.mContent.m_txt_score.text="0";
		this.Cont.val=0;
	}
}