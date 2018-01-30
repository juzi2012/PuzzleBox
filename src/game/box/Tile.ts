class Tile extends egret.DisplayObjectContainer{
    public bg:egret.Bitmap;
    public row:number;
    public column:number;
    public isEmpty:boolean=true;
    public isTemporary:boolean=false;
    public temporaryBox:BoxSingle;
    public officalBox:BoxSingle;
    public color:Number;
    public constructor(row:number,column:number)
    {
        super();
        this.row=row;
        this.column=column;
        this.createNormal();
    }
    private createNormal():void
    {
        this.bg = Utils.createFairyGuiBitmapByName("tile_bg");
        this.bg.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.bg.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.bg.anchorOffsetX=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;
        this.bg.anchorOffsetY=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;
        this.addChild(this.bg);
    }
    public addTemporary(color:number):void
    {
        if(this.isTemporary==true)return;
        this.isTemporary=true;
        this.temporaryBox = this.createBox(color);
        this.temporaryBox.scaleX=this.temporaryBox.scaleY=0.9;
        this.temporaryBox.alpha=0.5;
        this.addChild(this.temporaryBox);
        if(this.officalBox!=null){
            this.officalBox.alpha=0;
        }
    }
    public clearTemporary():void
    {
        if(this.temporaryBox!=null){
            if(this.temporaryBox.parent){
                this.temporaryBox.parent.removeChild(this.temporaryBox);
            }
            core.ObjectPool.push(this.temporaryBox);
            this.temporaryBox=null;
        }
        this.isTemporary=false;
        if(this.officalBox!=null){
            this.officalBox.alpha=1;
        }
    }
    public addOfficial(color:number):void
    {
        this.clearTemporary();
        this.isEmpty=false;
        this.color = color;
        this.officalBox = this.createBox(color);
        this.addChild(this.officalBox);
    }
    public doDipsear():void
    {
        this.clearTemporary();
        this.isEmpty=true;
        egret.Tween.get(this.officalBox).to( {scaleX:0,scaleY:0}, 200).call(this.dispose,this);
    }
    public dispose():void
    {
        this.isEmpty=true;
        if(this.officalBox!=null){
            if(this.officalBox.parent!=null)this.officalBox.parent.removeChild(this.officalBox);
            core.ObjectPool.push(this.officalBox);
            this.officalBox=null;
        }
    }
    private createBox(color):BoxSingle
    {
        let boxSingleName:string;
        switch(color){
            case 1:
            boxSingleName="BoxSingleRed";
            break;
            case 2:
            boxSingleName="BoxSingleYellow";
            break;
            case 3:
            boxSingleName="BoxSingleBlue";
            break;
        }
        let box:BoxSingle = BoxFactory.createSingleBox(boxSingleName,color);
        return box;
    }
}