class GameSetting {
	private static s_instance: GameSetting;
	public constructor() {
		if(egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_SOUND)=="1"){
			this.soundOff = true;
		}else{
			this.soundOff = false;
		}
	}
	public static get ins(): GameSetting {
		if (GameSetting.s_instance == null) {
			GameSetting.s_instance = new GameSetting();
		}
		return GameSetting.s_instance;
	}


	public soundOff:boolean=false;//为true的时候，静音
	public setSoundOnOff(value:boolean):void
	{
		this.soundOff=value;
		if(value==true){
			egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SOUND,"1");
			App.SoundUtils.stopSoundByID("bg");
		}else{
			egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SOUND,"0");
			App.SoundUtils.playSound("bg",1,-1);
		}
	}
}