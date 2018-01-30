var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var core;
(function (core) {
    var KeyboardEventData = (function (_super) {
        __extends(KeyboardEventData, _super);
        function KeyboardEventData(messageID, data) {
            return _super.call(this, messageID, data) || this;
        }
        KeyboardEventData.prototype.getData = function () {
            return this.messageData;
        };
        return KeyboardEventData;
    }(core.EventData));
    core.KeyboardEventData = KeyboardEventData;
    __reflect(KeyboardEventData.prototype, "core.KeyboardEventData");
})(core || (core = {}));
//# sourceMappingURL=KeyboardEventData.js.map