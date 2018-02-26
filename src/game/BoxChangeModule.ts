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
        this.mContent.m_btn_del1.addClickListener(this.delone,this);
        this.mContent.m_btn_del2.addClickListener(this.deltwo,this);
        this.mContent.m_btn_del3.addClickListener(this.delthree,this);
        this.mContent.m_list.visible=false;
        this.mContent.m_list.itemRenderer = this.RenderListItem;
        this.mContent.m_list.callbackThisObj = this;
        this.mContent.m_list.addEventListener(fairygui.ItemEvent.CLICK, this.onClickItem, this);

        this.mContent.m_btn_ok.addClickListener(this.onOkClick,this);

        App.EventCenter.addListener(GameEventConst.GAME_STAR_CHANGE,this.changeStar,this);

        this.preShowCpl();
    }
    private changeStar():void
	{
		this.mContent.m_txt_star.text=GameModel.ins.starNum.toString();
	}
    private onClickItem(evt:fairygui.ItemEvent):void
    {
         var item: ChangeListItem = <ChangeListItem>evt.itemObject;
         this.addBox(item.index);
         this.mContent.m_list.visible=false;
    }
    private addBox(index:number):void
    {
        this.mContent["m_c"+(this.selectBoxIndex+1)].selectedIndex=1;
        if(this["box"+this.selectBoxIndex]==null){
            this["box"+this.selectBoxIndex] = BoxFactory.createPuzzleBox(index+1,this.selectColor,0.3);
        }else{
            this["box"+this.selectBoxIndex].dispose();
            this["box"+this.selectBoxIndex].type = index+1;
            this["box"+this.selectBoxIndex].color = this.selectColor;
            this["box"+this.selectBoxIndex].create(0.3);
        }
        this.mContent["m_content"+(this.selectBoxIndex+1)].displayObject.addChild(this["box"+this.selectBoxIndex]);
        this["box"+this.selectBoxIndex].x = 50- (this["box"+this.selectBoxIndex].style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
        this["box"+this.selectBoxIndex].y = 50-(this["box"+this.selectBoxIndex].style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
        
    }
    private addone():void
    {
        this.selectColor = this.boxAry[0].color;
        this.selectBoxIndex=0;
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=12;
    }
    private addtwo():void
    {
        this.selectBoxIndex=1;
        this.selectColor = this.boxAry[1].color
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=12;
    }
    private addthree():void
    {
        this.selectBoxIndex=2;
        this.selectColor = this.boxAry[2].color
        this.mContent.m_list.visible=true;
        this.mContent.m_list.numItems=11;
    }
    private delone():void
    {
        this.mContent.m_c1.selectedIndex=0;
        if(this.box0!=null){
            this.box0.dispose();
            App.DisplayUtils.removeFromParent(this.box0);
            this.box0=null;
        }
    }
    private deltwo():void
    {
        this.mContent.m_c2.selectedIndex=0;
        if(this.box1!=null){
            this.box1.dispose();
            App.DisplayUtils.removeFromParent(this.box1);
            this.box1=null;
        }
    }
    private delthree():void
    {
        this.mContent.m_c3.selectedIndex=0;
        if(this.box2!=null){
            this.box2.dispose();
            App.DisplayUtils.removeFromParent(this.box2);
            this.box2=null;
        }
    }
    private RenderListItem(index:number, obj:fairygui.GObject):void
    {  
        var item:ChangeListItem = <ChangeListItem>obj;
        item.setPivot(0.5, 0.5);
        item.setData(index,this.selectColor);
    }
    public show(data?:any):void
    {        
        this.mContent.m_txt_star.text=GameModel.ins.star.toString();
        super.show(data);
    }
    private onOkClick():void
    {
        if(this.box0==null&&this.box1==null&&this.box2==null){
            this.onClose();
        }else{
            let sum:number=0;
            if(this.box0!=null){
                sum+=1;
            }
            if(this.box1!=null){
                sum+=1;
            }
            if(this.box2!=null){
                sum+=1;
            }
            if(sum<=GameModel.ins.star){
                App.EventCenter.dispatch(GameEventConst.GAME_CHANGE,[this.box0,this.box1,this.box2]);
                ModuleMgr.ins.closeModule(ModuleEnum.GAME_Change);
                GameModel.ins.star-=sum;
            }else{
                AlertUtils.comfirm("Star num is not enough, get star  for free?",new core.Handler(this,this.callAd))
            }
        }
    }
    private callAd():void
    {
        egret.ExternalInterface.call("sendToNative", "1");
    }
    
    public onClose():void
    {
        App.EventCenter.dispatch(GameEventConst.GAME_CHANGE_CLOSE);
        ModuleMgr.ins.closeModule(ModuleEnum.GAME_Change);
    }
}