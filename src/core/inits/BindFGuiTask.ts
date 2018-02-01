// TypeScript file
class BindFGuiTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{
        //------ auto start ------//
		// bag.bagBinder.bindAll();
		// BlueSkin.BlueSkinBinder.bindAll();
		// Basic.BasicBinder.bindAll();
		// loading.loadingBinder.bindAll();
		// main.mainBinder.bindAll();
        //------ auto end ------//
        game.gameBinder.bindAll();
        Loading.LoadingBinder.bindAll();
    }
}