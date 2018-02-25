class BoxFactory
{
    public constructor(){

    }
    public static data:any={"1":30,"2":50,"3":60,"4":40,"5":30,"6":60,"7":50,"8":30,"9":30,"10":20,"11":60};
    public static createPuzzleBox(mtype?:number,mcolor?:number,mscale?:number):any
    {
        let type:number = 0;
        if(mtype!=null){
            type=mtype;
        }else{
            let sum:number=0;
            let data:any={"1":30,"2":50,"3":60,"4":40,"5":30,"6":60,"7":50,"8":30,"9":30,"10":20,"11":60};
            for(let i in data){
                sum+=Number(data[i]);
            }
            let t = App.MathUtils.random(0, sum - 1);
            for(let i in data){
                t -= data[i]
                if (t < 0){
                    type = Number(i)
                    break;
                }
            }
        }
        let color:number = App.MathUtils.random(1,GameConsts.GAME_BOX_COLOR_NUM);
        if(mcolor!=null){
            color=mcolor;
        }
        // type = 10;
        let scale:number=0.4;
        if(mscale!=null){
            scale=mscale;
        }
        let box:Box = new Box(type,color,scale);
        return box;
    }
    public static createSingleBox(boxSingleName:string,color:number):BoxSingle
    {
        let box:BoxSingle = core.ObjectPool.pop(boxSingleName,color) as BoxSingle;
        box.x=0;
        box.y=0;
        box.scaleX=box.scaleY=1;
        box.alpha=1;
        return box;
    }
}