module core {
    export class LoadingManager {

        private static s_loading: Dictionary<ILoadingUI> = new Dictionary<ILoadingUI>();

        private static s_curLoading: ILoadingUI;

        constructor() {

        }
        /**
         * 获取Loading实例
         */
        public static getLoading(ref: any): ILoadingUI {
            let loading: ILoadingUI = LoadingManager.s_loading.get(ref);
            if (!loading) {
                if (ref) {
                    loading = new ref();
                    LoadingManager.s_loading.add(ref, loading);
                }
            }
            return loading;
        }
        /**
         * 得到当前Loading组件
         */
        public static getCurLoading(): ILoadingUI {
            return LoadingManager.s_curLoading;
        }
        /**
         * 设置当前Loading组件
         */
        public static setCurLoading(ref: any): ILoadingUI {
            let loadingUI: ILoadingUI = LoadingManager.s_loading.get(ref);
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
        }
    }
}