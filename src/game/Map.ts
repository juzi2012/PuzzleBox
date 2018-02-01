class Map extends egret.DisplayObjectContainer{
    private tileDic:Dictionary<Tile>;
    public constructor(){
        super();
        this.tileDic = new Dictionary<Tile>();
        this.createTile();
    }
    private createTile()
    {
        let bg:egret.Bitmap = Utils.createBitmapByName("kuang");
        // bg.scale9Grid = new egret.Rectangle( 12,12,12,12 );
        // bg.width=640-GameConsts.GAME_PADDING*2;
        // bg.height=640-GameConsts.GAME_PADDING*2;
        this.addChild(bg);
        for(var i:number=0;i<GameConsts.GAME_TILE_ROW;i++){
            for(var j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                let tile:Tile = new Tile(i,j);
                this.addChild(tile)
                tile.x = GameConsts.GAME_KUANG_SIDE+GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2+GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*j;
                tile.y = GameConsts.GAME_KUANG_SIDE+GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2+GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*i;
                this.tileDic.add(i+"_"+j,tile);
            }
        }
    }
    public checkLine():any[]
    {
        let rawLineArray:number[] = []; 
        let columnLineArray:number[] = []; 
        for(let i:number=0;i<GameConsts.GAME_TILE_ROW;i++){
            let isRawFull:boolean = true;
            for(let j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                if(this.getTileByRawAndColumn(i,j).isEmpty==true){
                    isRawFull=false;
                    break;
                }
            }
            if(isRawFull){
                rawLineArray.push(i);
            }
        }
        for(let i:number=0;i<GameConsts.GAME_TILE_COLUMN;i++){
            let isColumnFull:boolean=true;
            for(let j:number=0;j<GameConsts.GAME_TILE_ROW;j++){
                if(this.getTileByRawAndColumn(j,i).isEmpty==true){
                    isColumnFull=false;
                    break;
                }
            }
            if(isColumnFull){
                columnLineArray.push(i);
            }
        }
        for(let i:number=0;i<rawLineArray.length;i++){
            for(let j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                if(this.getTileByRawAndColumn(rawLineArray[i],j).isEmpty==false){
                    this.getTileByRawAndColumn(rawLineArray[i],j).doDipsear();
                }
            }
        }
        for(let i:number=0;i<columnLineArray.length;i++){
            for(let j:number=0;j<GameConsts.GAME_TILE_ROW;j++){
                if(this.getTileByRawAndColumn(j,columnLineArray[i]).isEmpty==false){
                    this.getTileByRawAndColumn(j,columnLineArray[i]).doDipsear();
                }
            }
        }

        ///
        let xx:number;
        let yy:number;
        let rawSum:number=0;
        for(let i:number=0;i<rawLineArray.length;i++){
            rawSum+=Number(rawLineArray[i]+1);
        }   
        yy = rawSum>0?this.y+(rawSum/rawLineArray.length)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT:(this.y+GameConsts.GAME_TILE_ROW/2*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        
        let columnSum:number=0;
        for(let i:number=0;i<columnLineArray.length;i++){
            columnSum+=Number(columnLineArray[i]+1);
        }   
        xx = columnSum>0?this.x+(columnSum/columnLineArray.length)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT:(this.x+GameConsts.GAME_TILE_COLUMN/2*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        

        return [xx,yy,columnLineArray.length+rawLineArray.length];
    }
    public checkPos(raw:number,column:number,boxType:number[][],color:number):boolean
    {
        for(let i:number=0;i<boxType.length;i++){
            for(let j:number=0;j<boxType[i].length;j++){
                if(boxType[i][j]==1){
                    let tile:Tile = this.tileDic.get((raw+i)+"_"+(column+j));
                    if(tile==null){
                        return false;
                    }
                    if(tile.isEmpty==false){
                        return false;
                    }
                }
            }
        }

        for(let i:number=0;i<boxType.length;i++){
            for(let j:number=0;j<boxType[i].length;j++){
                if(boxType[i][j]==1&&this.tileDic.get((raw+i)+"_"+(column+j)).isEmpty==true){
                    this.tileDic.get((raw+i)+"_"+(column+j)).addTemporary(color);
                }
            }
        }


       this.checkLineTemporary(raw,column,boxType,color);

        return true;
    }
    private checkLineTemporary(raw:number,column:number,boxType:number[][],color:number):boolean
    {
        let rawLineArray:number[] = []; 
        let columnLineArray:number[] = [];
        for(let i:number=0;i<boxType.length;i++){
            let isRawFull:boolean = true;
            for(let j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                if(this.getTileByRawAndColumn(raw+i,j).isEmpty==true&&this.getTileByRawAndColumn(raw+i,j).isTemporary==false){
                    isRawFull=false;
                    break;
                }
            }
            if(isRawFull==true)rawLineArray.push(raw+i);
        }
        for(let i:number=0;i<boxType[0].length;i++){
            let isColumnFull:boolean=true;
            for(let j:number=0;j<GameConsts.GAME_TILE_ROW;j++){
                if(this.getTileByRawAndColumn(j,column+i).isEmpty==true&&this.getTileByRawAndColumn(j,column+i).isTemporary==false){
                    isColumnFull=false;
                    break;
                }
            }
            if(isColumnFull==true)columnLineArray.push(column+i);
        }
        if(rawLineArray.length>0)
        {
            for(let i:number=0;i<rawLineArray.length;i++){
                for(let j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                    this.tileDic.get(rawLineArray[i]+"_"+j).addTemporary(color);
                }
            }
        }  
        if(columnLineArray.length>0){
            for(let i:number=0;i<columnLineArray.length;i++){
                for(let j:number=0;j<GameConsts.GAME_TILE_ROW;j++){
                    this.tileDic.get(j+"_"+columnLineArray[i]).addTemporary(color);
                }
            }
        }
        return true;
    }
    public clearTemporary():void
    {
        let len:number = this.tileDic.values.length;
        for(let i:number=0;i<len;i++){
            this.tileDic.values[i].clearTemporary();
        }
    }

    public getTileByRawAndColumn(raw:number,column:number):Tile{
        return  this.tileDic.get(raw+"_"+column);
    }
    public addOfficial(raw:number,column:number,boxType:number[][],color:number):void
    {
        for(let i:number=0;i<boxType.length;i++){
            for(let j:number=0;j<boxType[i].length;j++){
                if(boxType[i][j]==1&&this.tileDic.get((raw+i)+"_"+(column+j)).isEmpty==true){
                    this.tileDic.get((raw+i)+"_"+(column+j)).addOfficial(color);
                }
            }
        }
    }

    public checkCanGoOn(box:Box):boolean
    {
        let result:boolean=false;
        for(let i:number=0;i<GameConsts.GAME_TILE_ROW;i++){
            for(let j:number=0;j<GameConsts.GAME_TILE_COLUMN;j++){
                if(this.getTileByRawAndColumn(i,j).isEmpty==true){
                    let tt:boolean=true;
                    let row:number=i;
                    let column:number = j;
                    for(let m:number=0;m<box.style.length;m++){
                        for(let n:number=0;n<box.style[m].length;n++){
                            if(box.style[m][n]==1){
                                let tile:Tile = this.tileDic.get((row+m)+"_"+(column+n));
                                if(tile==null){
                                    tt = false;
                                }else if(tile.isEmpty==false){
                                    tt = false;
                                }
                            }
                        }
                    }
                    if(tt==true){
                        result = true;
                    }
                }
            }
        }
        return result;
    }
    public dispose():void
    {
        let len:number = this.tileDic.values.length;
        for(let i:number=0;i<len;i++){
            this.tileDic.values[i].dispose();
        }
    }
}