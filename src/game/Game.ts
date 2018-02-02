class Game extends Module
{
    private map:Map;
    private bottomContent:egret.DisplayObjectContainer;
    private clickarea1:egret.Bitmap=new egret.Bitmap();
    private clickarea2:egret.Bitmap=new egret.Bitmap();
    private clickarea3:egret.Bitmap=new egret.Bitmap();
    private boxAry:Box[];
    private nowMoveRaw:number=-1;
    private nowMoveColumn:number=-1;
    private dropAble:boolean=false;
    private gameover:boolean=false;
    private touchCon:number = 0;

    private boxDragStartY:number;
    private dropEndPos:egret.Point;
    private floatScore:FloatScore;
    private floatLayer:fairygui.GComponent;
    private scale:number=1;//在做自适应的时候，全局的缩放比例

    public constructor()
    {
        super();
    }
    public initContent():void
    {
        this.content = new fairygui.GComponent();
    }
    public get mContent():fairygui.GComponent{
        return this.content;
    }
    public preShow(data?:any):void
	{
		super.preShow(data);
        this.nowMoveRaw=-1;
        this.nowMoveColumn=-1;
        this.dropAble=false;
        this.gameover=false;
        this.touchCon = 0;

        let gamebg:egret.Bitmap = Utils.createBitmapByName("gamebg");
        gamebg.width=App.StageUtils.getWidth();
        gamebg.height=App.StageUtils.getHeight();
        this.mContent.displayListContainer.addChild(gamebg);
        this.map=new Map();
        this.map.x=GameConsts.GAME_PADDING;
        // this.map.y=(App.StageUtils.getHeight()-App.StageUtils.getWidth())/2;//GameConsts.GAME_PADDING_TOP + GameConsts.GAME_PADDING;
        this.map.y=GameConsts.GAME_PADDING_TOP;
        if(App.StageUtils.getHeight()-this.map.y-this.map.height<GameConsts.GAME_CLICK_AREA){
            this.map.y = App.StageUtils.getHeight()-GameConsts.GAME_CLICK_AREA-this.map.height;
        }
        this.mContent.displayListContainer.addChild(this.map);
        
        App.EventCenter.addListener(GameEventConst.GAME_RESTART,this.reStartGame,this);

        this.createClickBox(1);
        this.createClickBox(2);
        this.createClickBox(3);

        this.createStartThreeBox();

        this.floatLayer = new fairygui.GComponent();
        this.mContent.addChild(this.floatLayer);
        this.mContent.displayListContainer.setChildIndex(this.floatLayer.displayObject, this.mContent.displayListContainer.numChildren-1);
        this.floatScore = FloatScore.createInstance() as FloatScore;
        this.mContent.displayListContainer.addChild(this.floatScore.displayObject);
        this.floatScore.visible=false;
        this.mContent.displayListContainer.setChildIndex(this.floatScore.displayObject,this.mContent.displayListContainer.numChildren-1);

        App.SoundUtils.playSound("bg",1,-1);
	}
    private reStartGame():void
    {
        App.SoundUtils.stopSoundByID("bg");
        App.SoundUtils.playSound("bg",1,-1);
        GameModel.ins.restart();
        this.touchStatus=false;
        this.nowMoveRaw=-1;
        this.nowMoveColumn=-1;
        this.dropAble=false;
        this.gameover=false;
        this.map.dispose();
        for(let i:number=0;i<this.boxAry.length;i++){
            let box:Box=this.boxAry[i];
            box.dispose();
            let type:number=App.MathUtils.random(1,GameConsts.GAME_BOX_TYPE_NUM);
            let color:number=App.MathUtils.random(1,GameConsts.GAME_BOX_COLOR_NUM);
            box.type=type;
            box.color=color;
            box.create();
            box.x = -GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*box.pos - (box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4;
            box.y = this["clickarea"+box.pos].y- (box.style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4;
        }
        this.box=null;
    }
    private createStartThreeBox():void
    {
        this.boxAry=[];
        for(let i:number=1;i<4;i++){
            let box:Box = BoxFactory.createPuzzleBox() as Box;
            box.pos=i;
            box.x = -GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*box.pos - (box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4;
            box.y = this["clickarea"+box.pos].y- (box.style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4;
            this.mContent.displayListContainer.addChild(box);
            this.boxAry.push(box);
        }
    }
    private box:Box;
    private touchStatus = false;
    private _distance:egret.Point = new egret.Point(); 
    public addBox():void
    {
        for(let i:number=0;i<this.boxAry.length;i++){
            if(this.boxAry[i]!=this.box){
                if(this.boxAry[i].pos>this.box.pos){
                    this.boxAry[i].pos-=1;
                }
            }
        }

        if(this.box!=null){
            this.box.dispose();
            let type:number=App.MathUtils.random(1,11);
            let color:number=App.MathUtils.random(1,4);
            this.box.type=type;
            this.box.color=color;
            this.box.create();
            this.box.pos=3;
            this.box.x=GameConsts.GAME_BOX_INIT_NEW;
            this.box.y=App.StageUtils.getStage().stageHeight;
            this.box.alpha=0;
        }

        for(let i:number=0;i<this.boxAry.length;i++){
           egret.Tween.get(this.boxAry[i]).to({x:-GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*this.boxAry[i].pos - (this.boxAry[i].style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4,y:this["clickarea"+this.boxAry[i].pos].y- (this.boxAry[i].style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4,alpha:1},400);
        }
    }
    
    private startDrag(evt:egret.TouchEvent):void
    {
        this.touchCon++;
        if(this.touchCon>1)return;
        if(this.gameover==true)return;
        this.box = this.getClickBox(evt.target);
        this.touchStatus = true;
        egret.Tween.get(this.box).to({x:-GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*this.box.pos - (this.box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT,y:this.map.y+this.map.height-(this.box.style_h)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT},50);
        this._distance.x = evt.stageX - (-GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*this.box.pos - (this.box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        this._distance.y = evt.stageY-(this.map.y+this.map.height-(this.box.style_h)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        egret.setTimeout(this.box.doScale,this.box,30);
    }
    private getClickBox(shape:egret.Bitmap):Box
    {
        let pos:number;
        switch(shape){
            case this.clickarea1:
            pos = 1;
            break;
            case this.clickarea2:
            pos = 2;
            break;
            case this.clickarea3:
            pos = 3;
            break;
        }
        for(let i:number=0;i<this.boxAry.length;i++){
            if(this.boxAry[i].pos==pos){
                return this.boxAry[i];
            }
        }
    }
    ///拖拽过程中不断检测是否可以放置
    private mouseMove(evt:egret.TouchEvent)
    {
        if( this.touchStatus )
        {
            this.box.x = evt.stageX - this._distance.x;
            this.box.y = evt.stageY - this._distance.y;
            let pt:egret.Point = this.map.globalToLocal(this.box.x,this.box.y);
            let column:number = Math.floor(pt.x/GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
            let raw:number = Math.floor(pt.y/GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
            if(this.nowMoveRaw!=raw||this.nowMoveColumn!=column){
                this.nowMoveRaw = raw;
                this.nowMoveColumn = column;
                this.map.clearTemporary();
                if(raw<GameConsts.GAME_TILE_ROW&&column<GameConsts.GAME_TILE_COLUMN&&raw>-1&&column>-1){
                    this.dropAble = this.map.checkPos(raw,column,this.box.style,this.box.color);
                }else{
                    this.dropAble = false;
                }
            }
        }
    }
    //释放后,不能放置，自动弹回,可以放置，即可放置
    private doDrop(evt:egret.TouchEvent):void
    {
        this.touchCon=0;
        if(this.box==null||this.gameover==true||this.touchStatus==false)return;
        this.touchStatus = false;
        if(this.dropAble==false){
            this.map.clearTemporary();
            egret.Tween.get(this.box).to({x:-GameConsts.GAME_CLICK_AREA/2+(GameConsts.GAME_CLICK_AREA+10)*this.box.pos - (this.box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4,y:this["clickarea"+this.box.pos].y- (this.box.style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4},100);  
            this.box.doNormal();
        }else{
            this.dropAble=false;
            let targetTile:Tile = this.map.getTileByRawAndColumn(this.nowMoveRaw,this.nowMoveColumn);
            let targetPos:egret.Point=this.map.localToGlobal(targetTile.x,targetTile.y);
            egret.Tween.get(this.box).to( {x:targetPos.x,y:targetPos.y}, 50).call(this.onDropDown,this);
            this.box.doDrop();
        }
    }
    private onDropDown():void
    {
        this.dropEndPos = new egret.Point(this.box.x,this.box.y);

        this.map.addOfficial(this.nowMoveRaw,this.nowMoveColumn,this.box.style,this.box.color);
        this.nowMoveRaw=-1;
        this.nowMoveColumn=-1;
        egret.setTimeout(this.checkDrop,this,50);
        this.dropAble=false;
    }
    private checkDrop():void
    {
        App.SoundUtils.playSound("drop",0);
        let result:any[]=this.map.checkLine();
        let score:number = 0;
        if(result[2]>0){
            let addScore:number = App.MathUtils.getSum(0,result[2])*10;
            this.floatScore.visible=true;
            this.mContent.displayListContainer.setChildIndex(this.floatScore.displayObject,this.mContent.displayListContainer.numChildren-1);
            this.floatScore.x=result[0]-this.floatScore.width/2;
            this.floatScore.y=result[1]-this.floatScore.height/2;
            this.floatScore.data = addScore;

            score=GameModel.ins.nowScore + addScore;
            GameModel.ins.scoreSign=score;
            if(result[2]>4){
                this.floatCool(new egret.Point(result[0],result[1]));
            }else if(result[2]>2){
                this.floatGood(new egret.Point(result[0],result[1]));
            }
            if(result[2]>2){
                App.ShockUtils.shock(1,this.mContent.displayObject,6);
            }
            App.SoundUtils.playSound("dispear",0);
        }else{
            score = GameModel.ins.nowScore+this.box.score;
            GameModel.ins.score=score;
        }
        this.addBox();
        let canGoOn:boolean=false;
        for(let i:number=0;i<this.boxAry.length;i++){
            if(this.map.checkCanGoOn(this.boxAry[i])==true){
                canGoOn=true;
                break;
            }
        }
        if(canGoOn==false){
            this.gameover=true;
            for(let i:number=0;i<this.boxAry.length;i++){
                this.boxAry[i].setGray(true);
            }
            egret.setTimeout(this.gameOver,this,2000);
        }
    }
    private gameOver():void
    {
        App.SoundUtils.playSound("gameover",0);
        this.gameover=true;
        ModuleMgr.ins.showModule(ModuleEnum.GameOver,[]);
    }
    private createClickBox(pos:number):void
    {
        var w:number = GameConsts.GAME_CLICK_AREA;
        var h:number = GameConsts.GAME_CLICK_AREA-30;
        this["clickarea"+pos] = Utils.createFairyGuiBitmapByName("red");
        this["clickarea"+pos].width=w;
        this["clickarea"+pos].height=h;
        this["clickarea"+pos].anchorOffsetX=w/2;
        this["clickarea"+pos].anchorOffsetY=h/2;
        this["clickarea"+pos].alpha=0.5;
        this["clickarea"+pos].touchEnabled=true;
        this["clickarea"+pos].x = -w/2+(w+10)*pos;
        this["clickarea"+pos].y=App.StageUtils.getStage().stageHeight-GameConsts.GAME_CLICK_AREA/2;
        if(this["clickarea"+pos].y-(this.map.y+this.map.height)>GameConsts.GAME_CLICK_AREA/3*2){
            this["clickarea"+pos].y=(this.map.y+this.map.height)+GameConsts.GAME_CLICK_AREA/3*2;
        }
        if(App.StageUtils.getHeight() - this["clickarea"+pos].y>90){
            egret.log("显示广告");
        }
        this["clickarea"+pos].addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startDrag,this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END,this.doDrop,this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        this.mContent.displayListContainer.addChild(this["clickarea"+pos]);
    }
    private floatGood(point:egret.Point):void
    {
        let good:game.UI_Good = game.UI_Good.createInstance() as game.UI_Good;
        this.floatLayer.addChild(good);
        good.alpha=1;
        good.scaleX=good.scaleY=1;
        good.x=point.x;
        good.y=point.y;
        good.m_t0.play((good:game.UI_Good)=>{
            good.parent.removeChild(good);
            good=null;}
            ,this
            ,good);
    }
    private floatCool(point:egret.Point):void
    {
        let good:game.UI_Good = game.UI_Good.createInstance() as game.UI_Good;
        this.floatLayer.addChild(good);
        good.alpha=1;
        good.scaleX=good.scaleY=1;
        good.x=point.x;
        good.y=point.y;
        good.m_t0.play((good:game.UI_Good)=>{
            good.parent.removeChild(good);
            good=null;}
            ,this
            ,good);
    }

    public release():void
    {
        App.SoundUtils.stopSoundByID("bg");
        GameModel.ins.restart();
        super.release();
    }
}