class Tile extends egret.DisplayObjectContainer{
    public bg:egret.Bitmap;
    public row:number;
    public column:number;
    public isEmpty:boolean=true;
    public isTemporary:boolean=false;
    public temporaryBox:BoxSingle;
    public officalBox:BoxSingle;
    public color:Number;
    public wenhao:egret.Bitmap;
    public randomType:number=-1;
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
        if(this.wenhao!=null){
            this.setChildIndex(this.wenhao,this.numChildren-1);
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
        if(this.wenhao!=null){
            this.setChildIndex(this.wenhao,this.numChildren-1);
        }
    }
    //添加随机奖励或者惩罚
    public addRandom(randomType:number):void{
        this.randomType=randomType;
        if(this.wenhao==null){
            this.wenhao = Utils.createFairyGuiBitmapByName("wenhao");
            this.wenhao.anchorOffsetX = this.wenhao.width/2;
            this.wenhao.anchorOffsetY = this.wenhao.height/2;
            this.wenhao.scaleX=this.wenhao.scaleY=1.4;
            this.addChild(this.wenhao);
            egret.Tween.get(this.wenhao).to( {scaleX:1,scaleY:1}, 200);
        }
    }
    public doDipsear():void
    {
        this.clearTemporary();
        if(this.wenhao!=null){
            App.DisplayUtils.removeFromParent(this.wenhao);
            this.wenhao=null;
            /*if(this.randomType==0){//-
                let score:FloatScore = FloatScore.createInstance() as FloatScore;
                score.data=-10;
                this.addChild(score.displayObject)
                Utils.floatScoreAndDispose(score,new egret.Point(0,-100));
            }else if(this.randomType==1){//+
                let score:FloatScore = FloatScore.createInstance() as FloatScore;
                score.data=10;
                this.addChild(score.displayObject)
                Utils.floatScoreAndDispose(score,new egret.Point(0,-100));
            }*/
            this.randomType=-1;
        }
        this.isEmpty=true;
        egret.Tween.get(this.officalBox).to( {scaleX:0,scaleY:0}, 200).call(this.dispose,this);
    }
    public dispose():void
    {
        if(this.wenhao!=null){
            App.DisplayUtils.removeFromParent(this.wenhao);
            this.wenhao=null;
            this.randomType=-1;
        }
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
            case 4:
            boxSingleName="BoxSingleGreen";
            break;
            case 5:
            boxSingleName="BoxSinglePurple";
            break;
        }
        let box:BoxSingle = BoxFactory.createSingleBox(boxSingleName,color);
        return box;
    }
}