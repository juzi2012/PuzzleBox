class Box extends egret.DisplayObjectContainer
{
    public pos:number;
    public type:number;
    public color:number;
    public style:number[][] = [[1,1,1,1,1]];
    public style_w:number=0
    public style_h:number=0;
    public score:number=0;
    public weight:number=50;
    public boxSingleAry:BoxSingle[];
    public constructor(type:number,color:number){
        super();
        this.boxSingleAry = [];
        this.type=type;
        this.color = color;
        this.create();
    }
    public create():void{
        switch(this.type){
            case 1:
                this.style=[[1]];
                this.style_w = 1;
                this.style_h = 1;
                this.weight=50;
            break;
            case 2:
                this.style=[[1],[1]];
                this.style_w = 1;
                this.style_h = 2;
                this.weight=50;
            break;
            case 3:
                this.style=[[1,1,1]];
                this.style_w = 3;
                this.style_h = 1;
                this.weight=60;
            break;
            case 4:
                this.style=[[1,1],[1,0]];
                this.style_w = 2;
                this.style_h = 2;
                this.weight=40;
            break;
            case 5:
                this.style=[[1,1],[1,1]];
                this.style_w = 2;
                this.style_h = 2;
                this.weight=30;
            break;
            case 6:
                this.style=[[1,0],[1,0],[1,1]];
                this.style_w = 2;
                this.style_h = 3;
                this.weight=60;
            break;
            case 7:
                this.style=[[1],[1],[1],[1]];
                this.style_w = 1;
                this.style_h = 4;
                this.weight=50;
            break;
            case 8:
                this.style=[[1],[1],[1],[1],[1]];
                this.style_w = 1;
                this.style_h = 5;
                this.weight=30;
            break;
            case 9:
                this.style=[[1,0,0],[1,0,0],[1,1,1]];
                this.style_w = 3;
                this.style_h = 3;
                this.weight=30;
            break;
            case 10:
                this.style=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
                this.style_w = 4;
                this.style_h = 4;
                this.weight=20;
            break;
            case 11:
                this.style=[[1,1,0],[0,1,1]];
                this.style_w = 3;
                this.style_h = 2;
                this.weight=60;
            break;
        }
        for(let i:number=0;i<this.style.length;i++){
            for(let j:number=0;j<this.style[i].length;j++){
                if(this.style[i][j]!=0){
                    let boxSingleName:string="BoxSingleRed";
                    switch(this.color){
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
                        boxSingleName ="BoxSingleGreen" 
                        break;
                        case 5:
                        boxSingleName ="BoxSinglePurple" 
                        break;
                    }
                    let boxSingle:BoxSingle = BoxFactory.createSingleBox(boxSingleName,this.color);
                    boxSingle.setPosXY(i,j);
                    boxSingle.scaleX=boxSingle.scaleY=0.4;
                    boxSingle.x = (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4)*j;
                    boxSingle.y = (GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4)*i;
                    this.addChild(boxSingle);
                    this.boxSingleAry.push(boxSingle);

                    this.score+=1;
                }
            } 
        }
    }
    public doScale():void
    {
        let len:number = this.boxSingleAry.length;
        for(let i:number=0;i<len;i++){
            let box:BoxSingle = this.boxSingleAry[i];
            egret.Tween.get(box).to( {scaleX:0.9,scaleY:0.9,x:box.posy*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*1),y:box.posx*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*1)}, 50);
        }
    }
    public doNormal():void
    {
        let len:number = this.boxSingleAry.length;
        for(let i:number=0;i<len;i++){
            let box:BoxSingle = this.boxSingleAry[i];
            egret.Tween.get(box).to( {scaleX:0.4,scaleY:0.4,x:box.posy*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4),y:box.posx*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.4)}, 100);
        }
    }
    public doDrop():void
    {
        let len:number = this.boxSingleAry.length;
        for(let i:number=0;i<len;i++){
            let box:BoxSingle = this.boxSingleAry[i];
           egret.Tween.get(box).to({scaleX:1,scaleY:1,x:box.posy*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*1),y:box.posx*(GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*1)}, 40);
        }
    }
    public setGray():void
    {
        let ft:egret.Filter=new egret.Filter();
        this.filters=[new egret.Filter()]
    }
    public dispose():void
    {
        let len:number = this.boxSingleAry.length;
        for(let i:number=0;i<len;i++){
            let box:BoxSingle = this.boxSingleAry[i];
            if(box.parent!=null)box.parent.removeChild(box);
            core.ObjectPool.push(box);
            box=null;
        }
        this.score=0
        this.boxSingleAry=[];
    }
}