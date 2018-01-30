class Utils {
	public constructor() {
	}
	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    public static createFairyGuiBitmapByName(name: string){
        let result = new egret.Bitmap();
        let img:fairygui.GImage = fairygui.UIPackage.createObject("game",name) as fairygui.GImage;
        result.texture = img.texture;
        return result;
    }
    public static floatScore(tar:FloatScore,endPos:egret.Point):void
    {
        egret.Tween.get(tar).to({x:endPos.x-tar.width/2,y:endPos.y-tar.height/2},300).call(()=>{tar.visible=false;GameModel.ins.score=GameModel.ins.scoreSign},this);
    }
}