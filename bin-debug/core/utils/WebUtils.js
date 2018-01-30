var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    var WebUtils = (function () {
        function WebUtils() {
        }
        WebUtils.addKeyboardListener = function () {
            document.onkeydown = function (event) {
                if (event && WebUtils.isKeyboard) {
                    App.EventCenter.dispatch(core.EventID.KEYBOARD_DOWN, event);
                }
            };
            document.onkeyup = function (event) {
                if (event && WebUtils.isKeyboard) {
                    App.EventCenter.dispatch(core.EventID.KEYBOARD_UP, event);
                }
            };
        };
        WebUtils.isKeyboard = true;
        return WebUtils;
    }());
    core.WebUtils = WebUtils;
    __reflect(WebUtils.prototype, "core.WebUtils");
})(core || (core = {}));
//# sourceMappingURL=WebUtils.js.map