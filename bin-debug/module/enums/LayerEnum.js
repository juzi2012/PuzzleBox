/**层次枚举 */
var LayerEnum;
(function (LayerEnum) {
    /** 最下面的游戏场景的层 */
    LayerEnum[LayerEnum["SCENE"] = 0] = "SCENE";
    /** ui模块层 */
    LayerEnum[LayerEnum["UI"] = 1] = "UI";
    /** 静态层，显示聊天窗等非场景组件 */
    LayerEnum[LayerEnum["STATIC"] = 2] = "STATIC";
    /** 弹出窗层 */
    LayerEnum[LayerEnum["POPUP"] = 3] = "POPUP";
    /** 顶层，显示加载,新手教程，debug工具，Tips等ui */
    LayerEnum[LayerEnum["TOP"] = 4] = "TOP";
})(LayerEnum || (LayerEnum = {}));
//# sourceMappingURL=LayerEnum.js.map