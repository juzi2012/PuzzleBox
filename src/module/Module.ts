
	/**
	 *  此为模块入口 除release()外都为底层自动调用
     *    
	 * @author yuxuefeng
	 * 
	 */
abstract class Module extends egret.EventDispatcher {

    public moduleInfoVo:ModuleInfoVo;

    public content:fairygui.GComponent;

    /**
     * 是否已经被删除
     */
    public isDisposed:boolean = false;
    
    public get moduleId():number{
        if(ModuleInfoVo != null){
            return this.moduleInfoVo.moduleId;
        }else{
            return 0;
        }
    }

    public constructor() {
        super();
    }

    public initContent():void
    {

    }

    /**
     * 初始化skin
     * 加载完素材后调用
     */
    public initContentAll():void
    {
        this.initContent();
        this.init();
    }

    protected init():void
    {
        
    }

    public addChildDisplayObj(obj:egret.DisplayObject):void
    {
        if(this.content && this.content.displayObject && this.content.displayObject instanceof egret.DisplayObjectContainer){
            this.content.displayObject.addChild(obj);
        }else{
            egret.error(`${this}.content不存在，添加displayObj失败`);
        }
    }

    /**
     * 初始化模块自适应
     * @param layer 该模块添加的图层
     * @param isConfigVoAutoSize 模块配置是否自适应
     */
    public initAutoSize(layer:UILayer, isConfigVoAutoSize:boolean):void
    {
        if(this.content && isConfigVoAutoSize){
            this.content.setSize(layer.width, layer.height);
            this.content.addRelation(layer, fairygui.RelationType.Size);
        }
    }

    public moduleServerStart(data?: any):void {
        this.moduleServerCpl();
    }

    protected moduleServerCpl():void {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_SERVER_CPL))
    }

    /**
     * 预显示
     */
    public preShow(data?: any): void { 
        this.preShowCpl();
    }

    protected preShowCpl():void {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_PRE_SHOW_CPL))
    }

    /**
     * 显示
     */
    public show(data?: any): void {

    }

    public preClose(data?: any):void {
        this.preCloseCpl();
    }

    protected preCloseCpl():void {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_PRE_CLOSE_CPL))
    }

    /**
     * 隐藏
     */
    public hide(): void{
        if(this.content.parent){
            this.content.parent.removeChild(this.content);
        }
    }

    public releaseContent():void{

    }

    /**
     * 释放资源
     */
    public release(): void{
        if(this.isDisposed == false){
            this.hide();
            this.releaseContent();
            this.isDisposed = true;
        }
    }

    /**
     * 离开这个界面时，有参数要记录时使用，
     * 返回这个界面时，会作为初始参数传进来
     */
    public getHistoryData():any
    {
        return null;
    }

    public moduleFadeIn(startDelay?:number):void
    {
        this.moduleFadeInCpl();
    }

    protected moduleFadeInCpl():void
    {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_FADE_IN_CPL));
    }

    public moduleFadeOut():void
    {
        this.moduleFadeOutCpl();
    }

    protected moduleFadeOutCpl():void
    {
        this.dispatchEvent(new egret.Event(ModuleConsts.MODULE_FADE_OUT_CPL));
    }

    public setVisible(bool:boolean):void
    {
        this.content.visible = bool;
    }
}
