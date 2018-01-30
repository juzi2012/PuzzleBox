var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleConsts = (function () {
    function ModuleConsts() {
    }
    ModuleConsts.MODULE_SERVER_CPL = "MODULE_SERVER_CPL";
    ModuleConsts.MODULE_PRE_SHOW_CPL = "MODULE_PRE_SHOW_CPL";
    ModuleConsts.MODULE_PRE_CLOSE_CPL = "MODULE_PRE_CLOSE_CPL";
    ModuleConsts.MODULE_CLOSE_CPL = "MODULE_CLOSE_CPL";
    ModuleConsts.MODULE_ADD_TO_STAGE = "MODULE_ADD_TO_STAGE";
    ModuleConsts.MODULE_FADE_IN_CPL = "MODULE_FADE_IN_CPL";
    ModuleConsts.MODULE_FADE_OUT_CPL = "MODULE_FADE_OUT_CPL";
    /** 无效果 */
    ModuleConsts.MODULE_FADE_IN_TYPE_0 = 0;
    /** 从中间放大，默认效果 */
    ModuleConsts.MODULE_FADE_IN_TYPE_1 = 1;
    /** 向上移动，渐显 */
    ModuleConsts.MODULE_FADE_IN_TYPE_2 = 2;
    /** 无效果 */
    ModuleConsts.MODULE_FADE_OUT_TYPE_0 = 0;
    /** 向中间缩小，默认效果 */
    ModuleConsts.MODULE_FADE_OUT_TYPE_1 = 1;
    /** 向下移动，渐隐 */
    ModuleConsts.MODULE_FADE_OUT_TYPE_2 = 2;
    ModuleConsts.STATE_NULL = 0;
    ModuleConsts.STATE_SHOW = 1;
    ModuleConsts.STATE_CLOSE = 3;
    ModuleConsts.STATE_DISPOSE = 4;
    ModuleConsts.PHASE_LOAD_ASSET = 11;
    ModuleConsts.PHASE_SERVER = 12;
    ModuleConsts.PHASE_PRE_SHOW = 13;
    ModuleConsts.PHASE_MODULE_FADE_IN = 14;
    ModuleConsts.PHASE_SHOW = 15;
    ModuleConsts.PHASE_PRE_CLOSE = 21;
    ModuleConsts.PHASE_MODULE_FADE_OUT = 22;
    ModuleConsts.PHASE_CLOSE = 23;
    return ModuleConsts;
}());
__reflect(ModuleConsts.prototype, "ModuleConsts");
//# sourceMappingURL=ModuleConsts.js.map