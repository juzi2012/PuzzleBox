abstract class PopModuleView extends Module {

	public moduleFadeInType:number;
	public moduleFadeOutType:number;
	private static TWEEN_DURATION:number = 200;

	public constructor() {
		super();
	}
	
	protected init():void
	{
		this.moduleFadeInType = ModuleConsts.MODULE_FADE_IN_TYPE_1;
		this.moduleFadeOutType = ModuleConsts.MODULE_FADE_OUT_TYPE_1;
	}

	/**
	 * 初始化模块自适应
	 * @param layer 该模块添加的图层
	 * @param isConfigVoAutoSize 模块配置是否自适应
	 */
	public initAutoSize(layer:UILayer, isConfigVoAutoSize:boolean):void
	{
		if(this.content && isConfigVoAutoSize){
			this.content.x = layer.width / 2 - this.content.width / 2;
			this.content.y = layer.height / 2 - this.content.height / 2;
			this.content.addRelation(layer, fairygui.RelationType.Center_Center);
		}
	}

	public moduleFadeIn(startDelay?:number):void
	{
		switch(this.moduleFadeInType){
			case ModuleConsts.MODULE_FADE_IN_TYPE_1:
				var aim:core.Vector2D = new core.Vector2D(this.content.x, this.content.y);
				var startScale:number = 0.5;
				this.content.x = this.content.x + this.content.width / 2 * startScale;
				this.content.y = this.content.y + this.content.height / 2 * startScale;
				this.content.scaleX = this.content.scaleY = startScale;
				this.content.alpha = 0;
				var tween:egret.Tween = egret.Tween.get(this.content);
				tween.to({x:aim.x, y:aim.y, scaleX:1, scaleY:1, alpha:1}, PopModuleView.TWEEN_DURATION, egret.Ease.quintOut);
				tween.call(this.moduleFadeInCpl, this);
				break;
			case ModuleConsts.MODULE_FADE_IN_TYPE_2:
				var aim:core.Vector2D = new core.Vector2D(this.content.x, this.content.y);
				this.content.y = LayerCenter.stageHeight / 2 + 50;
				this.content.alpha = 0;
				tween = egret.Tween.get(this.content);
				tween.to({y:aim.y, alpha:1}, PopModuleView.TWEEN_DURATION, egret.Ease.quintOut);
				tween.call(this.moduleFadeInCpl, this);
				break;
			default:
				this.moduleFadeInCpl();
				break;
		}
	}

	protected moduleFadeInCpl():void
	{
		super.moduleFadeInCpl();
	}

	public moduleFadeOut():void
	{
		switch(this.moduleFadeOutType){
			case ModuleConsts.MODULE_FADE_OUT_TYPE_1:
				var endScale:number = 0.5;
				var aimX:number = this.content.x + this.content.width / 2 * endScale;
				var aimY:number = this.content.y + this.content.height / 2 * endScale;
				var tween:egret.Tween = egret.Tween.get(this.content);
				tween.to({x:aimX, y:aimY, scaleX:endScale, scaleY:endScale, alpha:0.5}, 
					PopModuleView.TWEEN_DURATION, egret.Ease.quintIn);
				tween.call(this.moduleFadeOutCpl, this);
				break;
			case ModuleConsts.MODULE_FADE_OUT_TYPE_2:
				aimY = LayerCenter.stageHeight / 2 + 50;
				tween = egret.Tween.get(this.content);
				tween.to({y:aimY, alpha:0}, PopModuleView.TWEEN_DURATION, egret.Ease.quintIn);
				tween.call(this.moduleFadeOutCpl, this);
				break;
			default:
				this.moduleFadeOutCpl();
				break;
		}
	}

	protected moduleFadeOutCpl():void
	{
		super.moduleFadeOutCpl();
	}
}