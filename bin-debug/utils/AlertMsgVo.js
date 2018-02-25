var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AlertMsgVo = (function () {
    function AlertMsgVo(content, handleYes, handleNo) {
        this.content = content;
        this.handleYes = handleYes;
        this.handleNo = handleNo;
    }
    AlertMsgVo.SYSTEM_CONFIRM = "system_confirm";
    return AlertMsgVo;
}());
__reflect(AlertMsgVo.prototype, "AlertMsgVo");
//# sourceMappingURL=AlertMsgVo.js.map