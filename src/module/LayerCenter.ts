
/**
 *
 * @author 
 *
 */
class LayerCenter {

	private static s_instance: LayerCenter;

	private m_layerDic: Dictionary<UILayer>;

	public stage: egret.Stage;

	public static stageWidth: number;

	public static stageHeight: number;

	public constructor() {
	}

	public static get Instance(): LayerCenter {
		if (LayerCenter.s_instance == null) {
			LayerCenter.s_instance = new LayerCenter();
		}
		return LayerCenter.s_instance;
	}

	public init(stage:egret.Stage): void {
		if (stage) {
			this.stage = stage;
			stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
			this.m_layerDic = new Dictionary<UILayer>();
			LayerCenter.stageWidth = stage.stageWidth;
			LayerCenter.stageHeight = stage.stageHeight;
			this.stage.addChild(fairygui.GRoot.inst.displayObject);
		}
		//初始化游戏的层级
		this.initLayers();
	}
	private initLayers():void
	{
		this.addLayer(LayerEnum.SCENE, new SceneModuleLayer());
		this.addLayer(LayerEnum.UI, new UIModuleLayer());
		this.addLayer(LayerEnum.STATIC, new StaticModuleLayer());
		this.addLayer(LayerEnum.POPUP, new PopModuleLayer());
		this.addLayer(LayerEnum.TOP, new TopModuleLayer());
	}
	public addLayer(index: number, layer:UILayer): void {
		this.m_layerDic.add(index, layer);
		egret.callLater(this.updateLayer, this);
	}
	private onStageResize(event: egret.Event): void {
		LayerCenter.stageWidth = this.stage.stageWidth;
		LayerCenter.stageHeight = this.stage.stageHeight;
		
		fairygui.GRoot.inst.setSize(LayerCenter.stageWidth, LayerCenter.stageHeight);
		App.EventCenter.dispatch(egret.Event.RESIZE);
	}

	private updateLayer(): void {
		let keys: number[] = this.m_layerDic.keys.concat();
		keys.sort(function (a: number, b: number): number {
			return a - b;
		});
		for (let i: number = 0, iLen: number = keys.length; i < iLen; i++) {
			let layer:UILayer = this.m_layerDic.get(keys[i]);
			if (!layer.parent) {
				fairygui.GRoot.inst.addChildAt(layer, i);
			} else {
				fairygui.GRoot.inst.setChildIndex(layer, i);
			}
		}
	}

	public getLayer(index: number): UILayer {
		return this.m_layerDic.get(index);
	}

	public removeLayer(index: number): UILayer {
		let layer: UILayer = this.m_layerDic.remove(index);
		this.updateLayer();
		return layer;
	}
}
