class BoxSingle extends egret.DisplayObjectContainer
{
    public color:number;
    public pic:egret.Bitmap;
    public grayPic:egret.Bitmap;
    public pic_name:string;
    public posx:number;
    public posy:number;
    public constructor(color:number)
    {
        super();
        this.color = color;
        this.createBitmap();
    }
    public createBitmap():void
    {
        switch(this.color){
            case 1:
            this.pic_name="red";
            break;
            case 2:
            this.pic_name="yellow";
            break;
            case 3:
            this.pic_name="blue";
            break;
            case 4:
            this.pic_name="green";
            break;
            case 5:
            this.pic_name="purple";
            break;
        }
        this.pic = Utils.createFairyGuiBitmapByName(this.pic_name);
        this.pic.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.pic.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.pic.anchorOffsetX=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;
        this.pic.anchorOffsetY=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;

        this.grayPic = Utils.createFairyGuiBitmapByName("gray");
        this.grayPic.width = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.grayPic.height = GameConsts.GAME_TILE_WIDHT_AND_HEIGHT;
        this.grayPic.anchorOffsetX=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;
        this.grayPic.anchorOffsetY=GameConsts.GAME_TILE_WIDHT_AND_HEIGHT/2;

        this.addChild(this.pic);
        this.addChild(this.grayPic);
        this.grayPic.visible=false;
    }
    public setPosXY(posx:number,posy:number):void
    {
        this.posx=posx;
        this.posy=posy;
    }
    public setGray(value:boolean):void{
        this.grayPic.visible=value;
    }
}