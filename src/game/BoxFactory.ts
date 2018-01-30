class BoxFactory
{
    public constructor(){

    }
    public static createPuzzleBox():any
    {
        let type:number = App.MathUtils.random(1,11);
        let color:number = App.MathUtils.random(1,4);
        
        let box:Box = new Box(type,color);
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