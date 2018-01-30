class StaticModuleLayer extends UILayer{
	public constructor() {
		super();

		this.cover = new egret.Sprite();
		this.cover.touchEnabled = true;
		this.drawCover();
	}

	private cover:egret.Sprite;

	private drawCover():void
	{
		this.cover.graphics.clear();
		this.cover.graphics.beginFill(0x000000, 0.2);
		this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
		this.cover.graphics.endFill();
	}
}
