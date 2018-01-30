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
	public set score(value:number)
	{
		this.nowScore=value;
		if(this.nowScore>this.maxScore){
			this.maxScore=this.nowScore;
			egret.localStorage.setItem("puzzleBox_maxScore",this.maxScore.toString());
		}
		App.EventCenter.dispatch("nowscorechange");
	}
	public get score():number{
		return this.nowScore;
	}
	public restart():void
	{
		this.nowScore=0;
	}
}