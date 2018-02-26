class GameModel {
	private static s_instance: GameModel;
	public constructor() {
	}
	public static get ins(): GameModel {
		if (GameModel.s_instance == null) {
			GameModel.s_instance = new GameModel();
		}
		return GameModel.s_instance;
	}


	public nowScore:number=0;
	public maxScore:number=0;
	public scoreSign:number=0;//分数飘动特效的时候，临时记录的分数
	public starNum:number//拥有的可以兑换的星星的个数
	public set score(value:number)
	{
		this.nowScore=value;
		if(this.nowScore>this.maxScore){
			this.maxScore=this.nowScore;
			egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SCOREMAX,this.maxScore.toString());
		}
		App.EventCenter.dispatch(GameEventConst.GAME_SCORE_CHANGE);
	}
	public get score():number{
		return this.nowScore;
	}
	public set star(value:number){
		this.starNum=value;
		egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_STARS,this.starNum.toString());
		App.EventCenter.dispatch(GameEventConst.GAME_STAR_CHANGE);
	}
	public get star():number{
		if(this.starNum==null){
			this.starNum = Number(egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_STARS));
		}
		return this.starNum;
	}
	public restart():void
	{
		this.nowScore=0;
	}
}