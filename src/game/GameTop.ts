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
		this.mContent.m_btn_restart.addClickListener(()=>{
            ModuleMgr.ins.showModule(ModuleEnum.GameOver);
        },this);
		App.EventCenter.addListener("nowscorechange",this.changeNowScore,this);
		App.EventCenter.addListener("gameover",this.gameRestart,this);
		GameModel.ins.maxScore = Number(egret.localStorage.getItem("puzzleBox_maxScore"));
		this.mContent.m_txt_score_max.text=GameModel.ins.maxScore.toString();
		this.preShowCpl();
	}
	private changeNowScore():void
	{
		this.mContent.m_txt_score_max.text=GameModel.ins.maxScore.toString();
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
	private gameRestart():void
	{
		this.mContent.m_txt_score.text="0";
		this.Cont.val=0;
	}
}