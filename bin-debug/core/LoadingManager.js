var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    var LoadingManager = (function () {
        function LoadingManager() {
        }
        /**
         * 获取Loading实例
         */
        LoadingManager.getLoading = function (ref) {
            var loading = LoadingManager.s_loading.get(ref);
            if (!loading) {
                if (ref) {
                    loading = new ref();
                    LoadingManager.s_loading.add(ref, loading);
                }
            }
            return loading;
        };
        /**
         * 得到当前Loading组件
         */
        LoadingManager.getCurLoading = function () {
            return LoadingManager.s_curLoading;
        };
        /**
         * 设置当前Loading组件
         */
        LoadingManager.setCurLoading = function (ref) {
            var loadingUI = LoadingManager.s_loading.get(ref);
            if (!loadingUI) {
                if (ref) {
                    loadingUI = new ref();
                    /*if(loadingUI instanceof loading.LoadingSkinModule){
                        loadingUI.initContentAll();
                        loadingUI.initAutoSize(LayerCenter.getInstance().getLayer(LayerEnum.TOP), true);
                        loadingUI.preShow();
                    }*/
                    LoadingManager.s_loading.add(ref, loadingUI);
                }
            }
            LoadingManager.s_curLoading = loadingUI;
            return loadingUI;
        };
        LoadingManager.s_loading = new Dictionary();
        return LoadingManager;
    }());
    core.LoadingManager = LoadingManager;
    __reflect(LoadingManager.prototype, "core.LoadingManager");
})(core || (core = {}));
//# sourceMappingURL=LoadingManager.js.map