class FloatScore extends game.UI_FloatScore {
	public constructor() {
		super();
	}
	
	public set data(value:number)
	{
		this.m_txt_score.text=value.toString();
		this.m_showmovie.play(this.playComplete,this);
	}
	private playComplete():void
	{
		Utils.floatScore(this,new egret.Point(340,75));
	}
}