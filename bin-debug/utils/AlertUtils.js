var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AlertUtils = (function () {
    function AlertUtils() {
    }
    AlertUtils.comfirm = function (content, handleYes, handleNo) {
        var vo = new AlertMsgVo(content, handleYes, handleNo);
        App.EventCenter.dispatch(AlertMsgVo.SYSTEM_CONFIRM, vo);
    };
    return AlertUtils;
}());
__reflect(AlertUtils.prototype, "AlertUtils");
//# sourceMappingURL=AlertUtils.js.map