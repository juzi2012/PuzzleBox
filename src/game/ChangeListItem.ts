class ChangeListItem extends game.UI_ListItem {
	public index:number=0;
	public constructor() {
		super();
	}
	public setData(index:number,color:number):void
	{
		this.index = index;
		let box:Box = BoxFactory.createPuzzleBox(index+1,color,0.3);
		box.x = 45-(box.style_w/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
		box.y = 45-(box.style_h/2-0.5)*GameConsts.GAME_TILE_WIDHT_AND_HEIGHT*0.3;
		this.displayListContainer.addChild(box);
	}
}