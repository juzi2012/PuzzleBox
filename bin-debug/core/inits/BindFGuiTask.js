var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var BindFGuiTask = (function () {
    function BindFGuiTask() {
        this.exec();
    }
    BindFGuiTask.prototype.exec = function () {
        //------ auto start ------//
        // bag.bagBinder.bindAll();
        // BlueSkin.BlueSkinBinder.bindAll();
        // Basic.BasicBinder.bindAll();
        // loading.loadingBinder.bindAll();
        // main.mainBinder.bindAll();
        //------ auto end ------//
        game.gameBinder.bindAll();
        Loading.LoadingBinder.bindAll();
    };
    return BindFGuiTask;
}());
__reflect(BindFGuiTask.prototype, "BindFGuiTask");
//# sourceMappingURL=BindFGuiTask.js.map