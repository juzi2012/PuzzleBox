class BoxChangeModule extends PopModuleView {
	public constructor() {
		super()
	}
	public initContent():void
    {
        this.content = game.UI_ChangePanel.createInstance();
    }
    public get mContent():game.UI_ChangePanel{
        return this.content as game.UI_ChangePanel;
    }
    private selectColor:number;
    public selectBoxIndex:number=0;
    private boxAry:Box[];
    private box0:Box;
    private box1:Box;
    private box2:Box;
    /**
     * 预显示
     */
    public preShow(data?: any): void {
        App.SoundUtils.stopSoundByID("bg");
        this.mContent.m_bg.m_btn_close.addClickListener(this.onClose,this);
        this.mContent.m_bg.m_title.text="Change";
        this.boxAry = data as Box[];
        for(let i:number=0;i<this.boxAry.length;i++){
            let box:Box=new Box(this.boxAry[i].type,this.boxAry[i].color,0.3);
            box.x = 125- (box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
            box.y = 195+110*i-(box.style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
            this.mContent.displayListContainer.addChild(box);
        }
        this.mContent.m_add1.addClickListener(this.addone,this);
        this.mContent.m_add2.addClickListener(this.addtwo,this);
        this.mContent.m_add3.addClickListener(this.addthree,this);
        this.mContent.m_list.visible=false;
        this.mContent.m_list.itemRenderer = this.RenderListItem;
        this.mContent.m_list.callbackThisObj = this;
        this.mContent.m_list.addEventListener(fairygui.ItemEvent.CLICK, this.onClickItem, this);

        this.mContent.m_btn_ok.addClickListener(this.onOkClick,this);
        this.preShowCpl();
    }
    private onClickItem(evt:fairygui.ItemEvent):void
    {
         var item: ChangeListItem = <ChangeListItem>evt.itemObject;
         this.addBox(item.index);
         this.mContent.m_list.visible=false;
    }
    private addBox(index:number):void
    {
        if(this["box"+this.selectBoxIndex]==null){
            this["box"+this.selectBoxIndex] = BoxFactory.createPuzzleBox(index+1,this.selectColor,0.3);
        }else{
            this["box"+this.selectBoxIndex].dispose();
            this["box"+this.selectBoxIndex].type = index+1;
            this["box"+this.selectBoxIndex].color = this.selectColor;
            this["box"+this.selectBoxIndex].create(0.3);

        }
        this.mContent.displayListContainer.addChild(this["box"+this.selectBoxIndex]);
        this["box"+this.selectBoxIndex].x = 380- (this["box"+this.selectBoxIndex].style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
        this["box"+this.selectBoxIndex].y = 195+110*this.selectBoxIndex-(this["box"+this.selectBoxIndex].style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
    }
    private addone():void
    {
        this.selectColor = this.boxAry[0].color;
        this.selectBoxIndex=0;
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=11;
    }
    private addtwo():void
    {
        this.selectBoxIndex=1;
        this.selectColor = this.boxAry[1].color
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=11;
    }
    private addthree():void
    {
        this.selectBoxIndex=2;
        this.selectColor = this.boxAry[2].color
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=11;
    }
    private RenderListItem(index:number, obj:fairygui.GObject):void
    {  
        var item:ChangeListItem = <ChangeListItem>obj;
        item.setPivot(0.5, 0.5);
        item.setData(index,this.selectColor);
    }
    public show(data?:any):void
    {        
        super.show(data);
    }
    private onOkClick():void
    {
        App.EventCenter.dispatch(GameEventConst.GAME_CHANGE,[this.box0,this.box1,this.box2]);
        ModuleMgr.ins.closeModule(ModuleEnum.GAME_Change);
    }
    public onClose():void
    {
        App.EventCenter.dispatch(GameEventConst.GAME_CHANGE_CLOSE);
        ModuleMgr.ins.closeModule(ModuleEnum.GAME_Change);
    }
}